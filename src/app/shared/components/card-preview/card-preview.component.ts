import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})

export class CardPreviewComponent {
  @Input() list: any;

  @Input() searchText: string = "";
  listFavorite: any;
  favorite: boolean = false;

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  addPreferiti(element) {
    this.http.post('http://localhost:3000/preferiti', element)
      .subscribe(result => {
        this.listFavorite.push(result)
      })
  }

  deletePreferiti(element) {
    this.http.delete(`http://localhost:3000/preferiti/${element.id}`)
      .subscribe(() => {
        const index = this.listFavorite.findIndex(e => e.id === element.id);
        this.listFavorite.splice(index, 1);
      })



  }
  openDialog(card: any) {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      height: '500px',
      width: '600px',
      data: card

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
  




}
