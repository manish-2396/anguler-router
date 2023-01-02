import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  count: number = 1;
  
  disable1:boolean = false
  disable2:boolean = false

  constructor(private http: HttpClient) {}

  handledcrese() {
    this.count = this.count - 1;
    this.fetchData();

    if(this.count === 1){
      this.disable1 = true;
    }else{
      this.disable1 = false;
    }

  }

  handleincrease() {
    this.count++;
    this.fetchData();

    if(this.count === 9){
      this.disable2 = true;
    }else{
      this.disable2 = false;
    }
  }

  datas: Array<database> = []; // or datas : database []  = []

  ngOnInit(): void {
    console.log(this.count);

    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get(`https://dummyjson.com/products?limit=10&skip=${10 * this.count}`)
      .subscribe((res: any) => {
        this.datas = res.products;
        console.log(this.datas);
      });

      
  }

 
}
