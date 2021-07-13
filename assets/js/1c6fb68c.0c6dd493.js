(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},479:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"Wasm_Development_costs",title:"Development costs",sidebar_label:"Development costs"},s=void 0,o={unversionedId:"Wasm_Development_costs",id:"Wasm_Development_costs",isDocsHomePage:!1,title:"Development costs",description:"Summary",source:"@site/docs/Wasm\u5f00\u53d1\u6210\u672c.md",sourceDirName:".",slug:"/Wasm_Development_costs",permalink:"/alaya-devdocs/Wasm_Development_costs",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Wasm\u5f00\u53d1\u6210\u672c.md",version:"current",frontMatter:{id:"Wasm_Development_costs",title:"Development costs",sidebar_label:"Development costs"},sidebar:"docs",previous:{title:"Getting started",permalink:"/alaya-devdocs/Wasm_Getting_started"},next:{title:"Best practices",permalink:"/alaya-devdocs/Wasm_Best_practices"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Small-sized Contract",id:"small-sized-contract",children:[]},{value:"Medium-sized Contract",id:"medium-sized-contract",children:[]},{value:"Large-sized Contract",id:"large-sized-contract",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"summary"},"Summary"),(0,l.kt)("p",null,"In a blockchain system, developing smart contracts based on any public chain system involves the development cost of resource expenditure. For example, deploying/calling smart contracts on the network, energy transfer, pledge/delegation and other operations all require a certain cost. Different blockchain network development costs are different. There are two types of virtual machines running in the Alaya network. ",(0,l.kt)("inlineCode",{parentName:"p"},"EVM")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"WASM"),", the cost of developing smart contracts on different virtual machines is also different. This article will compare the different development costs of small contracts, medium contracts and large contracts in the form of a table. At the same time, we will compare the ",(0,l.kt)("inlineCode",{parentName:"p"},"EVM"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"WASM")," virtual machine of ",(0,l.kt)("inlineCode",{parentName:"p"},"Alaya")," with the Ethereum virtual machine. In terms of contracts, a simple ",(0,l.kt)("inlineCode",{parentName:"p"},"SET/GET")," function contract is used as a small test contract. The medium-sized contract example will use an open source ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yep/eth-tweet"},"Tweet")," contract The large contract is a smart contract that implements the ",(0,l.kt)("inlineCode",{parentName:"p"},"ERC20")," standard."),(0,l.kt)("h4",{id:"data-overview"},"Data Overview"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simple Storage Contract")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-EVM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Small-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.3 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"76953"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"384765 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.000384765 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Small-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.3 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"127173"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"wei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"635865 ",(0,l.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.000635865 ",(0,l.kt)("inlineCode",{parentName:"td"},"ETH"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-WASM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Small-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"13.55 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"184043"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"920215 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.000920215 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"eth-tweet Contract")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-EVM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Medium-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.08 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"257065"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"1285325 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.001285325 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Medium-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.08 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"621385"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"wei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"3106925 ",(0,l.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.003106925 ",(0,l.kt)("inlineCode",{parentName:"td"},"ETH"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-WASM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Medium-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"30.07 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"349713"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"1748565 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.001748565 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ERC20 Token Contract")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,l.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-EVM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Large-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4.45 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"552823"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2764115 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.002764115 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Large-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4.45 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1282171"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"wei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"6410855 ",(0,l.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.006410855 ",(0,l.kt)("inlineCode",{parentName:"td"},"ETH"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Alaya-WASM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Large-sized"),(0,l.kt)("td",{parentName:"tr",align:"left"},"35.9 kb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"486274"),(0,l.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,l.kt)("inlineCode",{parentName:"td"},"VON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"2431370 ",(0,l.kt)("inlineCode",{parentName:"td"},"gVON")),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.00243137 ",(0,l.kt)("inlineCode",{parentName:"td"},"ATP"))))),(0,l.kt)("h3",{id:"small-sized-contract"},"Small-sized Contract"),(0,l.kt)("h4",{id:"simple-storage-contract"},"Simple Storage Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EVM Sample Code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pragma solidity ^0.4.12;\n\ncontract SimpleTest {\n\n    uint public age;\n\n    function setAge(uint _input) public {\n        age = _input;\n    }\n\n    function getAge() public constant returns (uint) {\n        return age;\n    }\n}\n")),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"608060405234801561001057600080fd5b50610117806100206000396000f3006080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063262a9dff146058578063967e6e65146080578063d5dcf1271460a8575b600080fd5b348015606357600080fd5b50606a60d2565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b50609260d8565b6040518082815260200191505060405180910390f35b34801560b357600080fd5b5060d06004803603810190808035906020019092919050505060e1565b005b60005481565b60008054905090565b80600081905550505600a165627a7a7230582079e51340567895e1097e1c9115e778c3d982b8e71b6997c57f1ba497c56c8b3b0029\n")),(0,l.kt)("p",null,"ByteSize\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"311 byte => 0.3 kb")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WASM Sample Code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\nCONTRACT SimpleStorage: public platon::Contract\n{\n    public:\n        ACTION void init(){}\n\n        ACTION void set(uint64_t input)\n        {\n            storedData.self() = input;\n        }\n\n        CONST uint64_t get()\n        {\n            return storedData.self();\n        }\n\n    private:\n        platon::StorageType<"sstored"_n, uint64_t> storedData;\n};\n\nPLATON_DISPATCH(SimpleStorage,(init)(set)(get))\n')),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/SimpleStorage_wasm.bin"},"Click to view bincode")),(0,l.kt)("p",null,"ByteSize: ",(0,l.kt)("inlineCode",{parentName:"p"},"13882 byte => 13.55 kb")),(0,l.kt)("hr",null),(0,l.kt)("h6",{id:"cost"},"Cost"),(0,l.kt)("p",null,"Alaya-EVM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 76953"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 384765 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.000384765 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("p",null,"Ethereum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 127173"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 635865 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.000635865 ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,l.kt)("p",null,"Alaya-WASM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 184043"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 920215 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.000920215 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"medium-sized-contract"},"Medium-sized Contract"),(0,l.kt)("h4",{id:"eth-tweet"},"Eth-Tweet"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EVM Sample Code")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/account.sol"},"Click to view code")),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/Tweet_evm.bin"},"Click to view bincode")),(0,l.kt)("p",null,"ByteSize: ",(0,l.kt)("inlineCode",{parentName:"p"},"2130.5 byte => 2.08 kb")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WASM Sample Code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\n// data structure of a single tweet.\nstruct Tweet{\n\n    public:\n        uint64_t timestamp;\n        std::string tweetString;\n\n    public:\n        Tweet(){}\n        Tweet(uint64_t &timestamp, const std::string &tweet):timestamp(timestamp), tweetString(tweet) {\n        }\n\n    public:\n        PLATON_SERIALIZE(Tweet, (timestamp)(tweetString))\n};\n\nCONTRACT TweetAccount: public platon::Contract\n{\n    private:\n        // "array" of all tweets of this account: maps the tweet id to the actual tweet.\n        platon::StorageType<"smapping"_n, std::map<std::uint64_t, Tweet>> _tweets;\n        // total number of tweets in the above _tweets mapping.\n        platon::StorageType<"suint"_n, uint64_t> _numberOfTweets;\n        // "owner" of this account: only admin is allowed to tweet.\n        platon::StorageType<"saddress"_n, Address> _adminAddress;\n\n    public:\n        ACTION void init()\n        {\n            _numberOfTweets.self() = 0;\n            _adminAddress.self() = platon::platon_caller();\n        }\n\n        // returns true if caller of function("sender") is admin.\n        CONST bool isAdmin(){\n            return platon::platon_caller() == _adminAddress.self();\n        }\n\n        // create new tweet\n        ACTION int64_t tweet(const std::string& tweetString) {\n            int64_t result = 0;\n            if(!isAdmin()){\n                // only owner is allowed to create tweets for this account.\n                result = -1;\n            } else if (tweetString.length() > 160) {\n                // tweet contains more than 160 bytes.\n                result = -2;\n            } else {\n                _tweets.self()[_numberOfTweets].timestamp = platon_timestamp();\n                _tweets.self()[_numberOfTweets].tweetString = tweetString;\n                _numberOfTweets.self() = _numberOfTweets.self() + 1;\n                result = 0; // success.\n            }\n            return result;\n        }\n\n        CONST std::string getTweet(uint64_t tweetId){\n            // returns two values\n            std::string tweetString = _tweets.self()[tweetId].tweetString;\n            uint64_t timestamp = _tweets.self()[tweetId].timestamp;\n            return tweetString;\n        }\n\n        CONST std::string getLatestTweet() {\n            // returns three values.\n            std::string tweetString = _tweets.self()[_numberOfTweets.self() - 1].tweetString;\n            uint64_t timestamp = _tweets.self()[_numberOfTweets.self() - 1].timestamp;\n            uint64_t numberOfTweets = _numberOfTweets.self();\n            return tweetString;\n        }\n\n        CONST Address getOwnerAddress() {\n            return _adminAddress.self();\n        }\n\n        CONST uint64_t getNumberOfTweets() {\n            return _numberOfTweets.self();\n        }\n\n        ACTION void adminRetrieveDonations(const Address& receiver) {\n            if(isAdmin()){\n                Address caddr = platon_address();\n                Energon e = platon_balance(caddr);\n                platon_transfer(receiver, e);\n            }\n        }\n\n        CONST Address caddr(){\n            return platon_address();\n        }\n\n        CONST std::string caddrBalance(Address receiver){\n            //Address caddr = platon_address();\n            Energon e = platon_balance(receiver);\n            return std::to_string(e.Get());\n        }\n\n        ACTION void adminDeleteAccount(){\n            if(isAdmin()){\n                // this is a predefined function, it deletes theh contract and returns all funds to the owner.\n                platon_destroy(_adminAddress.self());\n            }\n        }\n};\n\nPLATON_DISPATCH(TweetAccount,(init)(isAdmin)(tweet)(getTweet)(getLatestTweet)\n(getOwnerAddress)(getNumberOfTweets)(adminRetrieveDonations)(adminDeleteAccount)\n(caddr)(caddrBalance))\n')),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/Tweet_wasm.bin"},"Click to view bincode")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"")),(0,l.kt)("p",null,"ByteSize: ",(0,l.kt)("inlineCode",{parentName:"p"},"30788")," byte => 30.07 kb`"),(0,l.kt)("hr",null),(0,l.kt)("h6",{id:"costs"},"Costs"),(0,l.kt)("p",null,"Alaya-EVM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 257065"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 1285325 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.001285325 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("p",null,"Ethereum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 621385"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 3106925 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.003106925 ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,l.kt)("p",null,"Alaya-WASM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 349713"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 1748565 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.001748565 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"large-sized-contract"},"Large-sized Contract"),(0,l.kt)("h4",{id:"erc20-token-contract"},"ERC20 Token Contract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EVM Sample Code")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/token.sol"},"Click to view code")),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/Token_evm.bin"},"Click to view bincode")),(0,l.kt)("p",null,"ByteSize: ",(0,l.kt)("inlineCode",{parentName:"p"},"4557.5 byte => 4.45 kb")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WASM Sample Code")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\nclass Token {\n    public:\n        // total amount of tokens\n        platon::StorageType<"totalsupply"_n, uint64_t> totalSupply;\n\n    public: // event\n        // define: _from, _to, _value\n        PLATON_EVENT2(Transfer, Address, Address, uint64_t);\n        // define: _owner, _spender, _value\n        PLATON_EVENT2(Approval, Address, Address, uint64_t);\n\n    public:\n        // @param _owner The address from which the balance will be retrieved\n        // @return The balance.\n        virtual uint64_t balanceOf(Address _owner) = 0;\n\n        // @notice send \'_value\' token to `_to` from `msg.sender`\n        // @param _to THe address of the recipient.\n        // @param _value The amount of token to be transferred.\n        // @return Whether the transfer was successful or not.\n        virtual bool transfer(Address _to, uint64_t _value) = 0;\n\n        // @notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n        // @param _from The address of the sender.\n        // @param _to The address of the recepient.\n        // @param _value The amount of token to be transferred.\n        // @return Whether the transfer was successful or not.\n        virtual bool transferFrom(Address _from, Address _to, uint64_t _value) = 0;\n\n        // @notice `msg.sender` approves `_spender` to spend `_value` tokens\n        // @param _spender The address of the account able to transfer the tokens\n        // @param _value The amount of tokens to be approved for transfer\n        // @return Whether thee approval was successful or not.\n        virtual bool approve(Address _spender, uint64_t _value) = 0;\n\n        // @param _owner The address of the account owning tokens\n        // @param _spender The address of the account able to transfer the tokens\n        // @return Amount of remaining tokens allowed to spent.\n        virtual uint64_t allowance(Address _owner, Address _spender) = 0;\n};\n\n// You should inherit from StandardTOken or, for a token like you would want\n// to deploy in something like MIst, see HumanStandardToken.cpp.\n// (This implements ONLY the standard functions and NOTHING else.\n// If you deploy this, you won\'t have anthing useful.)\nclass StandardToken: public Token\n{\n    protected:\n        platon::StorageType<"balances"_n, std::map<Address, uint64_t>> balances;\n        platon::StorageType<"allowed"_n, std::map<Address, std::map<Address, uint64_t>>> allowed;\n\n    public:\n        CONST uint64_t balanceOf(Address _owner) {\n            return balances.self()[_owner];\n        }\n\n        ACTION bool transfer(Address _to, uint64_t _value){\n            // Default assumes totalSupply can\'t be over max(2^64 - 1)\n            // If your token leaves out totalSupply and can issue more tokens as time goes on,\n            // you need to check if it doesn\'t wrap.\n            // Replace the if with this on instead.\n            Address sender = platon_caller();\n            if (balances.self()[sender] >= _value && _value > 0) {\n                balances.self()[sender] -= _value;\n                balances.self()[_to] += _value;\n                PLATON_EMIT_EVENT2(Transfer, sender, _to, _value);\n                return true;\n            } else {\n                return false;\n            }\n        }\n\n        ACTION bool transferFrom(Address _from, Address _to, uint64_t _value) {\n            // same as above. Replace this line with the following if you want to protect against\n            // wrapping uints.\n            Address sender = platon_caller();\n            if(balances.self()[_from] >= _value\n                && allowed.self()[_from][sender] >= _value && _value > 0){\n                balances.self()[_to] += _value;\n                balances.self()[_from] -= _value;\n                PLATON_EMIT_EVENT2(Transfer, _from, _to, _value);\n                return true;\n            } else {\n                return false;\n            }\n        }\n\n        ACTION bool approve(Address _spender, uint64_t _value){\n            Address sender = platon_caller();\n            allowed.self()[sender][_spender] = _value;\n            PLATON_EMIT_EVENT2(Approval, sender, _spender, _value);\n            return true;\n        }\n\n        CONST uint64_t allowance(Address _owner, Address _spender){\n            return allowed.self()[_owner][_spender];\n        }\n};\n\n\nCONTRACT LATToken: public platon::Contract, public StandardToken\n{\n\n    public:\n        platon::StorageType<"name"_n, std::string> name;        // fancy name: eg Alaya Token\n        platon::StorageType<"decimals"_n, uint8_t> decimals;    // HOw many decimals to show.\n        platon::StorageType<"symbol"_n, std::string> symbol;    // An identifier: eg LTT\n        platon::StorageType<"version"_n, std::string> version;  // 0.1 standard. Just an arbitrary versioning scheme.\n\n    public:\n        ACTION void init(uint64_t _initialAmount, const std::string& _tokenName,\n            uint8_t _decimalUnits, const std::string& _tokenSymbol)\n        {\n            Address sender = platon_caller();\n            balances.self()[sender] = _initialAmount;       // Give the creator all initial tokens.\n            totalSupply.self() = _initialAmount;            // Update total supply.\n            name.self() = _tokenName;                       // Set the name for display purposes\n            decimals.self() = _decimalUnits;                // Amount of decimals for display purposes\n            symbol.self() = _tokenSymbol;                   // Set the symbol for display purposes.\n        }\n\n        CONST std::string getName(){\n            return name.self();\n        }\n\n        CONST uint8_t getDecimals(){\n            return decimals.self();\n        }\n\n        CONST std::string getSymbol(){\n            return symbol.self();\n        }\n\n        CONST uint64_t getTotalSupply(){\n            return totalSupply.self();\n        }\n\n        // Approves and then calls the receiving contract.\n        ACTION bool approveAndCall(Address _spender, uint64_t _value, const bytes& _extraData) {\n            Address sender = platon_caller();\n            allowed.self()[sender][_spender] = _value;\n            PLATON_EMIT_EVENT2(Approval, sender, _spender, _value);\n            // call the receiveApproval function on the contract you want to be notified. This\n            // crafts the function signature manually so one doesn\'t have to include a contract\n            // in here just for this.\n            // define: receiveApproval(Address _from, uint64_t _value, Address _tokenContract, bytes& _extraDaa)\n            // it is assumed that when does this that the call should succeed.\n            return true;\n        }\n};\n\nPLATON_DISPATCH(LATToken,(init)(balanceOf)(transfer)(transferFrom)(approve)(allowance)\n(getName)(getDecimals)(getSymbol)(getTotalSupply)(approveAndCall))\n')),(0,l.kt)("p",null,"ByteCode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/alaya-devdocs/blob/master/zh-cn/Development/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%BC%80%E5%8F%91.assets/Token_wasm.bin"},"Click to view bincode")),(0,l.kt)("p",null,"ByteSize: ",(0,l.kt)("inlineCode",{parentName:"p"},"36764 byte => 35.9 kb")),(0,l.kt)("hr",null),(0,l.kt)("h6",{id:"costs-1"},"Costs"),(0,l.kt)("p",null,"Alaya-EVM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 552823"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 2764115 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.002764115 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("p",null,"Ethereum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 1282171"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 6410855 ",(0,l.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.006410855 ",(0,l.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,l.kt)("p",null,"Alaya-WASM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GasUsed: 486274"),(0,l.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,l.kt)("li",{parentName:"ul"},"Costs: 2431370 ",(0,l.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.00243137 ",(0,l.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);