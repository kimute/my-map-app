import { atom } from "recoil";
import { IMylocationData } from "./types";

export const locateDataState = atom({
  key: "LocationDatas",
  default: [] as IMylocationData[],
});
