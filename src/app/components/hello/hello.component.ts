import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector:'app-hello',
    template: `
        <h2>Hello {{text}} </h2>
        <button (click)="onButtonClick()"> Click me </button>`

})
export class HelloComponent implements OnInit{

    constructor(private _dataService: DataService){}

    ngOnInit(): void {
        this._dataService.setText(this.text);
    }

    @Input() text: string;
    @Output() buttonClick : EventEmitter<any> = new EventEmitter<any>();

    onButtonClick(){
        this.text = "xin chao vietnam";
        this.buttonClick.emit(this.text);
        this._dataService.setText(this.text);
    }
}