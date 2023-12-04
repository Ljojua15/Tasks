import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imgplace',
  templateUrl: './imgplace.component.html',
  styleUrls: ['./imgplace.component.scss'],
})
export class ImgplaceComponent {
  imageFile: File | null = null;

  constructor(private http: HttpClient) {}

  handleFileInput(event: any) {
    this.imageFile = event.target.files[0];
  }

  uploadImage(form: any) {
    console.log(this.imageFile);

    if (this.imageFile) {
      const apiUrl = 'https://static.tsameti.com/tournaments-images';

      const uploadData = new FormData();
      uploadData.append('image', this.imageFile);

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
