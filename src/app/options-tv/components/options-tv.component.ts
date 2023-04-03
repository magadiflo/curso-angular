import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-options-tv',
  templateUrl: './options-tv.component.html',
  styleUrls: ['./options-tv.component.scss'],
  providers: [DemoService]
})
export class OptionsTvComponent implements OnInit {

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    console.log(this._demoService.saludo('options-tv.component'));
  }

}
