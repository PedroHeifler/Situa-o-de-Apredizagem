import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarinhoComponent } from './carinho/carinho.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    AnunciarComponent,
    CadastroPessoaComponent,
    HomeComponentComponent,
    CarinhoComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
