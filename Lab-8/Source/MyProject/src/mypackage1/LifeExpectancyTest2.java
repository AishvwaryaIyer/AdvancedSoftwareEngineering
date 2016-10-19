package mypackage1;

import static org.junit.Assert.*;

import org.junit.Test;

public class LifeExpectancyTest2 {

	CalculateLifeExpectancy obj=new CalculateLifeExpectancy();
	long var=obj.calculatelife(21);
	long test=1;

	@Test
	public void test() {
		System.out.println("@Test life expectancy():"+var+"="+test);
		assertEquals(var,test);
	}

}
