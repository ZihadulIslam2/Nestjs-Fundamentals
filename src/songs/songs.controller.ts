import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongsDTO } from './dto/create-songs-dto';
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  createSongs(@Body() createSongsDto: CreateSongsDTO) {
    return this.songsService.createSongs(createSongsDto);
  }

  @Get()
  findAllSongs() {
    try {
      return this.songsService.findAllSongs();
    } catch (error) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

@Controller('songs')
  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }))
    id: number,
  ) {
    return `This action returns a #${id} song`;
  }
