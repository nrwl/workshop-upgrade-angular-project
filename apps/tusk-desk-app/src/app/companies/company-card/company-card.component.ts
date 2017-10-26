import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit, OnChanges {
  @Input() tuskCompany;
  @Input() notifyList;
  @Output() onGroupSelect = new EventEmitter();
  teamAssignedToCompany;

  constructor(private teamService: TeamService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.teamAssignedToCompany = this.teamService.teamAssignedToCompany(this.tuskCompany.name);
  }

  onNotifyToggle() {
    if (this.notifyList.indexOf(this.tuskCompany.id) >= 0) {
      this.notifyList.splice(this.notifyList.indexOf(this.tuskCompany.id), 1);
    } else {
      this.notifyList.push(this.tuskCompany.id);
    }
  }

  onGroupSelected(group) {
    this.onGroupSelect.emit(group);
  }
}
