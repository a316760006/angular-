import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
  constructor(public el: ElementRef) {
    this.el.nativeElement.style.background = "red"
    // this.el.nativeElement.onclick = () => {
    //   this.el.nativeElement.style.color = 'skyblue'
    // }
    console.log(this.el.nativeElement)
  }
  // @HostListener 事件监听模块
  @HostListener("click")
  onmouseenter() {
    this.el.nativeElement.style.color = "skyblue"
  }
}
/*
    自定义指令:
   1. 创建一个指令组件 (ts)   ng g d 文件名
   2. 引入组件模块在 app.moudle.ts(全局)
      在单组件里面引入, 直接引入
   3. 引用
   <div 自定义指令名>内容</div>
 */