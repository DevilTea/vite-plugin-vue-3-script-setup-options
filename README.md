## vite-plugin-vue-3-script-setup-options

A vite plugin that wrap `@vitejs/plugin-vue` to extend the transforming process.

Currently transform the attributes, `name` and `inheritAttrs`, in `<script setup>` tag .

### Before
```vue
<script setup>
...
</script>

<script>
export default {
  name: 'MyComponent',
  inheritAttrs: false
}
</script>
```

### After
```vue
<script
  setup
  name="MyComponent"
  inheritAttrs="false"
>
...
</script>
```

## Usage

1. You will need to install the plugins
```bash
npm install -D @vitejs/plugin-vue vite-plugin-vue-3-script-setup-options
```

2. Go to your vite config, replace and wrap the original `@vitejs/plugin-vue`
```js
import VuePlugin from '@vitejs/plugin-vue'
import ScriptSetupOptionsPlugin from 'vite-plugin-vue-3-script-setup-options'

{
  ...
  plugins: [
    ScriptSetupOptionsPlugin(VuePlugin({
      // @vitejs/plugin-vue Options
    }))
  ]
  ...
}
```

## Limitations
1. eslint are not support
2. It's a rough implementation to demo the RFC proposal.
