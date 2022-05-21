import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-box-facebook',
  templateUrl: './box-facebook.component.html',
  styleUrls: ['./box-facebook.component.css']
})
export class BoxFacebookComponent implements OnInit {

  social:any={};
  detalles:any=[];
  total:number=0;

  constructor(private dataService:DataService) {
    this.social = this.dataService.getData()
      .subscribe((resp:any)=>{
        this.social=resp.SocialMedia;
        this.total=resp.SocialMedia.TotalFollowers;
        this.social.Media.forEach((element: any) => {          
          console.log(element.details);
          element.details.data.forEach((item:any)=>{
            this.detalles.push(item);
          })       
        });
        console.log(this.detalles)
      })
   }

  ngOnInit(): void {}


}
