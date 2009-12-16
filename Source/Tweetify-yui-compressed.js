/*
---
description:     Tweetify

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Element.tweetify
  - String.tweetify
...
*/
(function(){var a=function(){return this.replace(/(https?:\/\/\S+)/gi,'<a href="$1">$1</a>').replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>').replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>');};String.implement({tweetify:a});Element.implement({tweetify:a.bind(this.get("text"))});})();