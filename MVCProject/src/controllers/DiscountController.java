package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.DiscountDAO;
import entities.Discount;

@RestController
public class DiscountController {
	@Autowired
	private DiscountDAO dao;
	
	@RequestMapping(path = "discount/{did}", method = RequestMethod.GET)
	public Discount show(HttpServletRequest req, HttpServletResponse res, @PathVariable int did) {
	  return dao.showDiscount(did);
	}
	
	@RequestMapping(path = "discount/{lid}", method = RequestMethod.GET)
	public List<Discount> discountsByLocation(HttpServletRequest req, HttpServletResponse res, @PathVariable int lid){
		return dao.getDiscountsForLocation(lid);
	}
	
	@RequestMapping(path = "discount", method = RequestMethod.POST)
	public Discount create(HttpServletRequest req, HttpServletResponse res, @RequestBody String stringJson) {
		
		Discount discount = dao.createDiscount(stringJson);
		if(discount ==null ) {
			res.setStatus(400);
		}
		return discount;
	}
	
	
	
}
