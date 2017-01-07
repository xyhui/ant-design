webpackJsonp([95,209],{

/***/ 1758:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["p", "Before delving into Ant Design React, a good knowledge of ", ["a", {
	    "title": null,
	    "href": "http://facebook.github.io/react/"
	  }, "React"], " and ", ["a", {
	    "title": null,
	    "href": "http://babeljs.io/docs/learn-es2015/"
	  }, "JavaScript ES2015"], " is needed."], ["h2", "First Example"], ["p", "The following CodePen demo is the simplest usage case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug. Please don't use this demo as a scaffold in real world."], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/wGOWGW?editors=001"
	  }, "antd CodePen"]]]], ["h2", "Standard Development Flow"], ["p", "During development, you may need to compile and debug JSX and ES2015 code, and even proxy some of the request to mocked data or some external services. And all of these to be done with a quick feedback provided through hot reloading of changes."], ["p", "Such features, together with packaging the production version are covered in this work flow."], ["h3", "1. Installation"], ["blockquote", ["p", "Please make sure that you had installed ", ["a", {
	    "title": null,
	    "href": "https://nodejs.org/en/"
	  }, "Node.js"], "(> v4.x) before using ", ["code", "antd-init"], "."]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd-init -g"
	  }, ["code", "$ npm install antd-init -g"]], ["p", "Read ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/"
	  }, "the documentation of ", ["code", "antd-init"]], " and ", ["a", {
	    "title": null,
	    "href": "http://ant-tool.github.io/"
	  }, "the documentation of ", ["code", "ant-tool"]], " to explore more features."], ["blockquote", ["p", "Also, you can use scaffold/demo which is provided by community:"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/JasonBai007/reactSPA"
	  }, "reactSPA"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/Justin-lu/react-redux-antd"
	  }, "react-redux-antd by Justin-lu"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/okoala/react-redux-antd"
	  }, "react-redux-antd by okoala"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/fireyy/react-antd-admin"
	  }, "react-antd-admin"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/yuzhouisme/react-antd-redux-router-starter"
	  }, "react-antd-redux-router-starter"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/BetaRabbit/react-redux-antd-starter"
	  }, "react-redux-antd-starter"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/129"
	  }, "more"]]]]], ["h3", "2. Create a New Project"], ["p", "A new project can be created using CLI tools."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">mkdir</span> antd-demo <span class=\"token operator\">&amp;&amp;</span> <span class=\"token function\">cd</span> antd-demo\n$ antd-init"
	  }, ["code", "$ mkdir antd-demo && cd antd-demo\n$ antd-init"]], ["p", ["code", "antd-init"], " will run ", ["code", "npm install"], " after a project is created. If it fails, you can run ", ["code", "npm install"], " by yourself."], ["h3", "3. Use antd's Components"], ["p", "By default, besides the scaffolding needed to start the development, a fully working Todo application is created.\nYou may study this example later. For now, just follow this guide in order to get some experience working with the result of ", ["code", "antd-init"], "."], ["p", "Replace the content of ", ["code", "index.js"], " with the following code.\nAs you can see, there is no difference between antd's components and usual React components."], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ReactDOM <span class=\"token keyword\">from</span> <span class=\"token string\">'react-dom'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      date<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Selected Date: '</span> <span class=\"token operator\">+</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> date <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'100px auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Date<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'root'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DatePicker, message } from 'antd';\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: '',\n    };\n  }\n  handleChange(date) {\n    message.info('Selected Date: ' + date.toString());\n    this.setState({ date });\n  }\n  render() {\n    return (\n      <div style={{ width: 400, margin: '100px auto' }}>\n        <DatePicker onChange={value => this.handleChange(value)} />\n        <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"]], ["blockquote", ["p", "All the components in antd are listed in the sidebar."]], ["h3", "4. Development & Debugging"], ["p", "Run your project and visit ", ["a", {
	    "title": null,
	    "href": "http://127.0.0.1:8000"
	  }, "http://127.0.0.1:8000"]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> start"
	  }, ["code", "$ npm start"]], ["h3", "5. Building & Deployment"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> run build"
	  }, ["code", "$ npm run build"]], ["p", "Entry files will be built and generated in ", ["code", "dist"], " directory, then we can deploy it to different environments."], ["blockquote", ["p", "This guide is designed to help you to understand how to use antd, so it may not be similar to what you do in the real world.\nBut you can use those tools in your project, depending on your context and needs."]], ["h2", "Compatibility"], ["p", "Ant Design React supports all the modern browsers and IE9+."], ["p", "You need to provide ", ["a", {
	    "title": null,
	    "href": "https://github.com/es-shims/es5-shim"
	  }, "es5-shim"], " and ", ["a", {
	    "title": null,
	    "href": "https://github.com/paulmillr/es6-shim"
	  }, "es6-shim"], " and other polyfills for IE browsers. If you are using babel, we strongly recommend to use ", ["a", {
	    "title": null,
	    "href": "https://babeljs.io/docs/usage/polyfill/"
	  }, "babel-polyfill"], " and ", ["a", {
	    "title": null,
	    "href": "https://babeljs.io/docs/plugins/transform-runtime/"
	  }, "babel-plugin-transform-runtime"], "."], ["blockquote", ["p", "If you run into problem about ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3400#issuecomment-253181445"
	  }, "startsWith "], ", you should import  ", ["a", {
	    "title": null,
	    "href": "https://github.com/paulmillr/es6-shim"
	  }, "es6-shim"], " or ", ["a", {
	    "title": null,
	    "href": "https://babeljs.io/docs/usage/polyfill/"
	  }, "babel-polyfill"], " as workaround."]], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token doctype\">&lt;!DOCTYPE html></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!-- import stylesheet --></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/index.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!-- Polyfills --></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!--[if lt IE 10]>\n    &lt;script src=\"https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js\">&lt;/script>\n    &lt;![endif]--></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!--[if lte IE 11]>\n    &lt;script src=\"https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js\">&lt;/script>\n    &lt;![endif]--></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\" spellcheck=\"true\">&lt;!-- import common dependencies --></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/common.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\" spellcheck=\"true\">&lt;!-- import entry file --></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/index.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <!-- import stylesheet -->\n    <link rel=\"stylesheet\" href=\"/index.css\">\n    <!-- Polyfills -->\n    <!--[if lt IE 10]>\n    <script src=\"https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js\"></script>\n    <![endif]-->\n    <!--[if lte IE 11]>\n    <script src=\"https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js\"></script>\n    <![endif]-->\n  </head>\n  <body>\n  </body>\n  <!-- import common dependencies -->\n  <script src=\"/common.js\"></script>\n  <!-- import entry file -->\n  <script src=\"/index.js\"></script>\n</html>"]], ["h4", "IE8 note"], ["blockquote", ["p", "We don't support IE8 after ", ["code", "antd@2.0"], "."]], ["p", "You may encounter problems like ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/issues/28"
	  }, "#28"], " and ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/858"
	  }, "#858"], ", since ", ["code", "babel@6.x"], " doesn't support IE8. You can refer to this ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/blob/f5fb9479ca973fade51fd6754e50f8b3fafbb1df/boilerplate/webpack.config.js#L4-L8"
	  }, "webpack config"], "."], ["blockquote", ["p", "More about how to use React in IE8: ", ["a", {
	    "title": null,
	    "href": "https://github.com/xcatliu/react-ie8"
	  }, "https://github.com/xcatliu/react-ie8"]]], ["h2", "Customized Work Flow"], ["p", "If you want to customize your work flow, we recommend to use ", ["a", {
	    "title": null,
	    "href": "http://webpack.github.io/"
	  }, "webpack"], " to build and debug code."], ["p", "Also, you can use any ", ["a", {
	    "title": null,
	    "href": "https://github.com/enaqx/awesome-react#boilerplates"
	  }, "scaffold"], " available in React ecosystem. If you encounter problems, you can use our ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"
	  }, "webpack config"], " and ", ["a", {
	    "title": null,
	    "href": "http://ant-tool.github.io/webpack-config.html"
	  }, "modify it"], "."], ["p", "There are some ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/129"
	  }, "scaffolds"], " which have already integrated antd, so you can try and start with one of these, and even contribute."], ["h2", "Import on Demand"], ["p", "If we import a component like this ", ["code", "import { Button } from 'antd';"], ", then all the components of antd will be imported. But, we can import component on demand:"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/button'</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import Button from 'antd/lib/button';"]], ["p", "If you use ", ["code", "babel"], ", we recommend to use ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], ". This plugin will convert the following code to the above form:"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import { Button } from 'antd';"]], ["p", "And this plugin can also load styles on demand. See the ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import#usage"
	  }, "usage"], " for further details."], ["h2", "Customization"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "Customize Theme"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
	  }, "Local Iconfont"]]]], ["h2", "Tips"], ["ul", ["li", ["p", "You can use any ", ["code", "npm"], " modules."]], ["li", ["p", "We recommend to write code in ", ["a", {
	    "title": null,
	    "href": "http://babeljs.io/blog/2015/06/07/react-on-es6-plus"
	  }, "ES2015"], " as ", ["code", "babel"], " has been integrated in our work flow."]]]],
	  "meta": {
	    "order": 1,
	    "title": "Getting Started",
	    "filename": "docs/react/getting-started.en-US.md"
	  },
	  "description": ["section", ["p", "Ant Design React is dedicated to providing a ", ["strong", "good development experience"], " for programmers."]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#First-Example"
	  }, "First Example"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Standard-Development-Flow"
	  }, "Standard Development Flow"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Compatibility"
	  }, "Compatibility"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Customized-Work-Flow"
	  }, "Customized Work Flow"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Import-on-Demand"
	  }, "Import on Demand"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Customization"
	  }, "Customization"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Tips"
	  }, "Tips"]]]
	};

/***/ }

});