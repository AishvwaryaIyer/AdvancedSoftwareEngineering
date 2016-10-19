package mypackage1;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

import javax.ws.rs.Produces;



@Path("/calculateage")
public class CalculateAge {
	public long age;
@GET
@Produces("application/xml")


public long calculate(long year)
{
	
	age=(2016-year);
	return age;
}
}