import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  // 注入模块
  constructor(public el: ElementRef) { }
  ngOnInit() {
  }
  t1 = "a1"
  c1 = "b1"
  c2 = "b2"



  /*
  nav: string[] = ["首页", "新闻", "用户", "内容"]
  // 导航栏
  onClickNav(er: number) {
    let lists = this.el.nativeElement.querySelectorAll(".nav-li")
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.color = "black"
    }
    lists[er].style.color = "blue"
  }
  // 选项卡
  public case: number
  onClickTab(er: number) {
    let lists = this.el.nativeElement.querySelectorAll(".tab-li")
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.color = "black"
    }
    this.case = er

    lists[er].style.color = "blue"
  }
  */
}
