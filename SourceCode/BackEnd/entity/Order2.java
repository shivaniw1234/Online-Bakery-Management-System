package com.app.entity;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="order2_tbl")
public class Order2 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private int orderId;
	
//	@ManyToOne
//	@JoinColumn(name="user_id")
//	private User users;
//	
	@Column(name="order_date")
	private String orderDate;
	
	@Column(name="order_price")
	private Float orderprice;
	
	@Column(name="payment_mode")
	private String paymentMode;
	
	@Column(name="payment_status")
	private String paymentStatus;
	
	private int userId;
	
	private int productId;
	
//	@ManyToOne
//	@JoinColumn(name="product_id")
//	private Product prod;
	
//	@ManyToOne
//	@JoinColumn(name="cart_id")
//	private Cart carts;
	
	
	public Order2( String orderDate,
			String paymentMode, String paymentStatus) {
		super();		
		this.orderDate = orderDate;
		this.paymentMode = paymentMode;
		this.paymentStatus = paymentStatus;
	
	}

	

//	public Product getProd() {
//		return prod;
//	}
//
//	public void setProd(Product prod) {
//		this.prod = prod;
//	}

	



	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

//	public User getUsers() {
//		return users;
//	}
//
//	public void setUsers(User users) {
//		this.users = users;
//	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public Float getOrderprice() {
		return orderprice;
	}

	public void setOrderprice(Float orderprice) {
		this.orderprice = orderprice;
	}

	

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
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

