# vite-plugin-dts

**中文** | [English](./README.md)

一款用于在 [库模式](https://cn.vitejs.dev/guide/build.html#library-mode) 中，从 `.ts` 或 `.vue` 源文件生成类型文件（`.d.ts`）的 Vite 插件。

## 安装

```sh
pnpm add vite-plugin-dts -D
```

## 使用

在 `vite.config.ts`:

```ts
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    }
  },
  plugins: [dts()]
})
```

在你的组件中:

```vue
<template>
  <div></div>
</template>

<script lang="ts">
// 使用 defineComponent 来进行类型推断
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Component'
})
</script>
```

```vue
<script setup lang="ts">
// 尽管没有直接使用 props，你仍需要接收 defineProps 的返回值
const props = defineProps<{
  color: 'blue' | 'red'
}>()
</script>

<template>
  <div>{{ color }}</div>
</template>
```

## 选项

```ts
import type { ts, Diagnostic } from 'ts-morph'

interface TransformWriteFile {
  filePath?: string
  content?: string
}

export interface PluginOptions {
  // 执行的根目录
  // 默认基于 vite 配置的 root 选项
  root?: string

  // 声明文件的输出目录
  // 默认基于 vite 配置的输出目录
  outputDir?: string

  // 用于手动设置入口文件的根路径
  // 在计算每个文件的输出路径时将基于该路径
  // 默认为所有文件的最小公共路径
  entryRoot?: string

  // 提供给 ts-morph Project 初始化的 compilerOptions 选项
  // 默认值: null
  compilerOptions?: ts.CompilerOptions | null

  // 提供给 ts-morph Project 初始化的 tsconfig.json 路径
  // 插件也会读取 tsconfig.json 的 incldue 和 exclude 选项来解析文件
  // 默认值: 'tsconfig.json'
  tsConfigFilePath?: string

  // 是否将 '.vue.d.ts' 文件名转换为 '.d.ts'
  // 默认值: false
  cleanVueFileName?: boolean

  //是否将动态引入转换为静态
  // 当开启打包类型文件时强制为 true
  // eg. 'import('vue').DefineComponent' 转换为 'import { DefineComponent } from "vue"'
  // 默认值: false
  staticImport?: boolean

  // 手动设置包含路径的 glob
  // 默认基于 tsconfig.json 的 include 选项
  include?: string | string[]

  // 手动设置排除路径的 glob
  // 默认基于 tsconfig.json 的 exclude 选线，未设置时为 'node_module/**'
  exclude?: string | string[]

  // 是否生成类型声明入口
  // 当为 true 时会基于 package.json 的 types 字段生成，或者 `${outputDir}/index.d.ts`
  // 当开启打包类型文件时强制为 true
  // 默认值: false
  insertTypesEntry?: boolean

  // 设置是否在发出类型文件后将其打包
  // 基于 `@microsoft/api-extractor`，由于这开启了一个新的进程，将会消耗一些时间
  // 默认值: false
  rollupTypes?: boolean

  // 是否将源码里的 .d.ts 文件复制到 outputDir
  // 默认值: true
  copyDtsFiles?: boolean

  // 出现类型诊断信息时不生成类型文件
  // 默认值: false
  noEmitOnError?: boolean

  // 是否跳过类型诊断
  // 跳过类型诊断意味着出现错误时不会中断打包进程的执行
  // 但对于出现错误的源文件，将无法生成相应的类型文件
  // 默认值: true
  skipDiagnostics?: boolean

  // 是否打印类型诊断信息
  // 当跳过类型诊断时该属性将不会生效
  // 默认值: false
  logDiagnostics?: boolean

  // 获取诊断信息后的钩子
  // 可以根据参数 length 来判断有误类型错误
  // 默认值: () => {}
  afterDiagnostic?: (diagnostics: Diagnostic[]) => void | Promise<void>

  // 类型声明文件被写入前的钩子
  // 可以在钩子里转换文件路径和文件内容
  // 默认值: () => {}
  beforeWriteFile?: (filePath: string, content: string) => void | TransformWriteFile

  // 构建后回调钩子
  // 将会在所有类型文件被写入后调用
  // 默认值: () => {}
  afterBuild?: () => void | Promise<void>
}
```

## 示例

克隆项目然后执行下列命令：

```sh
pnpm run test:e2e
```

然后检查 `example/types` 目录。

## 常见问题

此处将收录一些常见的问题并提供一些解决方案。

### 打包后出现类型文件缺失

默认情况下 `skipDiagnostics` 选项的值为 `true`，这意味着打包过程中将跳过类型检查（一些项目通常有 `vue-tsc` 等的类型检查工具），这时如果出现存在类型错误的文件，并且这是错误会中断打包过程，那么这些文件对应的类型文件将不会被生成。

如果您的项目没有依赖外部的类型检查工具，这时候可以您可以设置 `skipDiagnostics: false` 和 `logDiagnostics: true` 来打开插件的诊断与输出功能，这将帮助您检查打包过程中出现的类型错误并将错误信息输出至终端。

### Vue 组件中同时使用了 `script` 和 `setup-script` 后出现类型错误

这通常是由于分别在 `script` 和 `setup-script` 中同时使用了 `defineComponent` 方法导致的。 `vue/compiler-sfc` 为这类文件编译时会将 `script` 中的默认导出结果合并到 `setup-script` 的 `defineComponent` 的参数定义中，而 `defineComponent` 的参数类型与结果类型并不兼容，这一行为将会导致类型错误。

这是一个简单的[示例](https://github.com/qmhc/vite-plugin-dts/blob/main/example/components/BothScripts.vue)，您应该将位于 `script` 中的 `defineComponent` 方法移除，直接导出一个原始的对象。

## 授权

MIT 授权。
