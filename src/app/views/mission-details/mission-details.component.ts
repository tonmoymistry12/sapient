import { Component, OnInit } from '@angular/core';
import { MissionDetailsService } from './mission-details.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
})
export class MissionDetailsComponent implements OnInit {
  constructor(private missionService: MissionDetailsService) {}
  missionList: Array<missionDetails> = [];
  ngOnInit(): void {
    this.setAllMissionDetails();
  }
  setAllMissionDetails() {
    this.missionService.getAllMissionDetails().subscribe((res) => {
      res.forEach((item) => {
        this.missionList.push({
          missionName: item.mission_name,
          missionId: item.mission_id.length
            ? item.mission_id
            : ['Not Available'],
          launchYear: item.launch_year,
          launchStatus: item.launch_success,
          landingStatus: item.launch_landing ?? 'Not Available',
          imageUrl: item.links.mission_patch_small,
          flightNumber: '#' + item.flight_number,
        });
      });

      console.log(this.missionList);
    });
  }
}
export interface missionDetails {
  missionName: string;
  missionId: Array<[]>;
  launchYear: Number;
  launchStatus: boolean;
  landingStatus: boolean;
  imageUrl: string;
  flightNumber: string;
}
