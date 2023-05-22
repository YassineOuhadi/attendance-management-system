package com.inn.attendanceapi.controllerImpl;

import com.inn.attendanceapi.constants.SystemCst;
import com.inn.attendanceapi.controller.SalleCtrl;
import com.inn.attendanceapi.model.Salle;
import com.inn.attendanceapi.service.SalleService;
import com.inn.attendanceapi.utils.SystemUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SalleCtrlImpl implements SalleCtrl {

    @Autowired
    SalleService salleService;

    @Override
    public ResponseEntity<String> addSalle(Salle salle) {
        try {
            return salleService.addSalle(salle);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return SystemUtils.getResponseEntity(SystemCst.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Salle>> getListSalle() {
        try {
            return salleService.getListSalle();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> deleteSalle(Integer id) {
        try {
            return salleService.deleteSalle(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(SystemCst.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);

    }

}
