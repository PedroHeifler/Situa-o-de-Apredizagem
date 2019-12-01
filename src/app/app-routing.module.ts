import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilPessoaComponent } from './perfil-pessoa/perfil-pessoa.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'perfil_pessoa', component: PerfilPessoaComponent},
  { path: 'anuncio', component: AnunciarComponent},
  { path: 'detalhes/:productId', component: DetalheProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
