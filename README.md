# GitHub First Project

一个面向 GitHub 初学者的零依赖静态网页，用来练习开源项目最常用的完整流程：

1. 浏览项目文件
2. 阅读 README
3. 在本地运行
4. 修改并验证
5. 使用 Git 提交
6. 发布到 GitHub

## 本地运行

直接双击 `index.html` 即可。

也可以在项目目录中启动一个本地静态服务器：

```powershell
npx --yes http-server . -p 8080
```

然后打开 <http://127.0.0.1:8080>。

## 项目结构

```text
.
├── index.html   # 页面结构
├── styles.css   # 页面样式
├── script.js    # 清单交互
├── README.md    # 项目说明
└── LICENSE      # MIT 开源许可证
```

## 你可以继续练习

- 修改页面文案和颜色
- 增加新的学习步骤
- 新建分支并提交 Pull Request
- 在 GitHub Issues 中记录改进想法

## License

[MIT](LICENSE)
