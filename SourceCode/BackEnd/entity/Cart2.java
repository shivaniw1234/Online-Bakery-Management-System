package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart_tbl")
public class Cart2 {

	@Id
	@Column(name="cart_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int cartId;
	
	private int userId;
	
	private int productId;
	
	private int qty;

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Cart2(int userId, int productId) {
		super();
		this.userId = userId;
		this.productId = productId;
	}
	
	

	public Cart2() {
		super();
	}

	public Cart2(int userId, int productId, int qty) {
		super();
		this.userId = userId;
		this.productId = productId;
		this.qty = qty;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	
}
