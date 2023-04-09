import React, { useEffect, useState } from "react";
import "../List.css";
import { getAmPmHours } from "../../helper/helpers";
import TimeList from "./TimeListDark";
import TimeListDark from "./TimeListDark";
import { weekDays } from "../../models/commonModels";

const OpeningHoursDark = ({ data }: any) => {
  const getTiming = () => {
    const results: any[] = [];
    const results2: any[] = [];
    let i = 0;
    while (i < data.length) {
      let timingObj = data[i];
      let openStr = "";
      let closeStr = "";
      let openDay = "";
      if (timingObj.type === "open") {
        openDay = weekDays[timingObj.day];
        const openHr = timingObj.value;
        openStr = getAmPmHours(openHr);
        i++;
      }
      timingObj = data[i];
      if (timingObj.type === "close") {
        const closeHr = timingObj.value;
        closeStr = getAmPmHours(closeHr);
        i++;
      } else {
        closeStr = getAmPmHours(36000);
      }

      const dayTiming = results.find((x) => x.day === openDay);
      if (!dayTiming) {
        results.push({ day: openDay, timing: `${openStr} - ${closeStr}` });
      } else {
        dayTiming.timing += `, ${openStr} - ${closeStr}`;
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
    return results2;
  };

  return (
    <section className="darkMode__section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card hours__card p-md-5">
              <div className="card-body">
                <div className="row border p-md--3">
                  <div className="col-md-12">
                    <h1 className="text-center mt-3 mb-3 fw-bold">
                      OPENING <span>HOURS</span>
                    </h1>
                    <TimeListDark data={getTiming()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursDark;
