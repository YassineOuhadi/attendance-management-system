package com.inn.attendanceapi.serviceImpl;

import com.inn.attendanceapi.constants.SystemCst;
import com.inn.attendanceapi.dao.SalleDao;
import com.inn.attendanceapi.jwt.JwtFilter;
import com.inn.attendanceapi.model.Salle;
import com.inn.attendanceapi.service.SalleService;
import com.inn.attendanceapi.utils.SystemUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class SalleServiceImpl implements SalleService {

    @Autowired
    SalleDao salleDao;

    @Autowired
    JwtFilter jwtFilter;

    @Override
    public ResponseEntity<String> addSalle(Salle salle) {
        try {
            if (jwtFilter.isAdmin()) {
                if (salleDao.existsByNameIgnoreCase(salle.getName())) {
                    return SystemUtils.getResponseEntity("already exists", HttpStatus.INTERNAL_SERVER_ERROR);
                }

            } else {
                return SystemUtils.getResponseEntity(SystemCst.UNAUTHORIZED_ACCESS, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return SystemUtils.getResponseEntity(SystemCst.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<Salle>> getListSalle() {
        try {
            return new ResponseEntity<>(salleDao.findAll(), HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> deleteSalle(Integer id) {
        try {

            salleDao.deleteById(id);
            return new ResponseEntity<>("element deleted", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(SystemCst.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
