const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;
const { PanelBody, TextControl } = wp.components;
const { withSelect, withDispatch } = wp.data;

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
                >

                </TextControl>
            </PanelBody>
        </>
    )
}

PluginMetaFields = withSelect(
    ( select ) => {
        return {
            text_field: select( 'core/editor' ).getEditedPostAttribute( 'meta' )['_prefix_text_field'],
        }
    }
)(PluginMetaFields);

PluginMetaFields = withDispatch(
    ( dispatch ) => {
        return {
            onTextFieldChange: ( value ) => {
                dispatch( 'core/editor' ).editPost( { meta: { _prefix_text_field: value } } );
            }
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