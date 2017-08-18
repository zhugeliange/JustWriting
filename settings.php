<?php

//template language,english, french or zh
$blog_config['language'] = 'zh';

//blog title
$blog_config['title'] = '猪哥亮的小九九';

//blog sub title
$blog_config['intro'] = ' 这里是本人的技术博客，不定期分享一些技术文章，教程，旁门左道啥的。 当然日常的吐槽也是少不了的啊 ~ ';

//blog author
$blog_config['author'] = '猪哥亮';

//"About Me" box
$blog_config['aboutme'] = ' 在下姓猪哥，单名一个亮字，号半猿。 93的web全栈程序猿一枚 主要技术栈是 · lnmp + react + node · and so on. 目前就职于上海一家外企，欢迎天下志同道合之士啊~ ';

//blog avatar
$blog_config['avatar'] = 'http://oj6n9nf7i.bkt.clouddn.com/image/test/head.jpg';

//blog template name.The template root path is /templates.You can set rock or deepure. 
$blog_config['template'] = 'rock';

//If you would like that everyone comment your post,you must set this variable to True.
$blog_config['comment'] = True;

// gitment comment system https://github.com/imsun/gitment
$blog_config['gitment_id'] = '';
$blog_config['gitment_owner'] = 'zhugeliange';
$blog_config['gitment_repo'] = 'JustWriting';
$blog_config['gitment_client_id'] = '05e121b296febffb17e0';
$blog_config['gitment_client_secret'] = 'b864371cd8ce021bc84ab61f3342107508fea286';

//URL to your blog root.This is your base URL,without  a trailing slash:http://justwriting.sinaapp.com
$blog_config['base_url'] = 'http://fsociety.cn';

//your github url
$blog_config['github'] = 'https://github.com/zhugeliange';

//other social network : twitter, facebook, rss and email. For example :
$blog_config['facebook'] = 'https://www.facebook.com/its.funnuy';
$blog_config['weibo'] = 'http://weibo.com/1803651761/profile?topnav=1&wvr=6';
$blog_config['email'] = 'arthursjy@gmail.com';
$blog_config['douban'] = 'https://www.douban.com/people/164976210/';
//there's more supported networks, but you must add them manually to \templates\rock\base.html - names are in \templates\rock\images\social\*

//posts count of posts list
$blog_config['posts_per_page'] = 10;

//on or off API.  API doc : https://github.com/hjue/JustWriting/wiki/API .
$blog_config['api'] = False;

//api key
$blog_config['api_key'] = '1234561';

//dropbox settings,for more infomation pls see the README : https://github.com/hjue/JustWriting
$blog_config['dropbox']['key'] = '';
$blog_config['dropbox']['secret'] = '';
$blog_config['dropbox']['access_token'] = '';

/*
 * Supports code highlightin.If you don't write code in post,set this to empty.
 * Support 49 code styles, pls see this page: https://highlightjs.org/static/test.html
 */
$blog_config['highlight'] = 'default';

$blog_config['pay'] = 'http://oj6n9nf7i.bkt.clouddn.com/image/test/pay.png';
$blog_config['alipay'] = 'http://oj6n9nf7i.bkt.clouddn.com/image/test/alipay.png';
$blog_config['wepay'] = 'http://oj6n9nf7i.bkt.clouddn.com/image/test/wepay.png';
