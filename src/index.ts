import { Plugin } from 'vite'

export default function vitePluginDemo(options: Record<string, any>): Plugin {
	return {
		name: "vite-plugin-demo",
		transform(code: any, id: string) {
			// do some transform
			return code
		}
	}
}