import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-gun-image',
  templateUrl: './gun-image.component.html',
  styleUrls: ['./gun-image.component.css']
})

export class GunImageComponent implements OnInit {
  imageSrc='/assets/images/loading.gif';
  
  gunArray = [];
  constructor(private commService: CommService) {
    this.commService.gunInfo.subscribe(msg=>{
      let message: any = msg;
      if(message["checked"]) {
        this.gunArray.push(message.gunInfo);
        } else {
          this.gunArray.forEach((value, index) => {
            if(value.id === message.gunInfo.id) {
              this.gunArray.splice(index, 1);
            };
          });

          console.log(this.gunArray);
        }
    })
   }

  ngOnInit() {
  }

}
