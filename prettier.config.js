module.exports = {
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-scaffdog',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
