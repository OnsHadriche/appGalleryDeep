import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  implements OnInit{
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
}
