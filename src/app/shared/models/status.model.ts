import { ServerError } from "./server-error.model";

export class Status {
  constructor() {}
  public statusCode: number;
  public clientError: string;
  public serverError: ServerError[];
  public token: string;
  public role: string;
}
