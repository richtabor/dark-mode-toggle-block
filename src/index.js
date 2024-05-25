/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './index.scss'

/**
 * Internal dependencies
 */
import edit from './edit'
import metadata from './block.json'
import save from './save'

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon: (
		<SVG
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path
				d='M12.056 5.25626C12.2319 5.00102 12.2448 4.6672 12.0891 4.39911C11.9335 4.13101 11.6372 3.9767 11.3283 4.00287C7.22296 4.35074 4 7.79206 4 11.987C4 16.4125 7.58755 20 12.013 20C16.208 20 19.6495 16.777 19.9971 12.6714C20.0233 12.3625 19.869 12.0663 19.6009 11.9106C19.3328 11.755 18.999 11.768 18.7437 11.9439C17.9695 12.4776 17.0318 12.79 16.0186 12.79C13.3629 12.79 11.2099 10.637 11.2099 7.98124C11.2099 6.96821 11.5223 6.03055 12.056 5.25626Z'
				fill='currentColor'
			/>
		</SVG>
	),
	example: {},
	edit,
	save
})
