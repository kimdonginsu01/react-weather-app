import { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Detail from "./components/detail/Detail";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [lat, setLat] = useState("21.02851");
  const [lon, setLon] = useState("105.80481");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  }, [lat, lon]);

  const handleOnCityChange = (searchData) => {
    setLat(searchData.value.split(" ")[0]);
    setLon(searchData.value.split(" ")[1]);
  };

  return (
    <div className="app h-screen bg-gray-300">
      <div className="container w-[1200px] pt-[40px] mx-auto lg:flex lg:flex-row flex-col">
        <Sidebar data={weather} onCityChange={handleOnCityChange} />
        {weather && <Detail data={weather} />}
      </div>
    </div>
  );
}

export default App;
