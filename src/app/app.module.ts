import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarinhoComponent } from './carinho/carinho.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarinhoComponent } from './carinho/carinho.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnunciarComponent,
    CadastroPessoaComponent,
    HomeComponentComponent,
    CarinhoComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
