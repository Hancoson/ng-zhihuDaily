/**
 * @Author: Guoxing.han
 * @Date: 2018-07-12 13:41:14
 * @version 0.0.1
 * @description 添加样式
 */

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})

export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }

  transform(value) {
    console.log(value)
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
