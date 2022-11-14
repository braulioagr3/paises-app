import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  ngOnInit(): void {
    this.debuncer
    .pipe( debounceTime( 300) )
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    })
  }

  @Input() placeholder: string = '';

  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 
  
  debuncer: Subject<string> = new Subject();

  buscar(){
    this.onEnter.emit( this.termino );
    this.debuncer.subscribe
  }
  teclaPresionada(  ){
    this.debuncer.next( this.termino )
  }
}
