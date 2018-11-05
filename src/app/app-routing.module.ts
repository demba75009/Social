import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent }  from './post-detail/post-detail.component';

import { WallComponent}      from './wall/wall.component';

const routes: Routes = [
    { path: 'posts', component: WallComponent },
    { path: 'post.id', component: WallComponent },
    { path: 'detail/:id', component: PostDetailComponent },



];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],

    exports: [ RouterModule ]
})
export class AppRoutingModule { }
