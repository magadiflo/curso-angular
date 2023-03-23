import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit, AfterViewInit {

  title = 'Hello World!';
  @ViewChild('h1Title') h1Title: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Hola mundo en español!';
    }, 1500);
  }

  ngAfterViewInit(): void {
    console.log(this.h1Title);
    // (this.h1Title!.nativeElement as HTMLElement).innerText = 'Nuevo Título';
  }

}
