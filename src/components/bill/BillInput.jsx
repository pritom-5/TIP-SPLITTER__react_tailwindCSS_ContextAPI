import { useContext, useState } from "react";
import billContext from "../../store/BillContext";

export default function BillInput() {
  const [billInput, setBillInput] = useState(0);
  const { addTotalBill } = useContext(billContext);

  const changeHandler = (e) => {
    setBillInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTotalBill(billInput);
    setBillInput(0);
  };

  return (
    <form onSubmit={submitHandler} className="flex-col space-y-2">
      <label htmlFor="bill">Bill</label>
      <div id="input-wrap" className="relative">
        <span className="absolute left-2 top-2 text-slate-400 font-bold ">
          $
        </span>
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          max={1000000}
          min={0}
          step={0.01}
          required
          minLength={1}
          value={!!billInput && billInput}
          pattern="\d+.?\d*"
          onChange={changeHandler}
          className="w-full text-purple-900 font-bold text-center py-2 rounded-md focus:outline-none focus:border-b-4  focus:border-orange-500 "
        />
      </div>
    </form>
  );
}
