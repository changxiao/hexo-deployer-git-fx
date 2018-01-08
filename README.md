# hexo-deployer-git-fx

基于hexo-deployer-git开发，
主要修改为 
1. 每次部署前会自动同步远端历史，远端仓库会保留历史记录
2. 增加单独配置username&email的配置文件

带来的缺点：
> 每次都会清空本地git目录，部署前同步代码，部署速度变慢，流量增加。

hexo-deployer-git的 README https://github.com/hexojs/hexo-deployer-git/blob/master/README.md

## Installation

``` bash
$ npm install hexo-deployer-git-fx --save
```
## Options

You can configure this plugin in `_config.yml`.

主要增加了configDir配置项，可以读取configDir指定路径文件内的配置项。

在项目中可以指定好配置文件名称，并且把configDir指定的文件放入项目的.gitignore文件中，之后每个博客成员单独修改此文件，把相关信息换为自己本人的。



``` yaml
# You can use this:
deploy:
  type: gitfx
  repo: <repository url>
  branch: [branch]
  message: [message]
  extend_dirs: [extend directory]
  ignore_hidden: false # default is true
  ignore_pattern: regexp  # whatever file that matches the regexp will be ignored when deploying
  configDir: config.js   username和email配置文件名称
```

config.js
``` js
module.exports = {
	'username': 'changxiao',
	'email': 'changxiao0707@sina.com'
};

```

## License

MIT

[Hexo]: http://hexo.io/
