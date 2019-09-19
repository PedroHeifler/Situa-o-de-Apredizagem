import { Component } from '@angular/core';

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
          document.querySelector(".campo-reverter").classList.add("reverter")
          document.querySelector(".carrinho-desktop").style.display = "none"
          document.querySelector(".carrinho-mobile").style.display = "inline"
      } else {
          document.querySelector(".campo-reverter").classList.remove("reverter")
          document.querySelector(".carrinho-mobile").style.display = "none"
          document.querySelector(".carrinho-desktop").style.display = "inline"
      }
  }
  var x = window.matchMedia("(min-width: 960px)")
  reverteCampoCarrinhoPesquisa(x)
  x.addListener(reverteCampoCarrinhoPesquisa) 
  }
}
