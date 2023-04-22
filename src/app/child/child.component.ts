import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  public obj:any=""

  public Acceptdata(value:any)
  {
    this.obj="From child com.. "+value
  }

@Output()public xo=new EventEmitter()

public message()
{
  this.xo.emit(this.obj)
}

}
