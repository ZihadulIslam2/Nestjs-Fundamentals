import { IsArray, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongsDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  readonly artist: string[];
  @IsNotEmpty()
  readonly releseDate: string;
  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: number;
}
