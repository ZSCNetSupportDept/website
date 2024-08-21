# zsc网维开发组网站
这里是开发组的网站源代码仓库，采用Docusaurus框架,欢迎issue和PR
## 依赖
`nodejs >= 18.0`
## 构建
不同于传统的静态网页生成器，本项目不需要额外加装构建工具，生成器和内容本身加起来就是一个单独的react.js应用，所以理论上你只需要把这个repo pull到本地，再用npm构建即可，运行`npm run docusaurus`来运行框架本身提供的一些脚本\
运行`npm run docusaurus deploy`可以自动构建静态网站，并且push到`build`上\
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
