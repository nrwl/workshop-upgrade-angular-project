import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.css']
})
export class CompanyOverviewComponent implements OnInit {
  currentTeamName;
  _companies = [
    {id: 1, name: 'ABC Corp', group: 'tier 1'},
    {id: 2, name: 'Priority Gems', group: 'tier 1'},
    {id: 3, name: 'Disco Distro', group: 'tier 2'},
    {id: 4, name: 'Nestabout', group: 'tier 3'},
    {id: 5, name: 'Water Parcel LLC', group: 'tier 1'}
  ];
  companies = this._companies;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.currentTeamName = this.teamService.currentTeam();
  }

  onFilterChanged(filter) {
    this.companies = this._companies.filter(function (t) {
      return filter === '' || t.group === filter;
    });
  }
}
