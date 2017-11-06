import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template :  `
    <h3>This is Home page</h3>
    
  `
})
export class HomeComponent implements OnInit , OnDestroy{


  constructor(private router : Router){

  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
