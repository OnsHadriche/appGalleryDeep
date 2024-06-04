import { Component, Input} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-focus-box',
  templateUrl: './image-focus-box.component.html',
  styleUrls: ['./image-focus-box.component.css']
})
export class ImageFocusBoxComponent {

  croppedImage: SafeUrl  = '';
  imageURL ="assets/img/gallery/gallery-1.jpg";
  showCropper = false

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
    console.log(event);
    // event.blob can be used to upload the cropped image
  }
  imageLoaded(image: LoadedImage) {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
