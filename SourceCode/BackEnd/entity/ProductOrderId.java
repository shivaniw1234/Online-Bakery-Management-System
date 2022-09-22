package com.app.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ProductOrderId  implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Column(name="product_id")
	private int productId;
	
	@Column(name="order_id")
	private int orderId;
	

}
