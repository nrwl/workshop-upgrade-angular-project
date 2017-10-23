import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  _user = {
    name: 'Samantha',
    companies: ['ABC Corp']
  };

  constructor() {}

  currentUser() {
    return this._user.name;
  }

  userAssignedToCompany(company) {
    return this._user.companies.indexOf(company) >= 0;
  }
}
