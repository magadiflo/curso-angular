import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  constructor() {
    console.log('Constructor DemoService()');
  }

  saludo(component: string) {
    console.log(`Hello from ${component}`);
  }

}
