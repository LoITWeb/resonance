export default function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navLinks = document.querySelectorAll('.mobile-nav a');

	if (!navBtn || !nav) return;

	let scrollY = 0;

	function openMenu() {
		scrollY = window.scrollY;
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

		// Фиксируем страницу и компенсируем полосу прокрутки
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.left = '0';
		document.body.style.right = '0';
		document.body.style.width = '100%';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
		document.body.classList.add('no-scroll');

		nav.classList.add('mobile-nav--open');
		menuIcon.classList.add('nav-icon--active');
	}

	function closeMenu() {
		// Восстанавливаем прокрутку
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.right = '';
		document.body.style.width = '';
		document.body.style.paddingRight = '';
		document.body.classList.remove('no-scroll');
		window.scrollTo(0, scrollY);

		nav.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
	}

	function toggleMenu() {
		if (nav.classList.contains('mobile-nav--open')) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	navBtn.addEventListener('click', toggleMenu);
	navLinks.forEach(link => link.addEventListener('click', closeMenu));

	document.addEventListener('click', e => {
		if (
			nav.classList.contains('mobile-nav--open') &&
			!nav.contains(e.target) &&
			!navBtn.contains(e.target)
		) {
			closeMenu();
		}
	});
}