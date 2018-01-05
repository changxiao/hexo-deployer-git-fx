/* global hexo */
'use strict';

hexo.extend.deployer.register('gitfx', require('./lib/deployer'));
