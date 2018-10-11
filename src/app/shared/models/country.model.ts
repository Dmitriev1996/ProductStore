import { Region } from "./region.model";


export class Country {
  constructor(
    public country_ID: number,
    public country: string,
    public regionList: Region[]
  ) {}
}
