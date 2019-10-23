import { Component, OnInit } from "@angular/core";

@Component({
  selector: "content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let main = <HTMLElement>document.body.querySelector(".main");
    let ruta = <HTMLElement>document.body.querySelector("source");
    let reproductor = <HTMLElement>document.body.querySelector("audio");
    let rutas = [
      "../../../assets/audio/Bryant Myers - Gan-Ga (Letra).mp3",
      "../../../assets/audio/Got To Keep On.mp3",
      "../../../assets/audio/Alton Ellis Im Still In Love With You Girl.mp3",
      "../../../assets/audio/Daft Punk - Technologic (Official audio).mp3",
      "../../../assets/audio/Capital Cities - Safe and Sound (lyrics).mp3"
    ];
    let songName = <HTMLElement>document.body.querySelector("#songName");

    main.addEventListener("click", e => {
      ruta.setAttribute("src", rutas[parseInt(e.target.id)]);
      reproductor.setAttribute("autoplay", "true");
      reproductor.load();
      songName.innerHTML = rutas[parseInt(e.target.id)].substr(
        22,
        rutas[parseInt(e.target.id)].length
      );
    });
  }
}
