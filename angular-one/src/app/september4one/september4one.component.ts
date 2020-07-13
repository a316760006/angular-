import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-september4one',
  templateUrl: './september4one.component.html',
  styleUrls: ['./september4one.component.scss']
})
export class September4oneComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  str = "北斗卫星导航系统（以下简称北斗系统）是中国着眼于国家安全和经济社会发展需要，自主建设、独立运行的卫星导航系统，是为全球用户提供全天候、全天时、高精度的定位、导航和授时服务的国家重要空间基础设施。[详细]"
  notice = [
    {
      date: new Date(2019, 8, 3),
      text: "关于举办“北斗卫星导航知识产权培训（第三期）”的通知"
    },
    {
      date: new Date(2019, 6, 24),
      text: "北斗应用推广与产业化总体保障类、基础类项目指南发布公告"
    }
  ]
  num = 0.08
  num1 = 0.085
}
