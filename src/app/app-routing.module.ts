import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: 'single/:id' ,  component: SinglePostComponent },
  {
    component: PostComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
