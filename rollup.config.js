
export default {
  input: ['src/index.js'],
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'markdown-it-markmap',
    sourcemap: true,
  },
  external: ['markmap-lib/dist/transform']
};
