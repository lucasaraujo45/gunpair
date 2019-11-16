import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-gun-filter',
  templateUrl: './gun-filter.component.html',
  styleUrls: ['./gun-filter.component.css']
})
export class GunFilterComponent implements OnInit {

czArray = [ 
  { id: '1', label: 'CZ 97 B', imgSrc: '/assets/images/guns/cz/211_cz97_b.png', checked: false, zindex: 789},
  { id: '2', label: 'CZ 75 SP-01', imgSrc: '/assets/images/guns/cz/207_cz75_sp01.png', checked: false, zindex: 793},
  { id: '3', label: 'CZ 75 B', imgSrc: '/assets/images/guns/cz/206_cz75b.png', checked: false, zindex: 794 },
  { id: '4', label: 'CZ 75 Compact', imgSrc: '/assets/images/guns/cz/184_cz75_compact.png', checked: false, zindex: 816 },
  { id: '5', label: 'CZ 2075 RAMI', imgSrc: '/assets/images/guns/cz/165_cz_2075_rami.png', checked: false, zindex: 835 }  
]


glockArray = [ 
  { id: '6', label: 'G17', imgSrc: '/assets/images/guns/glock/204_g17.png', checked: false, zindex: 700 },
  { id: '7', label: 'G17 Gen4', imgSrc: '/assets/images/guns/glock/202_g17_gen4.png', checked: false, zindex: 700 },
  { id: '8', label: 'Gen19', imgSrc: '/assets/images/guns/glock/187_g19.png', checked: false, zindex: 700 },
  { id: '9', label: 'G29 Gen4', imgSrc: '/assets/images/guns/glock/175_g29_gen4.png', checked: false, zindex: 700 },
  { id: '10', label: 'G26', imgSrc: '/assets/images/guns/glock/165_g26.png', checked: false, zindex: 700 },
  { id: '11', label: 'G43', imgSrc: '/assets/images/guns/glock/159_g43.png', checked: false, zindex: 700 }   
]

hecklerArray = [ 
  { id: '12', label: 'VP9', imgSrc: '/assets/images/guns/hk/187_vp9.png', checked: false, zindex: 700 },
  { id: '13', label: 'P2000', imgSrc: '/assets/images/guns/hk/174_p2000.png', checked: false, zindex: 700 },
  { id: '14', label: 'P30SK', imgSrc: '/assets/images/guns/hk/163_p30sk.png', checked: false, zindex: 700 },
  { id: '15', label: 'P200SK', imgSrc: '/assets/images/guns/hk/162_p2000sk.png', checked: false, zindex: 700 },
]

kahrArray = [ 
  { id: '16', label: 'CW9', imgSrc: '/assets/images/guns/kahr/150_cw9.png', checked: false, zindex: 700 },
  { id: '17', label: 'PM9', imgSrc: '/assets/images/guns/kahr/138_pm9.png', checked: false, zindex: 700 },
  { id: '18', label: 'CW380', imgSrc: '/assets/images/guns/kahr/126_cw380.png', checked: false, zindex: 700 },
  { id: '19', label: 'P380', imgSrc: '/assets/images/guns/kahr/124_p380.png', checked: false, zindex: 700 }
]

rugerArray = [ 
  { id: '20', label: 'SR45', imgSrc: '/assets/images/guns/ruger/203_sr45.png', checked: false, zindex: 700 },
  { id: '21', label: '9E', imgSrc: '/assets/images/guns/ruger/191_9e.png', checked: false, zindex: 700 },
  { id: '22', label: 'SR40', imgSrc: '/assets/images/guns/ruger/191_sr40.png', checked: false, zindex: 700 },
  { id: '23', label: 'SR9', imgSrc: '/assets/images/guns/ruger/191_sr9.png', checked: false, zindex: 700 },
  { id: '24', label: 'SR40c', imgSrc: '/assets/images/guns/ruger/174_sr40c.png', checked: false, zindex: 700 },
  { id: '25', label: 'SR9c', imgSrc: '/assets/images/guns/ruger/174_sr9c.png', checked: false, zindex: 700 },
  { id: '26', label: 'LC9s', imgSrc: '/assets/images/guns/ruger/152_lc9s.png', checked: false, zindex: 700 },
  { id: '27', label: 'LCP II', imgSrc: '/assets/images/guns/ruger/131_lcpii.png', checked: false, zindex: 700 }
]

sigArray = [ 
  { id: '28', label: 'P320 Fullsize', imgSrc: '/assets/images/guns/sig/203_p320', checked: false, zindex: 700 },
  { id: '29', label: 'P220 Fullsize', imgSrc: '/assets/images/guns/sig/196_p220_fullsize.png', checked: false, zindex: 700 },
  { id: '30', label: 'P226 Fullsize', imgSrc: '/assets/images/guns/sig/196_p226_fullsize.png', checked: false, zindex: 700 },
  { id: '31', label: 'P227 Fullsize', imgSrc: '/assets/images/guns/sig/196_p227_fullsize.png', checked: false, zindex: 700 },
  { id: '31', label: 'P250 Compact', imgSrc: '/assets/images/guns/sig/183_p250_compact.png', checked: false, zindex: 700 },
  { id: '32', label: 'P320 Carry', imgSrc: '/assets/images/guns/sig/183_p320_carry.png', checked: false, zindex: 700 },
  { id: '33', label: 'P320 Compact', imgSrc: '/assets/images/guns/sig/183_p320_compact.png', checked: false, zindex: 700 },
  { id: '34', label: 'P229 Compact', imgSrc: '/assets/images/guns/sig/180_p229_compact.png', checked: false, zindex: 700 },
  { id: '35', label: 'P225 Compact', imgSrc: '/assets/images/guns/sig/175_p225_compact.png', checked: false, zindex: 700 },
  { id: '36', label: 'P320 Subcompact', imgSrc: '/assets/images/guns/sig/170_p320_subcompact.png', checked: false, zindex: 700 },
  { id: '37', label: 'P239 Compact', imgSrc: '/assets/images/guns/sig/168_p239_compact.png', checked: false, zindex: 700 },
  { id: '38', label: 'P938', imgSrc: '/assets/images/guns/sig/150_p938.png', checked: false, zindex: 700 },
  { id: '39', label: 'P290RS', imgSrc: '/assets/images/guns/sig/141_p290rs.png', checked: false, zindex: 700 },
  { id: '40', label: 'P238', imgSrc: '/assets/images/guns/sig/140_p238.png', checked: false, zindex: 700 }
]

springfieldArray = [ 
  { id: '41', label: 'XD 5" 9mm', imgSrc: '/assets/images/guns/springfield/211_xd_5_9.png', checked: false, zindex: 700 },
  { id: '42', label: 'XD MOD.2 5" 9mm', imgSrc: '/assets/images/guns/springfield/211_xd_mod2_5_9.png', checked: false, zindex: 700 },
  { id: '43', label: 'XD(M) 4.5" 9mm', imgSrc: '/assets/images/guns/springfield/193_xdm_4_9.png', checked: false, zindex: 700 },
  { id: '44', label: 'XD 4" 9mm', imgSrc: '/assets/images/guns/springfield/186_xd_4_9.png', checked: false, zindex: 700 },
  { id: '45', label: 'XD MOD.2 4" 9mm', imgSrc: '/assets/images/guns/springfield/186_xd_mod2_4_9.png', checked: false, zindex: 700 },
  { id: '46', label: 'XD-S 4" 9mm', imgSrc: '/assets/images/guns/springfield/178_xds_4_9.png', checked: false, zindex: 700 },
  { id: '47', label: 'XD(M) 3.8" 9mm', imgSrc: '/assets/images/guns/springfield/173_xdm_3_full_9.png', checked: false, zindex: 700 },
  { id: '48', label: 'XD(M) 3.8" Compact 9mm', imgSrc: '/assets/images/guns/springfield/172_xdm_3_9.png', checked: false, zindex: 700 },
  { id: '49', label: 'XD-S 3.3" 9mm', imgSrc: '/assets/images/guns/springfield/160_xds_3_9.png', checked: false, zindex: 700 },
  { id: '50', label: 'XD 3" 9mm', imgSrc: '/assets/images/guns/springfield/159_xd_3_9.png', checked: false, zindex: 700 },
  { id: '51', label: 'XD MOD.2 3" 9mm ', imgSrc: '/assets/images/guns/springfield/159_xd_mod2_3_9.png', checked: false, zindex: 700 }
]

smithArray = [ 
  { id: '52', label: 'M&P45', imgSrc: '/assets/images/guns/sw/203_m&amp;p45.png', checked: false, zindex: 700 },
  { id: '53', label: 'M&P45 M2.0', imgSrc: '/assets/images/guns/sw/200_m&amp;p45_m2.0.png', checked: false, zindex: 700 },
  { id: '54', label: 'M&P9', imgSrc: '/assets/images/guns/sw/193_m&amp;p9.png', checked: false, zindex: 700 },
  { id: '55', label: 'M&P9 M2.0', imgSrc: '/assets/images/guns/sw/188_m&amp;p9_m2.0.png', checked: false, zindex: 700 },
  { id: '56', label: 'M&P9c', imgSrc: '/assets/images/guns/sw/170_m&amp;p9c.png', checked: false, zindex: 700 },
  { id: '57', label: 'M&P9 Shield', imgSrc: '/assets/images/guns/sw/155_m&amp;p9_shield.png', checked: false, zindex: 700 },
  { id: '58', label: 'M&P Bodyguard', imgSrc: '/assets/images/guns/sw/135_m&amp;p_bodyguard.png', checked: false, zindex: 700 }
]

waltherArray = [ 
  { id: '59', label: 'Creed', imgSrc: '/assets/images/guns/walther/186_creed.png', checked: false, zindex: 700 },
  { id: '60', label: 'P99 AS 9mm', imgSrc: '/assets/images/guns/walther/180_p99_as_9.png', checked: false, zindex: 700 },
  { id: '61', label: 'PPQ M2 9mm', imgSrc: '/assets/images/guns/walther/180_ppq_m2_9.png', checked: false, zindex: 700 },
  { id: '62', label: 'PPS M2 9mm', imgSrc: '/assets/images/guns/walther/160_pps_m2_9.png', checked: false, zindex: 700 },
  { id: '63', label: 'PPK/S', imgSrc: '/assets/images/guns/walther/156_ppks.png', checked: false, zindex: 700 },
  { id: '64', label: 'PPK', imgSrc: '/assets/images/guns/walther/155_ppk.png', checked: false, zindex: 700 }
]
  constructor(private commService: CommService) { }

  ngOnInit() {
  }
  
  toggleGunImage(eventObject: any){
    this.commService.gunInfo.next({
      gunInfo: eventObject.option.value,
      checked: eventObject.option.selected
    });
  }
}
