(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[9494],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7947:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={id:"Samurai_user_manual",title:"Samurai",sidebar_label:"Samurai"},s=void 0,l={unversionedId:"Samurai_user_manual",id:"Samurai_user_manual",isDocsHomePage:!1,title:"Samurai",description:"Samurai is an open source browser plug-in wallet tool that supports the Alaya and PlatON networks, supporting wallet creation, sending and receiving ATP and LAT, and allowing web DApps to interact with the Alaya and PlatON networks.",source:"@site/docs/Samurai_user_manual.md",sourceDirName:".",slug:"/Samurai_user_manual",permalink:"/alaya-devdocs/en/Samurai_user_manual",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Samurai_user_manual.md",version:"current",frontMatter:{id:"Samurai_user_manual",title:"Samurai",sidebar_label:"Samurai"},sidebar:"docs",previous:{title:"ATON Wallet",permalink:"/alaya-devdocs/en/ATON_user_manual"},next:{title:"Join the Community",permalink:"/alaya-devdocs/en/Join_the_Community"}},c=[{value:"Note",id:"note",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Initial Use",id:"initial-use",children:[]},{value:"Transaction Operation",id:"transaction-operation",children:[{value:"Send ATP",id:"send-atp",children:[]},{value:"Add and send Token",id:"add-and-send-token",children:[]}]},{value:"Create and manage an account",id:"create-and-manage-an-account",children:[{value:"Create Account",id:"create-account",children:[]},{value:"Import Account",id:"import-account",children:[]}]},{value:"Network Management",id:"network-management",children:[{value:"Choose networks",id:"choose-networks",children:[]},{value:"Add Custom Network",id:"add-custom-network",children:[]}]},{value:"Switch language",id:"switch-language",children:[]}],u={toc:c};function p(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Samurai is an open source browser plug-in wallet tool that supports the Alaya and PlatON networks, supporting wallet creation, sending and receiving ATP and LAT, and allowing web DApps to interact with the Alaya and PlatON networks."),(0,i.kt)("p",null,"Samurai only generates wallet keys on your device, so only you can access your wallet account and data. You therefore need to keep your wallet key (private key, mnemonic) and wallet password safe. Samurai currently only supports Chrome."),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("p",null,"Samurai is a browser plug-in wallet modified based on MetaMask's version 8.0.10, which is mainly adapted to the Alaya network and PlatON network. Due to some bugs in the official MetaMask itself. Please pay attention when using Samurai:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not click the edit button to edit transaction related information on the transaction confirmation page"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"On the transaction confirmation page, please make sure that the receiving address is correct before clicking the confirm button"),".")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download Samurai plug-in package from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AlayaNetwork/Samurai/releases/download/v8.1.0/samurai-chrome-8.1.0.zip"},"Release address")),(0,i.kt)("li",{parentName:"ul"},"Unzip Samurai plug-in package"),(0,i.kt)("li",{parentName:"ul"},"Open chrome browser,input \u201cchrome://extensions/\u201d in the address bar and Enter,enter the management page of chrome extension program.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chrome://extensions/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the switch of ",(0,i.kt)("strong",{parentName:"li"},"developer mode"),", select to ",(0,i.kt)("strong",{parentName:"li"},"load the unzipped extension program"),", select the unzipped catalogue of the 2nd step")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5318).Z})),(0,i.kt)("h2",{id:"initial-use"},"Initial Use"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click the Samurai icon on the right side of browser address bar, when you use it for the first time, there will be a prompt as shown below:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6774).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Click \u201c",(0,i.kt)("strong",{parentName:"li"},"Get Started"),"\u201d,there is two options - ",(0,i.kt)("strong",{parentName:"li"},"create wallet")," and ",(0,i.kt)("strong",{parentName:"li"},"import wallet"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3773).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import wallet: ")),(0,i.kt)("p",null,"Click \u201c",(0,i.kt)("strong",{parentName:"p"},"import wallet"),"\u201d\uff0center the guide page, click \u201c",(0,i.kt)("strong",{parentName:"p"},"I agree"),"\u201d and enter the next step. Then input the ",(0,i.kt)("strong",{parentName:"p"},"Seed phrase")," and ",(0,i.kt)("strong",{parentName:"p"},"password")," of this wallet, and click \u201c",(0,i.kt)("strong",{parentName:"p"},"import"),"\u201d->Once all steps is completed, you can enter the mainpage."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: The current Samurai mnemonic phrase generation path has problems, and the import of mnemonic phrases generated by external wallet applications is not supported. It is recommended to import it through the private key after the initial creation.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9234).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5107).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1959).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(342).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create wallet: ")),(0,i.kt)("p",null,"Click \u201c",(0,i.kt)("strong",{parentName:"p"},"create wallet"),"\u201d, enter the boot page, click \u201c",(0,i.kt)("strong",{parentName:"p"},"I agree"),"\u201d and enter the next step. Then input the ",(0,i.kt)("strong",{parentName:"p"},"password")," of new wallet, and click \u201c",(0,i.kt)("strong",{parentName:"p"},"create"),"\u201d."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5903).Z})),(0,i.kt)("p",null,'Go to the mnemonic backup page, click "CLICK  HERE TO REVEAL SECRET WORDS" to show the mnemonic words of the new account (mnemonic words need to be prevented from being seen by others, Samurai uses the password you provided to encrypt this information locally and will never send it to the server), click \u201c',(0,i.kt)("strong",{parentName:"p"},"Reminder me later"),"\u201d to go directly to the Samurai mainpage of the new account(Skip not recommended)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4873).Z})),(0,i.kt)("p",null,"Click \u201c",(0,i.kt)("strong",{parentName:"p"},"ext step"),"\u201d, re-input the mnemonic words with the right sequence, click \u201c",(0,i.kt)("strong",{parentName:"p"},"confirm"),"\u201d->Once all steps is completed, you can enter the mainpage."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(300).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1959).Z})),(0,i.kt)("h2",{id:"transaction-operation"},"Transaction Operation"),(0,i.kt)("h3",{id:"send-atp"},"Send ATP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In the Alaya main network, click "',(0,i.kt)("strong",{parentName:"li"},"send"),'" on the mainpage, and you can see the ',(0,i.kt)("strong",{parentName:"li"},"Add Recipient")," page.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(463).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter or select the address for ",(0,i.kt)("strong",{parentName:"li"},"transfer between my accounts"),", and go to the transaction form page.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1262).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The transaction form must fill in the number of transaction ATP, and the system will give you the default transaction fee. You can also make appropriate adjustments to this value. After completing the form, click \u201c",(0,i.kt)("strong",{parentName:"li"},"next"),"\u201d to enter the page to be confirmed, which will show the total number of ATP spent (including the handling fee).")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4494).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201c",(0,i.kt)("strong",{parentName:"li"},"Confirm"),"\u201d to complete the sending of ATP, and you can view the transaction status in the ",(0,i.kt)("strong",{parentName:"li"},"Activity")," on the mainpage.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4851).Z})),(0,i.kt)("h3",{id:"add-and-send-token"},"Add and send Token"),(0,i.kt)("h4",{id:"add-token"},"Add Token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the mainpage, click ",(0,i.kt)("strong",{parentName:"li"},"Assets")," -> ",(0,i.kt)("strong",{parentName:"li"},"Add Token"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9267).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pop-up the \u201cAdd Tokens\u201d page, add the existed  ",(0,i.kt)("strong",{parentName:"li"},"Token Contract Address")," of connected network, Samurai will automatically to get token\u2019s symbol and exact decimal point, click \u201c",(0,i.kt)("strong",{parentName:"li"},"Next"),"\u201d when you completed all the steps.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(394).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the confirm page of Add Tokens, there will show the balance of this token under this account, click \u201c",(0,i.kt)("strong",{parentName:"li"},"Add Tokens"),"\u201dto add successfully.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2089).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After the account is successfully added, go to the token display screen, which displays the balance of tokens, or you can click \u201c",(0,i.kt)("strong",{parentName:"li"},"send"),"\u201d to enter the token transfer page. At the same time, the asset list of the mainpage will display the token assets.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(639).Z})),(0,i.kt)("h4",{id:"token-transfer"},"Token Transfer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'You can click "',(0,i.kt)("strong",{parentName:"li"},"send"),'" in the account token display page to initiate the token transfer, or you can click  "',(0,i.kt)("strong",{parentName:"li"},"send"),'" of the corresponding token in the asset list inof the mainpage.')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(710).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"add recipient")," page, enter or select the address for ",(0,i.kt)("strong",{parentName:"li"},"transfer between my accounts")," as you would for sending ATP, and enter the transaction form page.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9029).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The transaction form must enter the number of tokens for the transaction. Click \u201c",(0,i.kt)("strong",{parentName:"li"},"Next"),"\u201d to enter the transaction confirmation page.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9319).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click \u201c",(0,i.kt)("strong",{parentName:"li"},"Confirm"),"\u201d to complete the sending of tokens, you can view the transaction status in the transaction list on the mainpage.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7321).Z})),(0,i.kt)("h2",{id:"create-and-manage-an-account"},"Create and manage an account"),(0,i.kt)("h3",{id:"create-account"},"Create Account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai homepage and click on ",(0,i.kt)("strong",{parentName:"li"},"Create Account")," in the drop down menu that appears.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(354).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to create account form page, enter ",(0,i.kt)("strong",{parentName:"li"},"account name")," (example below is wallet 2), click ",(0,i.kt)("strong",{parentName:"li"},"create")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6273).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Successful creation will bring you to the mainpage of the newly created wallet, click on the wallet avatar at the top right to see a list of all wallet accounts.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9772).Z})),(0,i.kt)("h3",{id:"import-account"},"Import Account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai page and in the drop down menu that appears click on ",(0,i.kt)("strong",{parentName:"li"},"import account"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1566).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enter import account form page, you can choose two import modes (private key/keystore json file), choose private key mode, paste private key into the form, then click ",(0,i.kt)("strong",{parentName:"li"},"import")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(3907).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose import keystore file mode, select ",(0,i.kt)("strong",{parentName:"li"},"JSON file")," type, click select file, select keystore file from local directory, then enter keystore file passphrase, finally click ",(0,i.kt)("strong",{parentName:"li"},"import")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5866).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the import is successful you will enter the main page of the newly imported wallet, click on the wallet avatar at the top right to see a list of all wallet accounts")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8).Z})),(0,i.kt)("h2",{id:"network-management"},"Network Management"),(0,i.kt)("p",null,"By default, Samurai connects to the PlatON network, or it can connect to other networks."),(0,i.kt)("h3",{id:"choose-networks"},"Choose networks"),(0,i.kt)("p",null,"Samurai have added PlatON Main Network, PlatON dev network, Alaya Network, Alaya dev Network as default, you can choose a network to connect. Click ",(0,i.kt)("strong",{parentName:"p"},"\u201cNetworks\u201d")," and choose a network from the four networks to connect.\n",(0,i.kt)("img",{src:a(7725).Z})),(0,i.kt)("h3",{id:"add-custom-network"},"Add Custom Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u201cNetworks\u201d"),"-> ",(0,i.kt)("strong",{parentName:"p"},"Custom RPC"),"\n",(0,i.kt)("img",{src:a(7988).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter the new network configuration page, and click ",(0,i.kt)("strong",{parentName:"p"},"\u201cSave\u201d")," after configuring the form.\n",(0,i.kt)("img",{src:a(4058).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Samurai will try to connect to the node, and if the node fails to connect, it will pop up a corresponding dialog prompt.\n",(0,i.kt)("img",{src:a(7966).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the connection is successful, a network list option will be added to the network list.\n",(0,i.kt)("img",{src:a(8509).Z})))),(0,i.kt)("h2",{id:"switch-language"},"Switch language"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai homepage and click on ",(0,i.kt)("strong",{parentName:"li"},"Settings")," in the drop down menu that appears.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1955).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to main settings page, then click ",(0,i.kt)("strong",{parentName:"li"},"General")," -> Go to ",(0,i.kt)("strong",{parentName:"li"},"Current Language")," drop down box to select (multiple languages supported).")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7851).Z})))}p.isMDXComponent=!0},5318:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-chrome-aaaedc2e3da0f7a3df92ded0c9bbb48d.jpg"},7988:function(e,t,a){"use strict";t.Z=a.p+"assets/images/choose-custom-network-en-c82d90aac3400b9a123c39111d381574.jpg"},7725:function(e,t,a){"use strict";t.Z=a.p+"assets/images/choose-network-en-1dcc95a7c7e91703580b46683a435cb6.jpg"},4058:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-network-config-en-d3d7550170b34590801b29cbe7efb12f.jpg"},7966:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-network-connect-failed-en-5f785712bb5c9e4d3b0c147fd1069430.jpg"},8509:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-network-connect-success-en-22c4c9d40c4a9e96e948c1745dd47682.jpg"},2089:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-add-token-confirm-en-86661ba051d77f2f986152e57952bb82.jpg"},394:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-add-token-input-en-b73adf3292595d896fcd186e97bb4e42.jpg"},9234:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-agreement-en-5d658c11d8655bce083d3b74f5259c38.jpg"},710:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-assets-list-en-4cd04742f2ecd5470a457ab5c1814efb.jpg"},5903:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-create-password-en-3a106a5f58888b2ebed56d7964b2a358.jpg"},300:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-create-seed-confirm-en-7c00b92ef72db7a2dfae21fcce6e6cff.jpg"},4873:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-create-seed-en-730c374393769abdb308c99989d84cd6.jpg"},9267:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-add-token-en-16b19b8ed06c87ccc90daef91879fa02.jpg"},354:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-create-account-en-71548b38d4f72118751f836457260d5a.jpg"},9772:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-create-account-end-en-6f68cb306a207af4f2bdc10b35f56655.jpg"},6273:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-create-account-input-en-f3c04dd2786d7ee614c6e1b6fc56f4a8.jpg"},1566:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-import-account-en-672b12dd4750e2269e644d3c30ddf4c6.jpg"},8:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-import-account-end-en-bc1e1a8bb81c401cf323cc4343f2572d.jpg"},3907:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-import-account-privatekey-input-en-254ae9e329d9a0e6825e25059650de61.jpg"},5866:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-import-accout-keystoret-en-a1f2728e84a317e32d5169cd1c431287.jpg"},1955:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-setting-en-e8b7e9949e6da66f07a3bdaedf4f38c7.jpg"},7851:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-home-setting-language-en-fa1e2b125a550ed46ce19611bc3e4f9e.jpg"},1959:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-import-end-en-6fb79f9353f79c18b83d0b8f35158ac6.jpg"},342:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-import-home-en-ea2ab39c7afadf3c15027f713b417ac4.jpg"},5107:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-import-seed-en-6696b0df12a375bf90cd701cdcf9f3a3.jpg"},3773:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-select-action-en-99a829b3c6943bfb80e198e4cd52d943.jpg"},463:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-send-address-input-en-884469208aa93a227adec7ef596dc1d4.jpg"},4494:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-send-confirm-en-14b06df2d47fd21e42babe31c4abeb8f.jpg"},1262:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-send-input-en-b780d1d407e7bebe629911db18e5bd11.jpg"},9319:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-send-token-confirm-en-6cd2ad6ef446d7f485ba7b7197554ad7.jpg"},9029:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-send-token-input-en-5fdf21b0358bdc406ed2a19f385a1978.jpg"},639:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-token-display-en-293b7ee79327f1b7443e987181eb583a.jpg"},7321:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-token-tx-detail-en-7901e6f48f217e2c2b40c9f5272bdc53.jpg"},4851:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-tx-detail-en-cde93eb9e9f87d92c537d674dc01c80a.jpg"},6774:function(e,t,a){"use strict";t.Z=a.p+"assets/images/samurai-welcome-en-78db7b9059324f12e468de39180e1f91.jpg"}}]);