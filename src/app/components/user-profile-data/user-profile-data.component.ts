import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-data',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.scss']
})
export class UserProfileDataComponent implements OnInit {

  @Input() twitterProfile: any;

  constructor() { }

  ngOnInit(): void {
  }

}
