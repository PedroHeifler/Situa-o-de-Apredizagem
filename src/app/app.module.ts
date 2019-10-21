import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AppRoutingModule } from './app-routing.module';
import { AnunciarService } from './anunciar/anunciar.service';
import { EnderecoComponent } from './endereco/endereco.component';
import { CadastroPessoaService } from './cadastro-pessoa/cadastro-pessoa.service';

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
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AnunciarService,CadastroPessoaService],
  bootstrap: [AppComponent]

})
export class AppModule { }
