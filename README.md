# zsc网维开发组网站
这里是开发组的网站源代码仓库，采用Docusaurus框架,欢迎issue和PR
## 依赖
`nodejs >= 18.0`
## 构建

在终端输入以下命令：

``` shell

git clone https://github.com/ZSCNetSupportDept/website

cd website

npm install

npm run docusaurus build

```

然后在`build`文件夹下就出现了编译过后的结果，可以进行下一步的部署

运行`npm run docusaurus deploy`可以自动构建并部署静态网站，在构建之后，还会自动将结果推送到仓库的`build`分支上，服务器部署了脚本自动抓取这个分支的内容来更新网站\
https://zscdev-demo.pages.dev 是本仓库的一个demo网站，基于master构建而不是build
## 部署
参见 https://zscdev-demo.pages.dev/docs/devdocs/网站/开发组网站/开发组网站-部署
## 内容发布
参见文档
## 开发
务必在本地测试好改动后再push
## 关于
若有问题，可以联系开发组组长

针对新手我们有一个教程帮助你快速入门：https://zscdev-demo.pages.dev/docs/devdocs/网站/开发组网站/快速上手
