import { Component, OnInit } from '@angular/core';

import { BadgeService } from 'src/app/common/services/badge.service';

@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.scss']
})
export class CardTvComponent implements OnInit {

  constructor(private _badgeService: BadgeService) { }

  ngOnInit(): void {
  }

  saveTv(): void {
    this._badgeService.addTv();
  }

}
