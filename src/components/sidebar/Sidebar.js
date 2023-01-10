import { useState } from "react";
import CityBackground from "../../assets/img/CityBackground.png";
import Search from "../search/Search";
import { timeFormat, dateFormat } from "../../plugins/format";

function Sidebar({ data, onCityChange }) {
  const [cityName, setCityName] = useState("Hanoi, VN");

  const handleOnSearchChange = (searchData) => {
    onCityChange(searchData);
    setCityName(searchData.label);
  };

  return (
    <div className="lg:w-1/4 w-full bg-white text-center">
      <div className="mt-[20px] mx-[12px] pt-[12px]">
        <Search onSearchChange={handleOnSearchChange} />

        {data && (
          <div>
            <div className="flex justify-center items-center">
              <img
                className="mt-[10px]"
                alt=""
                src={`icons/${data.current.weather[0].icon}.png`}
              />
            </div>
            <div className="font-bold text-zinc-900">
              <h2 className="text-4xl">{cityName}</h2>
              <h2 className="text-5xl mt-[10px]">
                {Math.floor(data.current.temp)}°C
              </h2>
              <h3 className="text-xl my-[20px] font-semibold">
                {dateFormat(data.current.dt)}, {timeFormat(data.current.dt)}
              </h3>
            </div>
            <div className="text-gray-500 text-lg">
              <p className="capitalize">
                {data.current.weather[0].description}
              </p>
              <p className="">{data.current.clouds}%</p>
            </div>
            <div className="city-image mr-[20px] relative">
              <img
                className="mt-[10px] mb-[30px] rounded mx-auto"
                alt=""
                src={CityBackground}
              />
              <h2 className="text-white text-2xl font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                {cityName}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
