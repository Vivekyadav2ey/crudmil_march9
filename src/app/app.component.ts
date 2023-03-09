import { Component } from '@angular/core';
import { CrudservicesService } from './crudservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudmarch8';
  employeelist:any=[];

  //Here I have created a dependency injection
  constructor(public crudHttpService: CrudservicesService){}


  //here I have written all the CRUD Operation
  ngOnInit(): void {
    this.listemployee();
  } 
  listemployee(){
    this.crudHttpService.list().subscribe((response)=>{
      this.employeelist = response;
    },(error=>{

    }));
  }

  //Here I have created the Employee Details
  createEmployee(){
    let todo = {
      id: new Date().getTime(),
      name:"vivek",
      Country:"India",
      Address:new Date().getTime(),
      Phoneno:new Date().getTime(),
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listemployee();
    },(error=>{

    }));
  }

  //Here I have Updated the Employee
  editEmployee(todo: any){
    let data = {
      id: new Date().getTime(),
      name:"vivek",
      Country:"India",
      Address:new Date().getTime(),
      Phoneno:new Date().getTime(), 
    }
    this.crudHttpService.update(todo.id,data).subscribe((response)=>{
      this.listemployee();
    },(error=>{

    }));
  }
  //Here Ihave Delete Employee List
  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listemployee();
    },(error=>{
    }));
  }
}
