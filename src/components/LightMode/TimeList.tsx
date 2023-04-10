import React from "react";
import { isToday } from "../../helper/helpers";
import { Day } from "../../models/commonModels";
import clock from "../../assets/darkClock.png";

const TimeList = ({ data }: any) => {
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
                            res.time === "Closed"
                              ? "gray__color"
                              : "black__color"
                          }`}
                        >
                          {res.time}
                        </h6>
                      </div>
                    </div>
                    <hr className="list__border" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeList;
