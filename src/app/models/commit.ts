import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class Commit {

    constructor(
        public email:string,
        public created_at:string,
        public url:string
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class CommitAdapter implements Adapter<Commit> {

  adapt(item: any): Commit {
    return new Commit(
        item.commit.author.email,
        item.commit.author.date,
        item.url,

    );
  }
}