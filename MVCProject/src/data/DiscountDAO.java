package data;

import java.util.Set;

import entities.Discount;

public interface DiscountDAO {
	
	public Discount showDiscount (int discountId);
	public Set<Discount> getDiscountsForLocation(int locationId);
	public Discount createDiscount(String json, int userId);
	public boolean deleteDiscount(int discountId, int userId);
	public Discount updateDiscount(int discountId, int uid,String json);
	
}
