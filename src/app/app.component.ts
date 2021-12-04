import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OrderingApp';
  links = [{linkName : 'Home', linkRoute : 'home', icon : 'home'}, {linkName : 'My Orders', linkRoute : 'myOrders', icon : 'list_alt'}];
  activeLink = this.links[0];
  background: ThemePalette = "primary";  
}
