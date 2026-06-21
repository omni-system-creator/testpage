# GitHub Pages 测试站点

这是一个可直接部署到 `GitHub Pages` 的静态测试站点。

## 文件说明

- `index.html`：站点首页
- `.nojekyll`：禁用 Jekyll 处理，确保纯静态文件按原样发布

## 推荐发布方式

### 方式一：仓库根目录发布

1. 新建一个 GitHub 仓库
2. 把当前目录中的文件上传到仓库根目录
3. 进入 GitHub 仓库设置页
4. 打开 `Pages`
5. 在 `Build and deployment` 中选择：
   - `Source`：`Deploy from a branch`
   - `Branch`：`main`
   - `Folder`：`/ (root)`
6. 保存后等待几分钟即可访问

### 方式二：`docs/` 目录发布

如果你想把站点文件放到仓库的 `docs/` 目录，也可以：

1. 新建 GitHub 仓库
2. 创建 `docs/` 目录
3. 把本目录中的文件放到 `docs/` 下
4. 在 `Pages` 中选择：
   - `Source`：`Deploy from a branch`
   - `Branch`：`main`
   - `Folder`：`/docs`

## 访问地址

默认地址一般是：

- 用户站：`https://你的用户名.github.io`
- 项目站：`https://你的用户名.github.io/仓库名/`

如果这是项目站，并且首页不是从根路径部署，请注意资源路径要使用相对路径或带上仓库名前缀。
