/**
 *  User model class.
 */
export default class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(data: User) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;

    // Or use Object.Assign
  }
}
