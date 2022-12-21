import supabase from "../supabase";

export async function getStaticPaths() {
  const { data } = await supabase.from("medicines").select();

  const paths = data.map((d) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const { data } = await supabase
      .from("medicines")
      .select()
      .filter("id", "eq", id)
      .single();
    return {
      props: {
        medicine: data,
      },
    };
}

export default function DetailMedicine({ medicine }){
    return(
        <div className="container">
            <h1>{medicine.title}</h1>
        </div>
    )
}