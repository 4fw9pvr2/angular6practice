import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class BranchDetails {

    constructor(
        public name:string = "",
        public created_at:Date = new Date(), 
        public message:string = "",
        public index:number = null
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class BranchDetailsAdapter implements Adapter<BranchDetails> {

  adapt(item: any): BranchDetails {
    return new BranchDetails(
        item.commit.author.name,
        item.commit.author.date,
        item.commit.message,
        
    );
  }
}