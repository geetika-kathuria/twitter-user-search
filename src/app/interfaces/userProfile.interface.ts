export class TwitterUserProfile {
    location: string;
    screenName: string;
    url: string;
    followersCount: string;

    constructor(twitterUserProfile: TwitterUserProfile) {
      this.screenName = twitterUserProfile.screenName;
      this.location = twitterUserProfile.location;
      this.url = twitterUserProfile.url;
      this.followersCount = twitterUserProfile.followersCount;
  }
}
