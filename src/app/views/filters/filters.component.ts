import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor() {}
  yearList: Array<number> = [];
  minVal: number = 2006;
  maxVal: number = 2020;
  ngOnInit(): void {
    this.minMaxSequence(this.minVal, this.maxVal);
  }
  minMaxSequence(min: number, max: number) {
    while (min <= max) {
      this.yearList.push(min);
      min++;
    }
  }
}
