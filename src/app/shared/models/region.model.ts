import { City } from "./city.model";
import { Country } from "./country.model";


export class Region {
  constructor(
    public region_ID: number,
    public region: string,
    public country: Country,
    public cityList: City
  ) {}
}
