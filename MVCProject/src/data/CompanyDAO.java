package data;

import java.util.Set;

import entities.Company;

public interface CompanyDAO {
	
	public Set<Company> index();
	public Company show(int id);
	public Company create(String json);
	public Boolean delete(int id);
	public Company update(String json, int id);

}
