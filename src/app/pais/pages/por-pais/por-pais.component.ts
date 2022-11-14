import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = 'Hola mundo';
  hayError: boolean =  false;
  mostrarSugerencias: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor( private paisService: PaisService ) { }
  
  buscar( termino: string ): void{
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) =>{
      console.log( paises );
      this.paises =  paises;
    }, (err) =>{
      this.hayError = true;
      this.paises = [];
    }); 
  }

  sugerencias( termino: string ){
    this.hayError= false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5) ),
      () =>{
        this.paisesSugeridos = [];
        this.mostrarSugerencias = false;
      } ; //Manejo de errores
  }

  buscarSugerido( termino: string ){
    this.buscar(termino);
  }

}
