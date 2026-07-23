# 网站维护指南

这份文档说明个人主页的内容放在哪里，以及新增经历、修改文字后如何发布。

网站地址：<https://starain-cxy.github.io/>

## 1. 最常用的文件

| 想修改的内容 | 修改文件 |
| --- | --- |
| 主页简介、教育、近期经历、竞赛、荣誉、知乎链接 | `index.md` |
| Research 页面 | `_pages/research.md` |
| Projects 页面 | `_pages/projects.md` |
| CV 页面 | `_pages/cv.md` |
| 姓名、邮箱、GitHub、网站标题等全站设置 | `_config.yml` |
| 头像 | `assets/img/avatar.png` |
| 主页排版和样式 | `assets/css/main.scss` |
| 中英文切换按钮 | `_includes/language-switch.html` |
| 中英文切换逻辑 | `assets/js/language-switch.js` |

平时更新个人经历，主要修改前四个 Markdown 文件。一般不需要修改 CSS、JavaScript 或主题配置。

## 2. 修改主页

主页内容都在 `index.md`。页面由以下部分按顺序组成：

1. 个人简介和 Email、GitHub、知乎、CV 链接
2. 研究兴趣
3. 近期经历
4. 教育经历
5. 项目与竞赛
6. 荣誉
7. 写作与交流

每段内容都有中文和英文两个版本：

```html
<div data-lang="zh">
  中文内容
</div>
<div data-lang="en" hidden>
  English content
</div>
```

修改时要同时更新两个版本。`hidden` 只放在英文版本上，中文是网站首次打开时的默认语言。

### 添加一条教育经历

在 `index.md` 的“教育经历”部分复制一个 `home-entry`，放在合适的位置：

```html
<div class="home-entry">
  <p class="entry-date">
    <span data-lang="zh">2026–至今</span>
    <span data-lang="en" hidden>2026–present</span>
  </p>
  <div data-lang="zh">
    <h3>学校名称 · 学院名称</h3>
    <p>中文学位、成绩或研究方向。</p>
  </div>
  <div data-lang="en" hidden>
    <h3>University · School</h3>
    <p>Degree, GPA, or field of study in English.</p>
  </div>
</div>
```

教育信息也出现在 CV 中，因此还要同步修改 `_pages/cv.md` 的中英文“教育经历 / Education”部分。

### 添加一项荣誉

在 `index.md` 的两个 `compact-list` 中分别添加一行：

```html
<li><span>2026</span> 中文奖项名称</li>
```

```html
<li><span>2026</span> English award name</li>
```

重要荣誉还应同步添加到 `_pages/cv.md`。

### 添加知乎文章

目前主页链接到知乎个人主页。可以在“写作与交流”部分添加具体文章：

```html
<ul>
  <li><a href="文章网址" target="_blank" rel="noopener noreferrer">文章标题</a></li>
</ul>
```

中文和英文区块可以使用不同标题，但文章网址保持一致。

## 3. 修改 Research 页面

研究页在 `_pages/research.md`。文件结构是：

```liquid
{% include language-switch.html %}

<div data-lang="zh" markdown="1">
中文 Markdown 内容
</div>

<div data-lang="en" hidden markdown="1">
English Markdown content
</div>
```

`markdown="1"` 不能删除，否则区块里的 `##`、`**粗体**` 和列表可能不会正常渲染。

新增重要研究经历时，通常要同步修改：

- `index.md`：放一段简短介绍
- `_pages/research.md`：放完整介绍
- `_pages/cv.md`：放适合简历的精简版本

## 4. 修改 Projects 页面

项目页在 `_pages/projects.md`，中英文结构与 Research 页面相同。

新增项目时，在中文区块和英文区块中各添加一组：

```markdown
### 项目名称

**项目类型 · 角色 · 时间**

项目描述，说明做了什么、负责什么，以及有什么结果。
```

重要项目也应在 `index.md` 和 `_pages/cv.md` 中保留简短版本。

## 5. 修改 CV 页面

CV 内容直接写在 `_pages/cv.md`，不再读取 `_data/cv.yml`。

CV 同样分为完整的中文区块和英文区块。修改教育、研究、竞赛、荣誉或技能时，要检查两个语言版本是否同步。

`_data/cv.yml` 是旧主题页面遗留的数据，目前修改它不会影响线上 CV。

## 6. 全局中英文切换

主页、Research、Projects 和 CV 都使用同一个语言切换器。用户选择 English 后，再进入其他页面仍会保持英文；选择中文也一样。

维护内容时遵循以下规则：

- 中文内容放在 `data-lang="zh"` 的元素里。
- 英文内容放在 `data-lang="en" hidden` 的元素里。
- 同一个标题、日期或段落需要有中英文两个版本。
- 不要把中文和英文顺序堆在同一个语言区块里。
- 除非要改变切换机制，否则不要修改 `_includes/language-switch.html` 和 `assets/js/language-switch.js`。

## 7. 导航栏

当前导航保留：

- Research
- Projects
- CV

页面是否出现在导航栏由文件顶部的 `nav` 控制：

```yaml
nav: true
nav_order: 2
```

- `nav: true`：显示在导航栏。
- `nav: false`：页面仍可访问，但不显示在导航栏。
- `nav_order`：数字越小，位置越靠前。

`_pages/education.md`、`competitions.md`、`honors.md` 和 `experience.md` 是早期遗留页面，目前 `nav: false`，也不会影响主页内容。教育、竞赛、荣誉和实践经历应直接维护在 `index.md` 中。

如果新增一个需要独立导航的页面，可以参考：

```markdown
---
layout: page
title: Writing
permalink: /writing/
nav: true
nav_order: 4
---

{% include language-switch.html %}

<div data-lang="zh" markdown="1">
中文内容
</div>

<div data-lang="en" hidden markdown="1">
English content
</div>
```

新增页面后要调整其他页面的 `nav_order`，避免顺序重复。

## 8. 修改头像和全站信息

### 头像

用新图片替换 `assets/img/avatar.png`。保持文件名不变最方便，建议使用清晰的正方形图片。

### 姓名、邮箱和 GitHub

- 姓名、站点描述、GitHub 用户名：修改 `_config.yml`。
- 首页邮箱和社交链接：修改 `index.md` 的 `home-links`。
- CV 联系方式：修改 `_pages/cv.md` 的中英文区块。

如果邮箱或账号发生变化，建议使用编辑器的全局搜索，检查是否在多个文件中出现。

## 9. 发布网站

修改完成后，在仓库目录运行：

```bash
git status
git add 修改过的文件
git commit -m "描述本次修改"
git push origin main
```

例如：

```bash
git add index.md _pages/cv.md
git commit -m "Update education experience"
git push origin main
```

推送后 GitHub Pages 会自动构建网站，通常需要几十秒到几分钟。然后打开
<https://starain-cxy.github.io/> 检查结果；如果还是旧内容，可以稍后刷新。

本地安装 Ruby 和 Bundler 后，也可以在推送前预览：

```bash
bundle install
bundle exec jekyll serve
```

浏览器打开 <http://localhost:4000/>。

## 10. 发布前检查

- 中文和英文内容是否都已更新。
- 切换语言后是否只显示一种语言。
- 日期中的“至今”和 `present` 是否分别放在正确语言中。
- 主页摘要、独立页面和 CV 是否需要同步。
- 新链接是否可以打开。
- Markdown 文件顶部的两行 `---` 是否完整。
- 没有误删 `markdown="1"`、`data-lang` 或 `hidden`。
- `git status` 中是否只包含本次准备发布的文件。

