import { Client } from './client.model';
import { Forum } from './forum.model';

export class Message {
  constructor(
    public message_ID: number,
    public client: Client,
    public dateOfMessage: string,
    public message: string,
    public forum: Forum
  ) {}
}
