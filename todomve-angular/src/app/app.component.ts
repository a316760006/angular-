import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  title = 'todomve-angular';
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem("todos") || '[]')
  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null
  // 该函数是一个特殊的 Angular 生命周期钩子函数
  // 他会在 Angular 应用初始化的时候执行一次
  ngOnInit() {
    this.hashchangeHandler()
    // 这里需要 bing(this) 绑定,不然方法的 this 指向 window
    window.onhashchange = this.hashchangeHandler.bind(this)
  }
  // 添加事项
  addTodo(e): void {
    const titleText = e.target.value
    // 如果内容为空,就不保存
    if (!titleText.length) {
      return
    }
    const last = this.todos[this.todos.length - 1]
    this.todos.push({
      // 做个判断,如果任务项中有任务,id就+1,如果没有,id就是1
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false
    })
    // 清除文本框
    e.target.value = ""
  }
  // 删除事项
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
  // 全选
  get toggleAll() {
    return this.todos.every(t => t.done)
  }
  set toggleAll(val) {
    this.todos.forEach(t => t.done = val)
  }
  // 保存编辑||失焦时,也保存
  saveEdit(todo, e) {
    // 保存编辑内容
    todo.title = e.target.value
    // 去除编辑样式
    this.currentEditing = null
  }
  // 按 esc 取消编辑
  handleEditKeyUp(e) {
    const { keyCode } = e
    if (keyCode === 27) {
      // 取消编辑内容
      e.target.value = this.currentEditing.title
      // 去除编辑样式
      this.currentEditing = null
    }
  }
  // 获取未完成的任务数
  get remaningCount() {
    return this.todos.filter(t => !t.done).length
  }
  // 删除所有已完成事件
  clearAllDome() {
    this.todos = this.todos.filter(t => !t.done)
  }
  public visibility: string = "all"
  // 点击导航过滤事件
  get filterTodos() {
    if (this.visibility === "all") {
      return this.todos
    } else if (this.visibility === "active") {
      return this.todos.filter(t => !t.done)
    } else if (this.visibility === "completed") {
      return this.todos.filter(t => t.done)
    }
  }
  // 把过滤数组显示封装成一个方法
  hashchangeHandler() {
    const hash = window.location.hash.substr(1)
    switch (hash) {
      case "/":
        this.visibility = "all"
        break;
      case "/active":
        this.visibility = "active"
        break;
      case "/completed":
        this.visibility = "completed"
        break;
    }
  }
  // 数据持久化,本地存储
  // 当 Angular 组件数据发生改变的时候, ngDoCheck 钩子函数会被触发
  ngDoCheck() {
    window.localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  // 自动聚焦
}
