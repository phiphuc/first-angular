import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // ngOnInit(): void {
  //   console.log('OnInit ran')
  //   throw new Error("Method not implemented.");
  // }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   console.log('OnChange ran', {changes})
  //   throw new Error("Method not implemented.");
  // }

  // ngOnDestroy(): void {
  //   console.log('OnDestroy ran');
  //   throw new Error("Method not implemented.");
  // }

  // ngAfterViewInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  // ngAfterContentInit(): void {
  //   console.log('NgAfterContentInit ran');
  //   throw new Error("Method not implemented.");
  // }

  // ngAfterViewChecked(): void {
  //   console.log('NgAfterViewChecked');
  //   throw new Error("Method not implemented.");
  // }

  // ngAfterContentChecked(): void {
  //   console.log('NgAfterContentChecked');
  //   throw new Error("Method not implemented.");
  // }



  title = 'phinp hunre.edu';
  image = 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/73124105_544699366331780_2700723955970342912_n.jpg?_nc_cat=106&cachebreaker=hd&_nc_oc=AQnX69fvZ-SvheoPeopfpCwpuBuj2LSuf_7IZpZZVLTqIYji0YftUagoFP_S0wFoKlZBpBrwkcqZApN7fki6JUEM&_nc_ht=scontent.fhan5-3.fna&oh=369def777846ebaa27c07ad969bc14dd&oe=5E61A9D8'
  withBorder = true;

  onButtonClick(event: MouseEvent){
    console.log("Button is clicked");
    this.withBorder = !this.withBorder;
  }

  onClickFromHello(event: String){
    console.log(event);
  }
}
