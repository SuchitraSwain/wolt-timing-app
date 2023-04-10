import React, { useEffect, useState } from "react";
import { getData } from "../services/services";
import { Day, weekDays } from "../models/commonModels";
import OpeningDayHours from "../components/OpeningDayHours";

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

  return <OpeningDayHours data={getArray()} />;
};

export default Layout;
