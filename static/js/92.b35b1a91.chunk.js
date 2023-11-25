"use strict";(self.webpackChunkwood_workshop=self.webpackChunkwood_workshop||[]).push([[92,763],{5092:(t,e,n)=>{n.r(e),n.d(e,{default:()=>$});var o=n(2791),s=n(7763),r=n(184);const i=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.ProductsIntro,{}),(0,r.jsx)(s.ProductsGrid,{count:3})]});var a=n(9164),c=n(890),l=n(4294);const p=()=>(0,r.jsxs)(a.Z,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{py:6,px:2,textAlign:"center"},children:[(0,r.jsx)(c.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,sx:{fontWeight:"bold"},children:"\u0422\u0430\u043a\u043e\u0439 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0443 \u0432\u0430\u0441"}),(0,r.jsx)(c.Z,{variant:"h5",align:"center",color:"text.secondary",component:"p",children:"\u0425\u043e\u0442\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u043e\u043a\u0430\u0436\u0443?"}),(0,r.jsx)(l.Z,{href:"#/products",variant:"contained",sx:{mt:4,px:4,textAlign:"center",background:"var(--primary)"},children:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"})]}),u=()=>{const t=["linear-gradient(var(--darkWhiteTransparent), var(--darkWhiteTransparent))"].join(",");return(0,r.jsx)(a.Z,{disableGutters:!0,component:"main",maxWidth:!1,sx:{display:"flex",alignItems:"center",height:"100vh",backgroundImage:"\n          ".concat(t,",\n          url(").concat("/WoodWorkshop/static/images/woodman.jpg",")"),backgroundPosition:"center",backgroundSize:"cover"},children:(0,r.jsx)(p,{})})};function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},d.apply(this,arguments)}const m=(t,e)=>{const n={};for(const o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},h=o.createContext(null),f=o.createContext(null),y=t=>e=>o.createElement(f.Consumer,null,(n=>o.createElement(t,d({parent:n},e)))),b=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const[e,n]=(0,o.useState)(!1),s=(0,o.useRef)(t),r=(()=>{const t=(0,o.useContext)(h);if(null===t)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return t})(),i=r.getApi();return(0,o.useEffect)((()=>{r.load().then((()=>Promise.all(s.current.map(r.loadModule)))).then((()=>n(!0)))}),[]),e&&i?i:null},j=()=>{},v=["onLoad","onError","modules","apiLoader"];function g(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return s=>{const{width:r,height:i,modules:a=[],onLoad:c=j}=s,l=b(n.concat(a)),p=!e||!!l,u=m(s,v);return(0,o.useEffect)((()=>l?c(l):void 0),[l]),p?o.createElement(t,d({ymaps:l},u)):o.createElement("div",{style:{width:r,height:i}})}}const x="undefined"!=typeof window,O={lang:"ru_RU",load:"",ns:"",mode:"release"},E=t=>{const{version:e="2.1",enterprise:n=!1,query:s={lang:"ru_RU",load:"",ns:""},preload:r=!1,children:i}=t,a=(0,o.useRef)((t=>{const{query:e=O}=t,n=Date.now().toString(32),o=e.ns||"",s="__yandex-maps-api-onload__$$"+n,r="__yandex-maps-api-onerror__$$"+n,i=x?window:{},a={};let c;const l=()=>o?i[o]:c,p=()=>{delete i[s],delete i[r]};return{load:()=>{if(l())return Promise.resolve(c);if(a[o])return a[o];const n={onload:s,onerror:r,...O,...e},u=Object.keys(n).map((t=>"".concat(t,"=").concat(n[t]))).join("&"),d=["https://".concat(t.enterprise?"enterprise.":"","api-maps.yandex.ru"),t.version,"?"+u].join("/");return a[o]=new Promise(((t,e)=>{i[s]=e=>{p(),e.ready((()=>{c=e,t(e)}))},i[r]=t=>{p(),e(t)},(t=>new Promise(((e,n)=>{const o=document.createElement("script");o.type="text/javascript",o.onload=e,o.onerror=n,o.src=t,o.async=!0,document.head.appendChild(o)})))(d).catch(i[r])})),a[o]},getApi:l,loadModule:t=>new Promise(((e,n)=>{c.modules.require(t).done((n=>{n.forEach((e=>{!function(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s="string"==typeof e?e.split("."):e.slice();let r,i=t;for(;s.length>1;)r=s.shift(),i[r]||(i[r]={}),i=i[r];const a=s[0];i[a]=!0===o&&i[a]||n}(c,t,e,!0)})),e(c)}),n)}))}})({version:e,enterprise:n,query:s,preload:r}));return(0,o.useEffect)((()=>{r&&a.current.load()}),[a.current]),o.createElement(h.Provider,{value:a.current},i)},C=/^on(?=[A-Z])/;function w(t){return Object.keys(t).reduce(((e,n)=>{if(C.test(n)){const o=n.replace(C,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e}),{_events:{}})}function _(t,e,n){"function"==typeof n&&t.events.add(e,n)}function R(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function k(t,e,n){Object.keys(Object.assign({},e,n)).forEach((o=>{e[o]!==n[o]&&(R(t,o,e[o]),_(t,o,n[o]))}))}const P=t=>"default"+t.charAt(0).toUpperCase()+t.slice(1);function Z(t,e){return void 0!==t[e]||void 0===t[P(e)]}function T(t,e,n){return(Z(t,e)?t[e]:t[P(e)])||n}function M(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t!==e){if(t&&("current"in t?t.current=null:"function"==typeof t&&t(null)),!e)return;"current"in e?e.current=n:"function"==typeof e&&e(n)}}function S(t){const{width:e,height:n,style:o,className:s}=t;return void 0!==o||void 0!==s?Object.assign({},o&&{style:o},s&&{className:s}):{style:{width:e,height:n}}}class W extends o.Component{constructor(t){super(t),this.state={error:null,errorInfo:null}}componentDidCatch(t,e){const{onError:n=(()=>{})}=this.props;n(t),this.setState({error:t,errorInfo:e})}render(){return this.state.error?null:this.props.children}}const U=t=>e=>{let{onError:n,...s}=e;return o.createElement(W,{onError:n},o.createElement(t,s))};class D extends o.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this.instance=D.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(t){null!==this.instance&&D.updateObject(this.instance,t,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){const t=S(this.props),e=w(this.props),n=m(e,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return o.createElement(f.Provider,{value:this.state.instance},o.createElement("div",d({ref:this._getRef},t,n),this.props.children))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=w(n),r=new e(t,T(n,"state"),T(n,"options"));return Object.keys(s).forEach((t=>_(r,t,s[t]))),M(null,o,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"state")){const o=T(e,"state",{}),s=T(n,"state",{});o.type!==s.type&&t.setType(s.type),o.behaviors!==s.behaviors&&(o.behaviors&&t.behaviors.disable(o.behaviors),s.behaviors&&t.behaviors.enable(s.behaviors)),s.zoom&&o.zoom!==s.zoom&&t.setZoom(s.zoom),s.center&&o.center!==s.center&&t.setCenter(s.center),s.bounds&&o.bounds!==s.bounds&&t.setBounds(s.bounds)}if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options",{});o!==s&&t.options.set(s)}T(e,"width")===T(n,"width")&&T(e,"height")===T(n,"height")||t.container.fitToViewport(),k(t,r,o),M(i,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=w(e);null!==t&&(Object.keys(o).forEach((e=>R(t,e,o[e]))),t.destroy(),M(n))}}const G=U(g(D,!0,["Map"]));G.defaultProps={width:320,height:240};class I extends o.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=t=>{this._parentElement=t}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&I.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then((t=>this._mounted&&this.setState({instance:t})))}componentDidUpdate(t){null!==this.state.instance&&I.updateObject(this.state.instance,t,this.props)}componentWillUnmount(){this._mounted=!1,I.unmountObject(this.state.instance,this.props)}render(){const t=S(this.props);return o.createElement("div",d({ref:this._getRef},t))}static mountObject(t,e,n){const{instanceRef:o,_events:s}=w(n),r=T(n,"point"),i=T(n,"locateOptions"),a=T(n,"options");return new Promise(((n,c)=>{e.locate(r,i).done((r=>{if(r.length>0){const i=new e.Player(t,r[0],a);M(null,o,i),Object.keys(s).forEach((t=>_(i,t,s[t]))),n(i)}}),c)}))}static updateObject(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options");o!==s&&t.options.set(s)}if(Z(n,"point")){const o=T(n,"point"),s=T(e,"point"),r=T(n,"locateOptions");o!==s&&t.moveTo(o,r)}k(t,r,o),M(i,s,t)}static unmountObject(t,e){const{instanceRef:n,_events:o}=w(e);null!==t&&(Object.keys(o).forEach((e=>R(t,e,o[e]))),M(n))}}U(g(I,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class z extends o.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=z.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&z.updateControl(this.instance,t,this.props)}componentWillUnmount(){z.unmountControl(this.instance,this.props)}render(){return o.createElement(f.Provider,{value:this.state.instance},this.props.children)}static mountControl(t,e){const{instanceRef:n,parent:o,lazy:s,_events:r}=w(e),i=new t({data:T(e,"data"),options:T(e,"options"),state:T(e,"state"),mapTypes:T(e,"mapTypes"),lazy:s});if(Object.keys(r).forEach((t=>_(i,t,r[t]))),o&&o.controls&&"function"==typeof o.controls.add)o.controls.add(i);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ".concat(e.name));o.add(i)}return M(null,n,i),i}static updateControl(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options");o!==s&&t.options.set(s)}if(Z(n,"data")){const o=T(e,"data"),s=T(n,"data");o!==s&&t.data.set(s)}if(Z(n,"state")){const o=T(e,"state"),s=T(n,"state");o!==s&&t.state.set(s)}if(Z(n,"mapTypes")){const o=T(e,"mapTypes"),s=T(n,"mapTypes");o!==s&&(t.removeAllMapTypes(),s.forEach((e=>t.addMapType(e))))}k(t,r,o),M(i,s,t)}static unmountControl(t,e){const{instanceRef:n,parent:o,_events:s}=w(e);null!==t&&(Object.keys(s).forEach((e=>R(t,e,s[e]))),o.controls&&"function"==typeof o.controls.remove?o.controls.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),M(n))}}U(y(g((t=>o.createElement(z,d({},t,{name:"Button"}))),!0,["control.Button"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"FullscreenControl"}))),!0,["control.FullscreenControl"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"GeolocationControl"}))),!0,["control.GeolocationControl"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"ListBox"}))),!0,["control.ListBox"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"ListBoxItem"}))),!0,["control.ListBoxItem"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"RouteButton"}))),!0,["control.RouteButton"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"RouteEditor"}))),!0,["control.RouteEditor"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"RoutePanel"}))),!0,["control.RoutePanel"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"RulerControl"}))),!0,["control.RulerControl"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"SearchControl"}))),!0,["control.SearchControl"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"TrafficControl"}))),!0,["control.TrafficControl"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"TypeSelector"}))),!0,["control.TypeSelector"]))),U(y(g((t=>o.createElement(z,d({},t,{name:"ZoomControl"}))),!0,["control.ZoomControl"])));class A extends o.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const t=A.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.state.instance&&A.updateObject(this.instance,t,this.props)}componentWillUnmount(){A.unmountObject(this.instance,this.props)}render(){return o.createElement(f.Provider,{value:this.state.instance},this.props.children)}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e),r=new t(T(e,"options"));if(Object.keys(s).forEach((t=>_(r,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount Clusterer");o.add(r)}return M(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options");o!==s&&t.options.set(s)}k(t,r,o),M(i,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e);null!==t&&(Object.keys(s).forEach((e=>R(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),M(n))}}U(y(g(A,!0,["Clusterer"])));class B extends o.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){const t=B.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=t,this.setState({instance:t})}componentDidUpdate(t){null!==this.instance&&B.updateObject(this.instance,t,this.props)}componentWillUnmount(){B.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e),r=T(e,"options",{}),i=T(e,"features",{}),a=T(e,"filter",null),c=T(e,"objects",{}),l=T(e,"clusters",{}),p=new t(r);if(p.add(i||[]),p.setFilter(a),p.objects.options.set(c),p.clusters.options.set(l),Object.keys(s).forEach((t=>_(p,t,s[t]))),o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(p);else{if(!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ObjectManager");o.add(p)}return M(null,n,p),p}static updateObject(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options");o!==s&&t.options.set(s)}if(Z(n,"objects")){const o=T(e,"objects"),s=T(n,"objects");o!==s&&t.objects.options.set(s)}if(Z(n,"clusters")){const o=T(e,"clusters"),s=T(n,"clusters");o!==s&&t.clusters.options.set(s)}if(Z(n,"filter")){const o=T(e,"filter"),s=T(n,"filter");o!==s&&t.setFilter(s)}if(Z(n,"features")){const o=T(e,"features"),s=T(n,"features");o!==s&&(t.remove(o),t.add(s))}k(t,r,o),M(i,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e);null!==t&&(Object.keys(s).forEach((e=>R(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),M(n))}}U(y(g(B,!0,["ObjectManager"])));class F extends o.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){const{name:t,ymaps:e,dangerZone:n}=this.props,o=F.mountObject(n&&"function"==typeof n.modifyConstructor?n.modifyConstructor(e[t]):e[t],this.props);this.instance=o,this.setState({instance:o})}componentDidUpdate(t){null!==this.instance&&F.updateObject(this.instance,t,this.props)}componentWillUnmount(){F.unmountObject(this.instance,this.props)}render(){return null}static mountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e),r=new t(T(e,"geometry"),T(e,"properties"),T(e,"options"));if(Object.keys(s).forEach((t=>_(r,t,s[t]))),o&&o.geoObjects&&"function"==typeof o.geoObjects.add)o.geoObjects.add(r);else{if(!o||!o.add||"function"!=typeof o.add)throw new Error("No parent found to mount ".concat(e.name));o.add(r)}return M(null,n,r),r}static updateObject(t,e,n){const{_events:o,instanceRef:s}=w(n),{_events:r,instanceRef:i}=w(e);if(Z(n,"geometry")){const o=T(e,"geometry",{}),s=T(n,"geometry",{});Array.isArray(s)&&s!==o?Array.isArray(s[0])&&"number"==typeof s[1]?(t.geometry.setCoordinates(s[0]),t.geometry.setRadius(s[1])):t.geometry.setCoordinates(s):"object"==typeof s&&(s.coordinates!==o.coordinates&&t.geometry.setCoordinates(s.coordinates),s.radius!==o.radius&&t.geometry.setRadius(s.radius))}if(Z(n,"properties")){const o=T(e,"properties"),s=T(n,"properties");o!==s&&t.properties.set(s)}if(Z(n,"options")){const o=T(e,"options"),s=T(n,"options");o!==s&&t.options.set(s)}k(t,r,o),M(i,s,t)}static unmountObject(t,e){const{instanceRef:n,parent:o,_events:s}=w(e);null!==t&&(Object.keys(s).forEach((e=>R(t,e,s[e]))),o.geoObjects&&"function"==typeof o.geoObjects.remove?o.geoObjects.remove(t):o.remove&&"function"==typeof o.remove&&o.remove(t),M(n))}}const L={modifyConstructor(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}};U(y(g((t=>o.createElement(F,d({},t,{name:"GeoObject",dangerZone:L}))),!0,["GeoObject"]))),U(y(g((t=>o.createElement(F,d({},t,{name:"Circle"}))),!0,["Circle"])));var N=U(y(g((t=>o.createElement(F,d({},t,{name:"Placemark"}))),!0,["Placemark"])));U(y(g((t=>o.createElement(F,d({},t,{name:"Polygon"}))),!0,["Polygon"]))),U(y(g((t=>o.createElement(F,d({},t,{name:"Polyline"}))),!0,["Polyline"]))),U(y(g((t=>o.createElement(F,d({},t,{name:"Rectangle"}))),!0,["Rectangle"])));const V=[56.015777,92.847946],q=()=>{const t=(0,o.useRef)();return(0,r.jsx)(E,{query:{load:"package.full",apikey:"50918224-0c7c-4126-a2eb-9d6a58a1af7b"},children:(0,r.jsx)(G,{instanceRef:t,state:{center:V,zoom:17,controls:["zoomControl"]},width:"100vw",height:"50vh",modules:["control.ZoomControl"],children:(0,r.jsx)(N,{onClick:()=>{window.open("https://2gis.ru/krasnoyarsk/firm/985690699504671","_blank")},defaultGeometry:V,options:{iconImageSize:[10,10],iconColor:"red",preset:"islands#blueHeartIcon"}})})})},$=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(i,{}),(0,r.jsx)(q,{})]})},7763:(t,e,n)=>{n.r(e),n.d(e,{ProductsGrid:()=>g,ProductsIntro:()=>v,default:()=>x});var o=n(2791),s=n(4294),r=n(7621),i=n(2363),a=n(9504),c=n(1889),l=n(890),p=n(9164),u=n(3967),d=n(5193),m=n(2169),h=n(4554),f=n(7246);const y=[{title:"First product",description:"Good 1",buttonText:"View",buttonVariant:"outlined"},{title:"Second product",description:"Good 2",buttonText:"Profit",buttonVariant:"contained"},{title:"Third product",description:"Good 3",buttonText:"Contact us",buttonVariant:"outlined"},{title:"Fourth product",description:"Good 4",buttonText:"Contact us",buttonVariant:"contained"}],b=[...y,...y,...y,...y,...y,...y,...y,...y,...y,...y,...y,...y,...y];var j=n(184);const v=()=>(0,j.jsxs)(p.Z,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{py:6,px:2},children:[(0,j.jsx)(l.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Products"}),(0,j.jsx)(l.Z,{variant:"h5",align:"center",color:"text.secondary",component:"p",children:"Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization."})]}),g=t=>{let{count:e}=t;const[n,y]=(0,o.useState)(1),v=e?b.slice(0,e):b,g=(0,u.Z)(),x=(0,d.Z)(g.breakpoints.down("md"))?3:6;return(0,j.jsxs)(p.Z,{maxWidth:"md",component:"main",children:[(0,j.jsx)(c.ZP,{container:!0,spacing:5,children:v.slice(n-1,n+x-1).map(((t,e)=>(0,j.jsx)(c.ZP,{item:!0,xs:12,sm:4,md:4,children:(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(m.Z,{sx:{height:140},image:"/WoodWorkshop/static/images/woodman.jpg",title:"green iguana"}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(l.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t.title}),(0,j.jsx)(l.Z,{variant:"body2",color:"text.secondary",children:t.description})]}),(0,j.jsx)(i.Z,{children:(0,j.jsx)(s.Z,{fullWidth:!0,variant:t.buttonVariant,children:t.buttonText})})]})},e)))}),(0,j.jsx)(h.Z,{display:"flex",justifyContent:"center",alignItems:"center",sx:{my:5},children:v.length>x&&(0,j.jsx)(f.Z,{count:Math.ceil(v.length/x),onChange:(t,e)=>{y(e)},size:"large",variant:"outlined",color:"primary",shape:"rounded",defaultPage:1,page:n,siblingCount:1,boundaryCount:2})})]})},x=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{}),(0,j.jsx)(g,{})]})}}]);
//# sourceMappingURL=92.b35b1a91.chunk.js.map