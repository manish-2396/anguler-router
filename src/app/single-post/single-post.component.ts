import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface database {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.sass'],
})
export class SinglePostComponent implements OnInit {
  id1: string|null = "";

  data: database = {
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id1 = this.route.snapshot.paramMap.get('id');

    console.log(typeof(this.id1))

    fetch(`https://reqres.in/api/users/${this.id1}`)
      .then((res: any) => res.json())
      .then((res: any) => {
        this.data = res.data;
      });
  }
}
