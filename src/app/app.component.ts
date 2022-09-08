import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imageurl="assets/Bridgelabz.png";
  url="https://www.bridgelabz.com/";
  username:string="";
  usererror:string="";

  onClick($event:any){
  console.log($event);
  window.open(this.url,"_blank");

}
onInput($event:any){
  console.log($event.data);
  const nameregex=RegExp('^[A-Z]{1}[a-z]{2,}$')
  if(nameregex.test(this.username)){
    this.usererror="";
    return;
  }
  this.usererror="Name is incorrect";
}

}

