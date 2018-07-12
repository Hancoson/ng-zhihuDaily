import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  urlParams: string;
  constructor(private router: ActivatedRoute) {
    this.urlParams = this.router.params['value'].id
  }

  ngOnInit() {
    console.log('hahahahha:', this)
  }

}
