import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-september3',
  templateUrl: './september3.component.html',
  styleUrls: ['./september3.component.scss']
})
export class September3Component implements OnInit {
  constructor(public el: ElementRef, public renderer: Renderer2) { }
  ngOnInit() {
    var trs = this.el.nativeElement.querySelectorAll("table tbody tr")
    for (let i = 0; i < trs.length; i++) {
      this.renderer.listen(trs[i], "mouseover", (e) => this.fn(e))
    }
  }
  addRow() {
    let tbody = this.el.nativeElement.querySelector("tbody")
    let tr = this.renderer.createElement("tr")
    let td1 = this.renderer.createElement("td")
    let text1 = this.renderer.createText("2")
    this.renderer.appendChild(td1, text1)
    let td2 = this.renderer.createElement("td")
    let text2 = this.renderer.createText("李四")
    this.renderer.appendChild(td2, text2)
    let td3 = this.renderer.createElement("td")
    let text3 = this.renderer.createText("1808")
    this.renderer.appendChild(td3, text3)
    this.renderer.appendChild(tr, td1)
    this.renderer.appendChild(tr, td2)
    this.renderer.appendChild(tr, td3)
    this.renderer.appendChild(tbody, tr)
    // 为新创建的元素添加事件
    this.renderer.listen(tr, "mouseover", (e) => this.fn(e))
  }
  // 样式改变函数
  fn(e) {
    let tr = this.renderer.parentNode(e.target)
    this.renderer.addClass(e.target, "a")
  }
  delRow() {
    var lastChild = this.el.nativeElement.querySelector("table tbody tr:last-child")
    var parent = this.el.nativeElement.querySelector("table tbody")
    if (lastChild) {
      this.renderer.removeChild(parent, lastChild)
    }
  }
}
