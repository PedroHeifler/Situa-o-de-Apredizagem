import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  categioria = ["HARDWARE","PERIFERICOS","COMPUTADOR", "MOUSES", "TECLADOS"]
constructor() { }

getCategoria() {
  return this.categioria;
}
}
