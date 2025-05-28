import { User } from './user.model';

export class UserClass implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public isActive: boolean = true
  ) {}

  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
