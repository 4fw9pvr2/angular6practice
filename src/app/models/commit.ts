import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class Commit {

    constructor(
        public name:string,
        public created_at:Date,
        public message:string,
        public commitID:string
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class CommitAdapter implements Adapter<Commit> {

  adapt(item: any): Commit {
    return new Commit(
        item.commit.author.name,
        item.commit.author.date,
        item.commit.message,
        item.sha

    );
  }
}