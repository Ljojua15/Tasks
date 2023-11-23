import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageService } from 'src/service/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks';
}
