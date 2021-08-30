import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';

  todos =[];
  userName : any;

  addData(){
this.todos = this.todos.concat(this.userName);
  }

  DeleteData(){
    this.todos=[];
  }
  

}



