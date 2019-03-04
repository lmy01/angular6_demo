import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-project';
  value = "";
  allChecked = false;
  taskList = [
    {
      content:'好好学习',
      checked:false
    },
    {
      content: '天天向上',
      checked: false
    }
  ];
  trackById(index,item){
    return index
  };
  addTask(){
    this.taskList.push({content:this.value,checked:false})
    this.value = ''
  }
  deleteTask(index){
    this.taskList.splice(index,1)
  }
  deleteSelectedTask() {
    
    let arr = this.taskList.filter(item=>{
      return item.checked === false
    })
    if (arr.length !== this.taskList.length){
      this.taskList = arr
      this.allChecked = false
    }else{
      alert("没有选中任何条目！！")
    }
  }
  changeItem(){
    let arr = this.taskList.filter(item => {
      return item.checked === false
    })
    arr.length === 0 ? this.allChecked = true : this.allChecked=false
  }
  changeAll(){
    // console.log(this.allChecked)
    this.taskList.forEach(item=>{
      item.checked = this.allChecked
    })
  }
}
