import { ReactElement } from "react";

type Tabletype = {
  id: number;
  name: string;
  nim: string;
  grade: string;
  link: string;
  is_verified: boolean;
  is_checked: boolean;
  score: number;
};

interface TableDto {
  items: Array<Tabletype>;
}

export const Table: React.FC<TableDto> = (props: TableDto): ReactElement => {
  const { items }: TableDto = props;
  return (
    <>
      <div className="flex justify-center border-2 rounded-lg overflow-x-auto w-auto mx-auto h-[calc(100vh-170px)]">
        <table className="divide-y divide-gray-300 overflow-auto w-full">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">Name</th>
              <th className="px-6 py-2 text-xs text-gray-500">Grade</th>
              <th className="px-6 py-2 text-xs text-gray-500">Student Id</th>
              <th className="px-6 py-2 text-xs text-gray-500">Checked</th>
              <th className="px-6 py-2 text-xs text-gray-500">Verified</th>
              <th className="px-6 py-2 text-xs text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {items.map((x) => (
              <tr key={x.id} className="whitespace-nowrap">
                <td className="px-6 py-4 text-sm text-gray-500">{x.name}</td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{x.grade}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{x.nim}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <span
                      className={` ${
                        x.is_checked
                          ? "bg-green-100 text-green-400"
                          : "bg-gray-100 text-gray-400"
                      } rounded-lg w-aut p-2`}
                    >
                      {x.is_checked ? "Checked" : "Unchecked"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <span
                      className={` ${
                        x.is_verified
                          ? "bg-green-100 text-green-400"
                          : "bg-gray-100 text-gray-400"
                      } rounded-lg w-aut p-2`}
                    >
                      {x.is_verified ? "Verified" : "Unverified"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">
                    <span
                      className={` ${
                        x.score > 70 ? "text-green-400" : "text-red-400"
                      }rounded-lg w-auto p-2`}
                    >
                      {x.score}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
