import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AppRoutingModule } from './app-routing.module';
import { AnunciarService } from './anunciar/anunciar.service';
import { PagamentoComponent } from './pagamento/pagamento.component';

import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { PerfilPessoaComponent } from './perfil-pessoa/perfil-pessoa.component';
import { PerfilPessoaService } from './perfil-pessoa/perfil-pessoa.service';
import { CadastroUsuarioService } from './cadastro-usuario/cadastro-usuario.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationService } from './login/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnunciarComponent,
    PerfilPessoaComponent,
    HomeComponent,
    CarrinhoComponent,
    DetalheProdutoComponent,
  
    CadastroUsuarioComponent,
    PagamentoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService,AnunciarService, PerfilPessoaService, CadastroUsuarioService],
  bootstrap: [AppComponent]

})
export class AppModule { }
