package com.inn.attendanceapi.controller;

import com.inn.attendanceapi.model.Salle;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/salle")
public interface SalleCtrl {

    @PostMapping(path = "/addSalle")
    public ResponseEntity<String> addSalle(@RequestBody(required = true) Salle salle);

    @GetMapping(path = "/get")
    public ResponseEntity<List<Salle>> getListSalle();

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteSalle(@PathVariable Integer id);

}
