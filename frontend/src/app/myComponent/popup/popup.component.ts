import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"]
})
export class PopupComponent implements OnInit {
  public tituloCancion: string;
  public album: string;
  public genre: string;
  public artista: string;

  constructor(
    private formBuilder: FormBuilder,
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupComponent>,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.tituloCancion = data.title;
    this.album = data.album;
    this.genre = data.genre;
    this.artista = data.artist;
  }

  actualizarCancionForm: FormGroup = this.builder.group({
    title: ["", Validators.compose([Validators.required])],
    genre: ["", Validators.required],
    artist: ["", Validators.required],
    album: ["", Validators.required]
  });

  close() {
    this.dialogRef.close(this.actualizarCancionForm);
  }
  ngOnInit() {}
}
