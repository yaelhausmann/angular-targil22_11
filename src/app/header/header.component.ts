import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isPageHome?: boolean;
  @Input() showMenu?: boolean;
  @Output() isShowMenu = new EventEmitter<boolean>();
  currentDate = new Date();
  showSubMenu1 = true;
  showSubMenu2 = false;
  showSubMenu3 = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  getShowMenu(show:boolean) {
    this.showMenu = show;
    this.isShowMenu.emit(show);
  }


}

