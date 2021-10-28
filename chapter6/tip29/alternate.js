const landscape = {
	title: 'Landscape',
	photographer: 'Nathan',
	equipment: 'Canon',
	format: 'digital',
	src: '/nadscape-nm.jpg',
	location: [32.712222, -103.1405556],
}

function displayPhoto(photo) {
	const {
		title,
		photographer = 'Anoymous',
		location: [latitude, longitude],
		src: url,
		...other
	} = photo;
	const additional = Object.keys(other).map(key => `${key}:${other[key]}`);
	
	return (`
		<img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
		<div>${title}</div>
		<div>${photographer}</div>
		<div>위도: ${latitude} </div>
		<div>경도: ${longitude} </div>
		<div>${additional.join(' <br /> ')}</div>
	`)
}

console.log('displayPhoto(landscape) : ', displayPhoto(landscape))
//	<img alt="Landscape 사진 Nathan 촬영" src="/nadscape-nm.jpg" />
//	<div>Landscape</div>
//  <div>Nathan</div>
//  <div>위도: 32.712222 </div>
//	<div>경도: -103.1405556 </div>
//	<div>equipment:Canon <br /> format:digital</div>