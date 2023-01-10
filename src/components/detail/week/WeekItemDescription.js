import { dateFormat, timeFormat } from "../../../plugins/format";

function WeekItemDescription({ data }) {
  return (
    <div className="bg-white m-[24px]">
      <p className="ml-[12px] pt-[18px] text-xl text-gray-500 font-semibold">
        {dateFormat(data.dt)}
      </p>
      <div className="grid grid-cols-2 ml-[12px]">
        <div>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Temp current: {Math.floor(data.temp.day)}°C
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Temp: {Math.floor(data.temp.min)}°C / {Math.floor(data.temp.max)}°C
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Humidity: {data.humidity}%
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Wind speed: {data.wind_speed} km/h
          </p>
        </div>
        <div>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Sunrise: {timeFormat(data.sunrise)}
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Sunset: {timeFormat(data.sunset)}
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Description: {data.weather[0].description}
          </p>
          <p className="mt-[12px] text-gray-500 font-semibold">
            Atmospheric pressure: {data.pressure} hPa
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeekItemDescription;
