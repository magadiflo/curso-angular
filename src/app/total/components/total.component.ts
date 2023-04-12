import { Component, OnInit } from '@angular/core';

import { CalculateService } from '../../common/services/calculate.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {

  constructor(public calculateService: CalculateService) { }

}
