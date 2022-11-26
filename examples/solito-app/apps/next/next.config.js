const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'moti',
  'nativewind',
  'app',
  '@showtime-xyz/universal.typography',
  '@showtime-xyz/universal.tailwind',
  '@showtime-xyz/universal.view',
  '@showtime-xyz/universal.text',
  '@showtime-xyz/universal.hooks',
])
const withFonts = require('next-fonts')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  webpack5: true,
  experimental: {
    forceSwcTransforms: false, // set this to true to use reanimated + swc experimentally
    swcPlugins: [[require.resolve('./plugins/swc_plugin_reanimated.wasm')]],
  },
}

module.exports = withPlugins(
  [withTM, withFonts, withImages, withExpo],
  nextConfig
)
