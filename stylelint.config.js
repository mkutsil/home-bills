/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard', 'stylelint-scss', 'stylelint-config-recommended-scss'],
    plugins: ['stylelint-order'],
    overrides: [
        {
            files: ['**/*.module.scss'], // Rules for .module.scss files
            rules: {
                'selector-class-pattern': [
                    '^[a-z][a-zA-Z0-9]+$', // camelCase
                    {
                        message:
                            'Class names in .module.scss files must be in camelCase (e.g., myComponent, sidebarMenu)',
                    },
                ],
            },
        },
        {
            files: ['**/!(*.module).scss'], // Rules for all .scss files except .module.scss
            rules: {
                'selector-class-pattern': [
                    '^[a-z][a-z0-9-]+$', // kebab-case
                    {
                        message:
                            'Class names in .scss files must be in kebab-case (e.g., my-component, sidebar-menu)',
                    },
                ],
            },
        },
    ],

    rules: {
        'order/properties-alphabetical-order': null,
        // Customizing style order
        'order/properties-order': [
            'width',
            'height',
            'max-width',
            'min-width',
            'max-height',
            'min-height',
            'display',
            'align-items',
            'justify-content',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'margin',
            'padding',
            'border',
            'border-radius',
            'box-shadow',
            'background',
            'background-color',
            'background-image',
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'line-height',
            'media',
        ],
        'scss/at-rule-no-unknown': true,
    },
};
