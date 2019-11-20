import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      console.log("my data is here", data);
      this.users= data
      console.log("this.users",this.users)
    })
  }
 


}
