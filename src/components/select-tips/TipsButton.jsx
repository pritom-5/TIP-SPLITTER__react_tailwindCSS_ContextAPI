import { useContext } from "react";
import billContext from "../../store/BillContext";

export default function TipsButton({ amount }) {
  const { addTipPercent } = useContext(billContext);

  function clickHandler() {
    addTipPercent(amount);
  }

  return (
    <div>
      <button
        onClick={clickHandler}
        className="bg-orange-500 text-slate-200 text-lg font-extrabold px-8 rounded-md hover:bg-transparent border-2 border-orange-500 hover:border-orange-500 hover:text-orange-500"
      >
        {`${amount}%`}
      </button>
    </div>
  );
}
