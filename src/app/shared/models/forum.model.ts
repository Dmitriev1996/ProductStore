import { Client } from './client.model';
import { Message } from './message.model';

export class Forum {
  constructor(
    public forum_ID: number,
    public nameOfForum: string,
    public client: Client,
    public messageList: Message[]
  ) {}
}
