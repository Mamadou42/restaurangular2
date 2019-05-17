import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface'

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) {}
  
  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  ngOnInit() {
    this.burgers = this.qls.getBurger();
    this.pizzas = this.qls.getPizzas();
    this.galettes = this.qls.getGalettes();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burgers', cols: 2, rows: 1, id: 'brg' },
          { title: 'Galettes/Crêpes', cols: 2, rows: 2, id: 'glt' },
          { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' }
        ];
      }

      return [
          { title: 'Burgers', cols: 2, rows: 1, id: 'brg' },
          { title: 'Galettes/Crêpes', cols: 2, rows: 2, id: 'glt' },
          { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' }
      ];
    })
  );
}
