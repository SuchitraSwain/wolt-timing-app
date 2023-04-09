import axios from "axios";

export const getData = async () => {
  return await axios.get("data1.json");
};
