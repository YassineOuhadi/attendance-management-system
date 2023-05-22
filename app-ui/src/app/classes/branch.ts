import { SemesterBranchModules } from './semesterBranchModules';
import { YearBranchStudents } from './yearBranchStudents';

export class Branch {
  id: number;
  name: string;
  yearBranchStudents: Array<YearBranchStudents>;
  semesterBranchModules: Array<SemesterBranchModules>;
}
