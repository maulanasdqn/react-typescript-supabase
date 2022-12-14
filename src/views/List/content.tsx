import { ReactElement, useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { supabase } from "../../supabase";

export const ListContent = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getData = async (): Promise<void> => {
    setLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { data } = await supabase
        .from("tksxu")
        .select()
        .order("id", { ascending: true });
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col justify-start pt-8 px-6 items-center w-full gap-y-8 h-screen overflow-y-hidden">
      {!loading ? <Table items={data} /> : "Now Loading...."}
    </section>
  );
};
