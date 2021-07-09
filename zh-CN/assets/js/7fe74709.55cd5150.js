(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[492],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return m},kt:function(){return s}});var r=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,r,n=function(a,e){if(null==a)return{};var t,r,n={},p=Object.keys(a);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(r=0;r<p.length;r++)t=p[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var k=r.createContext({}),i=function(a){var e=r.useContext(k),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},m=function(a){var e=i(a.components);return r.createElement(k.Provider,{value:e},a.children)},w={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(a,e){var t=a.components,n=a.mdxType,p=a.originalType,k=a.parentName,m=o(a,["components","mdxType","originalType","parentName"]),c=i(t),s=n,h=c["".concat(k,".").concat(s)]||c[s]||w[s]||p;return t?r.createElement(h,l(l({ref:e},m),{},{components:t})):r.createElement(h,l({ref:e},m))}));function s(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var p=t.length,l=new Array(p);l[0]=c;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=a,o.mdxType="string"==typeof a?a:n,l[1]=o;for(var i=2;i<p;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1520:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return i},default:function(){return w}});var r=t(2122),n=t(9756),p=(t(7294),t(3905)),l={id:"DApp_migrate",title:"DApp\u8fc1\u79fb",sidebar_label:"DApp\u8fc1\u79fb"},o=void 0,k={unversionedId:"DApp_migrate",id:"DApp_migrate",isDocsHomePage:!1,title:"DApp\u8fc1\u79fb",description:"\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301\u5f00\u53d1\u8005\u8fc1\u79fb\u4ee5\u592a\u574aDApp\u5230Alaya\uff0c\u672c\u6587\u5c06\u4ece\u5f00\u53d1\u8005\u89d2\u5ea6\uff0c\u9996\u5148\u4ecb\u7ecdAlaya\u4e0e\u4ee5\u592a\u574a\u7684\u5dee\u5f02\uff0c\u7136\u540e\u4ecb\u7ecd\u8fc1\u79fbDApp\u7684\u5927\u4f53\u601d\u8def\uff0c\u6700\u540e\u9488\u5bf9DApp\u5408\u7ea6\u8fc1\u79fb\u548c\u524d\u7aef\u754c\u9762\u8fc1\u79fb\u8fdb\u884c\u5177\u4f53\u7684\u4ecb\u7ecd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/DApp\u8fc1\u79fb.md",sourceDirName:".",slug:"/DApp_migrate",permalink:"/alaya-devdocs/zh-CN/DApp_migrate",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/DApp\u8fc1\u79fb.md",version:"current",frontMatter:{id:"DApp_migrate",title:"DApp\u8fc1\u79fb",sidebar_label:"DApp\u8fc1\u79fb"},sidebar:"docs",previous:{title:"WASM\u667a\u80fd\u5408\u7ea6",permalink:"/alaya-devdocs/zh-CN/WASM_Smart_Contract"},next:{title:"Java SDK",permalink:"/alaya-devdocs/zh-CN/Java_SDK"}},i=[{value:"Alaya\u548c\u4ee5\u592a\u574a\u7684\u5dee\u5f02",id:"alaya\u548c\u4ee5\u592a\u574a\u7684\u5dee\u5f02",children:[]},{value:"DApp\u8fc1\u79fb\u601d\u8def",id:"dapp\u8fc1\u79fb\u601d\u8def",children:[]},{value:"DApp\u5408\u7ea6\u8fc1\u79fb",id:"dapp\u5408\u7ea6\u8fc1\u79fb",children:[]},{value:"DApp\u524d\u7aef\u754c\u9762\u8fc1\u79fb",id:"dapp\u524d\u7aef\u754c\u9762\u8fc1\u79fb",children:[{value:"\u4fee\u6539\u8fde\u63a5\u94b1\u5305\u7684\u65b9\u5f0f",id:"\u4fee\u6539\u8fde\u63a5\u94b1\u5305\u7684\u65b9\u5f0f",children:[]},{value:"\u4f9d\u8d56\u5305\u7684\u4fee\u6539",id:"\u4f9d\u8d56\u5305\u7684\u4fee\u6539",children:[]},{value:"\u5e94\u7528\u81ea\u8eab\u4ee3\u7801\u7684\u4fee\u6539",id:"\u5e94\u7528\u81ea\u8eab\u4ee3\u7801\u7684\u4fee\u6539",children:[]}]},{value:"Alaya\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177",id:"alaya\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177",children:[]},{value:"Metamask\u53cauniswap\u8fc1\u79fb\u7684\u7ecf\u9a8c\u603b\u7ed3",id:"metamask\u53cauniswap\u8fc1\u79fb\u7684\u7ecf\u9a8c\u603b\u7ed3",children:[]}],m={toc:i};function w(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u652f\u6301\u5f00\u53d1\u8005\u8fc1\u79fb\u4ee5\u592a\u574aDApp\u5230Alaya\uff0c\u672c\u6587\u5c06\u4ece\u5f00\u53d1\u8005\u89d2\u5ea6\uff0c\u9996\u5148\u4ecb\u7ecdAlaya\u4e0e\u4ee5\u592a\u574a\u7684\u5dee\u5f02\uff0c\u7136\u540e\u4ecb\u7ecd\u8fc1\u79fbDApp\u7684\u5927\u4f53\u601d\u8def\uff0c\u6700\u540e\u9488\u5bf9DApp\u5408\u7ea6\u8fc1\u79fb\u548c\u524d\u7aef\u754c\u9762\u8fc1\u79fb\u8fdb\u884c\u5177\u4f53\u7684\u4ecb\u7ecd\u3002"),(0,p.kt)("h2",{id:"alaya\u548c\u4ee5\u592a\u574a\u7684\u5dee\u5f02"},"Alaya\u548c\u4ee5\u592a\u574a\u7684\u5dee\u5f02"),(0,p.kt)("p",null,"\u5bf9\u4e8eDapp\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u65e0\u9700\u5173\u6ce8\u5e95\u5c42\u6280\u672f\u4e0a\u7684\u5dee\u5f02\u3002\u4ee5\u4e0b\u662f\u9488\u5bf9\u5f00\u53d1\u8005\u6765\u8bf4\u9700\u8981\u6ce8\u610f\u7684\u5dee\u5f02\u70b9\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Alaya\u548c\u4ee5\u592a\u574a\u66b4\u9732\u7684RPC\u65b9\u6cd5\u57fa\u672c\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u533a\u522b\u5728\u4e8erpc method\u540d\u79f0\u7684\u524d\u7f00\u4e0d\u4e00\u6837\uff0cAlaya\u7f51\u7edc\u7684\u524d\u7f00\u662fplaton_"),(0,p.kt)("li",{parentName:"ul"},"Alaya\u7f51\u7edc\u7684\u5730\u5740\u7c7b\u578b\u662fbech32 \u5730\u5740\u7c7b\u578b\uff0c\u4ee5atp\u4e3a\u524d\u7f00\u7684\u5b57\u7b26\u4e32\uff0c\u533a\u522b\u4e8e\u4ee5\u592a\u574a\u76840x\u524d\u7f00\u5730\u5740"),(0,p.kt)("li",{parentName:"ul"},"Alaya\u7684\u51fa\u5757\u8981\u6bd4\u4ee5\u592a\u574a\u5feb\uff0c\u5927\u7ea6\u662f1s\u51fa\u4e00\u4e2a\u533a\u5757\uff0c\u6240\u4ee5block\u7684timestamp\u662f\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff0c\u4ee5\u592a\u574a\u7684block\u7684timestamp\u662f\u4ee5\u79d2\u4e3a\u5355\u4f4d"),(0,p.kt)("li",{parentName:"ul"},"Alaya\u7f51\u7edc\u76ee\u524d\u6ca1\u6709infrua\u7c7b\u4f3c\u7684\u670d\u52a1\uff0c\u76ee\u524d\u5bf9\u5916\u7684\u53ea\u6709\u4e00\u4e2a ",(0,p.kt)("a",{parentName:"li",href:"https://openapi.alaya.network/rpc"},"https://openapi.alaya.network/rpc")," \u63a5\u53e3\u670d\u52a1")),(0,p.kt)("h2",{id:"dapp\u8fc1\u79fb\u601d\u8def"},"DApp\u8fc1\u79fb\u601d\u8def"),(0,p.kt)("p",null,"\u8981\u6210\u529f\u8fc1\u79fbDApp\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u8fc1\u79fb\u601d\u8def\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5148\u641e\u6e05\u695aDApp\u81ea\u8eab\u7684\u4e3b\u8981\u529f\u80fd\uff0c\u6309\u529f\u80fd\u4f9d\u8d56\u5173\u7cfb\u7ed9\u529f\u80fd\u505a\u4e2a\u4f9d\u8d56\u5173\u7cfb\u6392\u5e8f\u3002\u4ee5uniswap\u4e3a\u4f8b\uff0c\u529f\u80fd\u4f9d\u8d56\u5173\u7cfb\u4e3a\uff1a\u8fde\u4e0asamurai \u94b1\u5305->swap\u754c\u9762\u80fd\u591f\u5c55\u793a\u4ee3\u5e01\u53ca\u663e\u793a\u4f59\u989d->\u80fd\u591f\u521b\u5efa\u4ea4\u6613\u5bf9\u5e76\u6dfb\u52a0\u6d41\u52a8\u6027->\u80fd\u591f\u64cd\u4f5cswap\u6210\u529f->\u80fd\u591f\u79fb\u9664\u6d41\u52a8\u6027\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u6839\u636e\u4e0b\u6587\u7684\u201cDApp\u5408\u7ea6\u8fc1\u79fb\u201d\u7ae0\u8282\u8fc1\u79fb\u597dDApp\u76f8\u5173\u5408\u7ea6\uff0c\u90e8\u7f72\u5230\u81ea\u5df1\u7684Alaya\u6d4b\u8bd5\u7f51\u7edc\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u6839\u636e\u7b2c1\u6b65\u68b3\u7406\u529f\u80fd\u4f9d\u8d56\u548c\u4e0b\u6587\u7684\u201cDApp\u524d\u7aef\u754c\u9762\u8fc1\u79fb\u201d\uff0c\u4f9d\u6b21\u8c03\u8bd5\u901a\u8fc7\u6bcf\u4e00\u4e2a\u529f\u80fd\u3002")),(0,p.kt)("h2",{id:"dapp\u5408\u7ea6\u8fc1\u79fb"},"DApp\u5408\u7ea6\u8fc1\u79fb"),(0,p.kt)("p",null,"\u5408\u7ea6\u8fc1\u79fb\u4fee\u6539\u70b9\u4e3b\u8981\u5305\u542b\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Alaya\u652f\u6301\u7684solidity\u662f0.4.26\u30010.5.17\u30010.6.12\u30010.7.1 \u56db\u4e2a\u7248\u672c\uff0c\u5982\u679c\u8fc1\u79fb0.7.1\u4ee5\u4e0a\u7248\u672c\u7684\u5408\u7ea6\uff0c\u9700\u8981\u964d\u4f4e\u7248\u672c\u53f7\uff0c\u53bb\u9664\u9ad8\u7248\u672c\u76f8\u5173\u8bed\u6cd5\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u8bed\u53e5\u4f7f\u75280.5.17\u7684\u7248\u672c\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.17;\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Alaya\u667a\u80fd\u5408\u7ea6\u4e2d\u7684\u8d27\u5e01\u5355\u4f4d\u4e3aATP\u548cVON\u3002\u8981\u5c06\u4ee5\u592a\u574a\u667a\u80fd\u5408\u7ea6\u8fc1\u79fb\u81f3Alaya\uff0c\u8bf7\u5c06\u4ee5\u592a\u5e01\u9762\u989d\u66f4\u6539\u4e3aAlaya\u9762\u989d\u3002\u540c\u65f6\u6ce8\u610f\u4ee5\u592a/ATP\u5e02\u573a\u6c47\u7387\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"0x\u5730\u5740\u901a\u8fc7keytool\u5de5\u5177\u8f6c\u6362\u6210ATP\u5730\u5740\uff0c\u7528atp\u5730\u5740\u66ff\u63620x\u5730\u5740\uff0c\u5177\u4f53\u66ff\u6362\u6210\u4ec0\u4e48\u5730\u5740\u9700\u8981\u6839\u636e\u4e1a\u52a1\u903b\u8f91\u51b3\u5b9a\u3002\u540c\u65f6\u7528address(uint160(0))\u4ee3\u66ffaddress(0)\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u628a\u4e0b\u9762\u8bed\u53e5\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) == address(0)) {\n    ...\n}\n")),(0,p.kt)("p",{parentName:"li"},"\u4fee\u6539\u4e3a\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) ==\n    address(uint160(0))) \n{\n    ...\n}\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Alaya\u667a\u80fd\u5408\u7ea6\u4e2dblock.timestamp\u8868\u793a\u7684\u662f\u5f53\u524d\u533a\u5757\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6233\uff0c\u4ee5\u592a\u574a\u662f\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002block.timestamp\u9700\u4e0d\u9700\u8981\u4fee\u6539\u9700\u8981\u6839\u636e\u4e1a\u52a1\u903b\u8f91\u6765\u51b3\u5b9a\u3002\u5728uniswap\u79fb\u690d\u4e2d\u5408\u7ea6\u7684timestamp\u6ca1\u6709\u4fee\u6539\uff0c\u4f46\u662f\u524d\u7aef\u628a\u8d85\u65f6\u7684\u65f6\u95f4\u7531\u79d2\u6539\u6210\u4e86\u6beb\u79d2\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5408\u7ea6\u5f00\u53d1\u6307\u5357\u8bf7\u53c2\u8003",(0,p.kt)("a",{parentName:"p",href:"https://devdocs.alaya.network/alaya-devdocs/zh-CN/EVM_Smart_Contract/"},"EVM\u667a\u80fd\u5408\u7ea6")))),(0,p.kt)("h2",{id:"dapp\u524d\u7aef\u754c\u9762\u8fc1\u79fb"},"DApp\u524d\u7aef\u754c\u9762\u8fc1\u79fb"),(0,p.kt)("h3",{id:"\u4fee\u6539\u8fde\u63a5\u94b1\u5305\u7684\u65b9\u5f0f"},"\u4fee\u6539\u8fde\u63a5\u94b1\u5305\u7684\u65b9\u5f0f"),(0,p.kt)("p",null,"Samurai\u4e3a\u4e86\u8ddfmetamask\u547d\u540d\u4e0d\u51b2\u7a81\uff0c\u628ametamask\u7684window.ethereum\u4fee\u6539\u6210\u4e86window.alaya\uff0c\u53e6\u5916\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"eth_"),"\u5f00\u5934\u7684\u63a5\u53e3\u6539\u6210\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"platon_"),"\uff0c\u4f8b\u5982\uff1aeth_requestAccounts\u4fee\u6539\u6210\u4e86platon_requestAccounts\u3002\u6240\u4ee5\u8fde\u63a5\u94b1\u5305\u7684\u4ee3\u7801\u9700\u8981\u4fee\u6539\u76f8\u5bf9\u5e94\u7684\u4ee3\u7801\u3002Samurai\u5f00\u53d1\u8005\u6587\u6863\u8bf7\u53c2\u8003\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/Samurai/blob/main/docs/develop-manual.md"},"https://github.com/AlayaNetwork/Samurai/blob/main/docs/develop-manual.md")," \u3002"),(0,p.kt)("p",null,"\u5728uniswap\u7684\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u4fee\u6539\u4e86\u9879\u76ee ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/NoahZinsmeister/web3-react"},"https://github.com/NoahZinsmeister/web3-react")," \u7684injected-connector\u5305\uff0c\u5177\u4f53\u4fee\u6539\u8bf7\u53c2\u8003github\u63d0\u4ea4 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/aswap-web3-react/commits/alaya-v6.1.1"},"https://github.com/AlayaNetwork/aswap-web3-react/commits/alaya-v6.1.1")," \u3002"),(0,p.kt)("h3",{id:"\u4f9d\u8d56\u5305\u7684\u4fee\u6539"},"\u4f9d\u8d56\u5305\u7684\u4fee\u6539"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u5e94\u7528\u81ea\u8eab\u6709\u8fde\u63a5\u4ee5\u592a\u574a\u8282\u70b9\uff0c\u9700\u8981\u4fee\u6539\u4e3a\u8fde\u63a5Alaya\u8282\u70b9\uff0c\u8fd9\u6837\u80fd\u591f\u53ca\u65f6\u53d1\u73b0\u95ee\u9898\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8fde\u4e0aSamurai\u94b1\u5305\u540e\uff0c\u6839\u636e\u4e1a\u52a1\u7684\u529f\u80fd\u4f9d\u8d56\uff0c\u4f9d\u6b21\u8c03\u8bd5\u6bcf\u4e00\u4e2a\u529f\u80fd\uff0c\u6839\u636echrome\u8c03\u8bd5\u7684console\u63a7\u5236\u53f0\u9519\u8bef\u8f93\u51fa\u5b9a\u4f4d\u9700\u8981\u4fee\u6539\u7684\u4f9d\u8d56\u5305\u3002"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5f88\u591aDapp\u7684\u5f00\u53d1\u4e0d\u53ef\u907f\u514d\u7684\u4f1a\u5f15\u7528\u4ee5\u592a\u574a\u7684\u7b2c\u4e09\u65b9npm\u5305\uff0c\u8fd9\u4e9b\u5305\u4e2d\u53ef\u80fd\u6d89\u53ca\u5730\u5740\u76f8\u5173\u6216\u8005rpc\u8c03\u7528\u76f8\u5173\uff0c\u8fd9\u4e9b\u88ab\u5f15\u7528\u7684\u5305\u5f88\u5927\u53ef\u80fd\u662f\u6ca1\u6cd5\u652f\u6301\u987a\u5229\u8fc1\u79fb\u7684\uff0c\u5728samurai\u548cuniswap\u7684Dapp\u7684\u8fc1\u79fb\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u4fee\u6539\u5e76\u53d1\u5e03\u4e86\u4e00\u4e9bnpm\u5305\uff0c\u53ef\u4ee5\u8003\u8651\u7528\u652f\u6301Alaya\u7f51\u7edc\u7684npm\u5305\u8fdb\u884c\u66ff\u6362\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u7684\u8bdd\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f5c\u9002\u5f53\u4fee\u6539\u540e\u518d\u53d1\u5e03\u3002Alaya\u5df2\u7ecf\u53d1\u5e03\u7684\u4f9d\u8d56\u5305\u53ef\u4ee5\u53c2\u770b",(0,p.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork"},"Alaya github"),"\u548c",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40alayanetwork"},"Alaya npm\u4ed3\u5e93"),"\u3002"),(0,p.kt)("p",{parentName:"li"},"\u5df2\u53d1\u5e03\u4f9d\u8d56\u5305\u5217\u8868\u5982\u4e0b\uff1a"),(0,p.kt)("ol",{parentName:"li"},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-method-registry"},"@alayanetwork/eth-method-registry")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-ens"},"@alayanetwork/ethjs-ens")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-simple-keyring"},"@alayanetwork/eth-simple-keyring")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-hd-keyring"},"@alayanetwork/eth-hd-keyring")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-query"},"@alayanetwork/ethjs-query")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-block-tracker"},"@alayanetwork/eth-block-tracker")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-contract"},"@alayanetwork/ethjs-contract")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs"},"@alayanetwork/ethjs")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-format"},"@alayanetwork/ethjs-format")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-json-rpc-filters"},"@alayanetwork/eth-json-rpc-filters")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/nonce-tracker"},"@alayanetwork/nonce-tracker")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-provider-engine"},"@alayanetwork/web3-provider-engine")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-abi"},"@alayanetwork/ethjs-abi")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-http"},"@alayanetwork/web3-providers-http")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-net"},"@alayanetwork/web3-net")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-ws"},"@alayanetwork/web3-providers-ws")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-utils"},"@alayanetwork/web3-utils")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-helpers"},"@alayanetwork/web3-core-helpers")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethereumjs-util"},"@alayanetwork/ethereumjs-util")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-contract"},"@alayanetwork/web3-eth-contract")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-keyring-controller"},"@alayanetwork/eth-keyring-controller")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-subscriptions"},"@alayanetwork/web3-core-subscriptions")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-abi"},"@alayanetwork/web3-eth-abi")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth"},"@alayanetwork/web3-eth")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethereumjs-tx"},"@alayanetwork/ethereumjs-tx")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-iban"},"@alayanetwork/web3-eth-iban")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-ipc"},"@alayanetwork/web3-providers-ipc")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-accounts"},"@alayanetwork/web3-eth-accounts")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-personal"},"@alayanetwork/web3-eth-personal")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-ens"},"@alayanetwork/web3-eth-ens")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-sig-util"},"@alayanetwork/eth-sig-util")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-schema"},"@alayanetwork/ethjs-schema")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/rpc-cap"},"@alayanetwork/rpc-cap")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-token-tracker"},"@alayanetwork/eth-token-tracker")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/etherscan-link"},"@alayanetwork/etherscan-link")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/uniswap-v2-periphery"},"@alayanetwork/uniswap-v2-periphery")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-query"},"@alayanetwork/eth-query")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/controllers"},"@alayanetwork/controllers")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/inpage-provider"},"@alayanetwork/inpage-provider")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/forwarder"},"@alayanetwork/forwarder")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-json-rpc-middleware"},"@alayanetwork/eth-json-rpc-middleware")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/uniswap-sdk"},"@alayanetwork/uniswap-sdk")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ganache-core"},"@alayanetwork/ganache-core")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-promievent"},"@alayanetwork/web3-core-promievent")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-requestmanager"},"@alayanetwork/web3-core-requestmanager")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-method"},"@alayanetwork/web3-core-method")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core"},"@alayanetwork/web3-core")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3"},"@alayanetwork/web3")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-react-core"},"@alayanetwork/web3-react-core")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-react-injected-connector"},"@alayanetwork/web3-react-injected-connector")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-solidity"},"@alayanetwork/ethers-solidity")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-contracts"},"@alayanetwork/ethers-contracts")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-bytes"},"@alayanetwork/ethers-bytes")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-abi"},"@alayanetwork/ethers-abi")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-providers"},"@alayanetwork/ethers-providers")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-address"},"@alayanetwork/ethers-address")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/token-lists"},"@alayanetwork/token-lists"))))),(0,p.kt)("h3",{id:"\u5e94\u7528\u81ea\u8eab\u4ee3\u7801\u7684\u4fee\u6539"},"\u5e94\u7528\u81ea\u8eab\u4ee3\u7801\u7684\u4fee\u6539"),(0,p.kt)("h4",{id:"\u8c03\u7528\u5230alaya\u540e\u7aef\u7684rpc-method\u53ca\u53c2\u6570"},"\u8c03\u7528\u5230alaya\u540e\u7aef\u7684rpc method\u53ca\u53c2\u6570"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"alaya\u7f51\u7edc\u652f\u6301\u7684rpc method\u662f\u4ee5platon_\u5f00\u5934\u7684(\u5982: platon","_","sendTransaction)"),(0,p.kt)("li",{parentName:"ul"},"\u4e2a\u522brpc\u63a5\u53e3\u7684\u53c2\u6570\u7c7b\u578b\u7b49\u53ef\u80fd\u6709\u4e0d\u4e00\u81f4\u7684\uff0c\u7279\u522b\u662f\u5730\u5740\u7c7b\u578b\u9700\u8981\u6ce8\u610f\u3002\u5728\u5f00\u53d1\u7684\u65f6\u5019\u6700\u597d\u53c2\u8003Alaya\u7684",(0,p.kt)("a",{parentName:"li",href:"https://devdocs.alaya.network/alaya-devdocs/zh-CN/Json_Rpc/"},"\u5f00\u53d1\u8005\u6587\u6863"))),(0,p.kt)("h4",{id:"\u5730\u5740\u76f8\u5173"},"\u5730\u5740\u76f8\u5173"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8c03\u7528rpc\u7684\u65f6\u5019\u53c2\u6570\u5982\u679c\u662f\u5730\u5740\u7c7b\u578b\u7684\u8bdd\u9700\u8981\u6ce8\u610f\u4f20\u5165bech32\u5730\u5740\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u5982\u679c\u7a0b\u5e8f\u4e2d\u62ff\u5230\u4e86\u4e00\u4e2a0x\u7684\u5408\u7ea6\u5730\u5740\uff0c\u9700\u8981\u8f6c\u6362\u6210bech32\u5730\u5740\u518d\u8c03\u7528\uff0c\u5982\u4e0b\u9762\u4ee3\u7801\u6240\u793a\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"if (pair?.liquidityToken?.address) {\n    const hrp = chainId.toString() === '201018'? 'atp': 'atx';\n    contractAddress = toBech32Address(hrp,pair.liquidityToken.address)\n}\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u6d89\u53ca\u53c2\u6570\u505a\u7f16\u7801(\u5982encodeParam\u65b9\u6cd5)\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u9700\u8981\u8003\u8651\u5c06bech32\u5730\u5740\u7c7b\u578b\u53c2\u6570\u8f6c\u6362\u62100x\u7c7b\u578b\u518d\u505a\u7f16\u7801\uff0c\u5305\u62ec\u5730\u5740\u5224\u65ad\u4e5f\u9700\u8981\u4fee\u6539\u3002\u4f8b\u5982\uff0cuniswap\u5408\u7ea6\u53c2\u6570\u7f16\u7801\u7684\u65f6\u5019\u589e\u52a0\u4e86\u4e0b\u9762\u903b\u8f91\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"if (callInputs) {\n    callInputs = callInputs.map(callInput => {\n      if (typeof callInput === 'string' && isBech32Address(callInput))       {\n        return decodeBech32Address(callInput)\n      } else {\n        return callInput\n      }\n    })\n}\n")))),(0,p.kt)("h2",{id:"alaya\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177"},"Alaya\u5f00\u53d1\u8c03\u8bd5\u5de5\u5177"),(0,p.kt)("p",null,"\u8bf7\u53c2\u8003",(0,p.kt)("a",{parentName:"p",href:"https://devdocs.alaya.network/alaya-devdocs/zh-CN/"},"Alaya\u5f00\u53d1\u8005\u6587\u6863")),(0,p.kt)("h2",{id:"metamask\u53cauniswap\u8fc1\u79fb\u7684\u7ecf\u9a8c\u603b\u7ed3"},"Metamask\u53cauniswap\u8fc1\u79fb\u7684\u7ecf\u9a8c\u603b\u7ed3"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Dapp\u4e00\u822c\u90fd\u6709\u4e00\u4e9b\u529f\u80fd\u96c6\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u8fd9\u4e9b\u529f\u80fd\u7ea7\u5212\u5206\u4e00\u4e2a\u4e2amilestone\uff0c\u6bd4\u5982\u9488\u5bf9metamask\u5c31\u662f\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u6210\u529f\u5bfc\u5165\u52a9\u8bb0\u8bcd\u6216\u521b\u5efa\u94b1\u5305\u8fdb\u5165\u4e3b\u754c\u9762"),(0,p.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u4e3b\u754c\u9762\uff0c\u5730\u5740\u663e\u793a\u7684\u662fbech32\u5730\u5740\u5e76\u80fd\u6210\u529f\u83b7\u53d6\u5e76\u5c55\u793a\u4f59\u989d"),(0,p.kt)("li",{parentName:"ul"},"\u80fd\u4ece\u4e00\u4e2a\u8d26\u6237\u6210\u529f\u53d1\u9001\u539f\u751f\u7684token\u5230\u53e6\u4e00\u4e2a\u8d26\u6237"),(0,p.kt)("li",{parentName:"ul"},"\u80fd\u641c\u7d22\u4ee3\u5e01\u5e76\u6dfb\u52a0\u6210\u529f\uff0c\u5c55\u793a\u4ee3\u5e01\u7684\u4f59\u989d"),(0,p.kt)("li",{parentName:"ul"},"\u4ee3\u5e01\u4ea4\u6613\u80fd\u53d1\u9001\u6210\u529f")),(0,p.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e00\u4e2a\u4e2amilestone\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u7684\u7edd\u5927\u90e8\u5206\u95ee\u9898\u53ef\u80fd\u5c31\u662f\u4ee5\u4e0a\u63d0\u5230\u7684\u9700\u8981\u6ce8\u610f\u7684\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u76f4\u63a5\u4fee\u6539\u4f9d\u8d56\u5305\u7684\u6e90\u7801\uff0c\u80fd\u591f\u8ba9\u6d41\u7a0b\u8dd1\u901a\uff0c\u8dd1\u901a\u540e\u53ef\u4ee5\u8bb0\u5f55\u4f9d\u8d56\u5305\u7684\u4fee\u6539\u70b9\u4ee5\u5229\u4e8e\u540e\u9762\u4f9d\u8d56\u5305\u7684\u6539\u52a8\u53d1\u5e03")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u6b63\u5e38\u6765\u8bf4Dapp\u7684\u6838\u5fc3\u4e1a\u52a1\u6d41\u7a0b\u662f\u57fa\u672c\u4e0d\u7528\u6539\u52a8\u7684\uff0c\u4f46\u662f\u6211\u4eec\u4f9d\u7136\u8fd8\u662f\u8981\u5c1d\u8bd5\u53bb\u7406\u89e3\u57fa\u672c\u7684\u4e1a\u52a1\u6d41\uff0c\u8fd9\u5bf9\u4e8edebug\u662f\u6709\u597d\u5904\u7684")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u9002\u5f53\u7684\u5728\u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u6a21\u5f0f\u4e0bNetwork\u4e0a\u89c2\u5bdf\u662f\u5426\u6709\u7f51\u7edc\u8bf7\u6c42\u4ee5\u53ca\u7f51\u7edc\u8bf7\u6c42\u7684\u7ed3\u679c")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u771f\u5b9e\u7684\u9519\u8bef\u5f02\u5e38\u53ef\u80fd\u5728\u67d0\u4e2a\u5730\u65b9\u88ab\u622a\u83b7\u4f5c\u5904\u7406\u4e86\u5bfc\u81f4\u6700\u7ec8\u770b\u5230\u7684\u9519\u8bef\u5e76\u4e0d\u662f\u6700\u521d\u629b\u51fa\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u8fdb\u884cdebug\u627e\u5230\u5904\u7406\u524d\u7684\u6700\u521d\u7684\u9519\u8bef\u4fe1\u606f\u53ca\u5806\u6808")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u67d0\u4e9b\u9519\u8bef\u5982\u679c\u5bf9alaya\u7f51\u7edc\u751a\u81f3\u5e95\u5c42\u77e5\u8bc6\u638c\u63e1\u4e0d\u591a\u7684\u8bdd\uff0c\u53ef\u80fd\u4e5f\u4f1a\u5f88\u68d8\u624b\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5efa\u8bae\u53ef\u4ee5\u5728\u793e\u533a\u5411\u6709\u7ecf\u9a8c\u7684\u5f00\u53d1\u8005\u8bf7\u6559\u6216\u8ba8\u8bba"))))}w.isMDXComponent=!0}}]);