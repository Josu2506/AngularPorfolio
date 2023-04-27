import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  name: string = 'My banner';
  urlImg: string = '../../../assets/img/background-header1.jpg';
  photo: string = `url('${this.urlImg}')`;
}
