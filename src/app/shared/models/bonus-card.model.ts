import { Client } from './client.model';

export class BonusCard {
  constructor(
    public card_ID: number,
    public client: Client,
    public sumOfBonus: number
  ) {}
}
