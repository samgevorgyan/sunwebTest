import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HotelsUrls} from '../../enums/urls';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hotels;

  pageOfItems: Array<any>;

  constructor(private httpService: HttpService) {
  }


  getHotels() {
   this.httpService.getData(environment.mainUrl + HotelsUrls.HOTELS).subscribe((res) => {
      this.hotels = res;

    });

  }


  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }



  ngOnInit() {
    this.getHotels();
  }

}
