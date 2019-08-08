import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class Repository {

    constructor(
        public name:string,       
        public ownerName:string,
        public avatarUrl:string,
        public created_at:Date = new Date(), 
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class RepositoryAdapter implements Adapter<Repository> {

  adapt(item: any): Repository {
    return new Repository(
        item.name,
        item.owner.login,
        item.owner.avatar_url,
        item.created_at,
    );
  }
}
