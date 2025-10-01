import { useNavigate } from "react-router";
import Block from "../../components/Block";
import { useEffect, useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="bg-blue-400 p-10 flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <Block className="w-96 px-10">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (password === "pleasedaddy") {
              localStorage.setItem("loggedIn", "true");
              navigate("/home");
            } else {
              setWrong(true);
            }
          }}
        >
          <div className="text-2xl text-blue-700 font-bold text-center">
            What's The Magic Word ;) (without space)
          </div>
          <div>
            <input
              type="password"
              value={password}
              className="bg-blue-200 w-full rounded-md h-8"
              onChange={(e) => setPassword(e.target.value)}
            />
            {wrong && <div className="text-red-500">Wrong password 😡</div>}
          </div>
          <button
            type="submit"
            className="bg-blue-400 rounded-lg py-1 text-white cursor-pointer hover:bg-blue-700"
          >
            Enter
          </button>
        </form>
      </Block>
    </div>
  );
}
