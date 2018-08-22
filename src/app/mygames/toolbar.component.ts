import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { SocialUser } from 'angular5-social-login';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public profile_path = '../../assets/images/pictures/0.jpg';
  constructor(private loginService: LoginService) { }
  userData:SocialUser;
  @Input() context = '';
  ngOnInit() {
    this.loginService.getUser().subscribe((userData) => this.userData = userData);
    this.profile_path = this.userData.image;
  }

  addGame() {
    
  }

}
