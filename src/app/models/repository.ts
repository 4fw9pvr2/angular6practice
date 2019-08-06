import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class Repository {

    constructor(
        public name:string,
        public created_at:string,        
        public ownerName:string,
        public avatarUrl:string
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class RepositoryAdapter implements Adapter<Repository> {

  adapt(item: any): Repository {
    return new Repository(
        item.name,
        item.created_at,
        item.owner.login,
        item.owner.avatar_url
    );
  }
}
