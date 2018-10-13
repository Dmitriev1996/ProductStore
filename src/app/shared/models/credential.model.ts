import { Client } from './client.model';

export class Credential {
  constructor(
  ) {}
  public credential_ID: number;
  public login: string;
  public password: string;
  public role: string;
  public client: Client;
}
