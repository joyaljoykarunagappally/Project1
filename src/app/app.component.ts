import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpBackend } from '@angular/common/http';
import { get } from 'node:http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = {
    First: 'INTERPOLATION',
    Second: 'STYLE BINDING',
    Third:'EVENT HANDLING'
  }
  str = '';
  count = 0;
  oddeven = 'EVEN';
data = {
  tech1: 'JOYAL JOY',
  tech2: 'SOFTWARE DEVELOPER',
  tech3: 'KOCHI, KERALA'
}
admin = 'joyaljoykarunagappally@gmail.com';
functionCall() {
  this.str = "Blue"; 
  return "blue"
}
functionCall1() {
  this.str = "Orange";
}
functionCall2() { 
  this.str = "Violet";
}
increment(){
  this.count=this.count+1;
  if(this.count%2 == 0){
    this.oddeven = 'EVEN'
  }
  else{
    this.oddeven = 'ODD'
  }
}
decrement(){
  this.count=this.count-1;
  if(this.count%2 == 0){
    this.oddeven = 'EVEN'
  }
  else{
    this.oddeven = 'ODD'
  }
}
reset(){
  this.count=0;
    this.oddeven = 'EVEN'
}
colorFunction(){
  return "rgb(188, 249, 142)"
}
}