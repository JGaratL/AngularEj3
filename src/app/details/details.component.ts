import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../fakestore.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  id = 0;
  title = '';
  description = '';
  category = '';
  image = '';
  price = '';
  rating = 0;

  constructor(private _apiStore: FakestoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getData();
    });
  }

  getData() {

    this._apiStore.getDetails(this.id).subscribe((data: any) => {
      this.id = data.id;
      this.title = data.title;
      this.description = data.description;
      this.category = data.category;
      this.image = data.image;
      this.price = data.price;
      this.rating = data.rating.rate;
    });
  }

}
