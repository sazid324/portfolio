document.addEventListener("DOMContentLoaded", () => {
	// Dynamically set current year in footer
	const yearElement = document.getElementById("current-year");
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear();
	}

	const navToggle = document.querySelector(".nav-toggle");
	const navMenu = document.querySelector(".nav-menu");
	const profileImg = document.querySelector(".profile-img");

	// Mobile navigation drawer toggle
	if (navToggle && navMenu) {
		navToggle.addEventListener("click", () => {
			navMenu.classList.toggle("active");
		});

		document.querySelectorAll(".nav-menu a").forEach((link) => {
			link.addEventListener("click", () => {
				navMenu.classList.remove("active");
			});
		});
	}

	// Gracefully handle missing profile image without breaking UI
	if (profileImg) {
		profileImg.addEventListener("error", () => {
			profileImg.src = "https://via.placeholder.com/280/050505/e8eaee?text=SAT";
		});
	}
});
