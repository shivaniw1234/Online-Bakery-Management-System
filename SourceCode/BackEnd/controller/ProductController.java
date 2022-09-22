package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Product;
import com.app.repository.ProductRepository;
import com.app.service.ProductService;

//@CrossOrigin(origins ={"http://localhost:3000"}, allowedHeaders={"Accept"})

@CrossOrigin("*")
@RestController
@RequestMapping(path="product")
public class ProductController {
	
	@Autowired
	ProductRepository prep;
	
	@Autowired
	ProductService pserv;
	
	public ProductController()
	{
		System.out.println("product controller created");
	}
	
	@RequestMapping(path = "{dishId}", method = RequestMethod.PUT, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public boolean addProduct(@RequestBody Product p)
	{
		return pserv.addProudct(p);
	}
	
//	@GetMapping("/view")
//	public String f2(Model model)
//	{
//		Optional<ImageEntity> img = repo.findById(2);
//		ImageEntity entity = null;
//		if(img.isPresent())
//		{
//			entity = img.get();
//		}
//		String encodedString = Base64.getEncoder().encodeToString(entity.getImage());
//		model.addAttribute("photo", encodedString);
//		return "index.jsp";
//	}
//	
//	@PostMapping(value="/image")
//	public String f1(@RequestParam MultipartFile file, @RequestParam int id)  
//	{
//		//String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//		try {
//			ImageEntity img = new ImageEntity(id, file.getBytes());
//			repo.save(img);
//		}
//		catch (Exception e) {
//			System.out.println("Exception Occured");
//		}
//		return "index.jsp";
//	}

	@GetMapping("/findbycat/{cat}")
	public List<Product> findByCategory(@PathVariable String cat)
	{
		return pserv.findByCategory(cat);
	}
	
	@GetMapping("/findbyName/{pname}")
	public List<Product> findByName(@PathVariable String pname)
	{
		return pserv.findByName(pname);
	}
	
	@GetMapping("/findbyid/{id}")
	public Product findByCategory(@PathVariable int id)
	{
		return prep.findById(id).get();
	}
	
	@GetMapping("getAll")
	public List<Product> getAll()
	{
		return pserv.getAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean remove(@PathVariable int id)
	{
		return pserv.deleteProudct(id);
	}
}
