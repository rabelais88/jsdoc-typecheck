export interface Person {
  name: string;
  age: number;
}

export interface CallPersonArg {
  (name: string, age?: number): Boolean;
}

export const CallPerson: CallPersonArg;

export as namespace MyData;
