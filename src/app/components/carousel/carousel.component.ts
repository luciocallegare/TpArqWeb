import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig] 
})
export class CarouselComponent  implements OnInit{
  constructor(private _config:NgbCarouselConfig){
    _config.wrap=true;
    _config.animation= true;
    _config.interval= 2000;
  }

  ngOnInit(): void {
  }

}
