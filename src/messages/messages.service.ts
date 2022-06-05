/* eslint-disable prettier/prettier */
import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  repo: MessagesRepository;
  constructor(repo: MessagesRepository) {
    this.repo = repo;
  }
  async findById(id: string) {}
}
