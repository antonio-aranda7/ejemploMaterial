import { Component, /*CAP12*/ ViewChild} from '@angular/core';
/*CAP12*/
import { SelectornumericoComponent} from './selectornumerico/selectornumerico.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploMaterial';
  /*CAP12*/
  @ViewChild('selector1') selector1: SelectornumericoComponent;
  @ViewChild('selector2') selector2: SelectornumericoComponent;  

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }
  //CAP11 NADA solo HTML
  //CAP10
  mensaje='';

  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
//cap 9
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }
}
