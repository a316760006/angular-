import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2, public el: ElementRef) { }
  ngOnInit() {
    // 创建元素
    var div1 = this.renderer.createElement("div")
    // 创建元素内容
    var text1 = this.renderer.createText("gregrer")
    var parent = this.el.nativeElement.querySelector(".parentdiv")
    // 追加元素
    this.renderer.appendChild(div1, text1)
    this.renderer.appendChild(parent, div1)
    // 删除元素
    this.renderer.removeChild(list, lb1)
    // 给元素添加一个类名
    this.renderer.addClass(parent, "div")
    this.renderer.removeClass(parent, "parentdiv")
    // 改变元素的css样式
    this.renderer.setStyle(parent, "color", "red");
    this.renderer.setStyle(parent, "backgroundColor", "skyblue");
    this.renderer.removeStyle(parent, "color");
    // 改变元素的 property 属性
    var img = this.el.nativeElement.querySelector("#img")
    this.renderer.setProperty(img, "alt", "sadfgsd")
    // 改变元素的属性
    this.renderer.setAttribute(parent, "id", "div")
    this.renderer.removeAttribute(parent, "id")
    // 在元素前面插入新元素
    var newdiv = this.renderer.createElement("li")
    var newtext = this.renderer.createText("新建列表")
    this.renderer.appendChild(newdiv, newtext)
    var list = this.el.nativeElement.querySelector("#list")
    var lb1 = this.el.nativeElement.querySelector(".lb1")
    this.renderer.insertBefore(list, newdiv, lb1)
    // 获取元素的根元素
    var root = this.renderer.selectRootElement(lb1, true)
    console.log(root)
    // 获取元素的父元素
    var parentnode = this.renderer.parentNode(newdiv)
    console.log(parentnode)
    // 获取下一个兄弟元素
    var xdys = this.renderer.nextSibling(newdiv)
    console.log(xdys)
    // 给表单元素赋值
    var inputd = this.el.nativeElement.querySelector('#input1')
    this.renderer.setValue(inputd, "qwe")
    console.log(inputd)
    // 监听元素的事件
    this.renderer.listen(parent, 'click', () => {
      console.log("点击事件被监听了")
    })



  }

  // t1="list1";
  // c1=0;
  //第一种tab方式
  // arr:any[]=[{name:"首页",content:"111111"},
  // {name:"新闻",content:"22222"},{name:"娱乐",content:"3333"}];
  // 第二种tab方式
  // arr1:any[]=[{name:"首页",content:"111111",state:true},
  // {name:"新闻",content:"22222",state:false},
  // {name:"娱乐",content:"3333",state:false}];


  // ngclass
  // 第一种方式
  // t1: string = "a1";
  //第二种方式
  // first = "c1";
  // second = "c2";
  // t2: string[] = ['c1', 'c2']
  // 第三种方式
  // t3: any = { 'c1': true, 'c2': false }
  // t2=["c1","c2"];
  // 第四种方法
  // t4: any = { 'c1 c2': false }
  //第一种tab保存变量
  //  getContent(er:number){
  //    this.c1=er;
  //  }
  //第二种改变激活类的状态
  //  setBgc(er:number){
  //   var list=this.arr1;
  //   for(var i=0;i<list.length;i++)
  //   {
  //      list[i].state=false;
  //   }
  //   this.arr1[er].state=true;
  //  }


}
