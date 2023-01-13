import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

}
