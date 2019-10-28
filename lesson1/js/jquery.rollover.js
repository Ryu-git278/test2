/**
 * jQuery.rollover
 *
 * @version    1.0.4
 * @author     rewish <info@rewish.jp>
 * @copyright  2010-2013 Rewish
 * @license    The MIT License
 * @link       http://rewish.jp/blog/releases/jquery_rollover
 *
 * Usage:
 * jQuery(document).ready(function($) {
 *   // <img>
 *   $('#nav a img').rollover();
 *
 *   // <input type="img">
 *   $('form input:img').rollover();
 *
 *   // set suffix
 *   $('#nav a img').rollover('_over');
 * });
 */
jQuery.fn.rollover = function(suffix) {
	suffix = suffix || '_on';
	var check = new RegExp(suffix + '\\.\\w+$');
	return this.each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		jQuery('<img>').attr('src', _on);
		img.hover(
			function() { img.attr('src', _on); },
			function() { img.attr('src', src); }
		);
	});
};

//suffix:接尾辞
//RegExp:正規表現オブジェクト  regexp = new RegExp(patern[, flags])
//each:各
//replace：取り替える
/*JSの記号一覧： https://qiita.com/mochimkchiking/items/5fd94e0b25831c989473*/

