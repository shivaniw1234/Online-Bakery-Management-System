package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Cart2;

@Repository
public interface Cart2Repository extends JpaRepository<Cart2, Integer>{
	
	
	@Query(value="select * from cart_tbl where user_id=:id",nativeQuery=true)
	public List<Cart2> findByUserId(int id);
	
	
//	@Query(value="select * from cart_tbl where user_id=:id",nativeQuery=true)
//	public List<Integer> findByUserId2(int id);
	

	@Query(value="select * from cart_tbl where user_id=:uid and product_id=:pid",nativeQuery=true)
	public Cart2 CheckCart(int uid,int pid);
	
	@Query(value="select * from cart_tbl where user_id=:id",nativeQuery=true)
	public List<Cart2> getUserCart(int id);
	

}
