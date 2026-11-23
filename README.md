# GitHub First Project

一个面向 GitHub 初学者的零依赖静态网页，也是一个可执行的 GitHub 入门操作手册。

本项目对应的六步流程：

1. 注册并登录 GitHub
2. 将页面翻译为中文
3. 搜索优质开源项目
4. 了解项目
5. 在本地部署运行
6. 开源自己的第一个项目

## 1. 注册并登录

打开 <https://github.com/signup> 注册账号，或打开
<https://github.com/login> 登录。

## 2. 翻译为中文

使用 Chrome 或 Edge 打开 GitHub：

- 地址栏出现翻译图标时，点击图标并选择“中文”；
- 或在页面空白处右键，选择“翻译成中文”。

## 3. 搜索优质项目

### 使用搜索筛选

在 GitHub 顶部搜索框输入：

```text
topic:artificial-intelligence stars:>1000 language:Python
```

常用筛选条件：

- `stars:>1000`：关注度较高
- `language:Python`：指定编程语言
- `topic:xxx`：按主题搜索
- `pushed:>2026-01-01`：最近仍在更新

### 浏览 Topics

打开 <https://github.com/topics>，按领域查找项目。

### 浏览 Trending

打开 <https://github.com/trending>，查看近期热门项目。

## 4. 了解项目

进入一个项目后依次检查：

- `About`：一句话说明项目用途
- `README`：安装、配置、运行和示例
- `Releases`：稳定版本和更新记录
- `Issues`：已知问题与维护状态
- `Commits`：最近是否仍在维护
- `License`：是否允许个人或商业使用
- `Stars / Forks`：关注度只能作为参考，不能代替实际检查

## 5. 在本地部署运行

这个项目本身是零依赖静态网页，不需要安装依赖。

直接双击 `index.html`，或在项目目录运行：

```powershell
npx --yes http-server . -p 8080
```

然后打开 <http://127.0.0.1:8080>。

其他项目的通用流程：

```powershell
git clone <项目地址>
cd <项目目录>
```

然后严格按照该项目的 README：

1. 安装所需运行环境
2. 安装依赖
3. 创建环境变量或配置文件
4. 执行启动命令
5. 打开提示的本地地址检查结果
6. 记录报错，不要跳过验证步骤

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

## 6. 开源自己的第一个项目

```powershell
git init -b main
git add .
git commit -m "feat: create my first open-source project"
```

在 GitHub 创建空仓库后：

```powershell
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

一个合格的开源项目至少应包含：

- `README.md`
- `LICENSE`
- `.gitignore`
- 清晰、可执行的运行说明

## License

[MIT](LICENSE)
