import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddNoteComponent } from '../add-note/add-note.component';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  constructor(private noteService: NoteService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }
  addNote: boolean = false;

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes = data;
        console.log(data);
        
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }
  addButton: boolean = false;
  notes: Note[] = [];

  // onNoteAdded(note: Note) {
  //   this.notes.push(note);
  // }

  searchNote: string = '';


  onSearchNote(noteTitle: string) {
    this.noteService.getNotes().subscribe({
      next: data => {
        if (noteTitle || noteTitle !== '') {
          this.notes = data.filter(note => note.title?.includes(noteTitle));
        }
        else
          this.notes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      disableClose: true,
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: Note) => {
      console.log(result);
      this.noteService.addNotes(result).subscribe({
        next: data => {
          this.notes.push(result);
          this._snackBar.open('Note added successfully', 'success', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          })
          this.notes?.push(result);
          // this.noteService.getNotes().subscribe({
          //   next: data => {
          //     this.notes = data;
          //   }
          // })

        },
        error: err => {
          this._snackBar.open('Failed to Add Add due to Network Error !! Please Try Again Later', 'Failure', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-warn']
          });
          alert(err.message)
        }
      });
    });
  }

}