(this.webpackJsonpfrontendconv=this.webpackJsonpfrontendconv||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"appleAuth":"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1aOVUzUDdZNFUifQ.eyJpYXQiOjE2MjcxNTk0ODAsImV4cCI6MTY0MjcxMTQ4MCwiaXNzIjoiQkJEMzU1UDY3MyJ9.usovMXfwltc8dwAH2jNWOH8kh3UU7AKz7Ie0nIHFjaud-pq0JRo2hZdjFJVG8wu2ijAQFPG-n50lq2-jdpYATg"}')},31:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),i=(n(31),n(6)),s=n(7),l=n(9),p=n(8),u=n(10),d=n.n(u),j=n(13),h=n(12),b=n(26),f=(n(36),n(15)),y=n(1),O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={login:null},e.handleClickApple=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(f.appleAuth),window.MusicKit.configure({developerToken:f.appleAuth,app:{name:"My Cool Web App"},declarativeMarkup:!0}),(a=window.MusicKit.getInstance()).authorize().then((function(t){e.setState({login:"Logged In!"});var n=t;e.props.addToken(n)})),console.log(a.isAuthorized,"auth"),console.log(a.musicUserToken,"token");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleClickSpotify=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://playlistconv.herokuapp.com/authorize",{method:"GET"});case 2:return n=e.sent,e.next=5,n.text();case 5:a=e.sent,window.location=a;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"container-login",children:Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("br",{}),Object(y.jsx)(b.a,{variant:"dark",onClick:this.handleClickSpotify,className:"spotify",children:" Login to Spotify"}),Object(y.jsx)(b.a,{variant:"dark",className:"applemusic",onClick:this.handleClickApple,children:" Login to Apple Music"}),Object(y.jsx)("p",{children:this.state.login})]})})}}]),n}(a.Component),v=Object(h.b)(null,(function(e){return{addToken:function(t){e({type:"ADD_APPLETOKEN",payload:t})}}}))(O),x=n(44),k=n(41),m=n(42),g=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleSelect=function(t){var n=document.URL;n=n.substring(5).split("&")[0].split("=")[1],e.props.addSpotifyToken(n),console.log(t,"convert"),e.props.addSource(t);var a=Math.floor(1e5*Math.random());"appleToSpotify"===t?e.props.addIDA2S(a):"spotifyToApple"===t&&e.props.addID(a),window.MusicKit.configure({developerToken:f.appleAuth,app:{name:"Playlist Converter"},declarativeMarkup:!0}).authorize().then((function(t){console.log(t);var n=t;e.props.addAppleToken(n)}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsx)(x.a,{children:Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)(x.a.Label,{className:"title",children:"Choose Source and Destination"}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"radio-container",children:Object(y.jsxs)(k.a,{toggle:!0,className:"mb-2",children:[Object(y.jsx)(m.a,{type:"checkbox",variant:"dark",onClick:function(){return e.handleSelect("appleToSpotify")},children:"Apple Music to Spotify"}),Object(y.jsx)(m.a,{type:"checkbox",variant:"dark",onClick:function(){return e.handleSelect("spotifyToApple")},children:"Spotify to Apple Music"})]})})]})})}}]),n}(a.Component),A=Object(h.b)(null,(function(e){return{addSource:function(t){e({type:"ADD_SOURCE",payload:t})},addID:function(t){e({type:"ADD_ID",payload:t})},addIDA2S:function(t){e({type:"ADD_IDA2S",payload:t})},addSpotifyToken:function(t){e({type:"ADD_SPOTIFYTOKEN",payload:t})},addAppleToken:function(t){e({type:"ADD_APPLETOKEN",payload:t})}}}))(g),S=n(17),T=n(43),C=n(24),N=(n(39),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={url:" ",playName:null,link:null,done:null,valid:null},e.handleChange=function(t){e.setState(Object(S.a)({},t.target.id,t.target.value)),console.log(t.target.id,t.target.value)},e.handleSubmit=function(t){t.preventDefault();var n,a,o,c,r,i,s=e.props.appleToken,l=e.props.idA2S,p=e.props.spotifyToken,u=e.state.playName,h=e.state.url,b=e.props.id,f=e.props.source;if("spotifyToApple"!==f&&"appleToSpotify"!==f&&e.setState({valid:"Please choose a source."})," "===h)return e.setState({done:"Invalid ID"}),!1;e.setState({done:"Converting...",link:" ",valid:null});var y=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({url:n,authToken:r,id:a})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(j.a)(d.a.mark((function t(){var n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(u,"playName"),t.next=3,fetch(c,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({createplaylist:u,authToken:i,id:a})});case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,console.log(o),e.setState({done:o.done,link:o.link});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,console.log(t.done),"done"===t.done&&O();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();"appleToSpotify"===f&&(h.includes("us/playlist")?n=(n=h.split("playlist/")[1]).split("/")[1]:h.includes("/playlist")?n=h.split("playlist/")[1]:h.includes("p.")||h.includes("pl.u")?n=h:e.setState({done:"Invalid URL",valid:null}),o="https://playlistconv.herokuapp.com/getAppleISRC",c="https://playlistconv.herokuapp.com/createSpotifyPlaylist",r={appleToken:s},i={spotifyToken:p},a={idA2S:l},console.log(o,e.state),v()),"spotifyToApple"===f&&(h.includes("https://open")?n=(n=h.split("?")[0]).split("playlist/")[1]:h.includes("open.spotify")?n=h.split("playlist/")[1]:22===h.length?n=h:e.setState({done:"Invalid URL"}),o="https://playlistconv.herokuapp.com/getSpotifyISRC",c="https://playlistconv.herokuapp.com/createApplePlaylist",r={spotifyToken:p},i={appleToken:s},a={id:b},console.log(o),v())},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)(x.a,{children:Object(y.jsx)(x.a.Group,{children:Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)(T.a,{className:"justify-content-md-center",children:Object(y.jsx)(C.a,{xs:5,children:Object(y.jsx)(x.a.Control,{size:"med",type:"text",placeholder:"Enter Playlist URL",onChange:this.handleChange,id:"url"})})}),Object(y.jsx)("br",{}),Object(y.jsx)(T.a,{className:"justify-content-md-center",children:Object(y.jsx)(C.a,{xs:3,children:Object(y.jsx)(x.a.Control,{size:"med",type:"text",placeholder:"Enter Name of New Playlist",onChange:this.handleChange,id:"playName"})})}),Object(y.jsx)("br",{}),Object(y.jsx)(b.a,{variant:"dark",type:"submit",onClick:this.handleSubmit,className:"convert",children:"Convert!"}),Object(y.jsx)("h1",{children:this.state.done}),Object(y.jsx)("a",{href:this.state.link,children:this.state.link}),Object(y.jsx)("h1",{children:this.state.valid}),Object(y.jsx)("p",{children:"Convert your favorite playlists to and from Apple Music and Spotify!"}),Object(y.jsx)("p",{children:"Your playlist link will appear below the convert button when completed."}),Object(y.jsx)("p",{children:" Note: Due to Spotify's song limit per request, conversion caps at 100 songs"}),Object(y.jsx)("p",{children:" Note: Spotify exclusives such as Spotify singles cannot be converted"}),Object(y.jsx)("p",{children:" Note: If you are already logged into Apple Music on your browser, a popup to login to Apple Music may not appear"})]})})})}}]),n}(a.Component)),D=Object(h.b)((function(e){return{appleToken:e.appleToken,id:e.id,spotifyToken:e.spotifyToken,idA2S:e.idA2S,source:e.source}}))(N),w=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)("div",{className:"header",children:Object(y.jsx)("h1",{children:"Playlist Converter"})})})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)("footer",{children:Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsx)("a",{href:"mailto: alexoei13589@gmail.com",children:"Contact "}),Object(y.jsx)("a",{href:"https://github.com/AlexOei/playlist-converter-server",children:" Github"})]})})}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap",rel:"stylesheet"}),Object(y.jsx)("script",{src:"https://js-cdn.music.apple.com/musickit/v1/musickit.js"}),Object(y.jsx)(w,{}),Object(y.jsx)(v,{}),Object(y.jsxs)("div",{class:"container-convert",children:[Object(y.jsx)(A,{}),Object(y.jsx)(D,{}),Object(y.jsx)(I,{})]})]})}}]),n}(a.Component),P=n(25),E=n(11),U={appleToken:[],spotifyToken:[],id:[],idA2S:[],source:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return"ADD_APPLETOKEN"===t.type?Object(E.a)(Object(E.a)({},e),{},{appleToken:t.payload}):"ADD_SPOTIFYTOKEN"===t.type?Object(E.a)(Object(E.a)({},e),{},{spotifyToken:t.payload}):"ADD_ID"===t.type?Object(E.a)(Object(E.a)({},e),{},{id:t.payload}):"ADD_IDA2S"===t.type?Object(E.a)(Object(E.a)({},e),{},{idA2S:t.payload}):"ADD_SOURCE"===t.type?Object(E.a)(Object(E.a)({},e),{},{source:t.payload}):e},z=Object(P.a)(J);z.subscribe((function(){console.log(z.getState())})),r.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(h.a,{store:z,children:Object(y.jsx)(M,{})})}),document.getElementById("root"));t.default=z}},[[40,1,2]]]);
//# sourceMappingURL=main.cc035280.chunk.js.map