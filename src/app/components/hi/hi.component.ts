import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  constructor(private _dataService: DataService ) {}

  ngOnInit() {
    this._dataService.text$.subscribe(text => this.text = text);
  }

  text: string;

}
