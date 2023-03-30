import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heros-directive-struct',
  templateUrl: './heros-directive-struct.component.html',
  styleUrls: ['./heros-directive-struct.component.scss']
})
export class HerosDirectiveStructComponent implements OnInit, AfterViewInit {

  @ViewChild('btnGuardar') btnGuardar: ElementRef<HTMLButtonElement> | undefined;

  showButtonSave = false;
  textoInput = '';
  heroes: Hero[] = [
    { id: 1, name: 'SpiderMan' },
    { id: 2, name: 'SuperMan' },
    { id: 3, name: 'BatMan' },
  ];

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

  addHero(): void {
    const objectWithIdMax = this.heroes.reduce((prevHero, currentHero) => prevHero.id > currentHero.id ? prevHero : currentHero);
    this.heroes.push({ id: objectWithIdMax.id + 1, name: this.textoInput });
  }

  modifyHero(hero: Hero): void {
    hero.name = 'Aquamán';
  }

  modify(): void {
    //* this.heroes[0].name = 'El hombre araña';
    this.refreshHeroes();
  }

  //* En el html usamos el trackBy, para actualizar solo los elementos que se necesitan actualizar
  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }

  private refreshHeroes() {
    this.heroes = [
      { id: 1, name: 'SPIDERMAN' },
      { id: 2, name: 'SuperMan' },
      { id: 3, name: 'BATMAN' },
    ];
  }

}
