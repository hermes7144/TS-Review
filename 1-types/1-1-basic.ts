{
  // number
  let num: number = 3;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: null;
  let person2: string | null;

  // unknown bad!
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any bad!
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
  }

  // never
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  // object
  let obj: object; // bad
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ name: 'dog' });
}
