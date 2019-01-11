import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shild',
  templateUrl: './shild.component.html',
  styleUrls: ['./shild.component.css']
})
export class ShildComponent implements OnInit {
  constructor() { }
 some;
  ngOnInit() {
    console.log("HELLO before functionNr1");
    this.functionNr1();
    console.log("HELLO after functionNr1");
  }
 
 
  functionNr1() {
      
    console.log("Hello from functionNr1 before setTimeout in code");
    setTimeout (() => {
         console.log("Hello from setTimeout");
         this.timefun();
      }, 4500);
 
    console.log("Hello from functionNr1 after setTimeout in code");
 
  }

  timefun()
  {
  	return this.some = "hello";
  	console.log(this.some);
  }
}