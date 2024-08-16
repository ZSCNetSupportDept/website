# 网站
## 概述
目前，网站有www.zsxyww.com(主站点)，wiki.zsxyww.com(旧wiki),和developer.zsxyww.com(开发组网站),这些子域
### www.zsxyww.com
好像是前辈们留下来的项目，暂时不清楚情况
### wiki.zsxyww.com
旧版的wiki,使用wiki.js构建，上面存放了累积下来的许多文章，目前准备迁移
### developer.zsxyww.com
目前集中开发的新站点，把计划发布的新版wiki和开发组的文档都放在上面了，使用docusaurus构建
## 部署
网站部署在腾讯云的服务器上，dnspod进行解析，nginx反向代理，官网和旧wiki是封装在docker容器里的，监听8090端口和3000端口，
