import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface database {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.sass'],
})
export class SinglePostComponent implements OnInit {
  id1: string | null = '';

  data: database = {
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    id: 0,
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id1 = this.route.snapshot.paramMap.get('id');

    console.log(typeof this.id1);

    fetch(`https://dummyjson.com/products/${this.id1}`)
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log(res);
        this.data = res;
      });
  }
}
