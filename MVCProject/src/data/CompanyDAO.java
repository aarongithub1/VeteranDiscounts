package data;

import java.util.List;
import java.util.Set;

import entities.Company;

public interface CompanyDAO {
	
	public Set<Company> index();
	public Company show(int id);
	public Company create(int uid,String json);
	public Boolean delete(int id, int uid);
	public Company update(String json, int cid, int uid);
	public List<Company> getLocationsByCompany(String json);

}
