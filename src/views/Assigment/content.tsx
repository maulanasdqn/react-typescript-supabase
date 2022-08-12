import { FormEvent, ReactElement, useState } from "react";
import { TextField } from "../../components/TextField";
import { supabase } from "../../supabase";
import { useNavigate } from "react-router-dom";

export const AssigmentContent: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [link, setLink] = useState("");
  const [nim, setNim] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const re =
    /^([A-Za-z0-9]+@|http(|s):\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d/\w.-]+?)(\.git)?$/i;
  const checkValid = (): boolean => {
    if (
      name.length < 4 ||
      (grade.toUpperCase() !== "A1" && grade !== "A2") ||
      !re.test(link) ||
      (nim.length !== 14 && !nim.includes("410370062000"))
    )
      return false;
    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    try {
      const payload = { name, grade, link, nim };
      const { error } = await supabase.from("tksxu").insert([payload]);
      if (error) setMessage("Nim sudah di gunakan");
      setGrade("");
      setName("");
      setLink("");
      setNim("");
      navigate("/list", { replace: true });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}
        className="flex flex-col gap-y-6 bg-gray-100 p-4 rounded-lg md:w-1/2 h-screen md:h-auto justify-center w-full"
      >
        <h1 className="text-black-900 font-medium text-xl w-auto mx-auto">
          Make sure to input a correct information
        </h1>
        <div className="flex flex-col gap-y-2">
          <TextField
            name={"name"}
            placeholder={"Input name"}
            type={"text"}
            label={"Your Name"}
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <span className="text-red-900">
            {name.length < 5 && name.length > 1
              ? "Name length at least 5 char"
              : ""}
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <TextField
            name={"nim"}
            placeholder={"Input Student Id"}
            type={"text"}
            label={"Your Student Id"}
            value={nim}
            required
            onChange={(e) => {
              setNim(e.target.value);
            }}
          />
          <span className="text-red-900">
            {(nim.includes("410370062000") &&
              nim.length > 5 &&
              nim.length < 15) ||
            nim.length === 0
              ? ""
              : "Input a valid Student Id"}
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <TextField
            name={"grade"}
            placeholder={"Input grade"}
            type={"text"}
            label={"Your Grade (A1 / A2)"}
            value={grade}
            required
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          />{" "}
          <span className="text-red-900">
            {grade.toLowerCase() === "a2" ||
            (grade.toLowerCase() === "a1" && grade.length > 1)
              ? ""
              : "Only Accept Grade from A1 or A2"}
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <TextField
            name={"link"}
            placeholder={"Input repo link"}
            type={"text"}
            label={"Your Github Repo"}
            value={link}
            required
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />{" "}
          <span className="text-red-900">
            {!re.test(link) && link.length > 2
              ? "Only Accept Github Link Repo"
              : ""}
          </span>
        </div>
        <h1>{message}</h1>
        <button
          disabled={!checkValid()}
          className="disabled:bg-blue-100 disabled:hover:bg-blue-100 bg-blue-400 hover:bg-blue-600 p-2 rounded-lg text-white font-semibold"
        >
          {!loading ? "Submit Now!" : "Laoding..."}
        </button>
      </form>
    </>
  );
};
