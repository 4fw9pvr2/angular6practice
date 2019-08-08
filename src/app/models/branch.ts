import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { BranchDetails } from './branch.details';


export class Branch {

    constructor(
        public name:string,
        public branchID:string,
        public branchDetails:BranchDetails = new BranchDetails(),
        
      ) { }


}

@Injectable({
    providedIn: 'root'
})
export class BranchAdapter implements Adapter<Branch> {

  adapt(item: any): Branch {
    return new Branch(
        item.name,
        item.commit.sha,

    );
  }
}