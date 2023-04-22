import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  
{
@Input()public box="           nbm"

@Output()public ab = new EventEmitter()

public sendmessage()
{
  this.ab.emit("Hello From Child Component ")
}

}
