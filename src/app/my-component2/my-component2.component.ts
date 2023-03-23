import { Component, OnInit, DoCheck, AfterContentInit, ContentChild, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.scss']
})
export class MyComponent2Component implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

  @ContentChild('childComponent2') contentChild: HTMLElement | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('3° my-component2.component -> ngOnInit');
    console.log(this.contentChild);
    
  }

  ngDoCheck(): void {
    console.log('4° my-component2.component -> ngDoCheck');
    console.log(this.contentChild);
  }

  ngAfterContentInit(): void {
    /**
     * * Se encarga de detectar la proyección de contenido.
     * * Sirve para detectar que ya se ha renderizado alguna etiqueta que se haya proyectado.
     */
    console.log('4° - 1° my-component2.component -> ngAfterContentInit');
    console.log(this.contentChild);
  }

  ngAfterContentChecked(): void {
    /**
     * * Verifica si la proyección que ha realizado ha sufrido algún cambio.
     */
    console.log('4° - 2° my-component2.component -> ngAfterContentChecked');
    console.log(this.contentChild);
  }

  ngOnDestroy(): void {
    console.log('5° my-component2.component -> ngOnDestroy');
  }
}