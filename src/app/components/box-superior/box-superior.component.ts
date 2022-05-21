import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-box-superior',
  templateUrl: './box-superior.component.html',
  styleUrls: ['./box-superior.component.css']
})
export class BoxSuperiorComponent implements OnInit {

  @Input()total:number=0;

  mode:string='Dark';
  public raiz = document.querySelector("#raiz");
  swCheked:boolean=true;
  cssUrl:string='';

  constructor() { 
    this.cssUrl='./assets/style.css';
  }

  ngOnInit(): void {
  }

  change(value:boolean){
  
    
    if (value) {
      this.mode='Light';
      this.raiz?.classList.remove('Dark');
      this.raiz?.classList.add('Light');
    }else{
      this.mode='Dark'
      this.raiz?.classList.remove('Light');
      this.raiz?.classList.add('Dark');
    }   

    
   
    
  }
}
