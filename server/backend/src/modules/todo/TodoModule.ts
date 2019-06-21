import { Module } from '@nestjs/common';
import { TodoController } from './TodoController';
import { TodoService } from './TodoService';

/**
 * Chatモジュール
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/31  新規作成
 *
 */
@Module({
  controllers: [TodoController],
  providers: [TodoService],
  
})
export class TodoModule {}
