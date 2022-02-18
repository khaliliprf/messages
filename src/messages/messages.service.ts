import { MessagesRepository } from './messages.repository';

export class MessagesService {
  repo: MessagesRepository;
  constructor() {
    this.repo = new MessagesRepository();
  }
  async findById(id: string) {}
}
