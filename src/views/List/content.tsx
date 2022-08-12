import { ReactElement, useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { supabase } from "../../supabase";

export const ListContent = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getData = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { data } = await supabase.from("tksxu").select();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <section className="flex flex-col justify-start pt-8 items-center w-full gap-y-8 overflow-auto h-screen">
      <Table items={data} />
    </section>
  );
};
