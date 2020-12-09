import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchQuery: string;
  userTweets: any[];
  errorMessage: string;
  usersList: any;

  constructor(
    private twitterService: TwitterService
  ) {}

  ngOnInit(): void {}

  searchUser(): void {
    this.twitterService.getUsers(this.searchQuery).subscribe(
      data => {
        this.usersList = data;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
