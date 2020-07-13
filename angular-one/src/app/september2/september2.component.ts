import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-september2',
  templateUrl: './september2.component.html',
  styleUrls: ['./september2.component.scss']
})
export class September2Component implements OnInit {
  constructor(public renderer: Renderer2, public el: ElementRef) { }
  public list: any[] = [{ src: "../../assets/one.jpg", title: "2019《开学第一课》刷屏，是什么让大家“泪目”？" },
  { src: "../../assets/two.jpg", title: "开学第一天，国外中小学生是怎么过的？" },
  { src: "../../assets/three.jpg", title: "这块巧克力凭啥这么贵？日本高级厨师现做，售价21万日元" },
  { src: "../../assets/four.jpg", title: "《黑相集 棉兰号》评测：适合和朋友一同“表演”的互动电影" },
  ]
  ngOnInit() {
    // 初始化一个列表
    let parent = this.el.nativeElement.querySelector("#box9-2")
    // 添加列表
    let ul = this.renderer.createElement("ul")
    for (let i = 0; i < this.list.length; i++) {
      let li = this.renderer.createElement("li")
      let p = this.renderer.createElement("p")
      let text = this.renderer.createText(this.list[i].title)
      let img = this.renderer.createElement("img")
      // 给创建的 img 添加属性
      this.renderer.setAttribute(img, "src", this.list[i].src)
      this.renderer.setAttribute(img, "width", "200px")
      // 添加到节点里面
      this.renderer.appendChild(p, text)
      this.renderer.appendChild(li, p)
      this.renderer.appendChild(li, img)
      this.renderer.appendChild(ul, li)
      // 添加鼠标移上事件
      this.renderer.listen(li, "mouseover", () => {
        this.renderer.addClass(li, "active")
      })
      // 添加鼠标移出事件
      this.renderer.listen(li, "mouseout", () => {
        this.renderer.removeClass(li, "active")
      })
    }
    // 添加到 html 里的根元素
    this.renderer.appendChild(parent, ul)
  }
}
