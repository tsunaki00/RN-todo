import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

/**
 * AuthDto
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/13  新規作成
 *
 */
export class TodoCreateDto {
  @ApiModelProperty({ required: true, description: 'タイトル' })
  readonly title: string;
  @ApiModelProperty({ required: true, description: '本文' })
  readonly body: string;
}
export class TodoUpdateDto {
  @ApiModelProperty({ required: true, description: 'id' })
  readonly id: string;
  @ApiModelProperty({ required: true, description: 'タイトル' })
  readonly title: string;
  @ApiModelProperty({ required: true, description: '本文' })
  readonly body: string;
}

