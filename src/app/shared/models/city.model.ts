import { Region } from "./region.model";
import { Shop } from "./shop.model";

export class City {
  constructor(
    public city_ID: number,
    public city: string,
    public region: Region,
    public shopList: Shop[]
  ) {}
}
