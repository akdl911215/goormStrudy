function Obj() {
	let personProfile = 'foo baz';
	
	personProfile.get = this.getPersonProfile = function() {
		return personProfile;
	}
	
	this.appendSchoolToPersonProfile = function () {
		personProfile += ' scool';
	}
}

let obj = new Obj();
console.log(obj.getPersonProfile());