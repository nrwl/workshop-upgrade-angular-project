import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  _team = {
    name: 'Sea Unicorns',
    companies: ['ABC Corp', 'Disco Distro']
  };

  constructor() {}

  currentTeam() {
    return this._team.name;
  }

  teamAssignedToCompany(company) {
    return this._team.companies.indexOf(company) >= 0;
  }
}
