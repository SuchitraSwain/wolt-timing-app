import React from "react";
import clock from "../../assets/clock.png";
import clockFill from "../../assets/clockFill.png";
import { isToday } from "../../helper/helpers";
import { Day } from "../../models/commonModels";


const TimeListDark = ({ data }: any) => {
  return (
    <>
      {data.map((openingHours: { day: Day; time: string }) => (
        <>
          <div className="row mt-3">
            <div className="col-5">
              <p
                className={
                  isToday(openingHours.day)
                    ? "green__color text-capitalize fw-bold"
                    : "white__off text-capitalize"
                }
              >
                <img
                  src={isToday(openingHours.day) ? clockFill : clock}
                  alt="clock"
                  className="img-fluid mx-md-3 mx-1"
                />
                {openingHours.day}
              </p>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <p
                className={`fw-bold mb-0 ${
                  openingHours.time === "Closed"
                    ? "gray__color"
                    : "off__white" && isToday(openingHours.day)
                    ? "green__color fw-bold "
                    : "white__off"
                }`}
              >
                {openingHours.time}
              </p>
            </div>
          </div>
          <hr className="list__border" />
        </>
      ))}
    </>
  );
};

export default TimeListDark;
