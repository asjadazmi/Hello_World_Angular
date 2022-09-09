import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  public student :any=[
    {id:1,name:'Avani',salary:10000,gender:'female'},
    {id:2,name:'Akansha',salary:20000,gender:'female'},
    {id:3,name:'Asjad',salary:30000,gender:'male'},
    {id:4,name:'nilesh',salary:40000,gender:'male'},
    {id:5,name:'suraj',salary:50000,gender:'male'}
    
  ]


}
