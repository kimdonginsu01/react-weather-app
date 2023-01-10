import { useState } from "react";
import WeekItem from "./WeekItem";
import WeekItemDescription from "./WeekItemDescription";

function Week({ weatherData }) {
  const [itemIdx, setItemIdx] = useState(0);

  function handleOnDaySelect(index) {
    setItemIdx(index);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mx-[24px] mt-[24px]">
        {weatherData.daily.map((item, index) => (
          <WeekItem
            key={index}
            dt={item.dt}
            icon={item.weather[0].icon}
            tempMin={item.temp.min}
            tempMax={item.temp.max}
            idx={index}
            currIdx={itemIdx}
            onDaySelect={handleOnDaySelect}
          />
        ))}
      </div>
      <WeekItemDescription data={weatherData.daily[itemIdx]} />
    </>
  );
}

export default Week;
