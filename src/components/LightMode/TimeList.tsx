import React from "react";
import { isToday } from "../../helper/helpers";
import { Day } from "../../models/commonModels";



const TimeList = ({ data }: any) => {
  return (
    <>
      {data.map((res: { day: Day; time: string }) => (
        <>
          <div className="row">
            <div className="col-5">
              <h6 className="text-capitalize fw-bold d-flex mb-0">
                {res.day}
                <p className="mx-2 green__color mb-0 fw-bold">
                  {isToday(res.day) && <>Today</>}
                </p>
              </h6>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <h6
                className={`fw-bold mb-0 ${
                  res.time === "Closed" ? "gray__color" : "black__color"
                }`}
              >
                {res.time}
              </h6>
            </div>
          </div>
          <hr className="list__border" />
        </>
      ))}
    </>
  );
};

export default TimeList;
