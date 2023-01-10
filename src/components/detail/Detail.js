import { Routes, Route, NavLink } from "react-router-dom";
import Avatar from "../../assets/img/Avatar.png";
import Hour from "./hour/Hour";
import Today from "./today/Today";
import Week from "./week/Week";

function Detail({ data }) {
  return (
    <div className="lg:w-3/4 w-full bg-gray-200 relative h-[90vh] overflow-auto">
      <img
        className="w-[50px] rounded-[50%] absolute top-[20px] right-[20px]"
        src={Avatar}
        alt=""
      ></img>

      <div className="mt-[32px] mx-[24px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer font-bold text-xl mr-[8px] p-[5px] border-black border-b-2"
              : "cursor-pointer font-bold text-gray-500 text-xl mr-[8px] p-[5px]"
          }
        >
          Today
        </NavLink>
        <NavLink
          to="/week"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer font-bold text-xl mr-[8px] p-[5px] border-black border-b-2"
              : "cursor-pointer font-bold text-gray-500 text-xl mr-[8px] p-[5px]"
          }
        >
          Week
        </NavLink>
        <NavLink
          to="/hour"
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer font-bold text-xl mr-[8px] p-[5px] border-black border-b-2"
              : "cursor-pointer font-bold text-gray-500 text-xl mr-[8px] p-[5px]"
          }
        >
          Hour
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Today weatherData={data} />}></Route>
        <Route path="/week" element={<Week weatherData={data} />}></Route>
        <Route path="/hour" element={<Hour weatherData={data} />}></Route>
      </Routes>
    </div>
  );
}

export default Detail;
