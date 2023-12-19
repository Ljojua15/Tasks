import { Component, OnInit } from '@angular/core';
import { Header, Images } from 'src/modules/image.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.scss'],
})
export class UploadimgComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.upDate();
  }

  upDatePage() {
    this.upDate();
  }

  addImg(addedImg: Images) {
    // console.log(addedImg)
    this.http
      .post('https://static.tsameti.com/tournaments-images/', addedImg)
      .subscribe((res) => {
        // console.log(res);
      });
  }

  private upDate() {
    this.http
      .get(
        'https:freeapi.miniprojectideas.com/api/Annadata/GetFarmerDasboardById'
      )
      .subscribe((res: any) => {
        console.log(res.data[0].totalRfqCreated);
        res.toLocaleString;
      });
  }
}
