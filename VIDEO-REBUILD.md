# 视频重做记录

## 来源

- 视频：《第11集｜GitHub小白入门教程：AI时代必学的网站！》
- 作者：图寻不熬夜
- 原链接：<https://v.douyin.com/SmzQjJQkUz8/>
- 规范链接：<https://www.douyin.com/video/7687127914688695602>
- 时长：约 12 分 55 秒

## 视频实际章节

以下时间点来自抖音页面公开显示的章节，不是推测：

| 时间 | 章节 |
| --- | --- |
| 00:00 | 前言 |
| 00:44 | 注册 |
| 01:06 | 翻译为中文页面 |
| 02:17 | 三种搜索项目的方式 |
| 05:05 | 了解项目 |
| 07:57 | 本地部署运行 |
| 10:40 | 开源第一个项目 |
| 12:18 | 总结 |

页面简介还列出了完整顺序：

> 注册登录 → 翻译页面为中文 → 搜索优质项目 → 了解项目 → 部署运行 → 开源第一个项目。

## 本次重做结果

### 1. 注册并登录

当前 GitHub 账号已经登录，并完成 GitHub CLI 授权。

```powershell
gh auth status
```

### 2. 翻译为中文

使用 Chrome 打开 GitHub。地址栏已启用 GitHub 中文化插件；如果插件未生效，可在页面空白处右键选择“翻译成中文”。

### 3. 搜索项目

三种可复用方式：

1. 搜索框筛选：

   ```text
   topic:python stars:>1000 pushed:>2026-01-01
   ```

2. GitHub Topics：<https://github.com/topics>
3. GitHub Trending：<https://github.com/trending>

搜索时先看项目用途和最近提交时间，不能只按 Star 数量选择。

### 4. 了解项目

检查顺序：

1. `About`
2. `README`
3. `Releases`
4. `Issues`
5. `Commits`
6. `License`

本项目已经具备 README、MIT License、公开仓库、提交记录和 Release。

### 5. 本地部署运行

```powershell
git clone https://github.com/dh89good/github-first-project.git
cd github-first-project
python -m http.server 8080 --bind 127.0.0.1
```

打开 <http://127.0.0.1:8080>。本次实际运行返回 HTTP `200`。

### 6. 开源第一个项目

已完成：

- Git 初始化
- 本地 Commit
- 创建公开仓库
- 推送 `main`
- 配置 `origin/main`
- 从 GitHub 重新克隆并验证

仓库地址：

<https://github.com/dh89good/github-first-project>

## 覆盖范围

本次把视频页面公开的章节和简介全部转换为可执行步骤，并实际完成了项目运行、提交和远程发布。

抖音播放器没有向本地读取器暴露可下载的视频流，因此没有取得逐句口播稿。本文不根据标题虚构视频中未返回的具体讲解内容；章节顺序与项目简介均来自实际读取的页面证据。
