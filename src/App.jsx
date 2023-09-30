import { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(22);
  let [message, setMessage] = useState("😎");

  const ageUp = () => {
    if (counter >= 0 && counter <= 21) {
      counter++;
      setCounter(counter);
    } else {
      setMessage("Ohh! sirr Mr. Ray is not that old ohk!");
      console.log(
        `Ohh! sirr Mr.Ray is not that old ohk!,${Math.floor(Math.random() * 5)}`
      );
    }
    setTimeout(() => {
      setMessage("😎");
    }, 2000);
  };
  const ageDown = () => {
    if (counter >= 1 && counter <= 22) {
      counter--;
      setCounter(counter);
    } else {
      setMessage("Heyy! wait u can't vanish Mr. Ray");
      console.log(
        `Heyy! wait u can't vanish Mr.Ray,${Math.floor(Math.random() * 5)}`
      );
    }
    setTimeout(() => {
      setMessage("😎");
    }, 2000);
  };
  return (
    <section className="w-full overflow-hidden bg-slate-600 min-h-screen flex justify-center items-center flex-col font-poppins">
      <h2 className="absolute rounded-lg top-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <h2 className="absolute rounded-lg  left-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <h2 className="absolute rounded-lg  right-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <h2 className="absolute rounded-lg  bottom-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>

      <div className="flex items-center justify-center flex-col flex-wrap text-center bg-white h-64 w-full max-w-md rounded-lg shadow-lime-300 shadow-2xl ">
        <h1 className="font-bold text-center font-poppins text-3xl mb-2 bg-cyan-200 rounded-xl w-14 p-2 text-emerald-500">
          {counter}
        </h1>
        <h1 className="font-bold font-poppins text-2xl text-center px-2">
          Count My Age
        </h1>
        <button
          onClick={ageUp}
          className="py-2 px-16 rounded-lg bg-yellow-300 text-slate-700 font-bold active:bg-yellow-500 mt-5 border-none"
        >
          UP
        </button>
        <button
          onClick={ageDown}
          className="py-2 px-12 rounded-lg bg-yellow-300 text-slate-700 font-bold  mt-2 active:bg-yellow-500 border-none "
        >
          DOWN
        </button>
      </div>
      <div
        className="w-full max-w-md h-20 py-4 px-3 text-lg text-center mt-10 bg-slate-300 flex justify-center items-center font-bold rounded-xl border-dashed border-blue-500 border-2
      "
      >
        <h1>{message}</h1>
      </div>
    </section>
  );
};

export default App;
