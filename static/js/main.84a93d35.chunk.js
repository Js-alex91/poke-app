(this["webpackJsonppoke-app"]=this["webpackJsonppoke-app"]||[]).push([[0],{11:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(15),n=a.n(s),r=a(19),i=a.n(r),o=a(24),l=function(e){return function(t){t({type:"FILTRAR",elemento:e})}},j=a(2),b=a(9),d=a(0),m=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e})).value;return Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){e(function(e){return{type:"BUSQUEDA_CARGAR_VALOR",value:e}}(t.target.value))},value:t}),Object(d.jsx)("button",{className:"btn btn-outline-light",type:"submit",onClick:function(a){a.preventDefault(),e(function(e){return function(t){t({type:"POKEMONES_CARGANDO"}),fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.trim().toLowerCase())).then((function(e){return e.json()})).then((function(e){return t({type:"BUSQUEDA_EXITO",payload:{id:e.id,name:e.name,img:e.sprites.other.dream_world.front_default,species:e.types[0].type.name,ability:e.abilities[0].ability.name,experince:e.base_experience,height:e.height,hp:e.stats[0].base_stat,attack:e.stats[1].base_stat,defence:e.stats[2].base_stat,specialAttack:e.stats[3].base_stat,specialDefence:e.stats[4].base_stat,speed:e.stats[5].base_stat}})})).catch((function(e){return t({type:"BUSQUEDA_ERROR"})}))}}(t))},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]})},u=(a(11),a.p+"static/media/logo.6e223bd2.png"),O=function(){var e=Object(j.b)();return Object(c.useEffect)((function(){e((function(e){e({type:"POKEMONES_CARGANDO"}),fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){return e.json()})).then((function(t){return t.results.map((function(t){fetch(t.url).then((function(e){return e.json()})).then((function(t){return e({type:"POKEMONES_GUARDAR",payload:{pokemon:{id:t.id,name:t.name,img:t.sprites.other.dream_world.front_default,species:t.types[0].type.name}}})}))}))})).catch((function(t){return e({type:"BUSQUEDA_ERROR"})}))}))}),[]),Object(d.jsxs)("header",{className:"bg-primary px-5",children:[Object(d.jsx)("img",{className:"logo pt-3 animate__animated animate__fadeInDown",src:u,alt:"logo"}),Object(d.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary",children:Object(d.jsxs)("div",{className:"navbar-collapse",children:[Object(d.jsxs)("div",{className:"navbar-nav me-auto mb2 mb-lg-0",children:[Object(d.jsx)(b.b,{to:"/",exact:!0,className:"nav-item nav-link fs-5",children:"Inicio"}),Object(d.jsx)(b.b,{activeClassName:"active",className:"nav-item nav-link fs-5",exact:!0,to:"/pokemon-agua",children:"Agua"}),Object(d.jsx)(b.b,{activeClassName:"active",className:"nav-item nav-link fs-5",exact:!0,to:"/pokemon-fuego",children:"fuego"}),Object(d.jsx)(b.b,{activeClassName:"active",className:"nav-item nav-link fs-5",exact:!0,to:"/pokemon-roca",children:"roca"}),Object(d.jsx)(b.b,{activeClassName:"active",className:"nav-item nav-link fs-5",exact:!0,to:"/pokemon-electricidad",children:"electricidad"})]}),Object(d.jsx)(m,{})]})})]})},p=a(4),x=(a(39),function(){var e=Object(j.b)();return Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:function(){e((function(e){e({type:"POKEMON_MOSTRAR"})}))},className:"btn btn-outline-light regresar",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-arrow-left-circle px-1",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})}),"Regresar"]})})}),h=function(){return Object(d.jsxs)("div",{className:"d-flex flex-column",children:[Object(d.jsx)(x,{}),Object(d.jsx)("p",{className:"fs-3 fw-bold py-5 px-5",children:" pokemon no encontrado :("})]})},f=function(e){var t=e.mostrar,a=Object(j.c)((function(e){return e})).error,c=t[0];return Object(d.jsx)("div",{className:"py-5 content",children:a?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"contentDetail",children:[Object(d.jsx)("div",{className:"containImg",children:Object(d.jsx)("img",{className:"animate__animated animate__heartBeat",src:null===c||void 0===c?void 0:c.img,alt:null===c||void 0===c?void 0:c.id})}),Object(d.jsxs)("div",{className:"abilitiesCard py-5",children:[Object(d.jsxs)("div",{className:"text-center py-3",children:[Object(d.jsx)("h2",{className:"fw-bold",children:null===c||void 0===c?void 0:c.name}),Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"58%"},"aria-valuenow":"78","aria-valuemin":"0","aria-valuemax":"100"})}),Object(d.jsx)("p",{children:"".concat(null===c||void 0===c?void 0:c.hp,"HP")})]}),Object(d.jsxs)("div",{className:"abilities",children:[Object(d.jsxs)("div",{className:"abilitiesItem py-2",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0 text-danger",children:null===c||void 0===c?void 0:c.attack}),Object(d.jsx)("span",{className:"text-muted",children:"ataque"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0",children:null===c||void 0===c?void 0:c.species}),Object(d.jsx)("span",{className:"text-muted",children:"tipo"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0 text-success",children:null===c||void 0===c?void 0:c.defence}),Object(d.jsx)("span",{className:"text-muted",children:"defensa"})]})]}),Object(d.jsxs)("div",{className:"abilitiesItem py-2",children:[Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0 text-danger",children:null===c||void 0===c?void 0:c.specialAttack}),Object(d.jsx)("span",{className:"text-muted",children:"ataque especial"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0",children:null===c||void 0===c?void 0:c.ability}),Object(d.jsx)("span",{className:"text-muted",children:"hablilidad especial"})]}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("p",{className:"fs-3 fw-bold mb-0 text-success",children:null===c||void 0===c?void 0:c.specialDefence}),Object(d.jsx)("span",{className:"text-muted",children:"defensa especial"})]})]})]})]})]})})},v=function(){var e=Object(j.c)((function(e){return e})).mostrar,t=Object(j.b)(),a=Object(p.e)().id;return Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(a){var c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e));case 2:if(!(c=t.sent).ok){t.next=10;break}return t.next=6,c.json();case 6:s=t.sent,a({type:"POKEMON_DETALLE",payload:{id:s.id,name:s.name,img:s.sprites.other.dream_world.front_default,species:s.types[0].type.name,ability:s.abilities[0].ability.name,experince:s.base_experience,height:s.height,hp:s.stats[0].base_stat,attack:s.stats[1].base_stat,defence:s.stats[2].base_stat,specialAttack:s.stats[3].base_stat,specialDefence:s.stats[4].base_stat,speed:s.stats[5].base_stat}}),t.next=11;break;case 10:a({type:"BUSQUEDA_ERROR"});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(f,{mostrar:e})})},N=function(e){var t=e.pokemones,a=Object(j.c)((function(e){return e.loading})),c=Object(j.c)((function(e){return e.error}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"contentCard",children:[a?Object(d.jsx)("div",{className:"buscando",children:Object(d.jsx)("p",{children:"buscando pokemon..."})}):null,c?Object(d.jsx)(h,{}):t.map((function(e){return Object(d.jsxs)("div",{className:"card pokeCard animate__animated animate__fadeInLeftBig",children:[Object(d.jsx)("img",{className:"card-img-top cardImg",style:{maxHeight:"17rem"},src:e.img,alt:"Card imagecard"}),Object(d.jsx)("div",{className:"card-body bg-light",children:Object(d.jsxs)(b.b,{className:"card-title fw-bold cardName",to:"/pokemon-detail/".concat(e.id),children:[" ",e.name," "]})})]},e.id)}))]})})},g=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e})),a=t.mostrar,s=t.pokemones;return Object(c.useEffect)((function(){e(l("electric"))}),[s]),Object(d.jsx)("div",{className:"electric",children:Object(d.jsx)(N,{pokemones:a})})},k=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e})),a=t.mostrar,s=t.pokemones;return Object(c.useEffect)((function(){e(l("fire"))}),[s]),Object(d.jsx)("div",{className:"fire",children:Object(d.jsx)(N,{pokemones:a})})},_=function(){var e=Object(j.c)((function(e){return e})),t=e.mostrar,a=e.pokemones,s=e.botonRegresar,n=Object(j.b)();return Object(c.useEffect)((function(){n((function(e){e({type:"POKEMON_MOSTRAR"})}))}),[a]),Object(d.jsxs)("div",{className:"all",children:[s?Object(d.jsx)(x,{}):null,Object(d.jsx)(N,{pokemones:t})]})},y=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e})),a=t.mostrar,s=t.pokemones;return Object(c.useEffect)((function(){e(l("rock"))}),[s]),Object(d.jsx)("div",{className:"rock",children:Object(d.jsx)(N,{pokemones:a})})},E=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Search "}),Object(d.jsx)(m,{})]})},w=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e})),a=t.mostrar,s=t.pokemones;return Object(c.useEffect)((function(){e(l("water"))}),[s]),Object(d.jsx)("div",{className:"water",children:Object(d.jsx)(N,{pokemones:a})})},R=function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)(p.a,{exact:!0,path:"/pokemon-agua",component:w}),Object(d.jsx)(p.a,{exact:!0,path:"/pokemon-fuego",component:k}),Object(d.jsx)(p.a,{exact:!0,path:"/pokemon-roca",component:y}),Object(d.jsx)(p.a,{exact:!0,path:"/pokemon-electricidad",component:g}),Object(d.jsx)(p.a,{exact:!0,path:"/pokemon-detail/:id",component:v}),Object(d.jsx)(p.a,{exact:!0,path:"/buscar",component:E}),Object(d.jsx)(p.a,{exact:!0,path:"/",component:_})]})},A=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid bg-primary",children:Object(d.jsx)("div",{className:"text-center py-3",children:Object(d.jsxs)("p",{className:"fs-5",children:["create by ",Object(d.jsx)("a",{className:"text-light",href:"https://www.google.com/",children:"Jonatan Severo"})," "]})})})})},D=a(27),S=a(5),C={pokemones:[],mostrar:[],details:[],value:"",loading:!1,error:!1,botonRegresar:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMONES_GUARDAR":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,pokemones:[].concat(Object(D.a)(e.pokemones),[t.payload.pokemon])});case"POKEMONES_CARGANDO":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"POKEMON_MOSTRAR":return Object(S.a)(Object(S.a)({},e),{},{error:!1,botonRegresar:!1,mostrar:e.pokemones});case"POKEMON_DETALLE":return Object(S.a)(Object(S.a)({},e),{},{mostrar:[t.payload]});case"BUSQUEDA_CARGAR_VALOR":return Object(S.a)(Object(S.a)({},e),{},{value:t.value});case"BUSQUEDA_EXITO":return Object(S.a)(Object(S.a)({},e),{},{error:!1,loading:!1,value:"",botonRegresar:!0,mostrar:[t.payload]});case"BUSQUEDA_ERROR":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,value:"",error:!0});case"FILTRAR":return Object(S.a)(Object(S.a)({},e),{},{error:!1,mostrar:e.pokemones.filter((function(e){return e.species===t.elemento}))});default:return e}},M=a(13),B=a(26),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,L=Object(M.d)(U,I(Object(M.a)(B.a))),P=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{store:L,children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(R,{}),Object(d.jsx)(A,{})]})})})};n.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.84a93d35.chunk.js.map