class User
{
	constructor(un, pw,fn, ln, bd, ad, pc, cn, mh)
	{
		this.username = un;
		this.password = pw;
		this.firstName = fn;
		this.lastName = ln;
		this.birthday = bd;
		this.address = ad;
		this.postCode = pc;
		this.contactNo = cn;
		this.medicalHistory = mh;
	}

	getUsername()
	{
		return this.username;
	}

	getPassword()
	{
		return this.password;
	}
}

class Date
{
	constructor(d, m, y)
	{
		this.day = d;
		this.month = m;
		this.year = y;
	}
}