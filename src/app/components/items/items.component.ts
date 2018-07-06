import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElMessageService } from 'element-angular'
import Config from './../../constants/config';
import * as utils from "./../../../utils/index";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  loading: boolean;
  list: Array<any>;
  time: string;
  constructor(
    private http: HttpClient,
    private message: ElMessageService
  ) {
    this.loading = true;
    this.list = [];
    this.time = ''
  }

  ngOnInit(): void {
    const that = this;
    const url = Config.YAHOO + Config.API + utils.getDate() + Config.YAHOO_SUFFIX;

    this.http.jsonp(url, 'callback').subscribe(
      res => {
        this.loading = false;
        const data = res['query'].results
        that.list = data.json.stories
        that.time = res['query'].created
      },
      err => {
        console.log(err)
        that.message['error']('这是一条消息提示:' + err.message)
      })
  }


}
