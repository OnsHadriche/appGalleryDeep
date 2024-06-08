import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomeServiceService } from '../Services/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input() requiredFileType: string = '';

  fileName: string = '';
  uploadProgress: number | null = null;
  uploadSub: Subscription | null = null;
  file: File | null = null;
  results: any;
  recommendedImagesBase64: string[] = [];
  uploadedImageBase64: string = '';
  constructor(
    private http: HttpClient,
    private HS: HomeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);

      const upload$ = this.http
        .post('/api/thumbnail-upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => {}));
    }
  }
  search(): void {
    if (this.file) {
      this.HS.predict(this.file).subscribe((res) => {
        console.log(res);
        this.results = res;
        if (this.results) {
          const parsedResults =
            typeof this.results === 'string'
              ? JSON.parse(this.results)
              : this.results;
          this.recommendedImagesBase64 = parsedResults.recommendedImagesBase64;
          this.uploadedImageBase64 = parsedResults.uploadedImageBase64;
        }
        console.log('========================');
        console.log(this.recommendedImagesBase64);
        console.log(this.uploadedImageBase64);

        // Serialize the recommended images array to a JSON string
        const recommendedImagesJSON = JSON.stringify(
          this.recommendedImagesBase64
        );

        // Encode the JSON string to make it safe for URLs
        const encodedRecommendedImages = encodeURIComponent(
          recommendedImagesJSON
        );

        // Navigate to the result page with parameters
        this.router.navigate(['/home'], {
          queryParams: {
            uploadedImage: this.uploadedImageBase64,
            recommendedImages: encodedRecommendedImages,
          },
        });
      });
    } else {
      console.error('No file selected!');
    }
  }
}
