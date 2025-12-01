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
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Icons } from './icons';

const deprecated = [
	{
		attributes: {
			className: { type: 'string' },
			icon: { type: 'string' },
			size: { type: 'string' },
		},
		save: ( { attributes } ) => {
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
					<label
						className="wp-block-tabor-dark-mode-toggle__label"
						htmlFor="theme-toggle"
					>
						<input
							type="checkbox"
							className="wp-block-tabor-dark-mode-toggle__input"
							id="theme-toggle"
							aria-label={ __(
								'Toggle dark mode',
								'dark-mode-toggle-block'
							) }
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
		},
	},
];

export default deprecated;
