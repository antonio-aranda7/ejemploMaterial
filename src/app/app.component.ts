import { Component, /*CAP12*/ ViewChild} from '@angular/core';
/*CAP12*/
import { SelectornumericoComponent} from './selectornumerico/selectornumerico.component'
/*CAP15*/
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploMaterial';
  /*Consumir un servicio Web que devuelva datos en formato JSon*/
  banderas = null;
  /*CAP15*/
  articulos2 = null;
  /*CAP13*/
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];
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

  constructor(/*CAP15*/private http: HttpClient) {
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
  
  ngOnInit() {
    /*Consumir un servicio Web que devuelva datos en formato JSon*/
    this.http.get("https://restcountries.eu/rest/v2/all")
      .subscribe(
        result => {
          this.banderas = result;
        },
        error => {
          console.log('problemas');
        }
      );
      //CAP15
      this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        result => {
          this.articulos2 = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }
}
