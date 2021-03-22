(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{282:function(a,e,s){"use strict";s.r(e);var t=s(5),l=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"es7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es7","aria-hidden":"true"}},[a._v("#")]),a._v(" es7")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.3.0\n\ndocker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag(7.3.0)\n')])])]),s("ul",[s("li",[s("p",[a._v("官方：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("https://hub.docker.com/_/elasticsearch")])]),a._v(" "),s("li",[s("p",[a._v("Create user defined network (useful for connecting to other services attached to the same network (e.g. Kibana)):")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ docker network create somenetwork\n")])])]),s("p",[a._v("Run Elasticsearch:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag\n')])])])])])])]),a._v(" "),s("h3",{attrs:{id:"elasticsearch-head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-head","aria-hidden":"true"}},[a._v("#")]),a._v(" elasticsearch head")]),a._v(" "),s("blockquote",[s("p",[a._v("https://www.cnblogs.com/wxy0126/p/11381598.html")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.2.0/elasticsearch-analysis-ik-7.2.0.zip\n\ndocker run -d --name elasticsearch-head -p 9100:9100 docker.io/mobz/elasticsearch-head:5\n")])])]),s("ul",[s("li",[s("p",[a._v("406错误")]),a._v(" "),s("blockquote",[s("p",[a._v("https://blog.csdn.net/ge_csdn/article/details/100125123")])])]),a._v(" "),s("li")]),a._v(" "),s("h3",{attrs:{id:"kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kibana","aria-hidden":"true"}},[a._v("#")]),a._v(" Kibana")]),a._v(" "),s("blockquote",[s("p",[a._v("https://segmentfault.com/a/1190000020140461")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("安装ik分词器")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd /usr/share/elasticsearch/plugins/\nelasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.3.0/elasticsearch-analysis-ik-7.3.0.zip\nexit\ndocker restart elasticsearch \n")])])])]),a._v(" "),s("li",[s("p",[a._v("运行kibana")]),a._v(" "),s("ul",[s("li",[a._v("配置文件\n*")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker run --name kibana --link=elasticsearch:es7 -p 5601:5601 -v /Users/nohi/data/docker/volumes/kibana/kibana.yml:/usr/share/kibana/config/kibana.yml -d kibana:7.3.0\ndocker start kibana\n")])])])]),a._v(" "),s("li",[s("p",[a._v("使用")]),a._v(" "),s("blockquote",[s("p",[a._v("https://www.cnblogs.com/wangzhuxing/p/9693707.html")])])])]),a._v(" "),s("h3",{attrs:{id:"logstash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logstash","aria-hidden":"true"}},[a._v("#")]),a._v(" logstash")]),a._v(" "),s("blockquote",[s("p",[a._v("https://www.cnblogs.com/time-read/p/10981731.html")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("配置文件：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("logstash.conf")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# input{\n#  file{\n#    path=>"/tmp/nginx/logs/access.log"\n#  }\n# }\ninput {\n    beats {\n        port => "5044"\n    }\n}\n# The filter part of this file is commented out to indicate that it is\n# optional.\n# filter {\n#\n# }\noutput{\n  stdout{     }\n \n  elasticsearch{\n    hosts => "http://172.17.0.1:9200/"\n    index => "logstash"\n    document_type => "doc"\n  }\n}\n')])])])]),a._v(" "),s("li",[s("p",[a._v("logstash.yml")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('http.host: "0.0.0.0"\nxpack.monitoring.enabled: false\nxpack.monitoring.elasticsearch.hosts: [ "http://elasticsearch:9200" ]\n')])])])])])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pull docker.elastic.co/logstash/logstash:7.3.0\ndocker pull logstash:7.3.0\n\ndocker run -p 5044:5044 --name logstash -d \\\n    -v /Users/nohi/data/docker/volumes/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\n    logstash:7.3.0\n\n直接读取/Users/nohi/app/logstash.log --\x3e es\n参见：https://blog.csdn.net/devcloud/article/details/99681107\ndocker run -p 5044:5044 --name logstash -d \\\n    -v /Users/nohi/data/docker/volumes/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\n    -v /Users/nohi/data/docker/volumes/logstash/logstash.yml:/usr/share/logstash/config/logstash.yml   \\\n    -v /Users/nohi/app/logstash.log:/tmp/nginx/logs/access.log \\\n    logstash:7.3.0 \n")])])]),s("ul",[s("li",[a._v("Filebeat -> logstash")])]),a._v(" "),s("h3",{attrs:{id:"filebeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filebeat","aria-hidden":"true"}},[a._v("#")]),a._v(" filebeat")]),a._v(" "),s("blockquote",[s("p",[a._v("https://www.cnblogs.com/time-read/p/10981731.html")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pull docker.elastic.co/beats/filebeat:7.3.0\n\ndocker run --name filebeat -d \\\n    -v /app/logs/:/var/log/:ro \\\n    -v /Users/nohi/data/docker/volumes/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml \\\n    docker.elastic.co/beats/filebeat:7.3.0\n")])])]),s("h2",{attrs:{id:"es系列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es系列","aria-hidden":"true"}},[a._v("#")]),a._v(" ES系列")]),a._v(" "),s("blockquote",[s("p",[a._v("https://www.cnblogs.com/wangzhuxing/p/9385365.html")])]),a._v(" "),s("h3",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 基础概念")]),a._v(" "),s("ul",[s("li",[a._v("索引：数据库")]),a._v(" "),s("li",[a._v("索引类型：表")]),a._v(" "),s("li",[a._v("文档：row -> 唯一标识")]),a._v(" "),s("li",[a._v("映射：表结构")])]),a._v(" "),s("h3",{attrs:{id:"核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 核心概念")]),a._v(" "),s("ul",[s("li",[a._v("分片")]),a._v(" "),s("li",[a._v("副本：replica")])]),a._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),s("blockquote",[s("p",[a._v("站内搜索、NoSQL数据库、日志分析、数据分析")])]),a._v(" "),s("h3",{attrs:{id:"分词器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分词器","aria-hidden":"true"}},[a._v("#")]),a._v(" 分词器")]),a._v(" "),s("p",[a._v("​\t\t全文搜索引擎会用某种算法对要建索引的文档进行分析， 从文档中提取出若干Token(词元)， 这些算法称为Tokenizer(分词器)， 这些Token会被进一步处理， 比如转成小写等， 这些处理算法被称为Token Filter(词元处理器), 被处理后的结果被称为Term(词)， 文档中包含了几个这样的Term被称为Frequency(词频)。 引擎会建立Term和原文档的Inverted Index(倒排索引)， 这样就能根据Term很快到找到源文档了。 文本被Tokenizer处理前可能要做一些预处理， 比如去掉里面的HTML标记， 这些处理的算法被称为Character Filter(字符过滤器)， 这整个的分析算法被称为Analyzer(分析器)。")]),a._v(" "),s("p",[a._v("​\t\tES内置了很多Analyzer, 还有很多第三方的Analyzer插件， 比如一些处理中文的Analyzer(中文分词)。")])])}],!1,null,null,null);e.default=l.exports}}]);