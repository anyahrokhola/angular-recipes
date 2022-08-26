import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadComponent } from './components/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [UploadComponent, UploadImageComponent],
	imports: [CommonModule, ReactiveFormsModule, FormsModule],
	exports: [UploadComponent, UploadImageComponent],
})
export class UploadModule {}
