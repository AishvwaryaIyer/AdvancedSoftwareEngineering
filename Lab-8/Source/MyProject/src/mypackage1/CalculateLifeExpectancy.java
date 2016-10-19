package mypackage1;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import javax.ws.rs.Produces;




@Path("/lifeexpectancy")
public class CalculateLifeExpectancy {
	public long lifeexpectancy;
@GET
@Produces("application/xml")

public long calculatelife(long age)
{
	lifeexpectancy=((age*100)/78);
	return lifeexpectancy;
}
}


