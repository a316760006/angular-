import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  count = 0;
  isShow = true;
  arr: number[] = [1, 2, 3, 4];
  // arr: string[] = ["a", "b", "c", "d"];
  h = "<mark>我是innderHTML渲染出来的</mark>";
  score = 1;
  arrObject: object[] = [{ id: 1, name: "haha" }, { id: 2, name: "heihei" }]
  imageurl = "../../assets/favicon.ico"
  uu = "a"
  public show: boolean = true;
  change = "b"
  onMouseover = () => {
    this.change = "a"
  }
  onMouseout = () => {
    this.change = "b"
  }
  constructor(public el: ElementRef) { };
  ngOnInit() {
  };
  onClickAdd = (e) => {
    this.count++
  };
  onclickCon = (value: string) => {
    this.uu = value
  }
  fn(er: number) {
    var lists = this.el.nativeElement.querySelectorAll(".list li")
    for (var i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor = "red"
    }
    lists[er].style.backgroundColor = "blue"
    // console.log(typeof(el))
  }
}
