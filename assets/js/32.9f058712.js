(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{248:function(t,e,a){"use strict";a.r(e);var l=a(5),v=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[t._v("#")]),t._v(" Android")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Init.gradle")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('allprojects {\n    repositories {\n        maven { url \'file:/Users/nohi/data/repo\'}\n        mavenLocal()\n        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" }\n        maven { url \'http://maven.aliyun.com/nexus/content/repositories/central/\' }\n        maven { url "http://maven.oschina.net/content/groups/public/" } \n        mavenCentral()\n    }\n\n    buildscript { \n        repositories { \n            maven { name "Alibaba" ; url \'https://maven.aliyun.com/repository/public\' }\n            maven { name "M2" ; url \'https://plugins.gradle.org/m2/\' }\n        }\n    }\n}\n切记不要配置： maven { name "Bstek" ; url "http://nexus.bsdn.org/content/groups/public/" }\n这玩意里面的包不对，折腾了我几天\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站")]),t._v(" "),a("ul",[a("li",[t._v("https://developer.android.google.cn/studio/build/application-id.html?hl=zh-cn")]),t._v(" "),a("li",[t._v("Android 教程： https://www.w3cschool.cn/android/android-application-components.html")]),t._v(" "),a("li",[t._v("UI设计：摹客网：https://app.mockplus.cn/app/sTqAu93NpX/storyboard")])]),t._v(" "),a("h2",{attrs:{id:"android-应用程序组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-应用程序组件","aria-hidden":"true"}},[t._v("#")]),t._v(" Android 应用程序组件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("组件")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Activities")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("描述UI，并且处理用户与机器屏幕的交互。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Services")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("处理与应用程序关联的后台操作。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Broadcast Receivers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("处理Android操作系统和应用程序之间的通信。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Content Providers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("处理数据和数据库管理方面的问题。")])])])]),t._v(" "),a("p",[t._v("广播接收器是"),a("strong",[t._v("BroadcastReceiver")]),t._v("类的一个子类，每个消息以"),a("strong",[t._v("Intent")]),t._v("对象的形式来广播。")]),t._v(" "),a("h2",{attrs:{id:"附件组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附件组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 附件组件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("组件")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Fragments")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表活动中的一个行为或者一部分用户界面。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Views")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绘制在屏幕上的UI元素，包括按钮，列表等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Layouts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("控制屏幕格式，展示视图外观的View的继承。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Intents")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件间的消息连线。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Resources")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("外部元素，例如字符串资源、常量资源及图片资源等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Manifest")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用程序的配置文件。")])])])]),t._v(" "),a("p",[t._v("res/ 目录在各种子目录中包含了所有的资源。这里有一个图片资源，两个布局资源和一个字符串资源文件。下表详细的给出了在项目中 res/ 目录里面支持的资源。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("目录")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("资源类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("anim/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义动画属性的XML文件。它们被保存在res/anim/文件夹下，通过R.anim类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("color/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义颜色状态列表的XML文件。它们被保存在res/color/文件夹下，通过R.color类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("drawable/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图片文件，如.png,.jpg,.gif或者XML文件，被编译为位图、状态列表、形状、动画图片。它们被保存在res/drawable/文件夹下，通过R.drawable类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("layout/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义用户界面布局的XML文件。它们被保存在res/layout/文件夹下，通过R.layout类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("menu/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义应用程序菜单的XML文件，如选项菜单，上下文菜单，子菜单等。它们被保存在res/menu/文件夹下，通过R.menu类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("raw/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任意的文件以它们的原始形式保存。需要根据名为R.raw.filename的资源ID，通过调用Resource.openRawResource()来打开raw文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("values/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("包含简单值(如字符串，整数，颜色等)的XML文件。这里有一些文件夹下的资源命名规范。arrays.xml代表数组资源，通过R.array类访问；integers.xml代表整数资源，通过R.integer类访问；bools.xml代表布尔值资源，通过R.bool类访问；colors.xml代表颜色资源，通过R.color类访问；dimens.xml代表维度值，通过R.dimen类访问；strings.xml代表字符串资源，通过R.string类访问；styles.xml代表样式资源，通过R.style类访问")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("xml/")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可以通过调用Resources.getXML()来在运行时读取任意的XML文件。可以在这里保存运行时使用的各种配置文件")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用资源")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Java 文字：txtName.setText(getResources().getText(R.string.name)); \n图片：imgIcon.setBackgroundDrawableResource(R.drawable.icon); \n颜色：txtName.setTextColor(getResouces().getColor(R.color.red)); \n布局：setContentView(R.layout.main);\n控件：txtName = (TextView)findViewById(R.id.txt_name);\n\n\n<TextView android:text="@string/hello_world" android:layout_width="wrap_content" android:layout_height="wrap_content" android:background = "@drawable/img_back"/>\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"activity-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity-类","aria-hidden":"true"}},[t._v("#")]),t._v(" Activity 类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("回调")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onCreate()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这是第一个回调，在活动第一次创建是调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onStart()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这个回调在活动为用户可见时被调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onResume()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("这个回调在应用程序与用户开始可交互的时候调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onPause()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("被暂停的活动无法接受用户输入，不能执行任何代码。当当前活动将要被暂停，上一个活动将要被恢复是调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onStop()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当活动不在可见时调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onDestroy()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当活动被系统销毁之前调用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onRestart()")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当活动被停止以后重新打开时调用")])])])]),t._v(" "),a("h2",{attrs:{id:"android-drawable-详解（教你画画！）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-drawable-详解（教你画画！）","aria-hidden":"true"}},[t._v("#")]),t._v(" Android Drawable 详解（教你画画！）")]),t._v(" "),a("blockquote",[a("p",[t._v("参考：https://www.cnblogs.com/Jeely/p/11045042.html")])]),t._v(" "),a("h3",{attrs:{id:"drawable分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drawable分类","aria-hidden":"true"}},[t._v("#")]),t._v(" Drawable分类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("No")]),t._v(" "),a("th",[t._v("xml标签")]),t._v(" "),a("th",[t._v("Class类")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("shape")]),t._v(" "),a("td",[t._v("ShapeDrawable")]),t._v(" "),a("td",[t._v("特定形状，模型的图样")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("selector")]),t._v(" "),a("td",[t._v("StateListDrawable")]),t._v(" "),a("td",[t._v("不同状态选择不同的图样")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("layer-list")]),t._v(" "),a("td",[t._v("LayerDrawable")]),t._v(" "),a("td",[t._v("层叠图样")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("level-list")]),t._v(" "),a("td",[t._v("LevelListDrawable")]),t._v(" "),a("td",[t._v("不同程度图样")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("transition")]),t._v(" "),a("td",[t._v("TransitionDrawable")]),t._v(" "),a("td",[t._v("渐变图样")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("ripple")]),t._v(" "),a("td",[t._v("RippleDrawable")]),t._v(" "),a("td",[t._v("波纹图样")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("inset")]),t._v(" "),a("td",[t._v("InsetDrawable")]),t._v(" "),a("td",[t._v("内嵌图样")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("scale")]),t._v(" "),a("td",[t._v("ScaleDrawable")]),t._v(" "),a("td",[t._v("缩放图样")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("clip")]),t._v(" "),a("td",[t._v("ClipDrawable")]),t._v(" "),a("td",[t._v("剪切图样")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("rotate")]),t._v(" "),a("td",[t._v("RotateDrawable")]),t._v(" "),a("td",[t._v("旋转图样")])]),t._v(" "),a("tr",[a("td",[t._v("11")]),t._v(" "),a("td",[t._v("animation-list")]),t._v(" "),a("td",[t._v("AnimationDrawable")]),t._v(" "),a("td",[t._v("动画效果")])]),t._v(" "),a("tr",[a("td",[t._v("12")]),t._v(" "),a("td",[t._v("bitmap")]),t._v(" "),a("td",[t._v("BitmapDrawable")]),t._v(" "),a("td",[t._v("图片图样")])]),t._v(" "),a("tr",[a("td",[t._v("13")]),t._v(" "),a("td",[t._v("nine-patch")]),t._v(" "),a("td",[t._v("NinePatchDrawable")]),t._v(" "),a("td",[t._v(".9图")])])])])])}],!1,null,null,null);e.default=v.exports}}]);