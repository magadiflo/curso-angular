import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-heros-directive-struct',
  templateUrl: './heros-directive-struct.component.html',
  styleUrls: ['./heros-directive-struct.component.scss']
})
export class HerosDirectiveStructComponent implements OnInit, AfterViewInit {

  @ViewChild('btnGuardar') btnGuardar: ElementRef<HTMLButtonElement> | undefined;

  showButtonSave = false;

  constructor(private _detectChanges: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.btnGuardar);
    setTimeout(() => {
      this.showButtonSave = true;
      /**
       * * Con el .detectChanges(), detectamos el cambio que ocurrió con nuestro botón,
       * * es decir, cuando se ejecuta este componente, el valor de la variable this.btnGuardar
       * * es undefined, y luego de pasada el tiempo de este setTimeout, aún sigue siendo undefined
       * * ya que el código ya se ejecutó. Entonces, para decirle a angular que vincule un elmento
       * * capturado con nuestro ViewChild, y después de haberse ejecutado la aplicación por 3 segundos depués,
       * * le decimos que haga esta detección de cambios. Posterioremente, veremos que al tratar de imprimir
       * * la variable btnGuardar, ya tendremos valor y no un undefined.
       */
      this._detectChanges.detectChanges();
      console.log(this.btnGuardar);
      this.btnGuardar!.nativeElement.innerText = 'Save Now!';
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log(this.btnGuardar);
  }

}
