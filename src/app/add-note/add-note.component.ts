import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteViewComponent } from '../note-view/note-view.component';
import { FormBuilder, FormControl, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService:NoteService, private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<NoteViewComponent>,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 
  note:Note={};
}
