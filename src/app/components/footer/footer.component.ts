import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">@{{name}}</div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name = 'Haley';
  constructor() { }
  ngOnInit() {

  }

}
