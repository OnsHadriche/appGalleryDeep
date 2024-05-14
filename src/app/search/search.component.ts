import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalSearchComponent } from '../modal-search/modal-search.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModalSearchComponent, {
      width: '600px',

      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
