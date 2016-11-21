webpackJsonp([65,202],{

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["p", "布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。"], ["p", "Ant Design 的布局和导航设计规范如下："], ["h3", "尺寸规则"], ["p", "一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。"], ["ul", ["li", ["p", "顶部导航（大部分系统）：一级导航高度 ", ["code", "64px"], "，二级导航 ", ["code", "48px"], "。"]], ["li", ["p", "顶部导航（展示类页面）：一级导航高度 ", ["code", "80px"], ",二级导航 ", ["code", "56px"], "。"]], ["li", ["p", "顶部导航高度的范围计算公式为：", ["code", "48+8n"], "。"]], ["li", ["p", "侧边导航宽度的范围计算公式：", ["code", "200+8n"], "。"]]], ["h3", "交互原则"], ["ul", ["li", ["p", "一级导航和末级的导航需要在可视化的层面被强调出来；"]], ["li", ["p", "当前项应该在呈现上优先级最高；"]], ["li", ["p", "当导航收起的时候，当前项的样式自动赋予给它的上一个层级；"]], ["li", ["p", "左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。"]]], ["h3", "视觉原则"], ["p", "导航样式上需要根据信息层级合理的选择样式："], ["ul", ["li", ["p", ["strong", "大色块强调"]], ["p", "建议用于底色为深色系时，当前页面父级的导航项。"]], ["li", ["p", ["strong", "高亮火柴棍"]], ["p", "当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。"]], ["li", ["p", ["strong", "字体高亮变色"]], ["p", "从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。"]], ["li", ["p", ["strong", "字体放大"]], ["p", ["code", "12px"], "、", ["code", "14px"], " 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。"]]], ["p", "在大中后台系统中，Ant Design 使用两种常见的布局形式，顶部导航布局和侧边导航布局，以下收集了使用 Ant Design 设计的中后台产品的基本布局。"]],
	  "meta": {
	    "template": "component",
	    "category": {
	      "zh-CN": "设计基础",
	      "en-US": "Design Fundamental"
	    },
	    "order": 4,
	    "cols": 1,
	    "title": {
	      "zh-CN": "常用布局",
	      "en-US": "Layout"
	    },
	    "filename": "docs/spec/layout/index.md"
	  },
	  "toc": ["ul"]
	};

/***/ }

});