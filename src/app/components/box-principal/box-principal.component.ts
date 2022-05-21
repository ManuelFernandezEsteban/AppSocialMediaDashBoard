import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-principal',
  templateUrl: './box-principal.component.html',
  styleUrls: ['./box-principal.component.css']
})
export class BoxPrincipalComponent implements OnInit {

  @Input()item:any;

  constructor() { }

  ngOnInit(): void {
  }
  color(Number:number){
    if(Number>0){
      return "green";      
    }
    else{
      return "red";
    }
  }
}
