import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TabComponent } from './tab/tab.component';
import { CarouselComponent } from './carousel/carousel.component';
import { September2Component } from './september2/september2.component';
import { September3Component } from './september3/september3.component';
import { September3oneComponent } from './september3one/september3one.component';
import { September4Component } from './september4/september4.component';
import { ChangecolorDirective } from './september4/changecolor.directive';
import { ChangerPipe } from './pipe/changer.pipe';
import { September4oneComponent } from './september4one/september4one.component';
import { ChangerDirective } from './september4one/changer.directive';
import { ChangeronePipe } from './september4one/changerone.pipe';
import { September5Component } from './september5/september5.component';
import { September6Component } from './september6/september6.component';

@NgModule({
  // 组装模块资源: 组件、指令、服务
  declarations: [
    AppComponent,
    HeroComponent,
    TabComponent,
    CarouselComponent,
    September2Component,
    September3Component,
    September3oneComponent,
    September4Component,
    ChangecolorDirective,
    ChangerPipe,
    September4oneComponent,
    ChangerDirective,
    ChangeronePipe,
    September5Component,
    September6Component
  ],
  imports: [  // 依赖模块
    BrowserModule,
    FormsModule   // 双向数据绑定模块
  ],
  providers: [],
  bootstrap: [September5Component] // 指定启动的根组件
})
export class AppModule { }
