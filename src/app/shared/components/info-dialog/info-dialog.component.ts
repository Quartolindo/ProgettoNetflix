import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { SerieTvComponent } from 'src/app/features/serie-tv/serie-tv.component';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent {
  card: any;
  seasons: any[];
  list: any[];
  episode: any[];
  indexSerie: any;
  notAllSeasons:boolean = false;


  serie;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,


  ) {
    // this.list = data.list;
    //  this.card = data.card;
    // this.seasons = data.card.stagioni;
    // this.episode = data.card.listaEpisodi;

    this.serie = data;
    console.log("serie",this.serie)


  }
  onChange(event: { stagioni: any[]; listaEpisodi: any[]; }) {


    console.log("event",event)
    if(event.stagioni){
      console.log("event",event)
      this.notAllSeasons = true;
      this.seasons = event.stagioni;

    }else{
      this.notAllSeasons = false;

      this.seasons = event.listaEpisodi;
      console.log("seasons",this.seasons)
    }
  }





}