package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Order2;

@Repository
public interface Order2Repository extends JpaRepository<Order2, Integer>{

}
