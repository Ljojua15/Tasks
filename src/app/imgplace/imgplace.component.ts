import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imgplace',
  templateUrl: './imgplace.component.html',
  styleUrls: ['./imgplace.component.scss']
})
export class ImgplaceComponent {
  imageFile: File | null = null;

  constructor(private http: HttpClient) {}

  handleFileInput(event: any) {
    this.imageFile = event.target.files[0];
  }

  uploadImage(form: any) {
    if (this.imageFile) {
      const apiUrl = 'https://static.tsameti.com/tournaments-images';

      const uploadData = new FormData();
      uploadData.append('file', this.imageFile, this.imageFile.name);

      this.http.post(apiUrl, uploadData).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading image:', error);

        }
      );
    }
  }
}
