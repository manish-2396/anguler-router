import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface database {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  count: number = 1;

  constructor(private http: HttpClient) {}

  handledcrese() {
    this.count--;
  }

  handleincrease() {
    this.count++;
  }

  datas: Array<database> = []; // or datas : database []  = []

  ngOnInit(): void {
    console.log(this.count);
    this.http
      .get(`https://reqres.in/api/users?page=${this.count}`)
      .subscribe((res: any) => {
        this.datas = res.data;
      });
  }
}
