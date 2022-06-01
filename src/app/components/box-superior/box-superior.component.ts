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
  public body = document.querySelector("body");
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
      this.body?.classList.remove('colorBodyDark');
      this.body?.classList.add('colorBodyLight');
    }else{
      this.mode='Dark'
      this.raiz?.classList.remove('Light');
      this.raiz?.classList.add('Dark');
      this.body?.classList.remove('colorBodyLight');
      this.body?.classList.add('colorBodyDark');
    }   

    
   
    
  }
}
