(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1269],{3905:function(f,e,t){"use strict";t.d(e,{Zo:function(){return b},kt:function(){return m}});var a=t(7294);function n(f,e,t){return e in f?Object.defineProperty(f,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):f[e]=t,f}function r(f,e){var t=Object.keys(f);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(f);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(f,e).enumerable}))),t.push.apply(t,a)}return t}function l(f){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(f,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(f,e,Object.getOwnPropertyDescriptor(t,e))}))}return f}function i(f,e){if(null==f)return{};var t,a,n=function(f,e){if(null==f)return{};var t,a,n={},r=Object.keys(f);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=f[t]);return n}(f,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(f);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(f,t)&&(n[t]=f[t])}return n}var d=a.createContext({}),o=function(f){var e=a.useContext(d),t=e;return f&&(t="function"==typeof f?f(e):l(l({},e),f)),t},b=function(f){var e=o(f.components);return a.createElement(d.Provider,{value:e},f.children)},c={inlineCode:"code",wrapper:function(f){var e=f.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(f,e){var t=f.components,n=f.mdxType,r=f.originalType,d=f.parentName,b=i(f,["components","mdxType","originalType","parentName"]),p=o(t),m=n,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(k,l(l({ref:e},b),{},{components:t})):a.createElement(k,l({ref:e},b))}));function m(f,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof f||n){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=f,i.mdxType="string"==typeof f?f:n,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7903:function(f,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return o},default:function(){return c}});var a=t(2122),n=t(9756),r=(t(7294),t(3905)),l={id:"Solidity_Development_costs",title:"Development costs",sidebar_label:"Development costs"},i=void 0,d={unversionedId:"Solidity_Development_costs",id:"Solidity_Development_costs",isDocsHomePage:!1,title:"Development costs",description:"Introduction",source:"@site/docs/Solidity\u5408\u7ea6\u5f00\u53d1\u6210\u672c.md",sourceDirName:".",slug:"/Solidity_Development_costs",permalink:"/alaya-devdocs/Solidity_Development_costs",editUrl:"https://github.com/zfamz/alaya-devdocs/tree/v2/website/docs/Solidity\u5408\u7ea6\u5f00\u53d1\u6210\u672c.md",version:"current",frontMatter:{id:"Solidity_Development_costs",title:"Development costs",sidebar_label:"Development costs"},sidebar:"docs",previous:{title:"Migration tutorial",permalink:"/alaya-devdocs/Solidity_Migration_tutorial"},next:{title:"Best practices",permalink:"/alaya-devdocs/Solidity_Best_practices"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Small-sized Contract",id:"small-sized-contract",children:[]},{value:"Medium-sized Contract",id:"medium-sized-contract",children:[]},{value:"Large-sized Contract",id:"large-sized-contract",children:[]}],b={toc:o};function c(f){var e=f.components,t=(0,n.Z)(f,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In a blockchain system, developing smart contracts based on any public chain system involves the development cost of resource expenditure. For example, deploying/calling smart contracts on the network, performing energy conversion, pledge/delegation and other operations all require a certain cost. Different blockchain network development costs are different. The cost of developing smart contracts on the Alaya network is similar to that of developing on Ethereum. This manual will analyze and compare in an intuitive format, allowing users to have a clearer understanding of development costs."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article will use a table to compare different development costs of small, medium and large contracts, and compare Alaya with Ethereum. In terms of contracts, a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"SET/GET")," function contract is used as a small test contract. The medium-sized contract example will use an open source(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yep/eth-tweet"},"eth-tweet"),") contract The large contract is a smart contract that complies with the ERC20 standard."),(0,r.kt)("h4",{id:"data-overview"},"Data Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple Storage Contract")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alaya"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Small-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"76953"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"VON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"384765 ",(0,r.kt)("inlineCode",{parentName:"td"},"gVON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.000384765 ",(0,r.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Small-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"127173"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"wei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"635865 ",(0,r.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.000635865 ",(0,r.kt)("inlineCode",{parentName:"td"},"ETH"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"eth-tweet Contract")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alaya"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Medium-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.08 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"257065"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"VON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1285325 ",(0,r.kt)("inlineCode",{parentName:"td"},"gVON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.001285325 ",(0,r.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Medium-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.08 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"621385"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"wei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"3106925 ",(0,r.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.003106925 ",(0,r.kt)("inlineCode",{parentName:"td"},"ETH"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ARC20 Token Contract")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Contract Level"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasUsed"),(0,r.kt)("th",{parentName:"tr",align:"left"},"GasPrice"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alaya"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Large-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.45 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"552823"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"VON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"2764115  ",(0,r.kt)("inlineCode",{parentName:"td"},"gVON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.002764115 ",(0,r.kt)("inlineCode",{parentName:"td"},"ATP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Ethereum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Large-sized"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.45 kb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1282171"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"td"},"wei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"6410855  ",(0,r.kt)("inlineCode",{parentName:"td"},"Gwei")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.006410855 ",(0,r.kt)("inlineCode",{parentName:"td"},"ETH"))))),(0,r.kt)("h3",{id:"small-sized-contract"},"Small-sized Contract"),(0,r.kt)("h4",{id:"simple-storage-contract"},"Simple Storage Contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pragma solidity ^0.4.12;\n\ncontract SimpleTest {\n    \n    uint public age;\n \n    function setAge(uint _input) public {\n        age = _input;\n    }\n \n    function getAge() public constant returns (uint) {\n        return age;\n    }\n}\n")),(0,r.kt)("p",null,"ByteCode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"608060405234801561001057600080fd5b50610117806100206000396000f3006080604052600436106053576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063262a9dff146058578063967e6e65146080578063d5dcf1271460a8575b600080fd5b348015606357600080fd5b50606a60d2565b6040518082815260200191505060405180910390f35b348015608b57600080fd5b50609260d8565b6040518082815260200191505060405180910390f35b34801560b357600080fd5b5060d06004803603810190808035906020019092919050505060e1565b005b60005481565b60008054905090565b80600081905550505600a165627a7a7230582079e51340567895e1097e1c9115e778c3d982b8e71b6997c57f1ba497c56c8b3b0029\n")),(0,r.kt)("p",null,"ByteSize\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"311 byte => 0.3 kb")),(0,r.kt)("h6",{id:"cost"},"Cost"),(0,r.kt)("p",null,"Alaya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 76953"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  384765 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.000384765 ",(0,r.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,r.kt)("p",null,"Ethereum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 127173"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  635865 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.000635865 ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"medium-sized-contract"},"Medium-sized Contract"),(0,r.kt)("h4",{id:"eth-tweet"},"Eth-Tweet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Code")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/alaya-devdocs/blob/main/docs/SmartDevelopment.assets/account.sol"},"Click to view code")),(0,r.kt)("p",null,"ByteCode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"6060604052341561000f57600080fd5b5b600060018190555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6107e88061006a6000396000f3006060604052361561008c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4f65bd146100915780633e450fff146100e65780635c3e426c146100fb578063ae978f0814610134578063b6db75a0146101d1578063c3ad5ecb146101fe578063ca7dc5b1146102a2578063fb46d4c5146102cb575b600080fd5b341561009c57600080fd5b6100a461033c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100f157600080fd5b6100f9610367565b005b341561010657600080fd5b610132600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103b2565b005b341561013f57600080fd5b610147610411565b6040518080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156101945780820151818401525b602081019050610178565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34156101dc57600080fd5b6101e46104f7565b604051808215151515815260200191505060405180910390f35b341561020957600080fd5b61021f6004808035906020019091905050610550565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156102665780820151818401525b60208101905061024a565b50505050905090810190601f1680156102935780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34156102ad57600080fd5b6102b5610628565b6040518082815260200191505060405180910390f35b34156102d657600080fd5b610326600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610633565b6040518082815260200191505060405180910390f35b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b90565b61036f6104f7565b156103af57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b6103ba6104f7565b1561040d578073ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050505b5b50565b610419610703565b600080600080600180540381526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104c95780601f1061049e576101008083540402835291602001916104c9565b820191906000526020600020905b8154815290600101906020018083116104ac57829003601f168201915b505050505092506000806001805403815260200190815260200160002060000154915060015490505b909192565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161490505b90565b610558610703565b60008060008481526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106035780601f106105d857610100808354040283529160200191610603565b820191906000526020600020905b8154815290600101906020018083116105e657829003601f168201915b505050505091506000808481526020019081526020016000206000015490505b915091565b600060015490505b90565b600061063d6104f7565b151561066b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90506106fd565b60a08251111561069d577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe90506106fc565b4260008060015481526020019081526020016000206000018190555081600080600154815260200190815260200160002060010190805190602001906106e4929190610717565b50600160008154809291906001019190505550600090505b5b5b919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075857805160ff1916838001178555610786565b82800160010185558215610786579182015b8281111561078557825182559160200191906001019061076a565b5b5090506107939190610797565b5090565b6107b991905b808211156107b557600081600090555060010161079d565b5090565b905600a165627a7a7230582004bd291e77dd5f2bfd4822ec9590d7da613bf3ef8cb6270dc7d553fa687ab1780029\n")),(0,r.kt)("p",null,"ByteSize\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"2130.5 byte => 2.08 kb")),(0,r.kt)("h6",{id:"cost-1"},"Cost"),(0,r.kt)("p",null,"Alaya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 257065"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  1285325 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.001285325 ",(0,r.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,r.kt)("p",null,"Ethereum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 621385"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  3106925 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.003106925 ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"large-sized-contract"},"Large-sized Contract"),(0,r.kt)("h4",{id:"arc20-token-contract"},"ARC20 Token Contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Code")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork/alaya-devdocs/blob/main/docs/SmartDevelopment.assets/token.sol"},"Click to view code")),(0,r.kt)("p",null,"ByteCode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"6060604052604060405190810160405280600481526020017f56302e3100000000000000000000000000000000000000000000000000000000815250600690805190602001906200005292919062000139565b5034156200005c57fe5b604051620011cd380380620011cd833981016040528080519060200190919080518201919060200180519060200190919080518201919050505b83600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836000819055508260039080519060200190620000f992919062000139565b5081600460006101000a81548160ff021916908360ff16021790555080600590805190602001906200012d92919062000139565b505b50505050620001e8565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017c57805160ff1916838001178555620001ad565b82800160010185558215620001ad579182015b82811115620001ac5782518255916020019190600101906200018f565b5b509050620001bc9190620001c0565b5090565b620001e591905b80821115620001e1576000816000905550600101620001c7565b5090565b90565b610fd580620001f86000396000f300606060405236156100ad576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100c3578063095ea7b31461015c57806318160ddd146101b357806323b872dd146101d9578063313ce5671461024f57806354fd4d501461027b57806370a082311461031457806395d89b411461035e578063a9059cbb146103f7578063cae9ca511461044e578063dd62ed3e146104e8575b34156100b557fe5b6100c15b60006000fd5b565b005b34156100cb57fe5b6100d3610551565b6040518080602001828103825283818151815260200191508051906020019080838360008314610122575b805182526020831115610122576020820191506020810190506020830392506100fe565b505050905090810190601f16801561014e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016457fe5b610199600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105ef565b604051808215151515815260200191505060405180910390f35b34156101bb57fe5b6101c36106e2565b6040518082815260200191505060405180910390f35b34156101e157fe5b610235600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106e8565b604051808215151515815260200191505060405180910390f35b341561025757fe5b61025f610969565b604051808260ff1660ff16815260200191505060405180910390f35b341561028357fe5b61028b61097c565b60405180806020018281038252838181518152602001915080519060200190808383600083146102da575b8051825260208311156102da576020820191506020810190506020830392506102b6565b505050905090810190601f1680156103065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561031c57fe5b610348600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a1a565b6040518082815260200191505060405180910390f35b341561036657fe5b61036e610a64565b60405180806020018281038252838181518152602001915080519060200190808383600083146103bd575b8051825260208311156103bd57602082019150602081019050602083039250610399565b505050905090810190601f1680156103e95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103ff57fe5b610434600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b02565b604051808215151515815260200191505060405180910390f35b341561045657fe5b6104ce600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610c70565b604051808215151515815260200191505060405180910390f35b34156104f057fe5b61053b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f21565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b60005481565b600081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156107b5575081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156107c15750600082115b156109585781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610962565b60009050610962565b5b9392505050565b600460009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a125780601f106109e757610100808354040283529160200191610a12565b820191906000526020600020905b8154815290600101906020018083116109f557829003601f168201915b505050505081565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610afa5780601f10610acf57610100808354040283529160200191610afa565b820191906000526020600020905b815481529060010190602001808311610add57829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610b535750600082115b15610c605781600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610c6a565b60009050610c6a565b5b92915050565b600082600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff1660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e01905060405180910390207c01000000000000000000000000000000000000000000000000000000009004338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828051906020019080838360008314610ec0575b805182526020831115610ec057602082019150602081019050602083039250610e9c565b505050905090810190601f168015610eec5780820380516001836020036101000a031916815260200191505b5094505050505060006040518083038160008761646e5a03f1925050501515610f155760006000fd5b600190505b9392505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b929150505600a165627a7a723058200cefa2ee536584300e6123cee2abeafcf9ab9388caf67ee95580f02e5587008d0029\n")),(0,r.kt)("p",null,"ByteSize\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"4557.5 byte => 4.45 kb")),(0,r.kt)("h6",{id:"cost-2"},"Cost"),(0,r.kt)("p",null,"Alaya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 552823"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  2764115 ",(0,r.kt)("inlineCode",{parentName:"li"},"gVON"),"\uff080.002764115 ",(0,r.kt)("inlineCode",{parentName:"li"},"ATP"),"\uff09")),(0,r.kt)("p",null,"Ethereum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GasUsed: 1282171"),(0,r.kt)("li",{parentName:"ul"},"GasPrice: 5,000,000,000 (5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),")"),(0,r.kt)("li",{parentName:"ul"},"Costs:  6410855 ",(0,r.kt)("inlineCode",{parentName:"li"},"Gwei"),"\uff080.006410855 ",(0,r.kt)("inlineCode",{parentName:"li"},"ETH"),"\uff09")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);