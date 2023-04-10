import React from "react";
import { weekDays } from "../models/commonModels";
import { getAmPmHours } from "../helper/helpers";
import TimeList from "./LightMode/TimeList";
import TimeListDark from "./DarkMode/TimeListDark";
import "./List.css";

const OpeningDayHours = ({ data }: any) => {
  const getTiming = () => {
    const results: any[] = [];
    const results2: any[] = [];
    let i = 0;
    while (i < data.length) {
      let timingObj = data[i];
      let openHours = Number;
      let closeHours = Number;
      let openDay = "";
      if (timingObj.type === "open") {
        openDay = weekDays[timingObj.day];
        const openHr = timingObj.value;
        openHours = getAmPmHours(openHr);
        i++;
      }
      timingObj = data[i];
      if (timingObj.type === "close") {
        const closeHr = timingObj.value;
        closeHours = getAmPmHours(closeHr);
        i++;
      } else {
        closeHours = getAmPmHours(36000);
      }

      const dayTiming = results.find((x) => x.day === openDay);
      if (!dayTiming) {
        results.push({ day: openDay, timing: `${openHours} - ${closeHours}` });
      } else {
        dayTiming.timing += `, ${openHours} - ${closeHours}`;
      }
    }

    weekDays.forEach((day) => {
      let time = "";
      let item = {
        day: day,
        time:
          results.find((d: { day: string; timing: string }) => {
            if (d.day === day) {
              time = d.timing;
              return true;
            }
            return d.day === day;
          }) === undefined
            ? "Closed"
            : time,
      };

      results2.push(item);
    });
    console.log(results2);
    return results2;
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TimeList data={getTiming()} />
          </div>
          <div className="col-md-7">
            <TimeListDark data={getTiming()} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningDayHours;
