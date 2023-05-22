package com.inn.attendanceapi.service;

import com.inn.attendanceapi.model.Salle;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface SalleService {

    ResponseEntity<String> addSalle(Salle salle);

    ResponseEntity<List<Salle>> getListSalle();

    ResponseEntity<String> deleteSalle(Integer id);
}
