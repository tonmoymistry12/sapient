import { Component, OnInit } from '@angular/core';
import { MissionDetailsService } from '../mission-details/mission-details.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor(private missionService: MissionDetailsService) {}
  yearList: Array<number> = [];
  minVal: number = 2006;
  maxVal: number = 2020;
  yearParams = '';
  launchParams = '';
  landParams = '';
  islaunchTrue = false;
  isLaunchFalse = false;
  islandTrue = false;
  isLandFalse = false;
  selectedIndex: number = null;
  ngOnInit(): void {
    this.minMaxSequence(this.minVal, this.maxVal);
  }
  minMaxSequence(min: number, max: number) {
    while (min <= max) {
      this.yearList.push(min);
      min++;
    }
  }

  applyFilterForLaunch(val) {
    if (val) {
      this.launchParams = '&launch_success=true';
      this.islaunchTrue = true;
      this.isLaunchFalse = false;
    } else {
      this.launchParams = '';
      this.isLaunchFalse = true;
      this.islaunchTrue = false;
    }
    this.filterDetails();
  }
  applyFilterForLand(val) {
    if (val) {
      this.landParams = '&land_success=true';
      this.islandTrue = true;
      this.isLandFalse = false;
    } else {
      this.landParams = '';
      this.islandTrue = false;
      this.isLandFalse = true;
    }
    this.filterDetails();
  }
  applyFilterForYear(year, index) {
    this.yearParams = '&launch_year=' + year;
    this.selectedIndex = index;
    this.filterDetails();
  }
  filterDetails() {
    const params = this.launchParams + this.landParams + this.yearParams;
    this.missionService.serachDetails(params).subscribe((res) => {
      this.missionService.setFilterdDetails(res);
    });
  }
}
