import { useContext, useState } from "react";
import billContext from "../../store/BillContext";

export default function NumberOfPeopleInput() {
  const [nosPeople, setNosPeople] = useState(0);
  const { addTotalPeople } = useContext(billContext);
  function changeHandler(e) {
    setNosPeople(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    addTotalPeople(nosPeople);

    setNosPeople(0);
  }
  return (
    <div id="numberPeopleSection" className="space-y-2">
      <div id="title">Number of People</div>
      <form onSubmit={submitHandler}>
        <div id="numberPeopleInput" className="relative">
          <div id="people-svg" className="w-4 absolute left-2 top-2">
            <img src="/user.svg" alt="user-svg" className="opacity-40" />
          </div>
          <input
            type="number"
            name="people"
            id="people"
            min={1}
            pattern="\d+"
            placeholder="0"
            value={!!nosPeople && nosPeople}
            onChange={changeHandler}
            className="w-full py-2 rounded-md text-center text-purple-800 focus:outline-none focus:border-b-4  focus:border-orange-500 "
          />
        </div>
      </form>
    </div>
  );
}
