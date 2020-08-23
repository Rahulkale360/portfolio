import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  hamburger: any;
  mobile_menu: any;
  menu_item: any;
  header: any;
  
  title = "portfolio";

  constructor(private cd: ChangeDetectorRef){}

  ngOnInit(): void {
   this.hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
    this.mobile_menu =document.querySelector(".header .nav-bar .nav-list ul");
   this.menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
   this.header = document.querySelector(".header.container");
  }

  onHamburgerClick(){
    var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		this.header.style.backgroundColor = '#29323c';
	} else {
		this.header.style.backgroundColor = 'transparent';
	}
  }

  onNavigation(){
    this.hamburger.classList.toggle('active');
    this.mobile_menu.classList.toggle('active');
    this.ngOnInit();
  }
}
