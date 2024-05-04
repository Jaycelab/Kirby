import { scale } from "./constants";
import { KaboomCtx } from "kaboom";

export async function makeMap(k: KaboomCtx, name: string) {
  const mapData = await (await fetch(`./${name}.json}`)).json();

  const map = k.make([k.sprite(name)]);
}
