package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Location {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String hours;
	
	@ManyToOne
	@JoinColumn(name="owner_id")
	private User owner;
	
	@ManyToOne
	@JoinColumn(name="company_id")
	private Company company;
	
	@OneToOne
	@JoinColumn(name="address_id")
	private Address address;

	public int getId() {
		return id;
	}

	public String getHours() {
		return hours;
	}

	public void setHours(String hours) {
		this.hours = hours;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Location [id=" + id + ", hours=" + hours + ", owner=" + owner + ", address=" + address + "]";
	}
	
	
}
