import { useContext } from "react";
import "./App.css";
import BillInput from "./components/bill/BillInput";
import NumberOfPeopleInput from "./components/number-of-people/NumberOfPeopleInput";
import OutputSection from "./components/output/OutputSection";
import TipsSection from "./components/select-tips/TipsSection";
import billContext from "./store/BillContext";

function App() {
  //test context
  const { totalBill, tipPercent, totalPeople } = useContext(billContext);

  return (
    <div className="min-h-screen min-w-full bg-purple-900 text-slate-600 text-md">
      <div
        id="title"
        className="uppercase tracking-widest text-center text-orange-500 py-8"
      >
        splitter
      </div>
      <div
        id="section"
        className="bg-slate-200 p-8 rounded-lg max-w-fit mx-auto shadow-2xl md:flex-row flex flex-col gap-8"
      >
        <div id="inputs" className="space-y-8">
          <div id="billInput">
            <BillInput />
          </div>
          <div id="select-tips">
            <TipsSection />
          </div>
          <div id="nos-people">
            <NumberOfPeopleInput />
          </div>
        </div>
        <div id="output-section">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default App;
