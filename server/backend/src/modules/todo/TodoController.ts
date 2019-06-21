import { UseInterceptors, Controller, Req, Res, HttpStatus,  Get, Query, Post, Body, Delete, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { AbstractRestController } from 'core/AbstractRestController';
import { TodoService } from './TodoService';
import { TodoCreateDto, TodoUpdateDto } from './TodoDto';
//import { ChatSendMessageDto } from './ChatDto';

/**
 * Chatコントローラ
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/31  新規作成
 *
 */
@ApiUseTags('ToDo REST API')
@Controller('todo')
@ApiBearerAuth()
export class TodoController extends AbstractRestController {
  /**
   * コンストラクタ
   */
  constructor(
    private readonly service: TodoService,
  ) {
    super();
  }

  /**
   * fet
   * @Router /todo [get]
   */
  @ApiOperation({
    title: 'todo getList',
    description: 'Todo一覧を取得します',
  })
  @Get('')
  public async get(@Req() req, @Res() res) {
    try {
      let list = await this.service.get();
      res.status(HttpStatus.OK).send(list);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
    /**
   * fet
   * @Router /todo [get]
   */
  @ApiOperation({
    title: 'todo getList',
    description: 'Todo一覧を取得します',
  })
  @Get(':id')
  public async show(@Req() req, @Res() res) {
    try {
      let ret = await this.service.getDetail(req.params.id);
      res.status(HttpStatus.OK).send(ret);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  /**
   * チャットコネクション開始
   * @Router /create [get]
   */
  @ApiOperation({
    title: 'todo create',
    description: 'Todo一覧を取得します',
  })
  @Post('')
  public async create(@Req() req, @Res() res, @Body() body: TodoCreateDto) {
    try {
      let list = await this.service.create(body);
      res.status(HttpStatus.OK).send(list);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  /**
   * チャットコネクション開始
   * @Router /create [get]
   */
  @ApiOperation({
    title: 'todo delete',
    description: 'Todoを削除します',
  })
  @Patch('')
  public async patch(@Req() req, @Res() res, @Body() body: TodoUpdateDto) {
    try {
      let list = await this.service.update(body);
      res.status(HttpStatus.OK).send(list);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  /**
   * チャットコネクション開始
   * @Router /create [get]
   */
  @ApiOperation({
    title: 'todo delete',
    description: 'Todoを削除します',
  })
  @Delete(':id')
  public async delete(@Req() req, @Res() res){
    try {
      let list = await this.service.delete(req.params.id);
      res.status(HttpStatus.OK).send(list);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
