import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const HeadContent = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col gap-y-3 w-full items-center">
        <h1 className="text-green-400 font-semibold md:text-3xl text-md text-center">
          TSKXU will help you Complete yout Task
        </h1>
        <Link to={"/assigment"}>
          <Button
            text={"Submit Your Task Now!"}
            bgColor="border-green-400"
            textColor="text-green-400 font-medium text-md"
            type={"button"}
          />
        </Link>
      </div>
    </>
  );
};
