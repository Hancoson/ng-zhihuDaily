# angular 实现的 知乎日报 App

A angular zhihuDaily app!


## 使用

### Start

```sh
npm i / yarn
npm start
```

### Build

```sh
npm run build / npm run prod
```

### 添加功能

```sh
ng g cl my-new-class #新建 class
ng g c my-new-component #新建组件
ng g d my-new-directive #新建指令
ng g e my-new-enum #新建枚举
ng g m my-new-module #新建模块
ng g p my-new-pipe #新建管道
ng g s my-new-service #新建服务
ng g m route --routing #新建 route
```

> 说明：
> - g - generate
> - cl - class
> - c - component
> - d - directive
> - e - enum
> - m - module
> - p - pipe
> - s - service

## 备注

### 不生成单元测试文件

```sh
 --spec=falses
```

### 设置默认样式

> 新建项目：

```sh
ng new {project-name} --style=scss  
```

> 在已有项目中设置：

手动修改angular.json文件，添加如下内容即可：

```json
"schematics": {  
  "@schematics/angular:component": {  
       "styleext": "scss"  
   }  
 },
```

### 自定义管道

- 新建管道文件（实现一个切割字符串）

  ```ts
  import { Pipe, PipeTransform } from '@angular/core'

  @Pipe({
    name: 'SliceStr'
  })

  export class SliceStrPipe implements PipeTransform {
    // start和end及extraStr后面都跟随了一个问好，代表这个为可选参数而不是必选的
    // 功能就是给出截图的启示，然后是否拼接你自定义的字符串(...)等
    transform(value: string, start?: number, end?: number, extraStr?: string): string {
      if (value) {
        if (typeof (start) === 'number' && typeof (end) === 'number') {
          if (value.length > end && extraStr && typeof (extraStr) === 'string') {
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
  ```

- 引入

  ```ts
  import { SliceStrPipe } from '../pipe/slicestr.pipe'
  // ...
  @NgModule({
    declarations: [
      SliceStrPipe
    ],
    // ...
  })
  ```

- 使用

  ```html
  <p class="title">{{item.title|SliceStr: 0:20:'...'}}</p>
  ```
