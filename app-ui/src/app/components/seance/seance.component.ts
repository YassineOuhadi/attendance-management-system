import { Component, ViewChild, OnInit } from '@angular/core';
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
  ScheduleComponent,
  ActionEventArgs,
  CellClickEventArgs,
} from '@syncfusion/ej2-angular-schedule';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

import { SeanceService } from '../../../services/seance.service';

import { SalleService } from '../../../services/salle.service';
import { Salle } from '../../classes/salle';
import { Seance } from '../../classes/seance';
import { Enumerations } from '../../enums/enumerations';
import { Element } from '../../classes/element';
import { Semester } from '../../classes/semester';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss'],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService,
  ],
})
export class SeanceComponent implements OnInit {
  public selectedDate: Date = new Date();
  datasource: any[] = [];
  public eventSettings: EventSettingsModel = {
    dataSource: this.datasource,
  };

  @ViewChild('schedule', { static: false })
  public scheduleObj: ScheduleComponent;

  listSalle: Array<Salle> = [];
  displayAddSeance: boolean = false;
  selectedSeance: Seance = new Seance();
  SeanceType = Enumerations.SeanceType;
  startDateValue: Date = new Date();
  selectedSalle: number = 0;

  public onActionBegin(args: ActionEventArgs): void {
    console.log(args);
    if (args.requestType == 'eventRemove') {
      this.seanceService.delete(args.data?.at(0).Id).subscribe(() => {
        this.loadSeances();
      });
    }
  }

  constructor(
    private seanceService: SeanceService,
    private salleService: SalleService
  ) {}

  ngOnInit(): void {
    this.loadSeances();
    this.loadSalle();
  }

  loadSalle() {
    this.salleService.getAllSalles().subscribe((listSalle) => {
      this.listSalle = listSalle;
    });
  }

  loadSeances() {
    this.seanceService.getAllSeances().subscribe((listSeances) => {
      listSeances.forEach((seance) => {
        let time = seance.time.split(':');
        let durationStr = seance.duration.split(':');
        let date = seance.date.split('-');

        let startDate = new Date(
          Number(date[0]),
          Number(date[1]) - 1,
          Number(date[2]),
          Number(time[0]),
          Number(time[1])
        );
        let endDate = new Date(
          startDate.getTime() +
            Number(durationStr[0]) * 60 * 60 * 1000 +
            Number(durationStr[1]) * 60 * 60 * 1000
        );

        this.datasource.push({
          Id: seance.id,
          Subject: seance.elementName + ' (' + seance.salleName + ')',
          StartTime: startDate,
          EndTime: endDate,
        });
      });
      this.scheduleObj.refresh();
    });
  }

  addSeance() {
    this.selectedSeance = new Seance();
    this.displayAddSeance = true;
    this.selectedSalle = 0;
    this.startDateValue = new Date();
  }

  saveSeance() {
    this.selectedSeance.date =
      this.startDateValue.getFullYear() +
      '-' +
      ((this.startDateValue.getMonth() + 1) / 10 >= 1
        ? this.startDateValue.getMonth() + 1
        : '0' + (this.startDateValue.getMonth() + 1)) +
      '-' +
      (this.startDateValue.getDate() / 10 >= 1
        ? this.startDateValue.getDate()
        : '0' + this.startDateValue.getDate());

    this.selectedSeance.time =
      (this.startDateValue.getHours() / 10 >= 1
        ? this.startDateValue.getHours()
        : '0' + this.startDateValue.getHours()) +
      ':' +
      (this.startDateValue.getMinutes() / 10 >= 1
        ? this.startDateValue.getMinutes()
        : '0' + this.startDateValue.getMinutes());

    this.selectedSeance.duration = '02:00';
    this.selectedSeance.element_id = 1;
    this.selectedSeance.semester_id = 2;

    this.seanceService.addSeance(this.selectedSeance).subscribe(() => {
      this.displayAddSeance = false;
    });
  }

  onPopupOpen(args: any) {
    if (args.type === 'Editor') {
      args.cancel = true;
    }
  }

  isValidSeance(): boolean {
    return true;
  }
}
