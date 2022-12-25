import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public toggleMenuSideBar: boolean | any;

  constructor() {
  }

  public toggleSideBarEvent(event: any) {
    this.toggleMenuSideBar = event;
  }

  ngOnInit(): void {
  }


}
