const url = 'https://fakestoreapi.com/products';

try {
	let loadingSpinner = document.querySelector('.ringcontainer');
	let header = document.querySelector('header');
	let endin = document.querySelector('.sec-1');
	let product = document.querySelector('main');
	let aside = document.querySelector('aside');
	let bg = document.querySelector('.bg');
	let banner = document.querySelector('.aside-2-close');
	let arrow = document.querySelector('.arrow');
	let bannerExpanded = document.querySelector('.bannerExpanded');
	bannerExpanded.style.visibility = 'hidden';

	banner.addEventListener('click', () => {
		banner.classList.toggle('expanded-banner');
		arrow.classList.toggle('expanded-arrow');

		if (arrow.classList.contains('expanded-arrow')) {
			arrow.style.borderRight = 'none';
			bannerExpanded.style.visibility = 'visible';
			bannerExpanded.style.zIndex = '1000'; // Set a higher z-index value
		} else {
			arrow.style.borderRight = '14px solid #fff';
			bannerExpanded.style.visibility = 'hidden';
			bannerExpanded.style.zIndex = ''; // Reset z-index to its original value
		}
	});

	function openProductDetails(productId) {
        window.location.href = `/myntra/products-detail/index.html?id=${productId}`;
    }


	aside.style.visibility = 'hidden';
	endin.style.visibility = 'hidden';
	product.style.visibility = 'hidden';
	header.style.visibility = 'hidden';

	async function fetchData() {
		const response = await fetch(url);
		const result = await response.json();

		loadingSpinner.classList.add('hide');
		bg.classList.add('hide');
		aside.style.visibility = 'visible';
		endin.style.visibility = 'visible';
		product.style.visibility = 'visible';
		header.style.visibility = 'visible';

		console.log(result);

		let itemNo = document.querySelector('.item-no');
		itemNo.innerHTML = `${result.length} - items`;

		const maxDescriptionLength = 100;
		let productContainer = document.querySelector('.main-1');
		

		result.map(productItem => {
			let card = document.createElement('div');
			card.classList.add('card');
			card.classList.add(`custom-card`)
			card.id = `product_${productItem.id}`;

			let img = document.createElement('img');
			img.classList.add('card-img-top');
			img.src = productItem.image;
			card.appendChild(img);

			let cardBody = document.createElement('div');
			cardBody.classList.add('card-body');
			card.appendChild(cardBody);

			let rating = document.createElement('div');
			rating.classList.add('rating');
			rating.innerHTML = `${productItem.rating.rate}
				<box-icon name='star' type='solid' color='#FFA651' ></box-icon> | ${productItem.rating.count} reviews`;
			cardBody.appendChild(rating);

			let title = document.createElement('h5');
			title.classList.add('card-title');
			title.classList.add(`fw-bold`);
			title.innerHTML = productItem.title;
			cardBody.appendChild(title);

			let description = document.createElement('p');
			description.classList.add('card-text');
			description.innerHTML = productItem.description.length > maxDescriptionLength ? productItem.description.substring(0, maxDescriptionLength) + '...' : productItem.description;
			cardBody.appendChild(description);

			let rate = document.createElement('p');
			rate.classList.add('price');
			rate.innerHTML = `₹${productItem.price} <span class="cut-rate">₹100
			</span><span class="off"> (55% OFF)</span>`;
			cardBody.appendChild(rate);

			card.addEventListener('click', () => openProductDetails(productItem.id));

			productContainer.appendChild(card);
		});
	}

	fetchData();
} catch (error) {
	console.error(error);
}

let digitalClock = () => {
	let currentDate = new Date();
	let futureDate = new Date('January 31, 2024 00:00:00'); // Replace with your desired future date

	let timeDifference = futureDate - currentDate;

	if (timeDifference <= 0) {
		// If the countdown has reached zero or is negative, you can handle it accordingly
		console.log('Countdown has ended!');
		return;
	}

	let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	let hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minute = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	let second = Math.floor((timeDifference % (1000 * 60)) / 1000);

	days = (days < 10) ? `0${days}` : days;
	hour = (hour < 10) ? `0${hour}` : hour;
	minute = (minute < 10) ? `0${minute}` : minute;
	second = (second < 10) ? `0${second}` : second;

	let day = document.querySelector('.day');
	let hours = document.querySelector('.hours');
	let monute = document.querySelector('.minute');
	let sec = document.querySelector('.sec');
	day.innerHTML = `${days} <span class="day-text">Day</span></span><span class='colon'>:</span>`;
	hours.innerHTML = `${hour} <span class="hour-txt">H</span></span><span class='colon'>:</span>`;
	monute.innerHTML = `${minute} <span class="minute-txt">M</span><span class='colon'>:</span>`;
	sec.innerHTML = `${second} <span class="sec-txt">S</span>`;
	setTimeout(digitalClock, 1000);
};

digitalClock();
