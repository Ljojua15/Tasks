import { Component } from '@angular/core';
import { images } from 'src/modules/image.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.scss']
})
export class UploadimgComponent {
  addImg(addImg:images){
    console.log('lasha')
  }
}

