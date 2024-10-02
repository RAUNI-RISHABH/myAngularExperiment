import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnChanges, output, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.sass'
})
export class SideNavbarComponent implements OnChanges {

  @HostBinding('class.dark') isDarkMode: boolean = false;

 @Input() isSidenavOpen: boolean = false;


isSidenavOpenChange = output<boolean>();
 @Input() isDark: boolean = false;


ngOnChanges(changes: SimpleChanges): void {

  this.isDarkMode = this.isDark;
  this.isSidenavOpenChange.emit(this.isSidenavOpen);
  console.log('is dark mode',this.isDarkMode)
}

}
