import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AppRoutingModule } from './app-routing.module';
import { EnderecoComponent } from './endereco/endereco.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AnunciarComponent,
      CadastroPessoaComponent,
      HomeComponent,
      CarrinhoComponent,
      DetalheProdutoComponent,
      EnderecoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
