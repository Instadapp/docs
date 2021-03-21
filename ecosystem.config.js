module.exports = {
  apps: [
    {
      name: 'docs-nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        PORT: '4000',
      },
      env_production: {
        PORT: '4000',
      },
    },
  ],
}
