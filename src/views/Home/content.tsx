import { ReactElement } from "react";
import AnimatedText from "react-animated-text-content";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const HeadContent = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col gap-y-3 w-full items-center">
        <AnimatedText
          type="words"
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="lights"
          interval={0.06}
          duration={0.8}
          tag="h1"
          className="animated-paragraph md:text-3xl text-center font-bold text-green-400 animation-pulse"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          TSKXU Help you Complete your Task Assigment
        </AnimatedText>
        <div className="flex w-1/2 justify-center">
          <Link to={"/assigment"}>
            <Button
              text={"Submit Your Task Now!"}
              bgColor="border-green-400"
              textColor="text-green-400 font-medium text-md"
              type={"button"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
