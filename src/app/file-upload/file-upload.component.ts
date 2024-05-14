import { Component } from '@angular/core';
import { UploadWidgetConfig, UploadWidgetResult, UploadWidgetOnUpdateEvent } from "@bytescale/upload-widget";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  options: UploadWidgetConfig = {
    apiKey: "free", // Get API key: https://www.bytescale.com/get-started
    maxFileCount: 10
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = ({ uploadedFiles, pendingFiles, failedFiles }: UploadWidgetOnUpdateEvent) => {
    const uploadedFileUrls = uploadedFiles.map(x => x.fileUrl).join("\n");
    console.log(uploadedFileUrls);
  };
  width = "600px";
  height = "375px";
}


