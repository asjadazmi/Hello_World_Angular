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
  username:String="";

  onClick($event:any){
  console.log($event);
  window.open(this.url,"_blank")
}

}

