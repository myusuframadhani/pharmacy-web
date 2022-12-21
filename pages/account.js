import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from "flowbite-react";

export default function Account() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  const session = useSession()

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar session={session} />
      <div className="form-widget w-full bg-slate-100 flex flex-col items-center justify-center h-screen text-gray-900">
        <div className="w-1/2 flex">
          <Breadcrumb aria-label="Default breadcrumb example" className="mb-8">
              <Breadcrumb.Item
                  href="/"
              >
                  <FontAwesomeIcon icon={faHome} className="mr-3"/> Home
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                  Account
              </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex w-1/2 flex-col text-lg my-2 mt-8">
          <label htmlFor="email">Email</label>
          <input
            className="w-auto bg-gray-200 rounded-lg p-2"
            id="email"
            type="text"
            value={session.user.email}
            disabled
          />
        </div>
        <div className="flex w-1/2 flex-col text-lg my-2">
          <label htmlFor="username">Username</label>
          <input
            className="w-auto bg-gray-200 rounded-lg p-2"
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex w-1/2 flex-col text-lg my-2">
          <label htmlFor="website">Website</label>
          <input
            className="w-auto bg-gray-200 rounded-lg p-2"
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="flex w-1/2 justify-evenly flex-row my-4">
          <div>
            <button
              className="button primary block text-white px-5 py-3 mx-2 uppercase font-bold rounded-full bg-blue-700"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? "Loading ..." : "Update"}
            </button>
          </div>
        </div>

        <div></div>
      </div>
      <Footer />
    </>
  );
}
