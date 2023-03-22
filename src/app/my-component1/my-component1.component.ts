import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.scss']
})
export class MyComponent1Component implements OnInit {

  @Input() title = '';
  @Output() sendMessage = new EventEmitter<string>();
  @ViewChild('inputText') inputText: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  clickSendMessageToFather(): void {
    this.sendMessage.emit(this.inputText?.nativeElement.value);
  }

}
