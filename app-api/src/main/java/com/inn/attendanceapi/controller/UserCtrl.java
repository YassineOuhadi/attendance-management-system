package com.inn.attendanceapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping(path = "/user")
public interface UserCtrl {

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody(required = true) Map<String,String> requestMap);

    @PostMapping(path = "/updateStatus")
    public ResponseEntity<String> update(@RequestBody(required = true) Map<String,String> requestMap);

    @GetMapping(path = "/checkToken")
    ResponseEntity<String> checkToken();

    @PostMapping(path = "/changePassword")
    ResponseEntity<String> changePassword(@RequestBody Map<String,String> requestMap);

    @PostMapping(path = "/forgotPassword")
    ResponseEntity<String> forgotPassword(@RequestBody Map<String,String> requestMap);

    @PostMapping(path = "/delete/{id}")
    ResponseEntity<String> delete(@PathVariable Integer id);
}
