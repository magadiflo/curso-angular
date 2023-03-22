import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.scss']
})
export class MyComponent1Component implements OnInit, OnChanges {

  @Input() title = '';
  @Output() sendMessage = new EventEmitter<string>();
  @ViewChild('inputText') inputText: ElementRef | undefined;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2° my-component1.component -> ngOnChanges [Solo funciona cuando hay una propiedad decorada con @Input()]');
    console.log(changes);
  }
  
  ngOnInit(): void {
  }


  clickSendMessageToFather(): void {
    this.sendMessage.emit(this.inputText?.nativeElement.value);
  }

}
