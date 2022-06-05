// import { readFile, writeFile } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {}
  async findAll() {}
  async create() {}
}
