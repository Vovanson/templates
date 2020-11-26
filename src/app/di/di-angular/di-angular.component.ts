import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../app.config';
import { UserService } from '../user.service';

@Component({
  selector: 'app-di-angular',
  templateUrl: './di-angular.component.html',
  styleUrls: ['./di-angular.component.scss']
})
export class DiAngularComponent  {
  title: string;

  constructor( 
    @Inject(APP_CONFIG) config: AppConfig,
  private userService: UserService
  ) {
  this.title = config.title;    
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser()         { this.userService.getNewUser(); }
  get user()         { return this.userService.user; }

  get userInfo()     {
    return `Current user, ${this.user.name}, is ` +
           `${this.isAuthorized ? '' : 'not'} authorized. `;
  }


}
