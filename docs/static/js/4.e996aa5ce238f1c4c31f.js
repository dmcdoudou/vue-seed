webpackJsonp([4],{111:function(e,t,r){r(266);var l=r(18)(r(186),r(277),"data-v-d61bc1ce",null);e.exports=l.exports},127:function(e,t,r){e.exports={default:r(128),__esModule:!0}},128:function(e,t,r){var l=r(129),a=l.JSON||(l.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},129:function(e,t){var r=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(127),a=r.n(l),o={downloader_list:"download/type",spider_list:"type/list",submit_create:"template/create?type=Page",submit_edit:"template/update?type=Page"};t.default={name:"handlepage",data:function(){return{form:{id:"",name:"",demo_url:"",downloader_type:"",js_text:"",linkid_list:"",schemaid_list:"",spider_type:""},downloader_list:{},spider_list:{},flag:this.$route.query.type}},created:function(){this.getDownloaderList(),this.getSpiderList(),this.renderPage()},methods:{getDownloaderList:function(){var e=this;this.$http.get(o.downloader_list).then(function(t){"Success"===t.body.msg&&(e.downloader_list=t.body.data)},function(t){e.$message.error("网络错误，下载类型列表获取失败")})},getSpiderList:function(){var e=this;this.$http.get(o.spider_list).then(function(t){"Success"===t.body.msg&&(e.spider_list=t.body.data)},function(t){e.$message.error("网络错误，爬虫类型列表获取失败")})},renderPage:function(){if("edit"===this.flag){var e=JSON.parse(this.$route.query.data);delete e.downloader_type_name,delete e.spider_name,this.form=e}},onSubmit:function(){var e=this,t=JSON.parse(a()(this.form)),r="edit"===this.flag?o.submit_edit:o.submit_create;this.$http.post(r,t).then(function(t){"Success"===t.body.msg&&(e.$message.success("编辑成功！"),e.goBack())},function(t){e.$message.error("网络错误，请稍后重试")})},goBack:function(){this.$router.push("Page")}}}},202:function(e,t,r){t=e.exports=r(108)(),t.push([e.i,".form-wrap[data-v-d61bc1ce]{margin:40px auto 0;width:50%}.el-select[data-v-d61bc1ce]{width:100%}",""])},266:function(e,t,r){var l=r(202);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r(109)("42042030",l,!0)},277:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/Page"}}},[e._v("模板列表")]),e._v(" "),r("el-breadcrumb-item",[e._v(e._s("add"===e.flag?"新增模板":"编辑模板"))])],1),e._v(" "),r("div",{staticClass:"form-wrap"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"序号"}},[r("el-input",{attrs:{disabled:"",placeholder:"系统自动生成，不用填写"},model:{value:e.form.id,callback:function(t){e.form.id=t},expression:"form.id"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"模板名称"}},[r("el-input",{attrs:{placeholder:"请填写模板名称"},model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"示例地址"}},[r("el-input",{attrs:{placeholder:"请填写示例地址"},model:{value:e.form.demo_url,callback:function(t){e.form.demo_url=t},expression:"form.demo_url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"下载方式"}},[r("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择下载方式"},model:{value:e.form.downloader_type,callback:function(t){e.form.downloader_type=t},expression:"form.downloader_type"}},e._l(e.downloader_list,function(e,t,l){return r("el-option",{key:l,attrs:{label:t,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"爬虫类型"}},[r("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择爬虫类型"},model:{value:e.form.spider_type,callback:function(t){e.form.spider_type=t},expression:"form.spider_type"}},e._l(e.spider_list,function(e,t,l){return r("el-option",{key:l,attrs:{label:t,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"链接器ID列表"}},[r("el-input",{attrs:{placeholder:"请填写链接器ID列表，英文逗号分隔"},model:{value:e.form.linkid_list,callback:function(t){e.form.linkid_list=t},expression:"form.linkid_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"元数据ID列表"}},[r("el-input",{attrs:{placeholder:"请填写元数据ID列表，英文逗号分隔"},model:{value:e.form.schemaid_list,callback:function(t){e.form.schemaid_list=t},expression:"form.schemaid_list"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自定义JS"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请填写page页面需要执行的js脚本"},model:{value:e.form.js_text,callback:function(t){e.form.js_text=t},expression:"form.js_text"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:e.goBack}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]}}});