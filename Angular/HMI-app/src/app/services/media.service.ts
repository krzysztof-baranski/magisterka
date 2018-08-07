import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  selectSource () {
      console.warn ('media.service selectSource'); 
  } 

  resPlayTrack () {
      console.warn ('media.service resPlayTrack'); 
  } 
}
