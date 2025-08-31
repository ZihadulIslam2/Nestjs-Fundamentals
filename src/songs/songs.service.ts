import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  createSongs(createSongsDto: any) {
    return createSongsDto;
  }

  findAllSongs() {
    return 'findAllSongs';
  }
}
