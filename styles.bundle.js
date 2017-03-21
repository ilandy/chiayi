webpackJsonp([2,4],{

/***/ 32:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(566)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/*把變數帶入mixin中，此mixin只就單純把media queries寫到我的mixin中，\n並且使用我上面設立的變數來調動media queries的width*/\n/* ===== my reset ===== */\nbody {\n  font-size: 16px;\n  font-family: \"Lucida Grande\",\"Helvetica\", \"Roboto\",\"PingFang TC\",\"Heiti TC\",\"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\";\n  background: #005151; }\n\n* {\n  font-weight: 300; }\n\nul, ol {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\na, a:hover, a:focus {\n  text-decoration: none; }\n\n/* ======= unit - clear ======= */\n.clear-fix:before,\n.clear-fix:after {\n  content: \"\";\n  display: table; }\n\n.clear-fix:after {\n  clear: both; }\n\n.clear-fix {\n  zoom: 1; }\n\n/* ======= unit - decoration ======= */\n.mark {\n  position: relative;\n  display: inline-block;\n  background: transparent; }\n\n.mark:after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: 5%;\n  height: 3px;\n  width: 90%;\n  background: #EB7D1F; }\n\n.block-sprade {\n  position: relative; }\n\n.block-sprade.bs-green:after {\n  background: #005151; }\n\n.block-sprade.bs-brown:after {\n  background: #858581; }\n\n.block-sprade:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 3px;\n  width: 15px;\n  bottom: 0;\n  background: inherit; }\n\n/* ======= unit - font ======= */\n.font-default {\n  font-size: 1em; }\n\n.font-title {\n  font-size: 3em; }\n\n.font-lg {\n  font-size: 1.5em; }\n\n.font-sm {\n  font-size: .875em; }\n\n.font-xs {\n  font-size: .75em; }\n\n.font-bolder {\n  font-weight: 500; }\n\n.font-color-dkgreen {\n  color: #005151; }\n\n.font-color-brown {\n  color: #858581; }\n\n.font-color-orange {\n  color: #EB7D1F; }\n\n/* ======= unit - gap ======= */\n.pt-20 {\n  padding-top: 20px; }\n\n.pb-20 {\n  padding-bottom: 20px; }\n\n.py-20 {\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n.px-20 {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.mb-0 {\n  margin-bottom: 0; }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mx-auto {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.line-break {\n  display: block; }\n  @media all and (max-width: 480px) {\n    .line-break {\n      display: inline; } }\n\n.line-break-small-device {\n  display: inline; }\n  @media all and (max-width: 480px) {\n    .line-break-small-device {\n      display: block;\n      padding-top: 1em; } }\n\n/* === 有邊框裝飾的樣式容器 ===*/\n.line-box {\n  position: relative;\n  padding: 10px;\n  margin: -30px auto 50px auto;\n  background-image: -webkit-linear-gradient(135deg, #00C8C8 0%, #009797 100%);\n  background-image: linear-gradient(-45deg, #00C8C8 0%, #009797 100%); }\n  .line-box > div {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: #F0F0E1; }\n  .line-box.line-triangle-deco:after {\n    content: \"\";\n    position: absolute;\n    right: -8px;\n    bottom: -20px;\n    width: 0;\n    height: 0;\n    border-width: 0 0 240px 290px;\n    border-color: transparent transparent rgba(223, 236, 217, 0.7) transparent;\n    border-style: solid;\n    z-index: -1; }\n    @media all and (min-width: 960px) {\n      .line-box.line-triangle-deco:after {\n        right: -15px;\n        bottom: -20px; } }\n    @media all and (max-width: 480px) {\n      .line-box.line-triangle-deco:after {\n        border-width: 0 0 240px 88vw; } }\n  .line-box.line-triangle-deco > div:after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 0;\n    height: 0;\n    border-width: 0 0 196px 231px;\n    border-color: transparent transparent rgba(223, 236, 217, 0.7) transparent;\n    border-style: solid; }\n    @media all and (max-width: 480px) {\n      .line-box.line-triangle-deco > div:after {\n        border-width: 0 0 196px 74vw; } }\n  .line-box .line-box-title h1 {\n    margin-bottom: 0;\n    font-size: 3em;\n    font-weight: bolder;\n    color: #005151; }\n  .line-box .line-box-title p {\n    padding-top: 0; }\n    .line-box .line-box-title p:before {\n      content: \"\";\n      display: inline-block;\n      width: 19px;\n      height: 5px;\n      margin-left: .2em;\n      margin-right: 1em;\n      background: #005151; }\n  .line-box .line-box-title.deco-triangle:after {\n    top: 0; }\n  .line-box.line-box-tiny {\n    padding: .85em; }\n    @media all and (min-width: 960px) {\n      .line-box.line-box-tiny {\n        width: 55%;\n        margin-left: 5%;\n        float: right; } }\n    @media all and (max-width: 480px) {\n      .line-box.line-box-tiny {\n        padding: .5em; } }\n    .line-box.line-box-tiny > div {\n      height: auto;\n      padding: 3em 3.25em; }\n      @media all and (max-width: 480px) {\n        .line-box.line-box-tiny > div {\n          padding: 1em 1.25em; } }\n    .line-box.line-box-tiny .btn-green {\n      z-index: 2; }\n\n/* ==== 三角形的裝飾 ====*/\n.deco-triangle {\n  position: relative; }\n  .deco-triangle:after {\n    content: \"\";\n    position: absolute;\n    left: -4.85em;\n    top: -2em;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 2em 0 2em 3.125em;\n    border-color: transparent transparent transparent #1FC9C5;\n    opacity: .7; }\n    @media all and (max-width: 480px) {\n      .deco-triangle:after {\n        left: -2.5em;\n        top: 0;\n        border-width: 20px 0 20px 35px; } }\n\n/* ==== 特殊標題文字 ====*/\n.big-title {\n  position: relative;\n  margin: 0 0 35px 0;\n  font-weight: 400;\n  font-size: 2.25em;\n  line-height: 2em;\n  letter-spacing: .1em;\n  text-align: justify;\n  color: #005151; }\n  @media all and (min-width: 960px) {\n    .big-title {\n      font-size: 3.5em; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .big-title {\n      font-size: 2.5em;\n      letter-spacing: 0; } }\n  .big-title:before, .big-title:after {\n    content: \"\";\n    position: absolute;\n    right: .12em;\n    background: #005151;\n    height: 4px; }\n    @media all and (max-width: 480px) {\n      .big-title:before, .big-title:after {\n        left: .12em; } }\n  .big-title:before {\n    width: 95%;\n    top: 0; }\n  .big-title:after {\n    width: 40%;\n    bottom: 0; }\n\n/* ==== info header ==== */\n.info > .info-title {\n  display: inline-block;\n  position: relative;\n  font-size: 1.5em;\n  font-weight: 400; }\n  .info > .info-title:after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    height: .95em;\n    width: 90%;\n    right: -.5em;\n    top: .65em;\n    background: #1FC9C5;\n    opacity: .15; }\n\n.info .info-content {\n  line-height: 1.8em; }\n  .info .info-content a {\n    word-break: break-word; }\n\n.info ol {\n  list-style: decimal;\n  margin-left: 1.5em; }\n  .info ol li {\n    padding-bottom: 1em; }\n\n.btn {\n  font-size: 1em;\n  border: none;\n  border: medium none;\n  border-spacing: 0;\n  color: #222;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  text-indent: 0;\n  font-weight: normal;\n  background: none repeat scroll 0 0 transparent; }\n  @media all and (max-width: 480px) {\n    .btn {\n      font-size: .85em; } }\n  .btn:focus {\n    outline: none; }\n  .btn.btn-green {\n    position: relative;\n    width: 100%;\n    padding: 7px 0;\n    font-size: 1.5em;\n    box-sizing: border-box;\n    border: #005151 4px solid;\n    letter-spacing: 2px;\n    background: #005151;\n    color: #fff;\n    -webkit-transition: background .5s ,border .5s;\n    transition: background .5s ,border .5s; }\n    @media all and (min-width: 960px) {\n      .btn.btn-green {\n        padding: 10px 0;\n        font-size: 1.75em; } }\n    .btn.btn-green:after {\n      content: \"\";\n      position: absolute;\n      left: -4px;\n      bottom: -4px;\n      width: 0;\n      height: 0;\n      border-width: 55px 0 0 50px;\n      border-color: transparent transparent transparent #1FC9C5;\n      border-style: solid;\n      -webkit-transition: opacify .3s, left .4s, bottom .4s;\n      transition: opacify .3s, left .4s, bottom .4s; }\n    .btn.btn-green:hover, .btn.btn-green:focus {\n      background: #F0F0E1;\n      color: #005151;\n      border: #005151 4px solid; }\n      .btn.btn-green:hover:after, .btn.btn-green:focus:after {\n        opacity: .4;\n        left: -10px;\n        bottom: -10px; }\n\n@-webkit-keyframes btn-leftToRight {\n  0% {\n    left: 50%;\n    opacity: 1;\n    color: #fff; }\n  33% {\n    left: 75%;\n    opacity: 0;\n    color: #fff; }\n  66% {\n    left: 25%;\n    opacity: 0;\n    color: #005151; }\n  100% {\n    left: 50%;\n    opacity: 1; } }\n\n@keyframes btn-leftToRight {\n  0% {\n    left: 50%;\n    opacity: 1;\n    color: #fff; }\n  33% {\n    left: 75%;\n    opacity: 0;\n    color: #fff; }\n  66% {\n    left: 25%;\n    opacity: 0;\n    color: #005151; }\n  100% {\n    left: 50%;\n    opacity: 1; } }\n\n/* ==== 欄位狀態顏色 ==== */\n.field {\n  font-size: 1em;\n  width: 100%;\n  padding-bottom: 15px; }\n  @media all and (max-width: 480px) {\n    .field {\n      font-size: .75em; } }\n  .field .field-name {\n    padding-bottom: 10px;\n    color: #005151;\n    font-weight: 500; }\n  .field .field-entery {\n    width: 100%;\n    padding-bottom: .625em;\n    border: none;\n    border-bottom: 3px solid rgba(133, 133, 129, 0.08);\n    font-size: 1.75em;\n    background: transparent;\n    -webkit-transition: border-color .5s;\n    transition: border-color .5s;\n    -webkit-transition-timing-function: ease-in;\n            transition-timing-function: ease-in; }\n    .field .field-entery:hover, .field .field-entery:focus {\n      outline: none;\n      border-color: #009797; }\n  .field .field-select {\n    position: relative;\n    cursor: pointer; }\n    .field .field-select:before {\n      content: '\\F078';\n      font-family: FontAwesome;\n      position: absolute;\n      right: 1em;\n      top: 25%;\n      color: #005151;\n      font-size: .875em;\n      z-index: 1; }\n\n.field-message {\n  min-height: 1em;\n  line-height: 1.8em;\n  padding-bottom: 1em;\n  color: #EB7D1F; }\n\n.select {\n  max-height: 0px;\n  opacity: 0;\n  -webkit-transition: max-height .5s, opacity .5s;\n  transition: max-height .5s, opacity .5s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n  overflow: hidden; }\n  .select.active {\n    opacity: 1;\n    max-height: 100vh; }\n  .select .select-options {\n    width: 100%;\n    background: #005151;\n    overflow: hidden; }\n    .select .select-options > li {\n      display: inline-block;\n      width: calc(100%/4);\n      font-size: 1.25em;\n      height: 52px;\n      line-height: 52px;\n      text-align: center;\n      color: #fff;\n      box-shadow: 1px 1px 2px -1px rgba(0, 151, 151, 0.3);\n      -webkit-transition: background .1s, font-size .1s;\n      transition: background .1s, font-size .1s;\n      cursor: pointer;\n      -webkit-transition-timing-function: ease-in, ease-in;\n              transition-timing-function: ease-in, ease-in; }\n      .select .select-options > li:hover, .select .select-options > li:focus, .select .select-options > li.active {\n        background: #fff;\n        color: #222;\n        box-shadow: 1px 10px 100px -6px #222;\n        font-size: 1.4em; }\n\n.wrap {\n  position: relative;\n  left: 0;\n  width: 100vw;\n  background: #F0F0E1;\n  -webkit-transition: left .5s;\n  transition: left .5s;\n  z-index: 1; }\n  .wrap.active {\n    left: -80vw; }\n    @media all and (min-width: 960px) {\n      .wrap.active {\n        position: absolute;\n        left: -30vw; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .wrap.active {\n        position: fixed;\n        left: -40vw; } }\n    @media all and (min-width: 480px) and (max-width: 759px) {\n      .wrap.active {\n        left: -50vw; } }\n    @media all and (min-width: 1200px) {\n      .wrap.active {\n        left: 0; } }\n\n/* header */\n.header {\n  position: relative;\n  width: 100%;\n  height: 4em;\n  z-index: 3; }\n  @media all and (min-width: 960px) {\n    .header {\n      height: 9.5em; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .header {\n      height: 7.5em; } }\n  @media all and (min-width: 480px) and (max-width: 759px) {\n    .header {\n      height: 5.5em; } }\n  .header .header-brand {\n    float: left;\n    width: 55%;\n    height: 100%;\n    background: #1FC9C5;\n    margin: 0;\n    vertical-align: bottom; }\n    @media all and (min-width: 960px) {\n      .header .header-brand {\n        width: 40%; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .header .header-brand {\n        width: 50%; } }\n  .header .header-logo {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: url(" + __webpack_require__(567) + ") no-repeat;\n    background-size: auto 95%;\n    background-position-y: bottom; }\n    @media all and (min-width: 1200px) {\n      .header .header-logo {\n        background-size: auto 90%;\n        background-position-x: right;\n        background-position-y: 25px; } }\n    .header .header-logo:focus {\n      outline: none; }\n  .header .header-menu {\n    position: relative;\n    float: right;\n    width: 45%;\n    height: 3em;\n    background: #1FC9C5; }\n    @media all and (min-width: 960px) {\n      .header .header-menu {\n        height: 5.5em;\n        width: 60%; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .header .header-menu {\n        height: 3.5em;\n        width: 50%; } }\n    @media all and (min-width: 480px) and (max-width: 759px) {\n      .header .header-menu {\n        height: 3em; } }\n    .header .header-menu:after, .header .header-menu:before {\n      content: \"\";\n      position: absolute;\n      bottom: -4em;\n      border-style: solid; }\n      @media all and (min-width: 480px) and (max-width: 759px) {\n        .header .header-menu:after, .header .header-menu:before {\n          bottom: -2.5em; } }\n      @media all and (max-width: 480px) {\n        .header .header-menu:after, .header .header-menu:before {\n          bottom: -1em; } }\n    .header .header-menu:before {\n      z-index: -1;\n      left: 0;\n      border-width: 1em 45vw 0 0;\n      border-color: #1FC9C5 transparent transparent transparent; }\n      @media all and (min-width: 960px) {\n        .header .header-menu:before {\n          border-width: 4em 60vw 0 0; } }\n      @media all and (min-width: 760px) and (max-width: 959px) {\n        .header .header-menu:before {\n          border-width: 4em 50vw 0 0; } }\n      @media all and (min-width: 480px) and (max-width: 759px) {\n        .header .header-menu:before {\n          border-width: 2.5em 45vw 0 0; } }\n    .header .header-menu:after {\n      z-index: -2;\n      right: 0;\n      border-width: 0 45vw 1em 0;\n      border-color: transparent #009797 transparent transparent; }\n      @media all and (min-width: 960px) {\n        .header .header-menu:after {\n          border-width: 0 60vw 4em 0; } }\n      @media all and (min-width: 760px) and (max-width: 959px) {\n        .header .header-menu:after {\n          border-width: 0 50vw 4em 0; } }\n      @media all and (min-width: 480px) and (max-width: 759px) {\n        .header .header-menu:after {\n          border-width: 0 45vw 2.5em 0; } }\n\n/* mob menu btn */\n.menu-button {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  color: #fff;\n  cursor: pointer;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n  @media all and (min-width: 960px) {\n    .menu-button {\n      right: 1.7em;\n      top: 1.7em;\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); } }\n  .menu-button:before {\n    content: \"\";\n    display: block;\n    margin-bottom: 8px;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    box-shadow: 0 8px 0 #fff; }\n  .menu-button:after {\n    content: \"MENU\";\n    font-size: 9px; }\n\n/* not yet */\n/* menu */\n.menu {\n  position: absolute;\n  right: 0;\n  width: 80%;\n  z-index: 1; }\n  @media all and (min-width: 960px) {\n    .menu {\n      width: 30%; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .menu {\n      width: 40%; } }\n  @media all and (min-width: 480px) and (max-width: 759px) {\n    .menu {\n      width: 50%; } }\n  @media all and (max-width: 480px) {\n    .menu {\n      overflow-y: auto;\n      height: 90vh; } }\n  @media all and (min-width: 1200px) {\n    .menu {\n      position: absolute;\n      width: 90%;\n      margin: 60px 10% 0;\n      text-align: right;\n      z-index: 2; } }\n  .menu li {\n    position: relative;\n    display: block;\n    color: #fff;\n    font-size: 1.125em;\n    font-weight: 300;\n    cursor: pointer; }\n    @media all and (max-width: 1199px) {\n      .menu li {\n        margin: 30px 0;\n        text-align: center;\n        letter-spacing: .4em; }\n        .menu li:before {\n          content: \"\";\n          display: block;\n          height: .5em;\n          width: 1px;\n          margin: 0 50% 20px 50%;\n          background: #009797; }\n        .menu li.active {\n          opacity: .4; } }\n    @media all and (min-width: 1200px) {\n      .menu li {\n        display: inline-block;\n        margin: 0 19px;\n        letter-spacing: .2em;\n        -webkit-transition: margin .5s;\n        transition: margin .5s; }\n        .menu li:hover {\n          margin: 0 24px; }\n        .menu li:after {\n          content: \"\";\n          display: block;\n          position: absolute;\n          bottom: -7px;\n          left: 50%;\n          width: 0;\n          height: 2px;\n          -webkit-transition: width .5s, left .5s;\n          transition: width .5s, left .5s; }\n        .menu li.active:after, .menu li:hover:after {\n          width: 100%;\n          left: 0;\n          background-color: #fff;\n          opacity: .9; }\n        .menu li:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          top: -150px;\n          left: 0;\n          width: 100%;\n          height: 65px;\n          opacity: 0;\n          background-image: -webkit-linear-gradient(269deg, #fff 0%, #1FC9C5 100%);\n          background-image: linear-gradient(-179deg, #fff 0%, #1FC9C5 100%);\n          -webkit-transition: opacity .5s, top .5s;\n          transition: opacity .5s, top .5s;\n          -webkit-transition-timing-function: ease-in;\n                  transition-timing-function: ease-in; }\n        .menu li.active:before, .menu li:hover:before {\n          top: -100px;\n          opacity: .9; }\n        .menu li.active a,\n        .menu li:hover a {\n          -webkit-transform: scale(1.1) translateY(-5px);\n                  transform: scale(1.1) translateY(-5px); } }\n  .menu a {\n    position: relative;\n    display: inline-block;\n    color: #fff;\n    text-decoration: none;\n    font-size: 1em;\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease; }\n\n/* footer */\n.footer {\n  position: relative;\n  width: 100%;\n  padding-top: 2em;\n  padding-bottom: 3.75em;\n  color: #fff;\n  font-weight: 300;\n  background: #009797;\n  z-index: 4; }\n  @media all and (min-width: 960px) {\n    .footer {\n      padding-top: 3.75em; } }\n  .footer:after, .footer:before {\n    content: \"\";\n    position: absolute;\n    top: -3em;\n    left: 0;\n    border-style: solid; }\n    @media all and (min-width: 960px) {\n      .footer:after, .footer:before {\n        top: -5em; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .footer:after, .footer:before {\n        top: -4em; } }\n  .footer:before {\n    z-index: -1;\n    border-width: 0 0 3em 100vw;\n    border-color: transparent transparent #009797 transparent; }\n    @media all and (min-width: 960px) {\n      .footer:before {\n        border-width: 0 0 5em 100vw; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .footer:before {\n        border-width: 0 0 4em 100vw; } }\n  .footer:after {\n    z-index: -2;\n    border-width: 3em 0 0 100vw;\n    border-color: transparent transparent transparent #005151; }\n    @media all and (min-width: 960px) {\n      .footer:after {\n        border-width: 5em 0 0 100vw; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .footer:after {\n        border-width: 4em 0 0 100vw; } }\n  .footer .footer-warp {\n    width: 100%;\n    max-width: 56.25em;\n    margin: 0 auto; }\n  .footer .footer-info {\n    float: left;\n    margin-left: 1.25em; }\n  .footer .footer-img {\n    float: left; }\n\n.footer-content {\n  float: left;\n  padding-left: 1em; }\n  .footer-content h2 {\n    position: relative;\n    padding-bottom: 1em;\n    margin: 0 0 1em 0; }\n  .footer-content p {\n    line-height: 1.8em;\n    margin: 0; }\n\n.footer-links {\n  position: relative;\n  float: right;\n  margin-top: 1em; }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .footer-links {\n      margin-right: 3.25em; } }\n  @media all and (min-width: 480px) and (max-width: 759px) {\n    .footer-links {\n      float: left;\n      margin-left: 3.25em; } }\n  @media all and (max-width: 480px) {\n    .footer-links {\n      float: left;\n      margin-left: 3.25em; } }\n  .footer-links:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: -1.375em;\n    top: 0.375em;\n    height: 90%;\n    width: 1px;\n    background: #1FC9C5; }\n  .footer-links a {\n    position: relative;\n    display: inline-block;\n    color: #fff;\n    line-height: 2em; }\n    .footer-links a:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      left: -1.375em;\n      top: 20%;\n      height: 0%;\n      -webkit-transition: height .5s;\n      transition: height .5s; }\n    .footer-links a:hover, .footer-links a:focus {\n      color: #fff; }\n    .footer-links a:hover:after {\n      height: 60%;\n      width: 3px;\n      background: #1FC9C5; }\n\n/* ==== 共用的 container size ==== */\n.main-wrap {\n  padding: 4em 0 0;\n  width: 90%;\n  margin: 0 auto; }\n  @media all and (min-width: 960px) {\n    .main-wrap {\n      padding-top: 6em;\n      width: 960px; } }\n  .main-wrap .main-content {\n    padding: .85em .85em 0;\n    margin-bottom: 0; }\n    .main-wrap .main-content > div {\n      height: auto;\n      padding: 3em 3.25em 10em; }\n      @media all and (max-width: 480px) {\n        .main-wrap .main-content > div {\n          padding: 1em 1.25em 5em; } }\n\n.topic {\n  padding-bottom: 4em; }\n\n.topic-outer {\n  width: 95%; }\n  @media all and (min-width: 960px) {\n    .topic-outer {\n      width: 970px;\n      margin: -60px auto 66px auto; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .topic-outer {\n      margin-top: -50px; } }\n\n.topic-inner {\n  padding: 3em 1.3em 2.5em 1.3em; }\n  @media all and (min-width: 960px) {\n    .topic-inner {\n      padding: 7.5em 3em 3em; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .topic-inner {\n      padding: 6em 3em 3em; } }\n\n.topic-words-deco {\n  position: absolute;\n  width: 350px;\n  bottom: -1.25em;\n  left: 50%;\n  margin-left: -175px;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 1.8em;\n  color: #005151;\n  background: #F0F0E1; }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .topic-words-deco {\n      width: 26%;\n      margin-left: 37%;\n      left: 0; } }\n  @media all and (max-width: 480px) {\n    .topic-words-deco {\n      width: 60%;\n      margin-left: 20%;\n      left: 0;\n      background: #e3ecdb; } }\n\n@media all and (min-width: 960px) {\n  .topic-layout-left {\n    width: 376px;\n    float: left; } }\n\n@media all and (min-width: 760px) and (max-width: 959px) {\n  .topic-layout-left {\n    width: 40%;\n    float: left; } }\n\n.topic-layout-right {\n  position: relative;\n  z-index: 2;\n  color: #858581;\n  letter-spacing: .1em;\n  text-align: justify; }\n  @media all and (min-width: 960px) {\n    .topic-layout-right {\n      float: right;\n      width: 464px;\n      padding-left: 3em;\n      font-size: 1.15em;\n      line-height: 1.8em; } }\n  @media all and (min-width: 760px) and (max-width: 959px) {\n    .topic-layout-right {\n      float: right;\n      width: 55%;\n      padding-left: 5%; } }\n  .topic-layout-right .topic-info-top {\n    padding-bottom: 28px; }\n\n.hot {\n  position: relative;\n  line-height: 1.8em; }\n  @media all and (min-width: 960px) {\n    .hot {\n      margin: 40px 0 180px 0; } }\n  .hot:before {\n    content: \"\";\n    position: absolute;\n    z-index: -4;\n    left: 0;\n    top: 65%;\n    width: 100%;\n    height: 400px;\n    margin-top: -220px;\n    background-color: #F6F6F6;\n    -webkit-transform: skewY(-8.5deg);\n            transform: skewY(-8.5deg); }\n    @media all and (max-width: 480px) {\n      .hot:before {\n        top: 50%;\n        height: 80vh;\n        -webkit-transform: skewY(-15.5deg);\n                transform: skewY(-15.5deg); } }\n  .hot .hot-contain {\n    margin: 0 auto;\n    width: 90%; }\n    @media all and (min-width: 960px) {\n      .hot .hot-contain {\n        width: 960px; } }\n  .hot .hot-layout-left {\n    position: relative;\n    width: 100%;\n    padding: 30px;\n    background: #fff; }\n    @media all and (min-width: 960px) {\n      .hot .hot-layout-left {\n        width: 470px;\n        float: left; } }\n    .hot .hot-layout-left:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      z-index: -1;\n      width: 98%;\n      height: 98%;\n      box-shadow: 4px 2px 15px 0 rgba(0, 0, 0, 0.15); }\n    .hot .hot-layout-left .block-sprade {\n      padding-bottom: 15px;\n      margin-bottom: 5px;\n      color: #005151; }\n      .hot .hot-layout-left .block-sprade:after {\n        left: -30px;\n        width: 19px; }\n  .hot .hot-rule {\n    padding-left: 1.5em; }\n    .hot .hot-rule li {\n      position: relative;\n      font-weight: 500; }\n      .hot .hot-rule li:before {\n        content: \"-\";\n        display: inline-block;\n        margin: auto .5em auto -1.2em; }\n  .hot .hot-layout-right {\n    width: 100%;\n    background: #009797; }\n    @media all and (min-width: 960px) {\n      .hot .hot-layout-right {\n        position: relative;\n        float: right;\n        top: 160px;\n        width: 490px;\n        padding: 25px 0 25px 60px; }\n        .hot .hot-layout-right:before {\n          content: \"\";\n          z-index: -2;\n          position: absolute;\n          display: block;\n          left: -60px;\n          top: 0;\n          height: 100%;\n          width: 60px;\n          background: #009797; }\n        .hot .hot-layout-right:after {\n          content: \"\";\n          position: absolute;\n          z-index: -3;\n          left: -60px;\n          bottom: 0;\n          width: 550px;\n          height: 100%;\n          box-shadow: 0 9px 12px rgba(0, 0, 0, 0.25); } }\n  .hot .hot-list {\n    padding: 40px 1em; }\n    @media all and (min-width: 960px) {\n      .hot .hot-list {\n        margin-top: 25px; } }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .hot .hot-list {\n        padding: 40px 3em; } }\n    .hot .hot-list > li {\n      padding-bottom: 15px; }\n    .hot .hot-list span {\n      padding-left: 1.25em;\n      font-size: 1.75em;\n      vertical-align: middle;\n      letter-spacing: 4px;\n      color: white; }\n      @media all and (max-width: 480px) {\n        .hot .hot-list span {\n          padding-left: .6em;\n          font-size: 1.5em; } }\n  .hot .hot-shadow {\n    position: absolute;\n    z-index: -2;\n    bottom: 10px;\n    left: 10%;\n    width: 80%;\n    height: 30%;\n    background: #009797;\n    -webkit-filter: blur(30px);\n            filter: blur(30px); }\n    @media all and (max-width: 480px) {\n      .hot .hot-shadow {\n        width: 60%;\n        left: 20%; } }\n  .hot .hot-deco {\n    position: absolute;\n    z-index: 2;\n    right: -30px;\n    bottom: -30px;\n    height: 60px;\n    width: 60px;\n    padding-right: 16px;\n    border-radius: 50%;\n    color: white;\n    text-align: right;\n    line-height: 60px;\n    font-size: 30px;\n    background: #D2BC9B;\n    box-shadow: 3px 2px 4px rgba(76, 76, 76, 0.5); }\n    @media all and (min-width: 760px) and (max-width: 959px) {\n      .hot .hot-deco {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        right: 1em; } }\n    @media all and (max-width: 480px) {\n      .hot .hot-deco {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n        right: 1em; } }\n\n/* ===== section more ===== */\n.more {\n  padding-top: 4em; }\n  .more .more-contain {\n    margin: 0 auto;\n    width: 90%;\n    margin-bottom: 180px; }\n    @media all and (min-width: 960px) {\n      .more .more-contain {\n        width: 970px; } }\n  .more .more-title {\n    display: inline-block;\n    padding-top: 30px;\n    border-top: 5px solid #005151;\n    font-size: 3em;\n    font-weight: 400;\n    color: #005151; }\n  @media all and (min-width: 960px) {\n    .more .more-list {\n      float: left;\n      width: 300px;\n      margin-right: 20px; }\n      .more .more-list:last-child {\n        margin-right: 0; } }\n  .more .more-item {\n    display: inline-block;\n    margin-bottom: 20px;\n    width: 100%;\n    color: white;\n    font-size: 1.125em; }\n    .more .more-item:nth-child(3n) {\n      margin-right: 0; }\n    .more .more-item > a {\n      display: inline-block;\n      width: 100%;\n      padding: 0 20px;\n      height: 100%;\n      color: inherit;\n      line-height: 50px;\n      background: #19A6A3;\n      box-shadow: 0 3px 10px -8px #005151;\n      -webkit-transition: background .5s, box-shadow .5s;\n      transition: background .5s, box-shadow .5s; }\n      .more .more-item > a.active {\n        background: #1FC9C5;\n        box-shadow: 0 8px 10px -5px #005151; }\n    .more .more-item .more-subitems {\n      display: none;\n      width: 100%;\n      background: #009797;\n      padding: .9em 0;\n      color: white; }\n      .more .more-item .more-subitems a {\n        display: inline-block;\n        width: 100%;\n        padding: 0 1em;\n        color: inherit; }\n        .more .more-item .more-subitems a:hover {\n          color: #ffe600; }\n      .more .more-item .more-subitems li {\n        padding: 10px 0; }\n      .more .more-item .more-subitems.active {\n        display: block; }\n", ""]);

// exports


/***/ }),

/***/ 566:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header-logo.4351b6c6e89e977e16b5.png";

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[571]);
//# sourceMappingURL=styles.bundle.js.map