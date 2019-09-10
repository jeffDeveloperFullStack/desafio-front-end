import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProdutos().subscribe(
      response => {
        this.data = response;
        console.log(response);
      }
    );
  }

  public onFavorito(id, checked) {
    console.log(id);
    console.log(checked);
  }
}
