import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import { ImgplaceComponent } from './imgplace/imgplace.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { JeiraniComponent } from './jeirani/jeirani.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadimgComponent,
    ImgplaceComponent,
    JeiraniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
=======
import { PostGetComponent } from './post-get/post-get.component';

@NgModule({
  declarations: [AppComponent, UploadimgComponent, ImgplaceComponent, PostGetComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
>>>>>>> 1072643bc9350e5a8f7abdc2c7dd84dd0427e7f4
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
