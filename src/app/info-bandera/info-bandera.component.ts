import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bandera',
  templateUrl: './info-bandera.component.html',
  styleUrls: ['./info-bandera.component.css']
})
export class InfoBanderaComponent implements OnInit {
  nombrePais ="México";
  imgBandera ="./mx.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
