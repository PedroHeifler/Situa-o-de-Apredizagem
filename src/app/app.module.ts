import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarinhoComponent } from './carinho/carinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent,
    HomeComponentComponent,
    CarinhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
