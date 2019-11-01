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

  constructor(
    private formBuilder: FormBuilder,
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<PopupComponent>,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log("datos", data);
    this.tituloCancion = data.title;
    console.log("title", this.tituloCancion);
  }

  actualizarCancionForm: FormGroup = this.builder.group({
    titulo: [this.tituloCancion, Validators.compose([Validators.required])],
    genre: ["", Validators.required]
  });

  ngOnInit() {}
}
