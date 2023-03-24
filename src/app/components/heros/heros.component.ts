import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit, AfterViewInit {

  title = 'Hello World';
  @ViewChild('h1Title') h1Title: ElementRef | undefined;
  @ViewChild('inputNombre') inputNombre: ElementRef | undefined;
  disabledInput = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Hola mundo en español!';
      this.disabledInput = false;
    }, 1500);
  }

  ngAfterViewInit(): void {
    console.log(this.h1Title);
    // (this.h1Title!.nativeElement as HTMLElement).innerText = 'Nuevo Título';
  }

  showMessage(): void {
    console.log('Esto es un mensaje');
  }

  keyUp(event: KeyboardEvent): void {
    console.log(event.key);

    const input = this.inputNombre?.nativeElement as HTMLInputElement;
    this.title = input.value;
  }

  getMaxLength(): number {
    return 4;
  }

  getChangeColor(): boolean {
    return 'Hello World' == this.title;
  }

}
