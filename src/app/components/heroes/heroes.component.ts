import { Component, OnInit } from '@angular/core';
import Hero from '../../interfaces/Hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor() {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.addHero();
    this.addHero();
    this.addHero();
    this.addHero();
  }

  addHero = () => {
    this.heroes.push({
      name: 'Talha Imran',
      id: 22,
    });
  };
}
