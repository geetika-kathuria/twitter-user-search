import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { UserProfileDataComponent } from './components/user-profile-data/user-profile-data.component';
import { UserTweetsComponent } from './components/user-tweets/user-tweets.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ShortNumberPipe } from './utils/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    UserProfileCardComponent,
    UserProfileDataComponent,
    UserTweetsComponent,
    UserSearchComponent,
    UsersListComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
