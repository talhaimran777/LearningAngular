import { Component, OnInit } from '@angular/core';
import Hero from '../../interfaces/Hero';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  hero: Hero;
  constructor() {
    this.hero = {
      name: 'Musharraf Mobeen',
      id: 22,
    };
  }

  ngOnInit(): void {}
}
