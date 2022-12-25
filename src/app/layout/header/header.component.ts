import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() public sideBarToggle = new EventEmitter<boolean>();
  public isToggleSideBar: boolean | false | undefined;

  constructor(private element: ElementRef) {

  }


  ngOnInit(): void {
    //
  }

  public toggleSideBar() {
    this.isToggleSideBar = !this.isToggleSideBar;

    this.sideBarToggle.emit(this.isToggleSideBar);
  }



}
