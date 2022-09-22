package com.app.controller;

import java.text.DecimalFormat;
import java.util.List;

import org.hibernate.engine.transaction.jta.platform.internal.OC4JJtaPlatform;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DO.OrderDO;
import com.app.entity.Address;
import com.app.entity.Cart2;
import com.app.entity.Order;
import com.app.entity.Order2;
import com.app.entity.Product;
import com.app.entity.User;
import com.app.repository.AddressRepository;
import com.app.repository.Cart2Repository;
import com.app.repository.CartRepository;
import com.app.repository.Order2Repository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.service.OrderService;

@RestController
@RequestMapping(path="order")
public class OrderController {
	
	@Autowired
	UserRepository urep;
	
	@Autowired	
	Cart2Repository crep;
	
	@Autowired
	ProductRepository prep;
	
	@Autowired
	OrderService oserv;
	
	@Autowired
	AddressRepository arep;
	
	@Autowired
	Order2Repository orep;
	
	@PostMapping("/add")
	public boolean addOrder(@RequestBody OrderDO c)
	{
		
		for(int i=0;i<c.getProductId().length;i++)
		{
			System.out.println("ids"+c.getProductId()[i]);
			Order2 ord=new Order2(c.getOrderDate(),c.getPaymentMode(),c.getPaymentStatus());
			ord.setUserId(c.getUserId());
			Cart2 c2=crep.CheckCart(c.getUserId(), c.getProductId()[i]);
			int qty=c2.getQty();
			Product p=prep.findById(c.getProductId()[i]).get();
			float cost=p.getSellingPrice();
			float total=qty*cost;
			ord.setOrderprice(total);
			ord.setProductId(c.getProductId()[i]);
			orep.save(ord);
		
		}
		
	return true;
	
		
//		Order o1=new Order(o.getOrderDate(),o.getPaymentMode(),o.getPaymentStatus());
//		User u=urep.findById(o.getUserId()).get();
//		Float tamount=0.0f;
//		
//		
//		if(u!=null)
//		{
//			List<Cart2> carts=crep.getUserCart(u.getId());
//			for(int i = 0; i < carts.size(); i++){
//			    int pid=carts.get(i).getProductId();
//			    tamount+=carts.get(i).getQty() * prep.findById(pid).get().getSellingPrice();
//			}
//			o1.setOrderprice(tamount);
//			o1.setUsers(u);
//			oserv.PlaceOrder(o1);
//			return true;
//		}
//		else
//		{
//			
//			return false;
//		}
	
	}
	
	@GetMapping("/history")
	public List<Order> OrderHistory(@PathVariable int userId)
	{
		 return oserv.getUserOrderHistory(userId);
	}
	
	@PostMapping("/address")
	public Address adddeliveryAddress(@RequestBody Address addr)
	{
		 return arep.save(addr);
	}
	
	

}
