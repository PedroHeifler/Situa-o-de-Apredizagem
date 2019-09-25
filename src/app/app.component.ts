import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'situacao-de-aprendizagem';
  
  public ngOnInit() {
    
    function reverteCampoCarrinhoPesquisa(x) {
      if (x.matches) {
          $(".campo-reverter").addClass("reverter")
          $(".carrinho-desktop").hide()
          $(".carrinho-mobile").show()
      } else {
          $(".campo-reverter").removeClass("reverter")
          $(".carrinho-mobile").hide()
          $(".carrinho-desktop").show()
      }
  }
  var x = window.matchMedia("(min-width: 960px)")
  reverteCampoCarrinhoPesquisa(x)
  x.addListener(reverteCampoCarrinhoPesquisa) 
  }
}
