import { Enumerations } from '../enums/enumerations';

export class SeanceDto {
  id: number;
  date: string;
  semesterId: string;
  elementName: string;
  salleName: string;
  type: Enumerations.SeanceType;
  time: string;
  duration: any;
}
