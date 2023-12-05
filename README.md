# Getting Started 

这是一个集合了 react^18 + react-router-dom^6 + ts +  eslint + prettier + stylelint + husky + sass 干净的模板框架，
其中以选配的方式添加了electron，也可以是 react + electron 的干净模板。

## Available Scripts
In the project directory, you can run:

 ```
    "dev:pc": "cross-env NODE_ENV=development craco start", // pc开发
    "dev:ele": "cross-env NODE_ENV=development electron-forge start", // electron 开发
    "build:pc": "cross-env NODE_ENV=production craco build", // pc打包
    "build:package": "cross-env NODE_ENV=production celectron-forge package",
    "build:make": "electron-forge make", // electron 打包
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src", // eslint 检测代码
    "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.tsx src", // eslint 自动修复代码
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'", // prettier 自动修复格式
```
### 使用npm 
#### npm install 安装依赖
#### npm run 上面已经提供的脚本 
例如开发 npm run dev:pc
   
### 使用yarn
#### yarn 安装依赖
#### yarn 上面已经提供的脚本 
例如开发 yarn dev:pc

## Learn More

**我们中心思想是你只需要一套react代码，即可运行在pc，mb，electron等不同环境，所有我们的项目还是以react为主。**

**我们分别使用prettier、stylelint 和eslint，来自定义配合定制你的代码风格，可以实现包括css书写规范的自动提示管理**

**我们使用 husky 工具来修复和检测代码风格规范, 在git commit 前会执行自动执行以下代码修复代码格式和检测出不满足规范的代码。**
``` npm run lint:fix
    npm run lint
    npm run format
    git add .
```

**我们使用 commitlint 工具来规范提交消息的格式。请在进行提交前遵循以下规范：**

- **#FEAT**: 新功能
- **#FIX**: 修复 bug
- **#DOCS**: 文档更新
- **#STYLE**: 代码风格调整（不影响运行）
- **#REFACTOR**: 代码重构（没有新增功能、也没有修复 bug 的改动）
- **#CHORE**: 辅助工具、构建过程、编译工具等改动
- **#PERF**: 性能相关优化，如提高加载速度等
