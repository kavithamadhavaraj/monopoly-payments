import { Component, OnInit, NgZone } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private dataService: DataService, private ngZone: NgZone) { }
  ngOnInit() {
    this.loginService.getUser().subscribe((userData) => {
      if (userData != null) {
        this.dataService.findUserID(userData).subscribe(profile => {
          if (profile != null) {
            this.ngZone.run(() => {
              this.router.navigate(['mygames', profile['userID']], { replaceUrl: true });
            });
          } else {
            this.ngZone.run(() => {
              this.router.navigate(['profile'], { replaceUrl: true });
            });
          }
        });
      } else {
        this.ngZone.run(() => {
          this.router.navigate(['login'], { replaceUrl: true });
        });
      }
    });
  }
}
