// @flow strict

import moment from "moment";
import { DAYS, Day } from "../models/commonModels";

export const getAmPmHours = (unixTime: number): any => {
  let hours = unixTime / 3600;
  const hh = hours > 12 ? `${hours - 12} PM` : `${hours} AM`;
  if (hh === "12AM") return "12PM";
  if (hh === "12PM") return "12AM";

  return hh;
};

export const isToday = (day: Day): boolean => {
  const today = moment().day();
  return today === 0 ? DAYS[6] === day : DAYS[today - 1] === day;
};
