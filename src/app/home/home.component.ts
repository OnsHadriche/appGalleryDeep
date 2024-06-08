import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { HomeServiceService } from '../Services/home-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

recommendedImagesBase64: string[] = [];
constructor(private route: ActivatedRoute){}
ngOnInit(): void {
  this.route.queryParamMap.subscribe(params => {
    const recommendedImages = params.get('recommendedImages');

    if ( recommendedImages) {
      try {
        // Decode the JSON string from the URL parameter
        const decodedRecommendedImages = decodeURIComponent(recommendedImages);

        // Parse the decoded JSON string to get the array
        this.recommendedImagesBase64 = JSON.parse(decodedRecommendedImages);
      } catch (e) {
        console.error('Invalid JSON:', e);
        this.recommendedImagesBase64 = [];
      }
    } else {

      this.recommendedImagesBase64 = [];
    }
    })
}


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

