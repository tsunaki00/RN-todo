import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import * as config from 'config';
import * as uuidv4 from 'uuid/v4';
import { AbstractService } from 'core/AbstractService';
import { TodoEntity } from 'entities/TodoEntity';
import { TodoCreateDto, TodoUpdateDto } from './TodoDto';


/**
 * チャットサービス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/31  新規作成
 *
 */
@Injectable()
export class TodoService extends AbstractService {


  
  constructor(
    @InjectConnection()
    protected readonly connection: Connection) {
    super();
  }

  /**
   * ToDo一覧を取得します
   */
  public async get() {
    let repository = this.connection.getMongoRepository(TodoEntity);
    return await repository.find({ order: {createAt: 1} });
  }
  /**
   * ToDoを取得します
   */
  public async getDetail(id) {
    let repository = this.connection.getMongoRepository(TodoEntity);
    return await repository.findOneById(id);
  }

  /**
   * ToDoを登録します
   */
  public async create(body: TodoCreateDto) {
    let repository = this.connection.getMongoRepository(TodoEntity);
    let entity = new TodoEntity();
    entity.title = body.title;
    entity.body = body.body;
    entity.createAt = new Date();
    await repository.save(entity);
    return await repository.find({ order: {createAt: 1} });
  }

  /**
   * ToDoを更新します
   */
  public async update(body: TodoUpdateDto) {
    let repository = this.connection.getMongoRepository(TodoEntity);
    let entity = await repository.findOneById(body.id);
    entity.title = body.title;
    entity.body = body.body;
    await repository.save(entity);
    return await repository.find({ order: {createAt: 1} });
  }

  
  /**
   * delete
   */
  public async delete(id) {
    let repository = this.connection.getMongoRepository(TodoEntity);
    await repository.remove(await repository.findOneById(id));
    return await this.get();
  }

}
