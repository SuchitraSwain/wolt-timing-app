import React, { useEffect, useState } from "react";
import List from "../components/LightMode/OpeningHours";
import { getData } from "../services/services";
import OpeningHoursDark from "../components/DarkMode/OpeningHoursDark";
import OpeningHours from "../components/LightMode/OpeningHours";
import { Day, weekDays } from "../models/commonModels";

const Layout = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const response = getData();
    response.then((res) => {
      setData(res.data);
    });
  }, []);

  const getArray = (): Array<{ day: Day; time: string }> => {
    let timings: any[] = [];
    for (const [day, timing] of Object.entries(data)) {
      timing.forEach((x: Number) => {
        let dayValue = weekDays.indexOf(day);
        timings.push({ ...x, day: dayValue });
      });
    }
    const timeList = timings.sort((a, b) => a.day - b.day || a.value - b.value);
    return timeList;
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <OpeningHours data={getArray()} />
          </div>
          <div className="col-md-7">
            <OpeningHoursDark data={getArray()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
