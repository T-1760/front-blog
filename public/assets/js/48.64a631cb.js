(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{639:function(e,o,t){"use strict";t.r(o);var u=t(15),i=Object(u.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"webaudio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webaudio"}},[e._v("#")]),e._v(" webAudio")]),e._v(" "),t("ul",[t("li",[e._v("参考链接\n"),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1jA4y197cu?p=4&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"}},[e._v("AudioContext音频波动"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"audiocontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audiocontext"}},[e._v("#")]),e._v(" AudioContext")]),e._v(" "),t("ul",[t("li",[e._v("计算机的声音系统, 主要用于创建和管理音频对象。音频由"),t("strong",[e._v("一组AudioNode组成，这些音频节点组合并路由到AudioDestinationNode")])]),e._v(" "),t("li",[e._v("创建AudioContext")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("let audioCtx = new (window.AudioContext || window.webkitAudioContext)()")])])]),e._v(" "),t("ul",[t("li",[e._v("AudioContext常用属性\n"),t("ol",[t("li",[t("code",[e._v("audioCtx.destination")]),e._v("返回一个AudioDestinationNode, 即context中所有音频(节点)的最终目标节点。"),t("strong",[e._v("定义音频渲染设备(如：扬声器)")])]),e._v(" "),t("li",[t("code",[e._v("audioCtx.currentTime")]),e._v("返回音频"),t("strong",[e._v("从创建开始到当前的时间（秒）")])])])]),e._v(" "),t("li",[e._v("AudioContext常用方法\n"),t("ol",[t("li",[t("code",[e._v("audioCtx.BaseAudioContext()")]),e._v(": 继承父接口的方法")]),e._v(" "),t("li",[t("code",[e._v("audioCtx.decodeAudioData( arrayBuffer ).then((buffer)=>{})")]),e._v(": 异步编码包含在arrayBuffer中的音频数据")]),e._v(" "),t("li",[t("code",[e._v("audioCtx.createBufferSource()")]),e._v(": 创建 AudioBufferSourceNode对象， 可用于播放和操作AudioBuffer对象中包含的音频数据")]),e._v(" "),t("li",[t("code",[e._v("audioCtx.createAnalyser()")]),e._v(": 创建 AnalyserNode对象，用于"),t("strong",[e._v("公开音频的时间和频率")])])])])]),e._v(" "),t("h3",{attrs:{id:"audiobuffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audiobuffer"}},[e._v("#")]),e._v(" AudioBuffer")]),e._v(" "),t("ul",[t("li",[e._v("内存中一段音频数据，可通过 "),t("strong",[e._v("Audio8Conext.decodeAudioData()从音频文件创建")]),e._v("或者 "),t("strong",[e._v("AudioContext.createBuffer()方法从原始数据创建")]),e._v("，音频数据编码为AudioBuffer格式才可被放入AudioBufferNode中使用")])]),e._v(" "),t("h3",{attrs:{id:"audiobuffernode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audiobuffernode"}},[e._v("#")]),e._v(" AudioBufferNode")]),e._v(" "),t("ul",[t("li",[e._v("由内存音频数据组成的音频源，音频数据存储在AudioBuffer中(即 buffer属性)")]),e._v(" "),t("li",[e._v("创建 AudioBufferNode\n"),t("blockquote",[t("p",[t("code",[e._v("let audioBufferSourceNode = audioCtx.createBufferSource()")])])])]),e._v(" "),t("li",[e._v("AudioBufferNode常用属性\n"),t("ol",[t("li",[t("code",[e._v("audioBufferSourceNode.buffer")]),e._v("提供重复播放音频的能力，该音频使用AudioBuffer作为声音文件的来源。若 buffer为null,节点自动生成一个单声道无声文件(即所有采样点为 0)。")])]),e._v(" "),t("blockquote",[t("p",[e._v("子属性 duration音频资源的时长(秒)")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[e._v("audioBufferSourceNode.loop")]),e._v(" 是否循环播放，默认false")])])]),e._v(" "),t("li",[e._v("AudioBufferNode常用方法\n"),t("ol",[t("li",[e._v("start/noteOn(when, offset, duration): 开始播放音频")])]),e._v(" "),t("blockquote",[t("p",[e._v("when参数：何时开始播放；offset参数：从音频第几帧开始；duration参数：播放几秒")])]),e._v(" "),t("ol",[t("li",[e._v("stop/noteOn(when): 结束播放音频")])]),e._v(" "),t("blockquote",[t("p",[e._v("when参数：何时停止播放")])])])])])}),[],!1,null,null,null);o.default=i.exports}}]);