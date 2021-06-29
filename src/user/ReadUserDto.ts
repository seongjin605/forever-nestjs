export class ReadUserDto {
  private _name: string;
  private _age: number;
  private _gender: string;

  constructor(name: string, age: number, gender: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
}
