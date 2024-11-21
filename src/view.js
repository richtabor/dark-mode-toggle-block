// Cache the document element outside of the function to avoid repeated DOM queries.
const body = document.documentElement;
const darkModeToggles = document.querySelectorAll('.wp-block-tabor-dark-mode-toggle__input');

function toggleTheme() {
	// Toggle the 'theme-dark' class.
	body.classList.toggle( 'theme-dark' );
	const isDark = body.classList.contains( 'theme-dark' );

	// Update localStorage based on the presence of the class.
	localStorage.setItem(
		'darkMode',
		isDark ? 'enabled' : 'disabled'
	);

	// Update all toggles' states
	darkModeToggles.forEach(toggle => {
		toggle.checked = isDark;
		toggle.setAttribute( 'aria-checked', isDark.toString() );
	} );
}

// Initialize all toggles
darkModeToggles.forEach(toggle => {
	// Set initial state
	const isDark = body.classList.contains( 'theme-dark' );
	toggle.checked = isDark;
	toggle.setAttribute( 'aria-checked', isDark.toString() );

	// Attach event listeners
	toggle.addEventListener( 'click', toggleTheme );
	toggle.addEventListener( 'keydown', (e) => {
		if (e.code === 'Space' || e.code === 'Enter') {
			e.preventDefault();
			toggleTheme();
		}
	} );
} );
