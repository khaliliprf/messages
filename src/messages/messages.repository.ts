import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    console.log(id);
  }
  async findAll() {
    console.log();
  }
  async create() {
    console.log();
  }
}
