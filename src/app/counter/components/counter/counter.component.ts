import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1> Calculadora</h1>
    <h1>{{counter}}</h1>
    <button class= "mx-2" (click)="increaseBy()">+1</button>
    <button class= "mx-2" (click)="RESET()">R3S3T</button>
    <button class= "mx-2" (click)="DecreaseBy()">-1</button> 
    `
})

export class CounterComponent {
    constructor() { }
    counter = 10;

    increaseBy():void{
      this.counter = this.counter+1;
    }
  
    DecreaseBy():void{
      if (this.counter == 0){
        console.log("No puedo restar mas alla de cer0")
      }else
      this.counter = this.counter-1;
    }
    RESET():void {
      this.counter = 10;
    }

}