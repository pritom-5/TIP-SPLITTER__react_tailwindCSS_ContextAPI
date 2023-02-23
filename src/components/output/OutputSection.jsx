import { useContext, useEffect } from "react";
import billContext from "../../store/BillContext";

export default function OutputSection() {
  const {
    totalBill,
    tipPercent,
    totalPeople,
    calculateTipsTotal,
    totalAmount,
    tipsAmount,
    resetFn,
  } = useContext(billContext);

  useEffect(() => {
    calculateTipsTotal();
  }, [totalBill, tipPercent, totalPeople]);

  function resetHandler() {
    // reset fn
    resetFn();
  }

  return (
    <div
      id="output-section"
      className="min-h-full  grid grid-rows-2  bg-purple-800 text-slate-200 rounded-md px-8 py-10"
    >
      <div id="container" className="flex-col space-y-8">
        <div id="amount" className="flex gap-16 justify-between">
          <div id="text">
            <div id="main" className="font-extrabold text-slate-200">
              Tip Amount
            </div>
            <div id="sub" className="text-md text-purple-400">
              / person
            </div>
          </div>
          <div
            id="amount-number"
            className="text-3xl font-extrabold text-purple-400"
          >{`$ ${tipsAmount.toFixed(2)}`}</div>
        </div>
        <div id="total" className="flex gap-16 justify-between">
          <div id="text">
            <div id="main" className="font-extrabold text-slate-200">
              Total
            </div>
            <div id="sub" className="text-md text-purple-400">
              / person
            </div>
          </div>
          <div
            id="amount-number"
            className="text-3xl font-extrabold text-purple-400"
          >{`$ ${totalAmount.toFixed(2)}`}</div>
        </div>
      </div>
      <div id="reset-button" className="self-end">
        <button
          onClick={resetHandler}
          className="uppercase bg-orange-500 text-slate-200 font-extrabold block w-full py-2 rounded-md hover:bg-transparent border-2 border-orange-500 hover:border-orange-500 hover:text-orange-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
