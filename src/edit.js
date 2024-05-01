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
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
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
		const icon = Object.keys( styleToIcons ).find( ( style ) =>
			className?.includes( style )
		);

		if ( icon ) {
			setAttributes( { icon: styleToIcons[ icon ] } );
		} else {
			// Reset or handle the attribute when no styles are matched.
			setAttributes( { icon: undefined } );
		}
	}, [ className ] );

	return (
		<>
			<InspectorControls group="styles">
				<ToolsPanel label={ __( 'Size' ) }>
					<ToolsPanelItem
						label={ __( 'Size' ) }
						isShownByDefault
						hasValue={ () => !! size }
						onDeselect={ () =>
							setAttributes( { size: undefined } )
						}
					>
						<ToggleGroupControl
							label={ __( 'Invert', 'appearance-toggle-block' ) }
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
								label={ __(
									'Small',
									'appearance-toggle-block'
								) }
							/>
							<ToggleGroupControlOption
								value="large"
								label={ __(
									'Large',
									'appearance-toggle-block'
								) }
							/>
						</ToggleGroupControl>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<div { ...blockProps }>
				<Disabled>
					<label
						className="wp-block-tabor-appearance-toggle__label"
						htmlFor="theme-toggle"
					>
						<input
							type="checkbox"
							className="wp-block-tabor-appearance-toggle__input"
							id="theme-toggle"
							aria-label={ __(
								'Toggle appearance',
								'appearance-toggle-block'
							) }
						/>
						<span
							className={ classnames(
								className,
								'wp-block-tabor-appearance-toggle__track',
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
								className="wp-block-tabor-appearance-toggle__selector"
								style={ {
									...colorProps.style.text,
								} }
							>
								<span
									className="wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--light"
									aria-hidden="true"
								>
									<Icon icon={ LightIcon } size={ 16 } />
								</span>
								<span
									className="wp-block-tabor-appearance-toggle__icon wp-block-tabor-appearance-toggle__icon--dark"
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
