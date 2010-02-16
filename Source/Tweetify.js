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
(function() {
	var fn = function() {
		return this.replace(/(https?:\/\/\S+)/gi,'<a href="$1">$1</a>')
			.replace(/\B@(\w+)([^\/]\W)/g,'<a href="http://twitter.com/$1" class="twitterUser">@$1</a>$2') //users, but not lists
			.replace(/\B@(\w+)\/(\w+)/g,'<a href="http://twitter.com/$1/$2" class="twitterList">@$1/$2</a>') //lists
			.replace(/\B#(\w+)/g,'<a href="http://search.twitter.com/search?q=%23$1" class="twitterTag">#$1</a>'); //tags
	};
	
	String.implement({
		tweetify: fn
	});
	
	Element.implement({
		tweetify: function() {
			this.set('html',(this.get('text')).tweetify());
		}
	});
})();