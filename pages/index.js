import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container w-screen flex justify-center items-center flex-col">
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      ) : (
        <div className="container h-screen w-screen mx-auto">
          <Navbar session={session} />
          <Banner />
          <Footer />
        </div>
      )}
    </div>
  );
}
