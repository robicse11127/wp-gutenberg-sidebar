const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;
const {
    Button,
    PanelBody,
    TextControl,
    TextareaControl,
    SelectControl,
    RadioControl,
    ToggleControl,
    CheckboxControl,
    DateTimePicker,
} = wp.components;
const { withSelect, withDispatch } = wp.data;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

let PluginMetaFields = ( props ) => {
    return(
        <>
            <PanelBody
                title={__( 'POsts Meta Fields', 'wp-gutenberg-sidebar' )}
                icon="admin-post"
                initialOpen={true}
            >
                <TextControl
                    value={ props.text_field }
                    label={__( 'Text meta field', 'wp-gutenberg-sidebar' )}
                    onChange={ ( value ) => props.onTextFieldChange( value ) }
                />
                <TextareaControl
                    value={ props.textarea_field }
                    label={__( 'Textarea meta field', 'wp-gutenberg-sidebar' )}
                    onChange={ ( value ) => props.onTextAreaFieldChange( value ) }
                />
                <SelectControl
                    label={__( 'Select meta field', 'wp-gutenberg-sidebar' )}
                    value={ props.select_field }
                    options={ [
                        { label: 'Big', value: '100%' },
                        { label: 'Medium', value: '50%' },
                        { label: 'Small', value: '25%' },
                    ] }
                    onChange={ ( value ) => props.onSelectFieldChange( value ) }
                />
                <RadioControl
                    label={__( 'Radio meta field', 'wp-gutenberg-sidebar' )}
                    help={__( 'The type of the current user', 'wp-gutenberg-sidebar' )}
                    selected={ props.radio_field }
                    options={ [
                        { label: 'Author', value: 'a' },
                        { label: 'Editor', value: 'e' },
                    ] }
                    onChange={ ( value ) => props.onRadioFieldChange( value ) }
                />
                <ToggleControl
                    label={__( 'Toggle meta field', 'wp-gutenberg-sidebar' )}
                    help={
                        props.toggle_field
                            ? 'Has fixed background.'
                            : 'No fixed background.'
                    }
                    checked={ props.toggle_field }
                    onChange={ ( value ) => props.onToggleFieldChange( value ) }
                />
                <CheckboxControl
                    label={__( 'Checkbox meta field', 'wp-gutenberg-sidebar' )}
                    help={__( 'Is the user a author or not?', 'wp-gutenberg-sidebar' )}
                    checked={ props.checkbox_field }
                    onChange={ ( value ) => props.onCheckboxFieldChange( value ) }
                />
                <DateTimePicker
                    currentDate={ props.date_field }
                    onChange={ ( value ) => props.onDateFieldChange( value ) }
                    is12Hour={ true }
                />
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ ( media ) => props.onMediaFieldChange( media.url )}
                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                        value={ props.media_field }
                        render={ ( { open } ) => (
                            <Button onClick={ open }>Open Media Library</Button>
                        ) }
                    />
                </MediaUploadCheck>
                <img src={ props.media_field } />
            </PanelBody>
        </>
    )
}

// Triggering withSelect.
PluginMetaFields = withSelect(
    ( select ) => {
        return {
            text_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_text_field'],
            textarea_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_textarea_field'],
            select_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_select_field'],
            radio_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_radio_field'],
            toggle_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_toggle_field'],
            checkbox_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_checkbox_field'],
            date_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_date_field'],
            media_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_media_field'],
        }
    }
)(PluginMetaFields);

// Triggering widthDispatch.
PluginMetaFields = withDispatch(
    ( dispatch ) => {
        return {
            onTextFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_text_field: value } } );
            },
            onTextAreaFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_textarea_field: value } } );
            },
            onSelectFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_select_field: value } } );
            },
            onRadioFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_radio_field: value } } );
            },
            onToggleFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_toggle_field: value } } );
            },
            onCheckboxFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_checkbox_field: value } } );
            },
            onDateFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_date_field: value } } );
            },
            onMediaFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_media_field: value } } );
            },
        }
    }
)(PluginMetaFields);

registerPlugin( 'prefix-sidebar', {
    icon: 'smiley',
    render: () => {
        return(
            <>
                <PluginSidebarMoreMenuItem
                    target="prefix-sidebar"
                >
                    { __( 'Meta Options', 'wp-gutenberg-sidebar' ) }
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="prefix-sidebar"
                    title={ __( 'Meta Options', 'wp-gutenberg-sidebar' ) }
                >
                    <PluginMetaFields />
                </PluginSidebar>
            </>
        )
    }
} )