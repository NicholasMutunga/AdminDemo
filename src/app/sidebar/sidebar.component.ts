import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser = {
    name: 'John Doe',
    role: 'Administrator',
    imageUrl: 'path/to/user-image.jpg',
  };
  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
