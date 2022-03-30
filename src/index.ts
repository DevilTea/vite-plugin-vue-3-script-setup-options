/* eslint-disable import/no-extraneous-dependencies */
import type { Plugin as Plugin_2 } from 'vite'
import type VuePlugin from '@vitejs/plugin-vue'
import { parse } from 'node-html-parser'
/* eslint-enable import/no-extraneous-dependencies */

// eslint-disable-next-line import/no-default-export
export default function Plugin (vuePlugin: ReturnType<typeof VuePlugin>): Plugin_2 {
  const $transform = vuePlugin.transform

  if (!$transform) {
    // if vuePlugin.transform is not defined, then return the original plugin
    return vuePlugin
  }

  return ({
    ...vuePlugin,
    name: 'vite-plugin-vue-extra',
    async transform (...args) {
      const transformed: Awaited<ReturnType<typeof $transform>> = await $transform.call(this, ...args)
      if (transformed != null) {
        const root = parse(args[0])
        const script = root.querySelector('script[setup]')
        if (script != null) {
          const { name, inheritAttrs } = script.attributes

          if (
            typeof transformed !== 'string'
            && typeof transformed?.code === 'string'
          ) {
            transformed.code = transformed.code.split('\n').map((line) => {
              if (/setup\(.*\) {/.test(line)) {
                return (name == null ? '' : `  name: ${JSON.stringify(name)},\n`)
                + (inheritAttrs == null ? '' : `  inheritAttrs: ${inheritAttrs !== 'false'},\n`)
                + line
              }
              return line
            }).join('\n')
          }
        }
      }
      return transformed
    },
  })
}
