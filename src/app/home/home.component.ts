import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  optionCategory = [
    {
      name: 'Todas las categorías',
      value: '',
    },
    {
      name: 'Electrónica',
      value: 'category/electronics',
    },
    {
      name: 'Joyería',
      value: 'category/jewelery',
    },
    {
      name: 'Ropa de hombre',
      value: "category/men's clothing",
    },
    {
      name: 'Ropa de mujer',
      value: "category/women's clothing",
    },
  ];

  // optionLimit = [
  //  5,10,15,20
  // ];

  // limit = 10;
  category = '';

  constructor(private _apiStore: FakestoreService) {
  }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this._apiStore.getList(this.category).subscribe((data: any) => {
      this.items = data;
    });
  };

  changeData() {
    console.log('Hola');
  }
}
