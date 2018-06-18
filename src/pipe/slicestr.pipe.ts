/**
 * @Author: Guoxing.han
 * @Date: 2018-06-18 17:06:57
 * @version 0.0.1
 * @description 截取字符串
 */
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'SliceStr'
})

export class SliceStrPipe implements PipeTransform {
  /**
    * 截图字符串字符
    * option(start,end,[+str])
    */
  // start和end及extraStr后面都跟随了一个问好，代表这个为可选参数而不是必选的
  // 功能就是给出截图的启示，然后是否拼接你自定义的字符串(...)等
  transform(value: string, start?: number, end?: number, extraStr?: string): string {
    // console.log( value );
    if (value) {
      if (typeof (start) === 'number' && typeof (end) === 'number') {
        if (value.length > end && extraStr && typeof (extraStr) === 'string') {
          // console.log( start, end, extraStr );
          return value.slice(start, end) + extraStr.toString();
        } else {
          return value.slice(start, end);
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }
}
