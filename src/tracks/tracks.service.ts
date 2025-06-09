import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { Track } from './entities/track.entity';

@Injectable()
export class TracksService {
  create(createTrackInput: CreateTrackInput) {
    const track = new Track();
    track.exampleField = createTrackInput.exampleField;
    return track;
  }

  findAll() {
    const track = new Track();
    track.exampleField = 1;
    const tracks = [track];
    return tracks;
  }

  findOne(id: number) {
    return `This action returns a #${id} track`;
  }

  update(id: number, updateTrackInput: UpdateTrackInput) {
    return `This action updates a #${id} track`;
  }

  remove(id: number) {
    return `This action removes a #${id} track`;
  }
}
