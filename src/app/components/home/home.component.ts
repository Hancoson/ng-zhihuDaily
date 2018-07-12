import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  values: string;
  input: string;
  constructor() {
    this.values = '';
    this.input = '';
  }

  ngOnInit() {
  }
  onKey(event: any) {
    this.values = event.target.value;
  }

}
