document.addEventListener('DOMContentLoaded', function () {
	var menu_btn = document.querySelector('.header__menu-burger');
	var menu_mobile = document.querySelector('.menu__mobile');
	var header = document.querySelector('header');
	var header_body = document.querySelector('.header__body');
	var shop_menu = document.querySelector('.menu__header-submenu');
	var body = document.querySelector("body");

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		menu_mobile.classList.toggle('is-active');
		header.classList.toggle('is-active');
		header_body.classList.toggle('is-active');
		body.classList.toggle('lock');
	});

	shop_menu.addEventListener("mouseenter", function () {
		header.classList.toggle('is-active');
		header_body.classList.toggle('is-active');
	});

	shop_menu.addEventListener("mouseleave", function () {
		header.classList.remove('is-active');
		header_body.classList.remove('is-active');
	});

	var submenu_btn = document.querySelector('.menu__mobile-list-dropdown');

	submenu_btn.addEventListener('click', function () {
		submenu_btn.classList.toggle('is-active');
	});

	var acc = document.getElementsByClassName("menu__mobile-list-dropdown");
	var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var sublist = this.nextElementSibling;
		if (sublist.style.display === "block") {
			sublist.style.display = "none";
		} else {
			sublist.style.display = "block";
		}
	});
	}

	new Swiper('.follow__gallery', {
		navigation: {
			nextEl: ".swiper-button-next-unique",
			prevEl: ".swiper-button-prev-unique",

		},
		slidesPerView: 2.3,
		loop: true,
		spaceBetween: 25,
		keybord: {
			enabled: true,
		},
		breakpoints: {
			480: {
				slidesPerView: 2.3,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 3.3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3.9,
				spaceBetween: 25,
			}
		},
	});

	const galleryImages = document.querySelectorAll('.follow__gallery-column img');
	const popupImg = document.getElementById('popup-img');
	const popup = document.getElementById('popup');
	const popupPrev = document.getElementById('popup-prev');
	const popupNext = document.getElementById('popup-next');
	const popupCloseButton = document.getElementById('popup-close');
	let currentImageIndex = 0; 



	function openPopup(index) {
		popupImg.src = galleryImages[index].src;
		currentImageIndex = index;
		popup.style.display = 'block';
		header.classList.toggle('hidden');
		document.addEventListener('click', handleOutsideClick);
		body.classList.toggle('lock');
	}

	function closePopup() {
		popup.style.display = 'none';
		header.classList.remove('hidden');
		document.removeEventListener('click', handleOutsideClick);
	}


	function showPrevImage() {
		currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
		popupImg.src = galleryImages[currentImageIndex].src;
	}

	function showNextImage() {
		currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
		popupImg.src = galleryImages[currentImageIndex].src;
	}

	galleryImages.forEach((image, index) => {
		image.addEventListener('click', () => {
			openPopup(index);
		});
	}); 

	popupCloseButton.addEventListener('click', closePopup);
	popupPrev.addEventListener('click', showPrevImage);
	popupNext.addEventListener('click', showNextImage);

});
