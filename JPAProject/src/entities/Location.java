package entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Location {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String hours;
	
	@Column(name="phone_number")
	private String phoneNumber;
	
	@ManyToOne
	@JoinColumn(name="owner_id")
	private User owner;
	
	@ManyToOne
	@JoinColumn(name="company_id")
	private Company company;
	
	@OneToOne
	@JoinColumn(name="address_id")
	private Address address;
	
	@ManyToMany
	@JoinTable(name="participating_locations", joinColumns=@JoinColumn(name="discount_id"), inverseJoinColumns=@JoinColumn(name="location_id"))
	private List<Discount> discounts;

	public int getId() {
		return id;
	}

	public String getHours() {
		return hours;
	}

	public void setHours(String hours) {
		this.hours = hours;
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
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
	

	public List<Discount> getDiscounts() {
		return discounts;
	}

	public void setDiscounts(List<Discount> discounts) {
		this.discounts = discounts;
	}

	@Override
	public String toString() {
		return "Location [id=" + id + ", hours=" + hours + ", phoneNumber=" + phoneNumber + ", owner=" + owner + ", address=" + address + "]";
	}
	
	
}
