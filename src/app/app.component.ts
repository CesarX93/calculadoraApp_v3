import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Calculadora';
  numero1: string = "";
  numero2: string = "";
  resultado: number = 0;

  sumar(): void {
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }
  restar(): void {
    if((parseInt(this.numero1)) > (parseInt(this.numero2))){
      this.resultado = parseInt(this.numero2) - parseInt(this.numero1);
    }else{
      console.log("Error");
    }
    
  }
  multiplicar() {
    this.resultado = parseInt(this.numero1) * parseInt(this.numero2);
  }
}
