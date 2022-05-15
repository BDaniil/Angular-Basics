import { Component, OnInit, Input } from '@angular/core';
import initialBook from 'src/app/helper/initial';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() books = [initialBook];

  flag = true;
  displayMore(){
    this.flag = !this.flag
  }
}
