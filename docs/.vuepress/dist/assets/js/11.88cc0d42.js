(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"闭包-closure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包-closure"}},[t._v("#")]),t._v(" 闭包(Closure)")]),t._v(" "),a("h2",{attrs:{id:"瓦特is闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#瓦特is闭包"}},[t._v("#")]),t._v(" 瓦特is闭包")]),t._v(" "),a("ul",[a("li",[t._v("面试官：你回答一下什么叫闭包")]),t._v(" "),a("li",[t._v("A：我认为就是函数嵌套函数！")])]),t._v(" "),a("p",[t._v("这是一个真实案例,之前我面试过一小伙伴就是这么回答的。不能说不对，至少不全对吧。而且也没有深度。next，我们好好探究一下什么叫"),a("strong",[t._v("闭包（Closure）")])]),t._v(" "),a("h2",{attrs:{id:"_1-闭包的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-闭包的定义"}},[t._v("#")]),t._v(" 1.闭包的定义")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closure'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cosure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cousure2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("debugger")]),t._v("\n         console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        todo\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncousure2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以上两种形式都是闭包最简单例子，所以闭包的"),a("strong",[t._v("三个条件")]),t._v("：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("函数嵌套且返回函数表达式。")])]),t._v(" "),a("li",[a("p",[t._v("函数要被执行才会产生闭包。")])]),t._v(" "),a("li",[a("p",[t._v("最最关键的是内部函数要使用外部函数的变量。")]),t._v(" "),a("p",[a("strong",[t._v("特别对3说明一下，当内部函数没有引用外面函数变量的时候真的不叫闭包哈，可以用上面的demo代码改造return a+'closure' --\x3ereturn 'closure'，按下F12进入坦克！然后执行到断点位置,右边的调试台Scope里面是没Closure这个东西的")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-闭包的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-闭包的优缺点"}},[t._v("#")]),t._v(" 2.闭包的优缺点")]),t._v(" "),a("ul",[a("li",[t._v("优点\n"),a("ol",[a("li",[t._v("搭建桥梁使得可以读取函数内部的变量")])])]),t._v(" "),a("li",[t._v("缺点\n"),a("ol",[a("li",[t._v("变量常驻内存，增大内存使用量（内存泄漏）")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-闭包的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-闭包的应用场景"}},[t._v("#")]),t._v(" 3.闭包的应用场景")])])}),[],!1,null,null,null);s.default=r.exports}}]);