import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppService } from './app.service';
import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'situacao-de-aprendizagem';
  categorias: string[];

  constructor(private service: AppService,private loginService:AuthenticationService) {
    /*this.categorias = service.getCategoria();*/
  }

  public ngOnInit() {
    function reverteCampoCarrinhoPesquisa(selector) {
      if (selector.matches) {
        $('.campo-reverter').addClass('reverter');
        $('.carrinho-desktop').hide();
        $('.carrinho-mobile').show();
      } else {
        $('.campo-reverter').removeClass('reverter');
        $('.carrinho-mobile').hide();
        $('.carrinho-desktop').show();
      }
    }
    const selector = window.matchMedia('(min-width: 960px)');
    reverteCampoCarrinhoPesquisa(selector);
    selector.addListener(reverteCampoCarrinhoPesquisa);
  }
}
