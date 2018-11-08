import {Pipe} from '@angular/core'
import { Photo } from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription{

    transform(photos: Photo[], descriptionQuery: string){
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){
            return photos.filter(photos=> 
                photos.description.toLowerCase().includes(descriptionQuery)
                );
        }else{
            return photos;
        }
    }
}