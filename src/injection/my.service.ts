import { AnInterface } from './anInterface';
import { Injectable } from '@nestjs/common';

// TODO: Comment out to at least let nest boot
// @Injectable()
export class MyService {
  constructor(a: AnInterface, b: AnInterface) {
    console.log(`MyService: a: ${a}, b: ${b}`);

    if (a) {
      a.doSomething();
    }

    if (b) {
      b.doSomething();
    }
  }
}
