import { Module } from '@nestjs/common';
import { SomethingA } from './SomethingA';
import { SomethingB } from './SomethingB';
import { MyService } from './my.service';

const TOKEN = 'token';

@Module({
  /*
   * Comment/uncomment the Customer Provider 'MyServiceByClass' to demonstrate the behaviour.
   *
   * See also MyService to toggle the @Injectable decorator
   */
  providers: [
    /*
     * This works, as in `a` and `b` are provided to the factory
     * and injected into MyService.
     *
     * However its a superfluous factory as MyService should be instantiatable
     * directly from it's constructor.
     */
    {
      provide: "MyServiceByFactory",
      useFactory: (a, b) => new MyService(a, b),
      inject: [
        SomethingA,
        TOKEN
      ]
    },

    /*
     * This will not work:
     *
     * a) If MyService is @Injectable() Nest will not start up. Because it can't determine
     * the instances to inject into the MyService constructor, as `useClass` doesn't use the
     * `inject` array.
     *
     * b) If MyService is NOT @Injectable() then Nest will instantiate the object but pass
     * undefined values to the constructor, as the `inject` array is not used.
     *
     * `useClass` can only be used with @Injectable and where the arguments to be injected are
     * specified via decorators (ie: @Inject()) instead of the dynamic wiring of a Customer
     * Provider object (ie: using inject).
     */
    {
      provide: "MyServiceByClass",
      useClass: MyService,
      inject: [
        SomethingA,
        TOKEN
      ]
    },

    /*
     * This is only to create the dependencies needed for above,
     * we really don't care about them
     */
    {
      provide: SomethingA,
      useClass: SomethingA
    },
    {
      provide: TOKEN,
      useClass: SomethingB
    }
  ]
})
export class InjectionModule {

}
