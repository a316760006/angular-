import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-september4',
  templateUrl: './september4.component.html',
  // template: "<mark>123</mark>",
  styleUrls: ['./september4.component.scss']
})
export class September4Component implements OnInit {
  constructor() { }
  ngOnInit() { }
  modle = ""
  list = ["北京", "山西", "中国"]
  selected = '中国'
  checkbox = false
}
