module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx'],
        alias: {
          '@root': './src',
          '@store': './src/store',
          '@components': './src/components',
          '@models': './src/models',
          '@styles': './src/styles',
          '@features': './src/features',
        },
      },
    ],
  ],
};
