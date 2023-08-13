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
	})

	shop_menu.addEventListener("mouseleave", function () {
		header.classList.remove('is-active');
		header_body.classList.remove('is-active');
	})

	var submenu_btn = document.querySelector('.menu__mobile-list-dropdown');
	submenu_btn.addEventListener('click', function () {
		submenu_btn.classList.toggle('is-active');
	});

	
});


var acc = document.getElementsByClassName("menu__mobile-list-dropdown");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var	sublist = this.nextElementSibling;
		if (sublist.style.display === "block") {
			sublist.style.display = "none";
		} else {
			sublist.style.display = "block";
		}
	});

}
