import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { HomeServiceService } from '../Services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

constructor(private HS:HomeServiceService){}
  ngOnInit() {}


  // uploadImage(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.HS.uploadImage(file).subscribe(
  //       (data) => {
  //         console.log('Upload successful:', data);
  //         // Handle response data as needed
  //       },
  //       (error) => {
  //         console.error('Error:', error);
  //         // Handle error
  //       }
  //     );
  //   }

}

