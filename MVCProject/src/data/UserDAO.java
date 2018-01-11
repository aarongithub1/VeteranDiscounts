package data;

import java.util.List;

import entities.Address;
import entities.User;

public interface UserDAO {

	public List<User> index();

	public User show(int id);

	public User create(String json);

	public User delete(int id);

	public User update(String json, int id);

}
