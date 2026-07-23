# 陈星宇 (Starain-cxy) 个人学术主页

基于 Jekyll + [al-folio](https://github.com/alshedivat/al-folio) 主题的学术个人主页，托管于 GitHub Pages。

日常更新内容请查看 [网站维护指南](MAINTENANCE.md)。

## 项目结构

```
├── index.md             # 单页式主页
├── _config.yml          # 站点配置
├── _pages/
│   ├── research.md      # Research 页面
│   ├── projects.md      # Projects 页面
│   └── cv.md            # 双语 CV 页面
├── _includes/
│   └── language-switch.html  # 共用语言按钮
├── assets/
│   ├── css/main.scss    # 自定义样式
│   ├── js/language-switch.js # 全站语言状态
│   └── img/             # 头像等图片
├── MAINTENANCE.md       # 网站维护指南
├── Gemfile              # Ruby 依赖
└── README.md
```

## 本地运行

```bash
bundle install
bundle exec jekyll serve
```

然后在浏览器访问 `http://localhost:4000`。
