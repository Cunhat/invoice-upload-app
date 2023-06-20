module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel", [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          // '@app/config': './app/config',
          // '@app/context': './app/context',
          // '@app/constants': './app/constants',
          // '@app/layout': './app/layout',
          // '@app/navigation': './app/navigation',
          // '@app/screens': './app/screens',
          '@app/components': './app/components',
          '@app/ui': './app/components/ui',
          '@screens': './src/screens',
          // '@app/utils': './app/utils'
        },
      },
    ],],
  };
};
