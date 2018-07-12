import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ElMessageService } from 'element-angular'
import Config from './../../constants/config';
import * as utils from "./../../../utils/index";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  urlParams: string;
  loading: boolean;
  htmls: string;
  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private message: ElMessageService
  ) {
    this.loading = true;
    this.htmls = '';
    this.urlParams = this.router.params['value'].id
  }

  ngOnInit() {
    const that = this;
    const url = Config.YAHOO + Config.NEWS + that.urlParams + Config.YAHOO_SUFFIX;

    this.http.jsonp(url, 'callback').subscribe(
      res => {
        this.loading = false;
        this.htmls = res['query'].results.json.body
      },
      err => {
        console.log(err)
        that.message['error']('这是一条消息提示:' + err.message)
      })
  }

}
