import { createContext, useState } from "react";

const initialContext = {
  totalBill: 0,
  tipPercent: 0,
  totalPeople: 1,
  tipsAmount: 0,
  totalAmount: 0,
  addTotalBill: (amount) => {},
  addTipPercent: (tip) => {},
  addTotalPeople: (total) => {},
  calculateTipsTotal: () => {},
  resetFn: () => {},
};

const billContext = createContext(initialContext);

export function BillContextProvider({ children }) {
  const [totalBillState, setTotalBillState] = useState(0);
  const [tipPercentState, setTipPercentState] = useState(0);
  const [totalPeopleState, setTotalPeopleState] = useState(1);
  const [tipsAmountState, setTipsAmountState] = useState(0);
  const [totalAmountState, setTotalAmountState] = useState(0);

  function calculateTipsTotalHandler() {
    const totalTips0 = totalBillState * (tipPercentState / 100);
    setTipsAmountState(totalTips0);

    const totalAmount0 = (+totalBillState + +totalTips0) / +totalPeopleState;
    setTotalAmountState(totalAmount0);

    //
    console.log(totalBillState, tipPercentState, totalAmount0, totalTips0);
  }

  function addTotalBillHandler(amount) {
    setTotalBillState(amount);
  }
  function addTipPercentHandler(tip) {
    setTipPercentState(tip);
  }
  function addTotalPeopleHandler(total) {
    setTotalPeopleState(total);
  }
  function resetHandler() {
    setTotalBillState(0);
    setTipPercentState(0);
    setTotalPeopleState(1);
  }

  return (
    <billContext.Provider
      value={{
        totalBill: totalBillState,
        tipPercent: tipPercentState,
        totalPeople: totalPeopleState,
        tipsAmount: tipsAmountState,
        totalAmount: totalAmountState,
        addTotalBill: addTotalBillHandler,
        addTipPercent: addTipPercentHandler,
        addTotalPeople: addTotalPeopleHandler,
        calculateTipsTotal: calculateTipsTotalHandler,
        resetFn: resetHandler,
      }}
    >
      {children}
    </billContext.Provider>
  );
}
export default billContext;
