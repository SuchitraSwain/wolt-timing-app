import React from "react";
import clock from "../../assets/clock.png";
import clockFill from "../../assets/clockFill.png";
import { isToday } from "../../helper/helpers";
import { Day } from "../../models/commonModels";

const TimeListDark = ({ data }: any) => {
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
                                src={
                                  isToday(openingHours.day) ? clockFill : clock
                                }
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
                                  ? "green__color"
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

export default TimeListDark;
