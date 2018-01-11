package data;

import java.util.List;

import entities.Location;

public interface LocationDAO {
	public List<Location> index();
	public Location show(int lid);
	public Location create(String json, int cid);
	public Boolean delete(int lid);
	public Location update(String json, int lid);


}
