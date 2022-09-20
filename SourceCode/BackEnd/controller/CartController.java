package com.app.controller;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DO.CartDO;
import com.app.DO.CartItemDO;
import com.app.entity.Cart;
import com.app.entity.Cart2;
import com.app.entity.CartItem;
import com.app.entity.Product;
import com.app.entity.User;
import com.app.repository.Cart2Repository;
import com.app.repository.CartItemRepository;
import com.app.repository.CartRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.service.CartService;

@CrossOrigin("*")
@RestController
@RequestMapping(path="cart")
public class CartController {

	@Autowired
	CartService cserv;
	
	
	@Autowired
	UserRepository urep;
	
	@Autowired
	ProductRepository prep;
	
	@Autowired
	Cart2Repository crep;
	
	
	@GetMapping("/get/{uid}")
	public List<Product> get(@PathVariable int uid)
	{
		List<Product> arr=new ArrayList<Product>();
//		User u=urep.findById(uid).get();
//		if(u!=null) {
			List<Cart2> carts=crep.findByUserId(uid);
		
			for(int i = 0; i < carts.size(); i++){
				Product p=prep.findById(carts.get(i).getProductId()).get();
				arr.add(p);
			}
//			Object [] cs=pids.toArray();
//			for(Object i: cs)
//			{
//				Product p=prep.findById((Integer)i).get();
//				arr.add(p);
//			}
			return arr;
//		}
//		else
//			return null;
//		User u=urep.findById(c.getUserId()).get();
//		Cart c1=crep.checkUser(c.getUserId());
//		c1.setUser(u);
//		
//		Product p=prep.findById(c.getProductId()).get();
//		List<Product> prods=new ArrayList<Product>();
//		prods.add(p);
//		c1.setProducts(prods);
//		crep.save(c1);
	
	}
	
	@PostMapping("/add")
	public boolean add(@RequestBody Cart2 c)
	{
		
		//Integer uid=urep.findByEmailId(c.getEmailId());
		
		Cart2 c2=crep.CheckCart(c.getUserId(), c.getProductId());
		if(c2!=null)
		{
//			if(c.getQty()==1)
//			{
//				System.out.println("qty"+c2.getQty());
//				c2.setQty(c2.getQty()+1);
//			}
//			else
//			{
//				c2.setQty(c2.getQty()+c.getQty());
//			c2.setQty(1);
//			}
			crep.save(c2);
		}
		else
		{
			crep.save(c);
			return true;
		}
			
		
//		int uid=urep.findByEmailId(c.getEmailId());
//		crep.findByUserId(uid);
//		User u=urep.findById(c.getUserId()).get();
//		Cart c1=crep.checkUser(c.getUserId());
//		c1.setUser(u);
//		
//		Product p=prep.findById(c.getProductId()).get();
//		List<Product> prods=new ArrayList<Product>();
//		prods.add(p);
//		c1.setProducts(prods);
//		crep.save(c1);
		return true;
	}
	
//	@PostMapping("/add")
//	public String add2(@RequestBody CartItemDO c)
//	{
//		User u=urep.findById(c.getUserId()).get();
//		if(u!=null)
//		{
//			Cart c1=crep.checkUser(c.getUserId());
//			if(c1!=null)
//			{
//				c1.setUser(u);
//				int arr[]=c.getProductId();
//				List<Product> prods=new ArrayList<Product>();
//				for(int i=0;i<arr.length;i++)
//				{
//					prods.add(prep.findById(arr[i]).get());
//					
//				}
//				
//				
//				
//				
//				c1.setProducts(prods);
//				crep.save(c1);
//				
//				return "added";
//			}
//			else
//				return "cart not exist";
//		}
//		else
//			return "user not exist";
		
		
		
		
		
		
		
		
		
//		//if(checkcart.getCartId()!=0)
//		if(checkcart!=null)
//		{
//			CartItem c1=new CartItem(c.getQty());
//			c1.setUsers(urep.findById(c.getUserId()).get());
//			c1.setProd(prep.findById(c.getProductId()).get());
//			c1.setCart(checkcart);
//			citerep.save(c1);
//			return true;
//		}
//		else
//		{
//			CartItem c1=new CartItem(c.getQty());
//			c1.setUsers(urep.findById(c.getUserId()).get());
//			c1.setProd(prep.findById(c.getProductId()).get());
//			
//			List<CartItem> list=new ArrayList<CartItem>();
//			list.add(c1);
//			Cart c2=new Cart();
//			c2.setUsers(urep.findById(c.getUserId()).get());
//			c2.setItems(list);
//			c1.setCart(c2);
//			crep.save(c2);
//			return true;
//		}
//		
//		CartItem c1=new CartItem(c.getQty());
//		c1.setUsers(urep.findById(c.getUserId()).get());
//		c1.setProd(prep.findById(c.getProductId()).get());
//		CartItem savedc1=citerep.save(c1);
//		
//		List<CartItem> list=new ArrayList<CartItem>();
//		list.add(savedc1);
//		
//		Cart c2=new Cart();
//		c2.setItems(list);
//		return cserv.addToCart(c2);
		
		
//		Set<Product> list=new LinkedHashSet<Product>();
//		Cart c1=new Cart(c.getQty());
//		c1.setUsers(urep.findById(c.getUserId()).get());
//		Set<Product> list=new LinkedHashSet<Product>();
//		list.add(prep.findById(c.getProductId()).get());
//		c1.setProd(list);
	
//	}
	
	@DeleteMapping("/delete")
	public boolean remove(@RequestBody Cart c)
	{
		
		return cserv.removeFromCart(c);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody Cart c)
	{
		return cserv.updateCart(c);
	}
	
	
}
