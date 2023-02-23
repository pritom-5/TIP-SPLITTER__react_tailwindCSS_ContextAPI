import { useContext, useState } from "react";
import billContext from "../../store/BillContext";

export default function TipsInput() {
  const [tipsState, setTipsState] = useState(0);
  const { addTipPercent } = useContext(billContext);

  function submitHandler(e) {
    e.preventDefault();
    if (tipsState.trim().length === 0) return;
    addTipPercent(tipsState);
    setTipsState(0);
  }

  function valueHandler(e) {
    setTipsState(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div id="tips-wrapper">
        <input
          type="number"
          name="tips"
          id="tips"
          placeholder="Custom"
          value={!!tipsState && tipsState}
          onChange={valueHandler}
          min={0}
          pattern="\d+.?\d*"
          className="w-full py-1 rounded-md text-center text-purple-800 font-bold focus:outline-none focus:border-b-4  focus:border-orange-500 "
        />
      </div>
    </form>
  );
}
