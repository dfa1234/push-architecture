import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {AlbumService} from './album.service';
import {AbstractStoreService} from './abstract-store.service';

export const jsonPlaceHolderUrl = 'https://jsonplaceholder.typicode.com';
export const userUrl = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractStoreService<User[]> {

  constructor(protected http: HttpClient, private albumService: AlbumService) {
    super(http);
    this.url = `${jsonPlaceHolderUrl}/${userUrl}`;
    this.load();
  }

  choosePhoto(userId: number) {
    this.albumService.load(userId);
  }


}
