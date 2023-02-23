import tipsData from "./tips-data";
import TipsButton from "./TipsButton";
import TipsInput from "./TipsInput";

export default function TipsSection() {
  return (
    <div className="space-y-2">
      <div id="tips-select-header">Select Tip %</div>
      <div
        id="select-tips-section"
        className="grid grid-cols-[min-content_min-content_min-content] gap-4"
      >
        {tipsData.map((item) => (
          <TipsButton key={item.id} amount={item.amount} />
        ))}
        <div id="tips-input">
          <TipsInput />
        </div>
      </div>
    </div>
  );
}
