# 陈星宇 (Starain-cxy) 个人学术主页

基于 Jekyll + [al-folio](https://github.com/alshedivat/al-folio) 主题的学术个人主页，托管于 GitHub Pages。

## 项目结构

```
├── _config.yml          # 站点配置文件
├── _pages/              # 各个页面
│   ├── about.md         # 首页/关于
│   ├── education.md     # 教育背景
│   ├── research.md      # 研究方向
│   ├── competitions.md  # 竞赛经历
│   ├── projects.md      # 项目经历
│   ├── honors.md        # 荣誉奖项
│   ├── experience.md    # 经历
│   └── cv.md            # 简历
├── _data/               # 数据文件
│   └── cv.yml           # CV 结构化数据
├── assets/
│   ├── img/             # 图片资源
│   └── bib/             # BibTeX 文献库
├── Gemfile              # Ruby 依赖
└── README.md
```

## 本地运行

```bash
bundle install
bundle exec jekyll serve
```

然后在浏览器访问 `http://localhost:4000`。
