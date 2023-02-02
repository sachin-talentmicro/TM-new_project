import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: any = '';


  ngOnInit(): void {
    
    const userDetailsAsString = sessionStorage.getItem('userDetails');
    if (userDetailsAsString !== null) {
      const userDetailsJSON = JSON.parse(userDetailsAsString);
      this.username = userDetailsJSON.displayName;
    }
    
 }

 onSignoutClick(){
  sessionStorage.clear();
}

}
