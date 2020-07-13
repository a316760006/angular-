import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'changer'
})
export class ChangerPipe implements PipeTransform {
  transform(value: any, count: number): any {
    // 数字转换成字符串
    // let t1 = parseFloat(value)
    // return t1
    // 截取
    // let t1 = value.substr(0, count)
    // return t1;
    // 三目判断
    // return value == "m" ? "女" : "男"
    // 实现字符串的重复输入
    // return value.repeat(count)
    // 实现次幂
    return Math.pow(value, count)
  }
}
