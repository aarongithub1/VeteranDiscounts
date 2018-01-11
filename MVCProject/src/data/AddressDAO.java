package data;

import java.util.List;

import entities.Address;

public interface AddressDAO {
	
	public List<Address> index();
	public Address show(int id);
	public Address create(String json);
	public Boolean delete(int id);
	public Address update(String json, int id);

}
