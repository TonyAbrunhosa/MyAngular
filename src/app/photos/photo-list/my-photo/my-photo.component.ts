import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhotoComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  @Input() photos: Photo[] = [];
  rows:any[]=[];
  constructor() { }

  groupColumns(photos: Photo[]){
    const newRows =[];

    for(let index = 0;index < photos.length;index += 3){
      newRows.push(photos.slice(index,index + 3))
    }
    return newRows;
  }

}
