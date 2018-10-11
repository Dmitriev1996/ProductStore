import { Sex } from './sex.model';
import { Buy } from  './buy.model';
import { Order } from './order.model';
import { Comment } from './comment.model';
import { BonusCard } from './bonus-card.model';
import { Forum } from './forum.model';
import { Message } from './message.model';
import { Credential } from './credential.model';

export class Client {
  constructor(
    public client_ID: number,
    public name: String,
    public surname: String,
    public patronymic: String,
    public dateOfBirth: String,
    public sex: Sex,
    public buyList: Buy[],
    public orderList: Order[],
    public commentList: Comment[],
    public bonusCard:  BonusCard,
    public forumList: Forum[],
    public messageList: Message[],
    public credential: Credential
  ) {}
}
