import { Component, OnInit } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import Config from './../../constants/config';
import * as utils from "./../../../utils/index";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  loading: boolean;
  constructor(private jsonp: Jsonp) {
    this.loading = true;
  }

  ngOnInit(): void {
    const url = Config.YAHOO + Config.API + utils.getDate() + Config.YAHOO_SUFFIX;
    console.log(Config, this.jsonp, url)

    this.jsonp.request(url).subscribe(res => {
      console.log(res.json())
    })
  }


}
