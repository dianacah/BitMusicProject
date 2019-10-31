import { Component, OnInit, ViewChild } from "@angular/core";
import { StoreSongsService } from "../../servicios/store-songs/store-songs.service";

@Component({
  selector: "slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  autoplay = false;
  public cancion;

  constructor(private storeSongsService: StoreSongsService) {}

  ngOnInit() {}

  traerCancion() {
    let song = this.storeSongsService.getSong();
    this.cancion = song.file;
    console.log("cancion", this.cancion);
  }
}
