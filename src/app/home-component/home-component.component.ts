import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      $("button").click(function () {
        var div = $("div");
        div.animate({ left: '100px' }, "slow");
        div.animate({ fontSize: '5em' }, "slow");
      });
    });
  }
}
