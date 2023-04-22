import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public obj=""
  public message(value:any)
  {
    this.obj=(value)
  }






  ngOnInit(): void {
  }

}
