package entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="store_type")
public class Type {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@JsonIgnore
	@OneToMany(mappedBy = "type")
	private Set<Company> companies;
	//GETTERS AND SETTERS
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<Company> getCompanies() {
		return companies;
	}
	public void setStores(Set<Company> companies) {
		this.companies = companies;
	}
	public int getId() {
		return id;
	}
	//EVERYTHING ELSE
	@Override
	public String toString() {
		return "Type [id=" + id + ", name=" + name + "]";
	}	
}
