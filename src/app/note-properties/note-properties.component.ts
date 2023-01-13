import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';
import { NoteService } from '../service/note.service';
import { RouterServiceService } from '../service/router-service.service';

@Component({
  selector: 'app-note-properties',
  templateUrl: './note-properties.component.html',
  styleUrls: ['./note-properties.component.css']
})
export class NotePropertiesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private noteService: NoteService,
    private routeService: RouterServiceService) { }
  note: Note = { content: "", category: "" 
};
  editStatus: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe(data => {
        this.note = data;
        this.editStatus = false;
      })
    });
  }
  editNote() {
    this.noteService.editNote(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.routeService.toHome();
    })
  }
  deleteNote(){
    this.noteService.deleteNote(this.note?.id).subscribe(data => {
      
      this.routeService.toHome();
    })
  }
  canDeactivate(){
    if(!this.editStatus) {
      let response = confirm("Changes are not saved. Do you still want to Leave?")
      return response;
    }
    else
      return true;
  }

}
