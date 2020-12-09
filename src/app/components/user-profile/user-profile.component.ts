import { Component, OnInit, Input } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  twitterProfile: any;
  userTweets: any;
  user: string;
  constructor(private twitterService: TwitterService,  private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.params.username;
  }

  ngOnInit(): void {
    this.getUser();
    this.getUserTweets();
  }

  getUser(): void {
    this.twitterService.getUser(this.user).subscribe(
      data => {
        this.twitterProfile = data;
      },
      error => {
        this.twitterProfile = error;
      }
    );
  }

  getUserTweets(): void {
    this.twitterService.getUserTweets(this.user).subscribe(
      data => {
        this.userTweets = data;
      },
      error => {
        this.userTweets = error;
      }
    );
  }
}
