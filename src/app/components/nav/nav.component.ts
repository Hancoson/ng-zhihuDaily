import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routeInde: Number;

  constructor(private router: Router) {
    this.router.events
      .subscribe((event: NavigationStart) => {
        switch (event.url) {
          case '/':
            this.routeInde = 1
            break;
          case '/items':
            this.routeInde = 2
            break;
          default:
            this.routeInde = 2
            break;
        }
      });
  }

  ngOnInit() {
    //console.log('>>>>>>>>>>>>>>>>>>', this.router.url);
  }



  handle(index: string): void {
    console.log('>>>>>>', index)
  }

}
