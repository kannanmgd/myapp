import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.arrayMethods();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  arrayMethods(): void {
    const items = [
      { id: 5001, type: 'None' },
      { id: 5002, type: 'Glazed' },
      { id: 5005, type: 'Sugar' },
      { id: 5007, type: 'Powdered Sugar' },
      { id: 5006, type: 'Chocolate with Sprinkles' },
      { id: 5003, type: 'Chocolate' },
      { id: 5004, type: 'Maple' }
    ];

    // Filter Method
    const filteredItems = items.filter((item) => {
      return item.id >= 5002;
    });
    console.log(items);
    console.log(filteredItems);

    // Map
    const arrayMapItems = items.map((items) => {
      return items.type;
    });
    console.log(arrayMapItems);

    // find
    const arrayFind = items.find((item) => {
      return item.id === 5003;
    });
    console.log(arrayFind);

    // ForEach
    const arrayForEach = items.forEach((item) => {
      console.log(item.type);
    });

    console.log(items);
    function sortingArray(a, b) {
      return a.id - b.id;
    }
    items.sort(sortingArray);
    console.log(items);

    let nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
    let evens = [];
    let odds = [];

    function getOddEvens(nums) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 1) {
          evens.push(nums[i]);
        } else {
          odds.push(nums[i]);
        }
      }
    }

    getOddEvens(nums);
    console.log(evens);
    console.log(odds);


  }


}
