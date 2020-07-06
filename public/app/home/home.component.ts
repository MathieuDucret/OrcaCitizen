import { Component, AfterViewInit } from '@angular/core';
import { Featured } from '../services/getFeatured/featured';
import { HomeService } from '../services/getFeatured/featured.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styles: [`.form-control { width: 300px; }`]
})

export class HomeComponent implements AfterViewInit {
  constructor(private homeService: HomeService , private actRoute: ActivatedRoute){}

 get homelist(): Featured[] {
  return this.homeService.getHome();
}

  ngAfterViewInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.homelist.indexOf[0] = params.getAll;
    });
  }
}
