import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

gunTypeArray = [ 
  {type: 'handgun', rulerSrc: '/assets/images/ruler.png', label:'Handgun' },
  {type: 'assultrifle', rulerSrc: '/assets/images/assultrifleruler.png', label:'Assult Rifle' },
  {type: 'shotgun', rulerSrc: '', label:'Shotgun' },
  {type: 'sniper', rulerSrc: '', label:'Sniper' }
 ]

  constructor(private commService: CommService) { }

  ngOnInit() {
  }
  changeRuler(eventObject: any){
    console.log(eventObject)
    this.commService.gunType.next({
      rulerSrc:eventObject.value
    })
  }

}
 
