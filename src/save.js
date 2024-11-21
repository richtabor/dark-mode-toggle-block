/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetSpacingClassesAndStyles as getSpacingClassesAndStyles,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icons } from './icons';

export default function Save( { attributes } ) {
	const { className, icon, size } = attributes;
	const colorProps = getColorClassesAndStyles( attributes );
	const borderProps = getBorderClassesAndStyles( attributes );
	const spacingProps = getSpacingClassesAndStyles( attributes );

	// Dynamically determine which icon to use for each style.
	const LightIcon = Icons[ icon ]?.light || Icons.filled?.light;
	const DarkIcon = Icons[ icon ]?.dark || Icons.filled?.dark;

	const classes = classnames( className, {
		[ `is-${ size }` ]: size,
	} );

	return (
		<div { ...useBlockProps.save( { className: classes } ) }>
			<label className="wp-block-tabor-dark-mode-toggle__label">
				<input
					type="checkbox"
					className="wp-block-tabor-dark-mode-toggle__input"
					role="switch"
					aria-label={ __(
						'Toggle dark mode',
						'dark-mode-toggle-block'
					) }
					tabIndex="0"
				/>
				<span
					className={ classnames(
						'wp-block-tabor-dark-mode-toggle__track',
						colorProps.className,
						borderProps.className
					) }

					style={ {
						...borderProps.style,
						...colorProps.style,
						...spacingProps.style,
					} }
				>
					<span
						className="wp-block-tabor-dark-mode-toggle__selector"
						style={ {
							...colorProps.style,
						} }
					>
						<span
							className="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light"
							aria-hidden="true"
						>
							{ LightIcon }
						</span>
						<span
							className="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark"
							aria-hidden="true"
						>
							{ DarkIcon }
						</span>
					</span>
				</span>
			</label>
		</div>
	);
}
