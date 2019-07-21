import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  hero: Hero = { 
    id: 1,
    name: 'Kannan K'
  }
  heroes: Hero[];
  
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
        .subscribe( heroes => this.heroes = heroes );
  }

}
