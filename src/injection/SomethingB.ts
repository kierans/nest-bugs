import { AnInterface } from './anInterface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SomethingB implements AnInterface {
  doSomething() {
    console.log("Something B")
  }
}
