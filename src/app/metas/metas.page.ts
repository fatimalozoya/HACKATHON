import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {
  public form = [
    { val: 'Reciclé', isChecked: true },
    { val: 'Planté arboles', isChecked: false },
    { val: 'Doné para ECO HELP', isChecked: false },
    { val: 'Compré productos eco-friendly', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }

}
