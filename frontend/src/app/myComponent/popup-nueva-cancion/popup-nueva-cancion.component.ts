import { Component, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-popup-nueva-cancion",
  templateUrl: "./popup-nueva-cancion.component.html",
  styleUrls: ["./popup-nueva-cancion.component.css"]
})
export class PopupNuevaCancionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupNuevaCancionComponent>
  ) {}

  nuevaCancionForm: FormGroup = this.builder.group({
    title: ["", Validators.required],
    genre: ["", Validators.required],
    artist: ["", Validators.required],
    album: ["", Validators.required],
    duration: ["", Validators.required],
    file: ["", Validators.required],
    image: ["", Validators.required]
  });

  close() {
    this.dialogRef.close(this.nuevaCancionForm);
  }
  ngOnInit() {}
}
