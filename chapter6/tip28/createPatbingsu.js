function createPatbingsu({spoons = 1, toppings = ['adzuki bean']} = {}) {
	const scoopText = spoons === 1 ? 'spoon' : 'spoons'
	return `필요하신 스푼 ${spoons}개를 드렸습니다.. 추가하신 토핑은 ${toppings}입니다.`
}

console.log('createPatbingsu() : ', createPatbingsu())
// 필요하신 스푼 1개를 드렸습니다.. 추가하신 토핑은 adzuki bean입니다.