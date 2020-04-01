import { AnInterface } from './anInterface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SomethingA implements AnInterface {
  doSomething() {
    console.log('Something A');
  }
}
