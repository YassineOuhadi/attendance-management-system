import { Enumerations } from '../enums/enumerations';
import { Year } from './year';
import { User } from './user';
import { Branch } from './branch';

export class YearBranchStudents {
  id: number;
  student: User;
  branch: Branch;
  year: Year;
  level: Enumerations.Level;
}
