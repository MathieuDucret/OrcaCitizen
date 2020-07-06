import { Component } from '@angular/core';

interface News {
  image: string;
  title: string;
  content: string;
  publishDate: string;
  link: string;
}

const NEWSLIST: News[] = [
  {
    image: "assets/images/big/img1.jpg",
    title: "Southern Residents are here !",
    content: "We've just added the Southern Resident orca population to the population list. Go check them !",
    publishDate: "April 2020",
    link:""
  },
  {
    image: "assets/images/big/img1.jpg",
    title: "Orca Citizen",
    content: "We are online ! After several months of efforts working on this app, we are glad to present you : ORCA CITIZEN",
    publishDate: "April 2020",
    link:"../more/news/news"
  }
];

@Component({
  templateUrl: './news.component.html'
})
export class NewsComponent 
{
  get newslist(): News[] {
    return NEWSLIST;
  }
}