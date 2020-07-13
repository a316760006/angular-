import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  constructor(public el: ElementRef) { }
  ngOnInit() { }
  public imageSrc: string[] = [
    "../../assets/one.jpg",
    "../../assets/two.jpg",
    "../../assets/three.jpg",
    "../../assets/four.jpg"
  ]
  // public index: number = 0
  // jdstyle = { 'left': '0px' }
  // onMouseover(i: number) {
  //   this.index = i;
  //   this.jdstyle.left = i * -500 + 'px'
  // }





  // // 导航
  // public array: string[] = ["首页", "新闻", "用户", "内容"]
  // public case = 0
  // setBgc(index) {
  //   this.case = index
  // }
  // 轮播:点击切换
  public carouselImg: string = "carousel-img"
  public i: number = 0
  onClickMove(direction) {
    const carouselImg = this.el.nativeElement.querySelectorAll('.carousel-img')
    const wid = carouselImg[0].offsetWidth;
    if (direction === 'right') {
      this.i++
      if (this.i === 4) {
        this.i = 0
      }
      carouselImg[0].style.left = this.i * -wid + 'px'
    } else {
      this.i--
      if (this.i === -1) {
        this.i = 3
      }
      carouselImg[0].style.left = this.i * -wid + "px"
    }
    this.imgIndexColor()
  }
  // 为下标赋颜色
  imgIndexColor() {
    const imgIndex = this.el.nativeElement.querySelector(".imgIndex").children
    for (let i = 0; i < imgIndex.length; i++) {
      imgIndex[i].style.background = "rgba(0,0,0,0.5)"
    }
    imgIndex[this.i].style.background = "rgba(255,255,255,0.5)"
  }
  // 下标切换
  imgIndex(index) {
    this.i = index
    this.imgIndexColor()
    const carouselImg = this.el.nativeElement.querySelectorAll('.carousel-img')
    const wid = carouselImg[0].offsetWidth;
    carouselImg[0].style.left = index * -wid + 'px'
  }
  timer = setInterval(() => {
    this.onClickMove("right")
  }, 2000)

}
