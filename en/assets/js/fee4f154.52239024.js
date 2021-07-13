(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[7595],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(a),p=o,u=g["".concat(d,".").concat(p)]||g[p]||h[p]||r;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8862:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"staking_and_delegation",title:"Staking&Delegation",sidebar_label:"Staking&Delegation"},l=void 0,d={unversionedId:"staking_and_delegation",id:"staking_and_delegation",isDocsHomePage:!1,title:"Staking&Delegation",description:"What is staking?",source:"@site/docs/\u8d28\u62bc&\u59d4\u6258.md",sourceDirName:".",slug:"/staking_and_delegation",permalink:"/alaya-devdocs/en/staking_and_delegation",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/\u8d28\u62bc&\u59d4\u6258.md",version:"current",frontMatter:{id:"staking_and_delegation",title:"Staking&Delegation",sidebar_label:"Staking&Delegation"},sidebar:"docs",previous:{title:"Intro to ATP",permalink:"/alaya-devdocs/en/Intro_to_ATP"},next:{title:"Networks",permalink:"/alaya-devdocs/en/Networks"}},c=[{value:"What is staking?",id:"what-is-staking",children:[]},{value:"What is a delegation?",id:"what-is-a-delegation",children:[]},{value:"Why become a delegator?",id:"why-become-a-delegator",children:[]},{value:"How to staking?",id:"how-to-staking",children:[]},{value:"How to delegate?",id:"how-to-delegate",children:[]},{value:"How to choose a validator worth delegating?",id:"how-to-choose-a-validator-worth-delegating",children:[]},{value:"When does the delegation take effect and when can I get rewards after delegation?",id:"when-does-the-delegation-take-effect-and-when-can-i-get-rewards-after-delegation",children:[]},{value:"How to calculate the delegated rawards?",id:"how-to-calculate-the-delegated-rawards",children:[]}],s={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-staking"},"What is staking?"),(0,r.kt)("p",null,"In PlatON's network, staking is the act of nodes joining to Alayanetwork by locking a certain amount of ATP. Alaya uses ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Economic_Model#ppos-consensus"},"PPoS consensus mechanism")," to select validators, and nodes joining the Alayanetwork are ranked according to the amount of ATP staked. Each round of consensus will randomly select 25 nodes from the top 101 nodes as validators to pack out blocks and receive network rewards."),(0,r.kt)("h2",{id:"what-is-a-delegation"},"What is a delegation?"),(0,r.kt)("p",null,"Delegation is the act of ATP holders delegating ATP to nodes to indirectly participate in the network co-build. Delegation can not only improve the security of the network, but also bring rewards to the delegator."),(0,r.kt)("h2",{id:"why-become-a-delegator"},"Why become a delegator?"),(0,r.kt)("p",null,"Staking is the core feature of the Alayanetwork. The larger the percentage of ATP involved in staking and delegating, the higher the security of Alayanetwork."),(0,r.kt)("p",null,"Whether a validator can be selected as an active validator mainly depends on the amount of total staking, which is composed of the staking of ATP of the validator itself and the ATP delegated to it. Alternative Validator Candidates ranking top 101 can become alternative validators."),(0,r.kt)("p",null,"The delegation is similar to an election in that we exercise our voting right by delegating, so as to fulfill our common expectation of electing the candidate contributing the most to the development of the network to become the validator. The participation of more delegators can prevent validators from misconduct and promote the healthy and sustainable development of Alayaecosystem and the continuous increase of Alayavalue."),(0,r.kt)("h2",{id:"how-to-staking"},"How to staking?"),(0,r.kt)("p",null,"We welcome ATP holders interested in maintaining the network to run an Alaya Node and staking to become an Alaya Validator. A detailed description of the Alaya node and how to operate it can be found on the ",(0,r.kt)("a",{parentName:"p",href:"/"},"Alaya Node Page")),(0,r.kt)("p",null,"To facilitate operations such as node staking and governance voting, Alaya provides the ",(0,r.kt)("a",{parentName:"p",href:"/"},"MTool tool"),", which can be used to quickly initiate staking operations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/"},"here")," for details."),(0,r.kt)("h2",{id:"how-to-delegate"},"How to delegate?"),(0,r.kt)("p",null,"Any user holding more than 1 ATP can participate in delegating for delegated rewards, which can be done simply by using ",(0,r.kt)("a",{parentName:"p",href:"/"},"ATON Wallet"),", see ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/ATON-user-manual#delegation"},"here"),"."),(0,r.kt)("p",null,"Feel free to submit more good applications that support the Alaya Delegation Service."),(0,r.kt)("h2",{id:"how-to-choose-a-validator-worth-delegating"},"How to choose a validator worth delegating?"),(0,r.kt)("p",null,"Based on the information provided by the ATON Wallet, you can examine a validator from the following aspects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ranking"),": the higher the ranking of a validator, the higher the chance of it becoming a validator producing blocks in the consensus round."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected delegated annualized yield"),": the yield of delegation can be estimated with the expected annualized rate of yield, which can be calculated by the yield per share of the delegation in the recent 4 Epochs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegating reward ratio"),": the ratio of the rewards allocated to the delegators. The higher the ratio, the higher the total rewards earned by all delegators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegation received"),": the total amount of delegated ATP received by the current validator. The higher percentage of the delegated ATP, the higher the rewards allocated to individuals from the total rewards received by all delegators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Penalty count"),": validators with low block producing rate or malicious dual-signing will be penalized, and the more validators are penalized, the less trustworthy they are."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Community reputation"),": validators with good reputations and prestige in the community can be trusted and delegated.")),(0,r.kt)("h2",{id:"when-does-the-delegation-take-effect-and-when-can-i-get-rewards-after-delegation"},"When does the delegation take effect and when can I get rewards after delegation?"),(0,r.kt)("p",null,"Delegated ATP does not become effective (i.e., being locked) until the next ",(0,r.kt)("a",{parentName:"p",href:"/"},"Epoch"),"."),(0,r.kt)("p",null,"When the effective delegation is fully locked for an Epoch and the delegated validator is rewarded in the ",(0,r.kt)("a",{parentName:"p",href:"/alaya-devdocs/en/Economic_Model#the-business-cycle-in-platon"},"Epoch"),", the delegating reward is available in that settlement block."),(0,r.kt)("p",null,"There will be no rewards in the Epoch for delegating redeemed in the process."),(0,r.kt)("p",null,"If the delegated validator is revoked, all delegating under that validator will be invalidated and there will be no delegating rewards for this Epoch and subsequent Epochs. Please take care to ",(0,r.kt)("a",{parentName:"p",href:"/"},"withdraw")," in a timely manner."),(0,r.kt)("h2",{id:"how-to-calculate-the-delegated-rawards"},"How to calculate the delegated rawards?"),(0,r.kt)("p",null,"Rewards can be received when a validator becomes an active validator and participates in block production. The rewards are composed of staking rewards and block-producing rewards and are allocated to delegators in accordance with the delegating reward ratio. The delegated rewards obtained need to be actively ",(0,r.kt)("a",{parentName:"p",href:"/"},"claimed")," by you."),(0,r.kt)("p",null,"Example\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If a validator has a delegating reward ratio of 10% and receives a block-producing reward of 1000LAT and a staking reward of 2000 ATP for a certain period of time, rewards participating in allocation would be 3000 ATP."),(0,r.kt)("p",{parentName:"blockquote"},"Total reward for all delegators: 1000 ",(0,r.kt)("em",{parentName:"p"}," 10%+2000"),"10% = 300 ATP"),(0,r.kt)("p",{parentName:"blockquote"},"Each delegator gets a reward based on the ratio of its valid delegation to the total valid delegation of the validator."),(0,r.kt)("p",{parentName:"blockquote"},"Suppose a delegator has a total delegation of 1000 ATP and there are a total of 5000 ATP delegation on the validator,"),(0,r.kt)("p",{parentName:"blockquote"},"then the reward that the delegator can get is 1000/5000*300=60 ATP.")))}h.isMDXComponent=!0}}]);