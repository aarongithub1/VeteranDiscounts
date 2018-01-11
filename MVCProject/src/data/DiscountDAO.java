package data;

import java.util.List;

import entities.Discount;

public interface DiscountDAO {
	public Discount showDiscount (int discountId);
	public List<Discount> getDiscountsForLocation(int locationId);
	public Discount createDiscount(String json);
	public boolean deleteDiscount(int discountId);
	public Discount updateDiscount(int discountId, String json);
	
}
