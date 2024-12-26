# 项目模版

# 技术栈

- vite
- volta
- pnpm
- React
- Unocss

# 开发

## 环境配置

### 项目创建

```zsh
pnpm create vite vite-react-ts --template react-ts
```

### volta 设定 pnpm & node 版本

```zsh
volta pin node@latest
volta pin pnpm@latest
```

> volta 支持 pnpm 需要单独设置，具体参考[volta 文档](https://docs.volta.sh/advanced/pnpm)

## 代码规范

### IDE设置

1. 添加 .editorconfig ，跨编辑器设置
2. 添加 .vscode/extensions.json ，需要的 vscode 扩展

### 配置 eslint

使用 vite 自带 eslint 配置

### 配置 stylelint

1. 安装 stylelint 并添加 stylelint.config.js 配置 stylelint 规则
2. 安装并配置 stylelint-config-standard-scss

> 如果项目 scss 复杂，可以添加 stylelint-scss, stylelint-order 等插件

### 配置 prettier

1. 安装 prettier 并添加 prettier.config.js 配置 prettier 规则
2. 安装并配置 eslint-config-prettier 处理 prettier 与 eslint 的规则冲突
3. 安装并配置 eslint-plugin-prettier 通过 ESLint 检查 Prettier 格式问题

## 流程规范

### 安装使用 husky lint-staged

1. husky - 管理 git hooks
2. lint-staged - 筛选文件

### 安装使用 commitlint

参考 [commitlint](https://juejin.cn/post/7265455444037533755)

## 样式

### 安装配置 sass

参考 [vite ](https://cn.vite.dev/config/shared-options.html#css-preprocessoroptions)

### 安装配置 [UnoCSS](https://unocss.dev/)
