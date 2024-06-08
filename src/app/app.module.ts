import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { SearchComponent } from './search/search.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GeneratorImageComponent } from './generator-image/generator-image.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { UploadWidgetModule } from "@bytescale/upload-widget-angular";
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageFocusBoxComponent } from './image-focus-box/image-focus-box.component';
import { UploadWidgetModule } from "@bytescale/upload-widget-angular";
import { TestComponent } from './test/test.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ModalSearchComponent,
    FileUploadComponent,
    GeneratorImageComponent,

    ImageFocusBoxComponent,
     TestComponent,
     ResultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    // UploadWidgetModule,
    ImageCropperModule,
    HttpClientModule,
    UploadWidgetModule,
    MatFormFieldModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
