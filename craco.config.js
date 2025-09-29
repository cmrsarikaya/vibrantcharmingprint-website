const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      
      // Production optimizations
      if (env === 'production') {
        // Remove source maps completely
        webpackConfig.devtool = false;
        
        // Optimize bundle splitting
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                parse: {
                  ecma: 8,
                },
                compress: {
                  ecma: 5,
                  warnings: false,
                  comparisons: false,
                  inline: 2,
                  drop_console: true, // Remove console.logs
                  drop_debugger: true,
                },
                mangle: {
                  safari10: true,
                },
                output: {
                  ecma: 5,
                  comments: false,
                  ascii_only: true,
                },
              },
              parallel: true,
            }),
          ],
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              // Vendor chunk for npm packages
              vendor: {
                name: 'vendor',
                chunks: 'all',
                test: /node_modules/,
                priority: 20,
              },
              // Common chunk for shared code
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true,
              },
            },
          },
          runtimeChunk: {
            name: 'runtime',
          },
        };

        // Add compression plugin
        webpackConfig.plugins.push(
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          })
        );

        // Performance hints
        webpackConfig.performance = {
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
          hints: 'warning',
        };
      }
      
      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
        
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/,
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }
      
      return webpackConfig;
    },
  },
  
  // Babel configuration
  babel: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      // Add any Babel plugins here if needed
    ],
  },
  
  // DevServer configuration (only for development)
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      compress: true,
      hot: !config.disableHotReload,
    };
  },
};
