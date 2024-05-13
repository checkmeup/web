import flowbite from 'flowbite-react/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [flowbite.plugin()],
};
