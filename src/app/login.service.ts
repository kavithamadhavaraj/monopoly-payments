import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticate() {
    return { 'status' : true,
             'data' : {
                'username' : 'Kavitha Madhavaraj',
                'email_id' : 'kavitha.madhavaraj@gmail.com',
                'user_id' : 'kavi5712'
              }
            };
  }
}
