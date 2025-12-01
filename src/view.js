import { __ } from '@wordpress/i18n';

// Cache the root <html> element to avoid repeated DOM queries.
const rootElement = document.documentElement;
const darkModeToggles = document.querySelectorAll(
	'.wp-block-tabor-dark-mode-toggle__input'
);

function updateToggleState( toggle, isDarkMode ) {
	toggle.checked = isDarkMode;
	toggle.setAttribute( 'aria-checked', isDarkMode.toString() );
	toggle.setAttribute(
		'aria-label',
		isDarkMode
			? __(
					'Switch to light mode, currently dark',
					'dark-mode-toggle-block'
			  )
			: __(
					'Switch to dark mode, currently light',
					'dark-mode-toggle-block'
			  )
	);
}

function toggleTheme() {
	// Toggle the 'theme-dark' class.
	rootElement.classList.toggle( 'theme-dark' );
	const isDarkMode = rootElement.classList.contains( 'theme-dark' );

	// Update localStorage based on the presence of the class.
	localStorage.setItem( 'darkMode', isDarkMode ? 'enabled' : 'disabled' );

	// Update all toggles' states
	darkModeToggles.forEach( ( toggle ) =>
		updateToggleState( toggle, isDarkMode )
	);
}

// Initialize all toggles
darkModeToggles.forEach( ( toggle ) => {
	// Set initial state
	const isDarkMode = rootElement.classList.contains( 'theme-dark' );
	updateToggleState( toggle, isDarkMode );

	// Attach event listeners
	toggle.addEventListener( 'click', toggleTheme );
	toggle.addEventListener( 'keydown', ( e ) => {
		if ( e.code === 'Space' || e.code === 'Enter' ) {
			e.preventDefault();
			toggleTheme();
		}
	} );
} );
