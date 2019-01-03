import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { TopComponent }  from './top/top.component';


import { WallComponent}      from './wall/wall.component';

const routes: Routes = [
    { path: 'posts', component: WallComponent },
    { path: 'post.id', component: WallComponent },
    {path: 'top', component: TopComponent},
{ path: 'detail/:post.id', component: PostDetailComponent }



];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],

    exports: [ RouterModule ]
})
export class AppRoutingModule { }
