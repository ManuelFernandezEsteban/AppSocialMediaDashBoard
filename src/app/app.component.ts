import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appSocialMediaDashboard';

  social:any={};
  detalles:any=[];
  total:number=0;
  data={};

  constructor(private dataService: DataService){

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
}
