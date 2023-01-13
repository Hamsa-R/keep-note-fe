import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  URL: string ="http://localhost:3000/notes"
  getNotes():Observable<Array<Note>>{
    return this.http.get<Array<Note>>(this.URL);
  }
  addNotes(note:Note){
    console.log(note);
    
    return this.http.post<Note>(this.URL,note);
  }
  editNote(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.URL}/${id}`,note);
  }
  getNote(id?: number) : Observable<Note> {
    return this.http.get<Note>(`${this.URL}/${id}`);
  }
  addNote(note: Note) {
    return this.http.post<Note>(this.URL, note);
  }
  deleteNote(id?: number) : Observable<Note>  {
    return this.http.delete<Note>(`${this.URL}/${id}`);
  }
}
