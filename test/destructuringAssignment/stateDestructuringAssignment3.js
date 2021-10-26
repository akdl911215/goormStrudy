const loginInfo = {
	device: {
		createAt: '1991-12-15',
		createId: '0000000ab',
		deviceType: 'desktop'
	},
	user: {
		createAt: '2008-09-04',
		email: 'abcdeg@gmail.com',
		name: '정말이쁨',
		nickname: 'No',
		phoneNumber: '010-1234-4321'
	}
}

const {
	device,
	user: {
		name,
		nickname,
		phoneNumber: phone
	}
} = loginInfo

console.log(device)
// { createAt: '1991-12-15', createId: '0000000ab', deviceType: 'desktop' }

// console.log(device, user)
// ReferenceError: user is not defined