import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { UiModule } from './ui/ui.module';
import { postSearchComponent } from './post-search/post-search.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    postSearchComponent,
    PostDetailComponent,

  ],
  imports: [
      BrowserModule,
      NgbModule,
      UiModule,
      HttpClientModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
