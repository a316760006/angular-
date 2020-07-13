import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-september5',
  templateUrl: './september5.component.html',
  styleUrls: ['./september5.component.scss']
})
export class September5Component implements OnInit {
  constructor() { }
  ngOnInit() { }
  value1 = ""
  arr = [
    {
      provice: "北京",
      city: ['昌平', '朝阳', '大兴']
    },
    {
      provice: "河北",
      city: ['保定', '廊坊', '石家庄']
    },
    {
      provice: "山西",
      city: ['太原', '吕梁', '阳泉']
    },
  ]
  value2 = 0
  value3 = 0

  arr1 = [
    {
      name: '冰箱',
      status: false
    },
    {
      name: '空调',
      status: false
    },
    {
      name: '冰箱',
      status: false
    }
  ]
  allcheckbox = false
  ngModelChange() {
    this.allcheckbox = this.arr1.every(t => t.status)
  }
  Modelcheckbox() {
    for (let i = 0; i < this.arr1.length; i++) {
      this.arr1[i].status = this.allcheckbox
    }
  }
}
