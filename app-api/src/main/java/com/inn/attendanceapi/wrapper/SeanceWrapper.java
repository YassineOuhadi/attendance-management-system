package com.inn.attendanceapi.wrapper;

import com.inn.attendanceapi.model.Seance.SeanceType;
import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

@Data
public class SeanceWrapper {

    private Integer id;

    private LocalDate date;

    private Time time;

    private Time duration;

    private SeanceType type;

    private Integer semesterId;

    private String elementName;

    private String salleName;

    public SeanceWrapper(Integer id, LocalDate date, Date time, Date duration, SeanceType type, Integer semesterId,
                         String elementName, String salleName) {
        this.id = id;
        this.date = date;
        this.time = Time.valueOf(time.toString());
        this.duration = Time.valueOf(duration.toString());

        this.type = type;
        this.semesterId = semesterId;
        this.elementName = elementName;
        this.salleName = salleName;
    }

}
