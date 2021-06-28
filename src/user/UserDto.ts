export class UserDto {
  private id: number | null = null;

  public getId(): number | null {
    return this.id;
  }

  public UserReadDto = new (class {
    constructor(public superThis: UserDto) {}
    public testSetOuterPrivate(target: number) {
      this.superThis.id = target;
    }
  })(this);
}
