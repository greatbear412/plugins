//IE6、7、8用:before和:after
(function($){

	var patterns = {
		text: /^['"]?(.+?)["']?$/,
		url: /^url\(["']?(.+?)['"]?\)$/
	};

	function clean(content) {
		if(content && content.length) {
			var text = content.match(patterns.text)[1],
				url = text.match(patterns.url);
			return url ? '<img src="' + url[1] + '" />': text;
		}
	}

	function inject(prop, elem, content) {
		if(prop != 'after') prop = 'before';
		if(content = clean(elem.currentStyle[prop])) {
			$(elem)[prop == 'before' ? 'prepend' : 'append'](
				$(document.createElement('span')).addClass(prop).html(content)
			);
		}
	}

	$.pseudo = function(elem) {
		inject('before', elem);
		inject('after', elem);
		elem.runtimeStyle.behavior = null;
	};

	if(document.createStyleSheet) {
		var o = document.createStyleSheet(null, 0);
		o.addRule('.dummy','display: static;');
		o.cssText = 'html, head, head *, body, *.before, *.after, *.before *, *.after * { behavior: none; } * { behavior: expression($.pseudo(this)); }';
	}

})(jQuery);


//用法：
//
//   定义一个html元素
// .video:after,.video {
//  	before: 'foo';
// 		content: 'foo';
// }
//		定义这个元素的样式
// .video:after,.video .before {
//
// }
