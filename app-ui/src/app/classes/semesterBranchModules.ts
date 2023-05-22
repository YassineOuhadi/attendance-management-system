import { Enumerations } from '../enums/enumerations';
import { Branch } from './branch';
import { Module } from './module';
import { Semester } from './semester';

export class SemesterBranchModules {
  semester: Semester;
  branch: Branch;
  module: Module;
  level: Enumerations.Level;
}
