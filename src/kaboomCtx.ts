import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  scale,
  //canvas will scale to fit the window
  letterbox: true,
  //false to only use kaboom related functions to k constant
  global: false,
});
