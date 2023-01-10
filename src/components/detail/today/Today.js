import { kmFormat, timeFormat } from "../../../plugins/format";

function Today({ weatherData }) {
  return (
    <div className="grid grid-cols-3 gap-4 mx-[24px] mt-[12px]">
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">UV Index</p>
        <img
          className="w-[60px] text-yellow-500 mx-[auto]"
          alt="uvi"
          src="/svg/uv index.svg"
        />
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          {weatherData.current.uvi}
        </p>
      </div>
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">Wind status</p>
        <img
          className="w-[60px] text-yellow-500 mx-[auto]"
          alt="uvi"
          src="/svg/wind.svg"
        />
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          {weatherData.current.wind_speed} km/h
        </p>
      </div>
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">
          Sunrise & sunset
        </p>
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          <img
            className="w-[40px] inline-block mr-[18px]"
            alt="uvi"
            src="/svg/sunrise.svg"
          />
          {timeFormat(weatherData.current.sunrise)}
        </p>
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          <img
            className="w-[40px] inline-block mr-[18px]"
            alt="uvi"
            src="/svg/sunset.svg"
          />
          {timeFormat(weatherData.current.sunset)}
        </p>
      </div>
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">Humidity</p>
        <img
          className="w-[60px] text-yellow-500 mx-[auto]"
          alt="uvi"
          src="/svg/humidity.svg"
        />
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          {weatherData.current.humidity}%
        </p>
      </div>
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">Visibility</p>
        <img
          className="w-[60px] text-yellow-500 mx-[auto]"
          alt="uvi"
          src="/svg/visibility.svg"
        />
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          {kmFormat(weatherData.current.visibility)}
        </p>
      </div>
      <div className="bg-white mt-[12px] rounded">
        <p className="text-gray-400 text-lg ml-[12px] mt-[12px]">Pressure</p>
        <img
          className="w-[60px] text-yellow-500 mx-[auto]"
          alt="uvi"
          src="/svg/pressure.svg"
        />
        <p className="text-gray-600 text-3xl m-[12px] font-semibold text-center">
          {weatherData.current.pressure} hPa
        </p>
      </div>
    </div>
  );
}

export default Today;
