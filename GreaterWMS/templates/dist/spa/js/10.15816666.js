(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"07f0":function(t,a){},"0cf9":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"q-mr-md"},[t._v(t._s(t.$t("download_center.createTime")))]),a("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:t.interval},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{range:""},model:{value:t.createDate1,callback:function(a){t.createDate1=a},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:t.createDate2,callback:function(a){t.createDate2=a},expression:"createDate2"}}),a("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(a){return t.reset()}}}),a("q-btn",{attrs:{label:t.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(a){return t.downloadlistData()}}}),a("q-btn",{attrs:{label:t.$t("downloadasndetail"),icon:"cloud_download"},on:{click:function(a){return t.downloaddetailData()}}})],1)],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"asn_code",attrs:{props:e}},[t._v(t._s(e.row.asn_code))]),a("q-td",{key:"asn_status",attrs:{props:e}},[t._v(t._s(e.row.asn_status))]),a("q-td",{key:"total_weight",attrs:{props:e}},[t._v(t._s(e.row.total_weight.toFixed(4)))]),a("q-td",{key:"total_volume",attrs:{props:e}},[t._v(t._s(e.row.total_volume.toFixed(4)))]),a("q-td",{key:"supplier",attrs:{props:e}},[t._v(t._s(e.row.supplier))]),a("q-td",{key:"creater",attrs:{props:e}},[t._v(t._s(e.row.creater))]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v(t._s(e.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v(t._s(e.row.update_time))])],1)]}}])})],1),[a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.max,expression:"max !== 0"}],staticClass:"q-pa-lg flex flex-center"},[a("div",[t._v(t._s(t.total)+" ")]),a("q-pagination",{attrs:{color:"black",max:t.max,"max-pages":6,"boundary-links":""},on:{click:function(a){return t.getList()}},model:{value:t.current,callback:function(a){t.current=a},expression:"current"}}),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paginationIpt,expression:"paginationIpt"}],staticStyle:{width:"60px","text-align":"center"},domProps:{value:t.paginationIpt},on:{blur:t.changePageEnter,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.changePageEnter.apply(null,arguments)},input:function(a){a.target.composing||(t.paginationIpt=a.target.value)}}})])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.max,expression:"max === 0"}],staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},n=[],i=(e("5319"),e("3004")),o=e("bd4c"),r=e("a357"),l=e("18d6"),d={name:"Pageinbounddownload",data(){return{login_name:"",authin:"0",pathname:"asn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"asn_code",required:!0,label:this.$t("inbound.view_asn.asn_code"),align:"left",field:"asn_code"},{name:"asn_status",label:this.$t("inbound.view_asn.asn_status"),field:"asn_status",align:"center"},{name:"total_weight",label:this.$t("inbound.view_asn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("inbound.view_asn.total_volume"),field:"total_volume",align:"center"},{name:"supplier",label:this.$t("baseinfo.view_supplier.supplier_name"),field:"supplier",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",dateArray:"",searchUrl:"",downloadUrl:"asn/filelist/",downloadDetailUrl:"asn/filedetail/",current:1,max:0,total:0,paginationIpt:1}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(t){t&&(t.to?(this.createDate2=`${t.from} - ${t.to}`,this.date_range=`${t.from},${t.to} 23:59:59`,this.searchUrl=this.pathname+"list/?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"filelist/?create_time__range="+this.date_range,this.downloadDetailUrl=this.pathname+"filedetail/?create_time__range="+this.date_range):(this.createDate2=`${t}`,this.dateArray=t.split("/"),this.searchUrl=this.pathname+"list/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"filelist/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadDetailUrl=this.pathname+"filedetail/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var t=this;Object(i["f"])(t.pathname+"list/?page="+t.current).then((a=>{t.table_list=[],a.results.forEach((a=>{1===a.asn_status?a.asn_status=t.$t("inbound.predeliverystock"):2===a.asn_status?a.asn_status=t.$t("inbound.preloadstock"):3===a.asn_status?a.asn_status=t.$t("inbound.presortstock"):4===a.asn_status?a.asn_status=t.$t("inbound.sortstock"):5===a.asn_status?a.asn_status=t.$t("inbound.asndone"):a.asn_status="N/A",t.table_list.push(a)})),t.total=a.count,0===a.count||1===Math.ceil(a.count/30)?t.max=0:t.max=Math.ceil(a.count/30),t.pathname_previous=a.previous,t.pathname_next=a.next})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},changePageEnter(t){Number(this.paginationIpt)<1?(this.current=1,this.paginationIpt=1):Number(this.paginationIpt)>this.max?(this.current=this.max,this.paginationIpt=this.max):this.current=Number(this.paginationIpt),this.getList()},getSearchList(){var t=this;t.current=1,t.paginationIpt=1,Object(i["f"])(t.searchUrl+"&page="+t.current).then((a=>{t.table_list=[],a.results.forEach((a=>{1===a.asn_status?a.asn_status=t.$t("inbound.predeliverystock"):2===a.asn_status?a.asn_status=t.$t("inbound.preloadstock"):3===a.asn_status?a.asn_status=t.$t("inbound.presortstock"):4===a.asn_status?a.asn_status=t.$t("inbound.sortstock"):5===a.asn_status?a.asn_status=t.$t("inbound.asndone"):a.asn_status="N/A",t.table_list.push(a)})),t.total=a.count,0===a.count||1===Math.ceil(a.count/30)?t.max=0:t.max=Math.ceil(a.count/30),t.pathname_previous=a.previous,t.pathname_next=a.next})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;Object(i["f"])(t.pathname_previous,{}).then((a=>{t.table_list=[],a.results.forEach((a=>{1===a.asn_status?a.asn_status=t.$t("inbound.predeliverystock"):2===a.asn_status?a.asn_status=t.$t("inbound.preloadstock"):3===a.asn_status?a.asn_status=t.$t("inbound.presortstock"):4===a.asn_status?a.asn_status=t.$t("inbound.sortstock"):5===a.asn_status?a.asn_status=t.$t("inbound.asndone"):a.asn_status="N/A",t.table_list.push(a)})),t.pathname_previous=a.previous,t.pathname_next=a.next})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;Object(i["f"])(t.pathname_next,{}).then((a=>{t.table_list=[],a.results.forEach((a=>{1===a.asn_status?a.asn_status=t.$t("inbound.predeliverystock"):2===a.asn_status?a.asn_status=t.$t("inbound.preloadstock"):3===a.asn_status?a.asn_status=t.$t("inbound.presortstock"):4===a.asn_status?a.asn_status=t.$t("inbound.sortstock"):5===a.asn_status?a.asn_status=t.$t("inbound.asndone"):a.asn_status="N/A",t.table_list.push(a)})),t.pathname_previous=a.previous,t.pathname_next=a.next})).catch((a=>{t.$q.notify({message:a.detail,icon:"close",color:"negative"})}))},downloadlistData(){var t=this;Object(i["g"])(t.downloadUrl).then((a=>{var e=Date.now(),s=o["b"].formatDate(e,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"list"+s+".csv","\ufeff"+a.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},downloaddetailData(){var t=this;Object(i["g"])(t.downloadDetailUrl).then((a=>{var e=Date.now(),s=o["b"].formatDate(e,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"detail"+s+".csv","\ufeff"+a.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="asn/filelist/",this.downloadDetailUrl="asn/filedetail/",this.createDate2=""}},created(){var t=this;l["a"].has("openid")?t.openid=l["a"].getItem("openid"):(t.openid="",l["a"].set("openid","")),l["a"].has("login_name")?t.login_name=l["a"].getItem("login_name"):(t.login_name="",l["a"].set("login_name","")),l["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=d,u=e("42e1"),_=e("9d38"),p=e("eaac"),h=e("27f9"),m=e("0016"),g=e("7cbe"),b=e("52ee"),f=e("e7a9"),v=e("9c40"),w=e("bd08"),y=e("db86"),x=e("3b16"),$=e("eebe"),k=e.n($),q=Object(u["a"])(c,s,n,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])(q);a["default"]=q.exports;k()(q,"components",{QTable:p["a"],QInput:h["a"],QIcon:m["a"],QPopupProxy:g["a"],QDate:b["a"],QBtnGroup:f["a"],QBtn:v["a"],QTr:w["a"],QTd:y["a"],QPagination:x["a"]})},"9d38":function(t,a,e){"use strict";var s=e("07f0"),n=e.n(s);a["default"]=n.a}}]);