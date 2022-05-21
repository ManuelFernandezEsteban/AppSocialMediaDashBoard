import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-data',
  templateUrl: './box-data.component.html',
  styleUrls: ['./box-data.component.css']
})
export class BoxDataComponent implements OnInit {
  @Input()datosDetalle:any;
  @Input()datosMedia:any;
  @Input()pos:number=0;


  constructor() {
    
   }

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
