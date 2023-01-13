import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  note: Note[]=[];
  
  @Output()
  searchNoteChanged:EventEmitter<string>=new EventEmitter<string>();

  noteTitle:string='';

  searchForNotes(){
    this.searchNoteChanged.emit(this.noteTitle);
  }

}
