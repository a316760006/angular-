import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from "./user"
@Component({
  selector: 'app-september6',
  templateUrl: './september6.component.html',
  styleUrls: ['./september6.component.scss']
})
export class September6Component implements OnInit {
  constructor(public el: ElementRef, public renderer: Renderer2) { }
  model = new User(1, "张三", "男", "北京");
  arr = ["北京", "河北", "山西"]
  ngOnInit() { }
  isShow = false
  success() {
    this.isShow = !this.isShow
  }
  // 创建一个新用户
  newuser() {
    this.model = new User(2, "", "", "");
  }
  addRow() {
    let tbody = this.el.nativeElement.querySelector("tbody")
    let tr = this.renderer.createElement("tr")
    let td1 = this.renderer.createElement("td")
    let text1 = this.renderer.createText(this.model.name)
    this.renderer.appendChild(td1, text1)
    let td2 = this.renderer.createElement("td")
    let text2 = this.renderer.createText(this.model.sex)
    this.renderer.appendChild(td2, text2)
    let td3 = this.renderer.createElement("td")
    let text3 = this.renderer.createText(this.model.jg)
    this.renderer.appendChild(td3, text3)
    this.renderer.appendChild(tr, td1)
    this.renderer.appendChild(tr, td2)
    this.renderer.appendChild(tr, td3)
    this.renderer.appendChild(tbody, tr)
  }
}
