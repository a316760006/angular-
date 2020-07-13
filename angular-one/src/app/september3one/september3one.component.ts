import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-september3one',
  templateUrl: './september3one.component.html',
  styleUrls: ['./september3one.component.scss']
})
export class September3oneComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  // str: string = "september3one works ASDFASD!"
  // date = new Date()
  // num: number = 800.500000
  // obj = { 'name': "哈哈哈" }
  // money: number = 10.5
  imgSrc = [
    {
      money: "478",
      title: "A-H【品牌特惠】北欧主卧室灯温馨浪漫房间灯具个性创意现代简约客厅灯吸顶灯圆形 木纹小号-42CM-自然光38W",
      src: "https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/71122/12/4634/94394/5d2da02cE8fe73f34/106caab264c68e99.jpg.webp"
    },
    {
      money: "849",
      title: "日本Uoni由利 无线电动拖把家用拖地擦地神器扫地一体机无蒸汽小米粒 土豪金轻奢客户专属款不弯腰不费力",
      src: "https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/61093/2/3470/169637/5d1ad09cEb21043bd/d3d99743a61d4e19.jpg.webp"
    },
    {
      money: "66",
      title: "日本品牌FaSoLa 日式红木筷子家用防滑实木筷子套装家庭装 蓝色樱花5双装",
      src: "https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/49223/36/2871/57486/5d0a0d01E31a6a7aa/329bcbf2a5900c3b.jpg.webp"
    }
  ]
  list = [
    {
      id: 0,
      text: "戴志康投案自首",
      date: new Date(2019, 9, 1)
    },
    {
      id: 1,
      text: "台风剑鱼",
      date: new Date(2019, 9, 2)
    },
    {
      id: 2,
      text: "周琦发球失误",
      date: new Date(2019, 9, 3)
    },
    {
      id: 3,
      text: "国庆节放假通知",
      date: new Date(2019, 9, 4)
    },
    {
      id: 4,
      text: "乾隆花瓶1磅卖出",
      date: new Date(2019, 9, 5)
    },
    {
      id: 5,
      text: "比伯谈年少成名",
      date: new Date(2019, 9, 6)
    }
  ]

}
