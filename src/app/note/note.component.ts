import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    
  }
  @Input()
  notes?:Note[]=[];
}
