import React, { useEffect, useState } from "react";
import clock from "../../assets/darkClock.png";
import "../List.css";
import { getAmPmHours } from "../../helper/helpers";
import TimeList from "./TimeList";
import { Day, weekDays } from "../../models/commonModels";

const OpeningHours = ({ data }: any) => {
  const getTiming = () => {
    const results: any[] = [];
    const results2: any[] = [];
    let i = 0;
    while (i < data.length) {
      let timingObj = data[i];
      let openHours = "";
      let closeHours = "";
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
    <section className="darkMode__section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mt-3 mb-4 d-flex align-items-center justify-content-start">
                  <img
                    src={clock}
                    alt="clock"
                    className="img-fluid me-2"
                    width={20}
                  />
                  Opening hours
                </h3>
                <hr className="header__hr" />
                <TimeList data={getTiming()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
