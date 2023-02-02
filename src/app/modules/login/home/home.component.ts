import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: any = '';


  ngOnInit(): void {
    
    const userDetailsAsString = sessionStorage.getItem('userDetails');
    if (userDetailsAsString !== null) {
      const userDetailsJSON = JSON.parse(userDetailsAsString);
      this.username = userDetailsJSON.displayName;
    }
 }
}
