// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.paciente_relatorio.paciente_relatorio');
goog.require('cljs.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('slider');
goog.require('react_med.screens.paciente_relatorio.bioimpedance');
react_med.screens.paciente_relatorio.paciente_relatorio.global$module$slider = goog.global["Slider"];
react_med.screens.paciente_relatorio.paciente_relatorio.two_line = (function react_med$screens$paciente_relatorio$paciente_relatorio$two_line(first_content,second_content){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "flexDirection": "column", "alignItems": "center", "height": (48), "padding": "20px 5px"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),first_content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "x-large"})], null),second_content], null)], null);
});
react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale = (function react_med$screens$paciente_relatorio$paciente_relatorio$point_in_a_scale(p__21600){
var map__21601 = p__21600;
var map__21601__$1 = (((((!((map__21601 == null))))?(((((map__21601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21601):map__21601);
var min = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"value","value",305978217));
var suffix = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var class_sufix = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),cljs.core.str.cljs$core$IFn$_invoke$arity$1(max),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),".","");
var value_percentage = ((value - min) / (max - min));
var value_color = (((value_percentage < 0.15))?"red":(((value_percentage < 0.25))?"#d0c215":(((value_percentage < 0.75))?"#15d015":(((value_percentage < 0.85))?"#d0c215":(((value_percentage < (1)))?"red":"#15d015"
)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),[".slider-root{\n        background: linear-gradient(90deg, rgba(183,141,130,0.3) 0%, rgba(25,252,3,0) 25%, rgba(25,252,3,0) 75%, rgba(183,141,130,0.3) 100%);\n        height: 30px;\n        border-radius: 6px;\n        color: mediumseagreen;\n        padding: 0;\n        margin: 20px 0;\n        }\n        .slider-thumb{\n        color: white;\n        border: 1px solid mediumseagreen;\n        }\n        .slider-track {\n        height: 0px;\n        }\n        .slider-rail {\n        height: 1px;\n        }\n        .slider-mark {\n        width: 0;\n        }\n        .slider-markLabel-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sufix),"{\n        color: black;\n        top: 15%;\n        }\n        .slider-markLabelActive-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sufix),"{\n        color: ",value_color,";\n        top: -100%;\n        font-size: 1.1em;\n        font-weith: bold;\n        }\n        "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.paciente_relatorio.paciente_relatorio.global$module$slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,value], null),new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),min,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),".",",")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),".",",")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),max,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(max),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),".",",")], null)], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"thumb","thumb",1718947232),"slider-thumb",new cljs.core.Keyword(null,"track","track",195787487),"slider-track",new cljs.core.Keyword(null,"valueLabel","valueLabel",1524812063),"slider-valueLabel",new cljs.core.Keyword(null,"mark","mark",-373816345),"slider-mark",new cljs.core.Keyword(null,"markLabel","markLabel",-127784065),["slider-markLabel-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sufix)].join(''),new cljs.core.Keyword(null,"markLabelActive","markLabelActive",-2127676089),["slider-markLabelActive-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sufix)].join(''),new cljs.core.Keyword(null,"root","root",-448657453),"slider-root"], null)], null)], null)], null);
});
react_med.screens.paciente_relatorio.paciente_relatorio.avaliacao_info = (function react_med$screens$paciente_relatorio$paciente_relatorio$avaliacao_info(p__21603){
var vec__21604 = p__21603;
var selected_patient = cljs.core.nth.call(null,vec__21604,(0),null);
var selected_avaliacao = cljs.core.nth.call(null,vec__21604,(1),null);
return cljs.core.merge.call(null,selected_avaliacao,cljs.core.dissoc.call(null,selected_patient,new cljs.core.Keyword(null,"avaliacoes","avaliacoes",-1489161982)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","avaliacao-info","react-med.screens.paciente-relatorio.paciente-relatorio/avaliacao-info",39331421),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-avaliacao","selected-avaliacao","react-med.screens.paciente-avaliacao/selected-avaliacao",1796286413)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null),react_med.screens.paciente_relatorio.paciente_relatorio.avaliacao_info);
react_med.screens.paciente_relatorio.paciente_relatorio.relatorio_component = (function react_med$screens$paciente_relatorio$paciente_relatorio$relatorio_component(){
var avaliacao_info = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.paciente-relatorio.paciente-relatorio","avaliacao-info","react-med.screens.paciente-relatorio.paciente-relatorio/avaliacao-info",39331421)], null));
var em_relacao_peso = ((function (avaliacao_info){
return (function (p1__21607_SHARP_){
return parseFloat(((p1__21607_SHARP_ / new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info)) * (100)).toFixed((1)));
});})(avaliacao_info))
;
var gordura_corporal = em_relacao_peso.call(null,(new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info) - react_med.screens.paciente_relatorio.bioimpedance.massa_livre_de_gordura.call(null,avaliacao_info)));
var massa_musculoesqueletica = parseFloat(((react_med.screens.paciente_relatorio.bioimpedance.massa_musculoesqueletica.call(null,avaliacao_info) / (new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info) * new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info))) * (10000)).toFixed((1)));
var agua_corporal_total = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_corporal.call(null,avaliacao_info));
var agua_extracelular = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_extracelular.call(null,avaliacao_info));
var agua_intracelular = em_relacao_peso.call(null,react_med.screens.paciente_relatorio.bioimpedance.agua_intracelular.call(null,avaliacao_info));
var imc = parseFloat((new cljs.core.Keyword(null,"peso","peso",-5226095).cljs$core$IFn$_invoke$arity$1(avaliacao_info) / ((new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info) * new cljs.core.Keyword(null,"estatura","estatura",-685084760).cljs$core$IFn$_invoke$arity$1(avaliacao_info)) * 1.0E-4)).toFixed((1)));
var t = react_med.screens.paciente_relatorio.bioimpedance.t.call(null,avaliacao_info);
var line_style = ({"display": "flex", "alignItems": "center", "height": (48), "whiteSpace": "pre"});
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "padding": "0 35px", "maxWidth": "400px", "flexDirection": "column", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Gordura Corporal"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(4),new cljs.core.Keyword(null,"max","max",61366548),(38),new cljs.core.Keyword(null,"suffix","suffix",367373057),"%",new cljs.core.Keyword(null,"value","value",305978217),gordura_corporal], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Massa Musculoesquel\u00E9tica"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),massa_musculoesqueletica], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"\u00C1gua Corporal Total"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(50),new cljs.core.Keyword(null,"max","max",61366548),(80),new cljs.core.Keyword(null,"suffix","suffix",367373057),"%",new cljs.core.Keyword(null,"value","value",305978217),65.9], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"\u00C1gua Extracelular"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(10),new cljs.core.Keyword(null,"max","max",61366548),(40),new cljs.core.Keyword(null,"suffix","suffix",367373057),"%",new cljs.core.Keyword(null,"value","value",305978217),agua_extracelular], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"\u00C1gua Intracelular"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(30),new cljs.core.Keyword(null,"max","max",61366548),(60),new cljs.core.Keyword(null,"suffix","suffix",367373057),"%",new cljs.core.Keyword(null,"value","value",305978217),agua_intracelular], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),line_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"IMC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.point_in_a_scale,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(12),new cljs.core.Keyword(null,"max","max",61366548),(36),new cljs.core.Keyword(null,"value","value",305978217),imc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.two_line,"Imped\u00E2ncia",Math.round(react_med.screens.paciente_relatorio.bioimpedance.impedancia.call(null,avaliacao_info))], null)], null);
});
react_med.screens.paciente_relatorio.paciente_relatorio.view = (function react_med$screens$paciente_relatorio$paciente_relatorio$view(){
var paciente_selectionado = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.screens.patient-info.core","selected-patient","react-med.screens.patient-info.core/selected-patient",-1719364628)], null));
var menu_structure = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null));
var actions = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","actions","react-med.routes/actions",-1858990120)], null));
var tabs = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","tabs","react-med.routes/tabs",1784816700)], null));
var title = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),tabs], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.paciente_relatorio.paciente_relatorio.relatorio_component], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});

//# sourceMappingURL=paciente_relatorio.js.map
