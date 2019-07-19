import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Siemens Data Visualization App';
  dataToPrint = [];

  
  constructor(private service: DataService) {
  }

  getData() {
    this.service.getData().subscribe(data => data.forEach(object => {
      this.dataToPrint.push(JSON.stringify(object));
    }), error => console.log(error));
    console.log(JSON.stringify(this.dataToPrint));
  }

  ngOnInit() {

  }

}
