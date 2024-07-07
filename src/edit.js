/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	InspectorControls,
	__experimentalUseColorProps as useColorProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
} from '@wordpress/block-editor';
import {
	Disabled,
	Icon,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icons } from './icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export default function Edit( { attributes, setAttributes } ) {
	const { className, icon, size } = attributes;
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `is-${ size }` ]: size,
		} ),
	} );
	const colorProps = useColorProps( attributes );
	const borderProps = useBorderProps( attributes );
	const spacingProps = useSpacingProps( attributes );

	// Dynamically determine which icon to use for each style.
	const LightIcon = Icons[ icon ]?.light || Icons.filled?.light;
	const DarkIcon = Icons[ icon ]?.dark || Icons.filled?.dark;

	useEffect( () => {
		// Map class names to icon attribute.
		const styleToIcons = {
			'is-style-stroke': 'stroke',
			'is-style-circle': 'circle',
			'is-style-eye': 'eye',
		};

		// Find the first matching style and set the corresponding icon.
		const iconString = Object.keys( styleToIcons ).find( ( style ) =>
			className?.includes( style )
		);

		if ( iconString ) {
			setAttributes( { icon: styleToIcons[ iconString ] } );
		} else {
			// Reset or handle the attribute when no styles are matched.
			setAttributes( { icon: undefined } );
		}
	}, [ className, setAttributes ] );

	return (
		<>
			<InspectorControls group="styles">
				<ToolsPanel label={ __( 'Size', 'dark-mode-toggle-block' ) }>
					<ToolsPanelItem
						label={ __( 'Size', 'dark-mode-toggle-block' ) }
						isShownByDefault
						hasValue={ () => !! size }
						onDeselect={ () =>
							setAttributes( { size: undefined } )
						}
					>
						<ToggleGroupControl
							label={ __( 'Size', 'dark-mode-toggle-block' ) }
							hideLabelFromVision
							value={ size }
							onChange={ ( value ) => {
								setAttributes( {
									size: value,
								} );
							} }
							isBlock
							size={ '__unstable-large' }
							__nextHasNoMarginBottom
						>
							<ToggleGroupControlOption
								value="small"
								/* translators: S stands for 'small' and is a size label. */
								label={ __( 'S', 'dark-mode-toggle-block' ) }
								aria-label={ __(
									'Small',
									'dark-mode-toggle-block'
								) }
							/>
							<ToggleGroupControlOption
								value="medium"
								/* translators: M stands for 'medium' and is a size label. */
								label={ __( 'M', 'dark-mode-toggle-block' ) }
								aria-label={ __(
									'Medium',
									'dark-mode-toggle-block'
								) }
							/>
							<ToggleGroupControlOption
								value="large"
								/* translators: M stands for 'medium' and is a size label. */
								label={ __( 'L', 'dark-mode-toggle-block' ) }
								aria-label={ __(
									'Large',
									'dark-mode-toggle-block'
								) }
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<div { ...blockProps }>
				<Disabled>
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
								className,
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
									...colorProps.style.text,
								} }
							>
								<span
									className="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light"
									aria-hidden="true"
								>
									<Icon icon={ LightIcon } size={ 16 } />
								</span>
								<span
									className="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark"
									aria-hidden="true"
								>
									<Icon icon={ DarkIcon } size={ 16 } />
								</span>
							</span>
						</span>
					</label>
				</Disabled>
			</div>
		</>
	);
}
