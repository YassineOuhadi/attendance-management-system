import { Enumerations } from '../enums/enumerations';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  rfid: string;
  email: string;
  contactNumber: string;
  password: string;
  status: string;
  role: Enumerations.UserRole;

  constructor() {}
}
