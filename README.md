# markdown blog system

### ***[我的个人技术博客](http://fsociety.cn)***

> 就是一个静态博客，类似于 `hexo` 这些，最大好处就是集成 `Dropbox` 之后可以实现直接在本地编写 `markdown` 文件，自动同步到线上，并且这些数据是实时保存在你本地电脑和 `Dropbox` 里面的，方便将来随意迁移。

> 这么牛叉的肯定不是我写的，是基于 [JustWriting](https://github.com/hjue/JustWriting) 这位大神的 （其实也是基于 [FarBox](https://www.farbox.com/) 的。。。），主题是 [rock](http://rock.farbox.com/) 这位大神的。

**效果如下：**

![justwriting1](http://oj6n9nf7i.bkt.clouddn.com/image/test/justwriting1.png)

> 我主要改动了以下几点： 

##### 1. 去掉了各种不必要的文件和代码，把php文件格式化了下，加了个gulp，用于把css，js，图片这些静态资源进行压缩，又把目录结构改的更清晰了，（我有代码洁癖。。。）
##### 2. 稍微修改了下样式，这个个人品味不好说。。。
##### 3. 之前代码里的 `多说评论系统` 挂了，于是我就参考 [gitment](https://github.com/imsun/gitment) 这位大神的换了个 `github` 的评论。
##### 4. 又顺便加了分享功能（当然还是用的第三方[addthis](https://www.addthis.com/)），还有加了网站分析，用的是 [GA](https://analytics.google.com/)，顺便又加了打赏和广告 orz 。
##### 5. 加上了层redis的缓存，这样就不用每次都去读取posts目录了，增加了搜索功能，做了些seo优化（keywords，description，外链，Nginx开启gzip等等）。
##### 6. 升级到 **HTTPS** 用的是 **certbot** 生成的免费的自签名。

### `TODO: 为开源贡献点啥：） 如果有需要还想加点啥的话，欢迎私信我呀 （e-mail: arthursjy@gmail.com）`

> 有几个地方需要注意下：
> 1. 这个评论插件每次新写一个博客都得手动init一下，有时间写个脚本自己跑跑
> 2. 其他的具体配置大神已经写得很清楚了，具体按照我上面贴的 `github` 地址照着做就行了，不过有几个坑还是得说一下：
> - 配置 `github的OAuth applications` 的时候 `Authorization callback URL` 一定要填评论页所在的目录.
![一号坑](http://oj6n9nf7i.bkt.clouddn.com/image/test/111111.png)
> - 评论页面如果是写成模块的不要用动态语法，我之前用twig写的，用了下判断就报错了。。。还有一定要写成一个单独完整的html文件。
![二号坑](http://oj6n9nf7i.bkt.clouddn.com/image/test/2222222.png)
> - 这个地方友情提醒下
![三号坑](http://oj6n9nf7i.bkt.clouddn.com/image/test/333333.png)

> - 如果有需要的话，往后有时间我会把这些所有涉及到的弄个教程啥的方便大家使用吧。：）

*持续更新中。。。*
