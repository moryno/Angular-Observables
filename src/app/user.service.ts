import { Injectable, EventEmitter} from "@angular/core";
import { Subject } from "rxjs"

@Injectable({providedIn: "root"})

export class UserService{
    isactivated =  new Subject<boolean>();
}