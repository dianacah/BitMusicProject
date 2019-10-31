import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StoreSongsService {
  private song: any = {};

  constructor() {}

  public setSong(file) {
    this.song = {
      file
    };
    return this.song;
  }

  public getSong() {
    return this.song;
  }
}
