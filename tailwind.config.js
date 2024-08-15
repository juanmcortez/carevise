import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        colors: {
            'dark-50': 'rgb(var(--color-dark-50) / <alpha-value>)',
            'dark-100': 'rgb(var(--color-dark-100) / <alpha-value>)',
            'dark-200': 'rgb(var(--color-dark-200) / <alpha-value>)',
            'dark-300': 'rgb(var(--color-dark-300) / <alpha-value>)',
            'dark-400': 'rgb(var(--color-dark-400) / <alpha-value>)',
            'dark-500': 'rgb(var(--color-dark-500) / <alpha-value>)',
            'dark-600': 'rgb(var(--color-dark-600) / <alpha-value>)',
            'dark-700': 'rgb(var(--color-dark-700) / <alpha-value>)',
            'dark-800': 'rgb(var(--color-dark-800) / <alpha-value>)',
            'dark-900': 'rgb(var(--color-dark-900) / <alpha-value>)',
            'dark-950': 'rgb(var(--color-dark-950) / <alpha-value>)',
            'light-50': 'rgb(var(--color-light-50) / <alpha-value>)',
            'light-100': 'rgb(var(--color-light-100) / <alpha-value>)',
            'light-200': 'rgb(var(--color-light-200) / <alpha-value>)',
            'light-300': 'rgb(var(--color-light-300) / <alpha-value>)',
            'light-400': 'rgb(var(--color-light-400) / <alpha-value>)',
            'light-500': 'rgb(var(--color-light-500) / <alpha-value>)',
            'light-600': 'rgb(var(--color-light-600) / <alpha-value>)',
            'light-700': 'rgb(var(--color-light-700) / <alpha-value>)',
            'light-800': 'rgb(var(--color-light-800) / <alpha-value>)',
            'light-900': 'rgb(var(--color-light-900) / <alpha-value>)',
            'light-950': 'rgb(var(--color-light-950) / <alpha-value>)',
            'primary-50': 'rgb(var(--color-primary-50) / <alpha-value>)',
            'primary-100': 'rgb(var(--color-primary-100) / <alpha-value>)',
            'primary-200': 'rgb(var(--color-primary-200) / <alpha-value>)',
            'primary-300': 'rgb(var(--color-primary-300) / <alpha-value>)',
            'primary-400': 'rgb(var(--color-primary-400) / <alpha-value>)',
            'primary-500': 'rgb(var(--color-primary-500) / <alpha-value>)',
            'primary-600': 'rgb(var(--color-primary-600) / <alpha-value>)',
            'primary-700': 'rgb(var(--color-primary-700) / <alpha-value>)',
            'primary-800': 'rgb(var(--color-primary-800) / <alpha-value>)',
            'primary-900': 'rgb(var(--color-primary-900) / <alpha-value>)',
            'primary-950': 'rgb(var(--color-primary-950) / <alpha-value>)',
            'secondary-50': 'rgb(var(--color-secondary-50) / <alpha-value>)',
            'secondary-100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
            'secondary-200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
            'secondary-300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
            'secondary-400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
            'secondary-500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
            'secondary-600': 'rgb(var(--color-secondary-600) / <alpha-value>)',
            'secondary-700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
            'secondary-800': 'rgb(var(--color-secondary-800) / <alpha-value>)',
            'secondary-900': 'rgb(var(--color-secondary-900) / <alpha-value>)',
            'secondary-950': 'rgb(var(--color-secondary-950) / <alpha-value>)',
            'accent-50': 'rgb(var(--color-accent-50) / <alpha-value>)',
            'accent-100': 'rgb(var(--color-accent-100) / <alpha-value>)',
            'accent-200': 'rgb(var(--color-accent-200) / <alpha-value>)',
            'accent-300': 'rgb(var(--color-accent-300) / <alpha-value>)',
            'accent-400': 'rgb(var(--color-accent-400) / <alpha-value>)',
            'accent-500': 'rgb(var(--color-accent-500) / <alpha-value>)',
            'accent-600': 'rgb(var(--color-accent-600) / <alpha-value>)',
            'accent-700': 'rgb(var(--color-accent-700) / <alpha-value>)',
            'accent-800': 'rgb(var(--color-accent-800) / <alpha-value>)',
            'accent-900': 'rgb(var(--color-accent-900) / <alpha-value>)',
            'accent-950': 'rgb(var(--color-accent-950) / <alpha-value>)',
            'info': {
                '50': '#f5f7fa',
                '100': '#ebeff3',
                '200': '#d2dbe5',
                '300': '#abbdce',
                '400': '#7d99b3',
                '500': '#577590',
                '600': '#496480',
                '700': '#3c5168',
                '800': '#344558',
                '900': '#2f3c4b',
                '950': '#1f2732',
            },
            'success': {
                '50': '#f3f8ed',
                '100': '#e3f0d7',
                '200': '#c9e2b4',
                '300': '#a7ce88',
                '400': '#90be6d',
                '500': '#699e44',
                '600': '#507d33',
                '700': '#3f602b',
                '800': '#344e26',
                '900': '#2f4324',
                '950': '#16240f',
            },
            'warning': {
                '50': '#fff8eb',
                '100': '#fdeac8',
                '200': '#fcd28b',
                '300': '#fab54f',
                '400': '#f8961e',
                '500': '#f2760e',
                '600': '#d65409',
                '700': '#b2370b',
                '800': '#902a10',
                '900': '#772310',
                '950': '#440f04',
            },
            'danger': {
                '50': '#fff1f1',
                '100': '#ffe0e1',
                '200': '#ffc7c8',
                '300': '#ffa0a2',
                '400': '#ff696b',
                '500': '#f94144',
                '600': '#e61c1f',
                '700': '#c21316',
                '800': '#a01416',
                '900': '#851719',
                '950': '#480708',
            },
        },
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [
        forms,
        plugin(
            function ({
                addVariant
            }) {
                addVariant('hocus', ['&:hover', '&:focus'])
            }
        ),
    ],
};
