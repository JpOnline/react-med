// Compiled by ClojureScript 1.10.520 {}
goog.provide('react_med.screens.lista_avaliacoes');
goog.require('cljs.core');
goog.require('react_med.shell_components');
goog.require('react_med.util');
goog.require('re_frame.core');
goog.require('day8.re_frame.tracing');
goog.require('reagent.core');
goog.require('menu_list');
goog.require('menu_item');
react_med.screens.lista_avaliacoes.global$module$menu_list = goog.global["MenuList"];
react_med.screens.lista_avaliacoes.global$module$menu_item = goog.global["MenuItem"];
react_med.screens.lista_avaliacoes.screen_shell = (function react_med$screens$lista_avaliacoes$screen_shell(p__14594,content_view){
var map__14595 = p__14594;
var map__14595__$1 = (((((!((map__14595 == null))))?(((((map__14595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14595):map__14595);
var actions = cljs.core.get.call(null,map__14595__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var menu_structure = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","side-menu","react-med.routes/side-menu",909029319)], null));
var title = react_med.util._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","title","react-med.routes/title",1582209313)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_panel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.top_bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.left_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variation","variation",-450640146),"<-"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.screen_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.tabs_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-options","menu-options",-1774050123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Informa\u00E7\u00F5es Pessoais",new cljs.core.Keyword(null,"state","state",-1988618099),"info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Avalia\u00E7\u00F5es",new cljs.core.Keyword(null,"state","state",-1988618099),"avaliacoes"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.main_content,cljs.core.with_meta.call(null,content_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.drawer_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-structure","menu-structure",-627499224),menu_structure], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.actions_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.shell_components.bottom_bar], null)], null);
});
react_med.screens.lista_avaliacoes.component = (function react_med$screens$lista_avaliacoes$component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_med.screens.lista_avaliacoes.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return react_med.util._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("react-med.routes","set-route","react-med.routes/set-route",-701732541),"coleta"], null));
})], null),"10/10/2019 (Quinta-feira)"], null)], null);
});
react_med.screens.lista_avaliacoes.actions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Voltar",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"back","back",-417520012)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Nova Avalia\u00E7\u00E3o",new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"nova-avaliacao","nova-avaliacao",-1690822290)], null)], null);
react_med.screens.lista_avaliacoes.view = (function react_med$screens$lista_avaliacoes$view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.screen_shell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),react_med.screens.lista_avaliacoes.actions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_med.screens.lista_avaliacoes.component], null)], null);
});

//# sourceMappingURL=lista_avaliacoes.js.map
