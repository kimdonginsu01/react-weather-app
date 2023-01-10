import { dateFormat } from "../../../plugins/format";

function WeekItem({ dt, tempMin, tempMax, icon, idx, onDaySelect, currIdx }) {
  function handleOnClick(idx) {
    onDaySelect(idx);
  }

  return (
    <>
      <div
        className={`${idx === currIdx ? "bg-blue-300" : "bg-white"} rounded`}
        onClick={() => handleOnClick(idx)}
      >
        <p className="ml-[12px] mt-[12px] text-xl font-semibold text-gray-500">
          {dateFormat(dt)}
        </p>
        <img className="w-[60px] mx-auto" alt="" src={`icons/${icon}.png`} />
        <p className="text-gray-800 text-xl m-[12px] font-semibold text-center">
          {Math.floor(tempMin)}°C / {Math.floor(tempMax)}°C
        </p>
      </div>
    </>
  );
}

export default WeekItem;
