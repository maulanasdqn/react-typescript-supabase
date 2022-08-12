import { ReactElement } from "react";
import { Layouts } from "../../components/Layouts";
import { AssigmentContent } from "./content";

export const Assigment: React.FC = (): ReactElement => {
  return (
    <>
      <Layouts content={<AssigmentContent />} />
    </>
  );
};
