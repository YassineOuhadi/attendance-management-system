import { Enumerations } from '../enums/enumerations';
import { Element } from './element';
import { Salle } from './salle';
import { Semester } from './semester';

export class Seance {
  id: number;
  date: string;
  semester_id: number;
  element_id: number;
  salle_id: number;
  type: Enumerations.SeanceType;
  time: string;
  duration: string;
}
