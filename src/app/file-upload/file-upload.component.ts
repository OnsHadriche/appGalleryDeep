import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomeServiceService } from '../Services/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() requiredFileType: string = '';

  fileName: string = '';
  uploadProgress: number | null = null;
  uploadSub: Subscription | null = null;
  file: File | null = null;

  constructor(private http: HttpClient,private HS:HomeServiceService,private router:Router) {}

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        finalize(() => {})
      )

    }
  }
  search(): void {
    if (this.file) {
      this.HS.predict(this.file).subscribe(() => {
        this.router.navigate(["/test"]);
      });
    } else {
      console.error("No file selected!");
    }
  }
}
