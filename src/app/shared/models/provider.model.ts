import { City } from "./city.model";

export class Provider {
  constructor(
    public provider_ID: number,
    public nameOfProvider: string,
    public city: City,
    public adress: string,
    public email: string,
    public phone: string
  ) {}
}
