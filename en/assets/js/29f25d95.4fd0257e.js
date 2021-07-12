(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1800],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4062:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"Become_Verification_Node",title:"Staking",sidebar_label:"Staking"},l=void 0,s={unversionedId:"Become_Verification_Node",id:"Become_Verification_Node",isDocsHomePage:!1,title:"Staking",description:"Overview",source:"@site/docs/\u6210\u4e3a\u9a8c\u8bc1\u8282\u70b9.md",sourceDirName:".",slug:"/Become_Verification_Node",permalink:"/alaya-devdocs/en/Become_Verification_Node",editUrl:"https://github.com/zfamz/alaya-devdocs/tree/v2/website/docs/\u6210\u4e3a\u9a8c\u8bc1\u8282\u70b9.md",version:"current",frontMatter:{id:"Become_Verification_Node",title:"Staking",sidebar_label:"Staking"},sidebar:"docs",previous:{title:"Join Alaya",permalink:"/alaya-devdocs/en/Join_Alaya_NetWork"},next:{title:"Data snapshot",permalink:"/alaya-devdocs/en/Data_snapshot"}},c=[{value:"Overview",id:"overview",children:[]},{value:"<em>Preparation</em>",id:"preparation",children:[]},{value:"Configure Nginx",id:"configure-nginx",children:[{value:"Switch to normal user",id:"switch-to-normal-user",children:[]},{value:"Download nginx_conf.sh",id:"download-nginx_confsh",children:[]},{value:"Execute the script",id:"execute-the-script",children:[]}]},{value:"Install MTool",id:"install-mtool",children:[]},{value:"Configure MTool",id:"configure-mtool",children:[{value:"Generate wallet",id:"generate-wallet",children:[]},{value:"Configure verification node information",id:"configure-verification-node-information",children:[]}]},{value:"Initiate a staking operation",id:"initiate-a-staking-operation",children:[]}],d={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Alaya is a blockchain project that implements democratic governance. Verification nodes are jointly selected by all ATP holders to maintain and develop the Alaya network. The 101 nodes with the most votes will become candidate nodes, from which 25 verification nodes will be randomly selected using VRF to participate in the management of the entire Alaya network."),(0,r.kt)("p",null,"This section describes how to operate as a validator node."),(0,r.kt)("h2",{id:"preparation"},(0,r.kt)("em",{parentName:"h2"},"Preparation")),(0,r.kt)("p",null,"Before becoming a validator node, please ensure that the server meets the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Alaya node has been installed and the node key have been created according to the instructions of ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Install_Node"},"Installing a Node")),(0,r.kt)("li",{parentName:"ul"},"Start the node and ",(0,r.kt)("a",{parentName:"li",href:"/alaya-devdocs/en/Join_Alaya_NetWork"},"join the Alaya network"))),(0,r.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,r.kt)("p",null,"For security reasons, it is not recommended to open the rpc port of the node directly (the node server defaults to Ubuntu 18.04)."),(0,r.kt)("p",null,"You can consider using Nginx for reverse proxy, and strengthen the security of Nginx ports through user authentication and HTTPS. If the user changes the node data directory when installing Alaya, the nginx_conf.sh script also needs to be modified to the same node data directory."),(0,r.kt)("h3",{id:"switch-to-normal-user"},"Switch to normal user"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View current user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"whoami\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If it is displayed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user, you need to switch to a normal user."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Switch to normal user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"su user\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("font",{color:"red"},"`user`: Indicates a normal user name, please modify it according to the actual user name.")))),(0,r.kt)("h3",{id:"download-nginx_confsh"},"Download nginx_conf.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://download.alaya.network/alaya/scripts/nginx_conf.sh\n")),(0,r.kt)("h3",{id:"execute-the-script"},"Execute the script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x nginx_conf.sh && ./nginx_conf.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"When the prompt shows ",(0,r.kt)("inlineCode",{parentName:"li"},"[sudo] password for"),", enter the current account password."),(0,r.kt)("li",{parentName:"ul"},"When the prompt shows ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter your name"),": enter your username\uff0cWhen prompted ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter your password: ")," enter your password. Be sure to keep the username and password in mind(It is recommended not to include spaces in the password), and you will need to fill in the MTool configuration to verify the node information."),(0,r.kt)("li",{parentName:"ul"},"The prompt ",(0,r.kt)("inlineCode",{parentName:"li"},"nginx conf succeed")," means that nginx is configured successfully. If the configuration is not successful, please contact our customer service to report specific issues."))),(0,r.kt)("h2",{id:"install-mtool"},"Install MTool"),(0,r.kt)("p",null,"Proceed as follows:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step1. Download MTool toolkit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://download.alaya.network/alaya/mtool/linux/0.15.0/mtool-client.zip\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step2. Extract the MTool toolkit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(if ! command -v unzip;then sudo apt install unzip; fi;) && unzip mtool-client.zip && cd mtool-client\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step3. Download script")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The script is downloaded to the ",(0,r.kt)("font",{color:"red"},"mtool-client")," directory, otherwise the script cannot find the path of the new version of mtool.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://download.alaya.network/alaya/scripts/mtool_install.sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step4. Execute command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x mtool_install.sh && ./mtool_install.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"When the message ",(0,r.kt)("font",{color:"red"},"Install mtool succeed.")," is displayed, MTool is successfully installed. If it is not successfully installed, please contact our official customer service to provide feedback on specific issues."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step5. Restart the session window")),(0,r.kt)("p",null,"After installation is complete, you need to ",(0,r.kt)("font",{color:"red"},"restart the session window")," for the newly added environment variables to take effect."),(0,r.kt)("h2",{id:"configure-mtool"},"Configure MTool"),(0,r.kt)("h3",{id:"generate-wallet"},"Generate wallet"),(0,r.kt)("p",null,"To participate in the verification node to produce blocks, two wallets must be created. If you already have a wallet, you can skip this step by copying the wallet file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$MTOOLDIR/keystore")," directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Staking wallet: The staking wallet is used to stake tokens. To become a candidate node, you must stake successfully. Run the following command to create a staking wallet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mtool-client account new staking\n")),(0,r.kt)("p",null,"Enter the password once and confirm the password again to create a wallet file. After the creation is successful, a staking wallet file ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.json")," will be generated in the directory",(0,r.kt)("inlineCode",{parentName:"p"}," $MTOOLDIR/keystore"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reward wallet: It is used to collect block rewards and staking rewards. Staking rewards are uniformly distributed to verification nodes, which are distributed by the verification nodes themselves. Run the following command to create a reward wallet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mtool-client account new reward\n")),(0,r.kt)("p",null,"Enter the password once and confirm the password again to create the wallet file. After the creation is successful, the staking wallet file ",(0,r.kt)("inlineCode",{parentName:"p"},"reward.json")," will be generated in the directory",(0,r.kt)("inlineCode",{parentName:"p"}," $MTOOLDIR/keystore"),"."),(0,r.kt)("h3",{id:"configure-verification-node-information"},"Configure verification node information"),(0,r.kt)("h4",{id:"download-the-script"},"Download the script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $MTOOLDIR && wget https://download.alaya.network/alaya/scripts/validator_conf.sh\n")),(0,r.kt)("h4",{id:"run-the-script-configuration"},"Run the script configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x validator_conf.sh && ./validator_conf.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},'When the prompt shows "Please enter the platon node IP address:", please enter the Alaya node server ip address.'),(0,r.kt)("li",{parentName:"ul"},'When the prompt shows "Enter your name:", please enter the username when configuring Alaya node.'),(0,r.kt)("li",{parentName:"ul"},'When the prompt shows "Enter your password:", please enter the password when configuring Alaya node.'),(0,r.kt)("li",{parentName:"ul"},'When the prompt shows "validator conf success", and when the validator_config.json content printed at the end is normal, it means that the script is executed successfully. If the script is not executed successfully, please contact our official customer service to feedback specific questions.'))),(0,r.kt)("h4",{id:"validator-node-information-configuration-file-description"},"Validator node information configuration file description"),(0,r.kt)("p",null,"After the configuration of the validator node information is completed, the validator node information file validator_config.json will be generated in the validator subdirectory of the MTool installation directory. The file content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodePublicKey": "0abaf3219f454f3d07b6cbcf3c10b6b4ccf605202868e2043b6f5db12b745df0604ef01ef4cb523adc6d9e14b83a76dd09f862e3fe77205d8ac83df707969b47",\n  "blsPubKey": "82d740cbc0314ec558c5426f88fdad6f07a07f9846c6be4e40cd628b74b9f641ddad01e4c281a2c3693f8ff2a73a410297aff379ee0575127d51de99b97acc9a1b7bc8ca132ef6f0379a3ec9d76a603d623176e49e1c53e87fead36317895099",\n  "nodeAddress": "http://192.168.120.146",\n  "nodePort": "16789",\n  "nodeRpcPort": "6789",\n  "certificate": "/path/to/ssl_ca"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Parameter description:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"nodePublicKey: Node ID, which can be viewed in the nodeid file under the node data directory data"),(0,r.kt)("li",{parentName:"ul"},"blsPubKey: BLS public key, which can be viewed in the blspub file under the node data directory data."),(0,r.kt)("li",{parentName:"ul"},"nodeAddress:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you use Nginx, you need to use ",(0,r.kt)("strong",{parentName:"li"},"https")," protocol whose format is: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://test:test@domain3"),"."),(0,r.kt)("li",{parentName:"ul"},"If you do not use Nginx, you need to use the ",(0,r.kt)("strong",{parentName:"li"},"http")," protocol. If MTool and the node are on the same machine or in the same local area network, you can use the intranet IP, otherwise use the public IP whose format is: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://18.238.183.12"),"."))),(0,r.kt)("li",{parentName:"ul"},"nodePort: Node P2P port, default is 16789."),(0,r.kt)("li",{parentName:"ul"},"nodeRpcPort:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If Nginx is used, the default port is 443."),(0,r.kt)("li",{parentName:"ul"},"If Nginx is not used, the default port is 6789."))),(0,r.kt)("li",{parentName:"ul"},"certificate: ca certificate address, which can be deleted if Nginx reverse proxy is not used."))),(0,r.kt)("h4",{id:"custom-alayascan-avatar"},"Custom AlayaScan avatar"),(0,r.kt)("p",null,"If users do not need to display their specified avatar on AlayaScan, they can skip this step. Otherwise, the following operations are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Register a keybase account")),(0,r.kt)("p",{parentName:"li"},"Users first need to register on the official website of ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/"},"keybase.io")," . If they have already registered, they can log on the official website of keybase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Upload specified avatar")),(0,r.kt)("p",{parentName:"li"},"Click the user avatar to upload the avatar.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Generate PGP key")),(0,r.kt)("p",{parentName:"li"},"If the user has a ",(0,r.kt)("inlineCode",{parentName:"p"},"PGP key"),", after a successful login, a series of 16-bit public keys will be displayed next to the user's avatar, such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"EB621920A48D0699"),"; if the user does not already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"PGP key"),", click ",(0,r.kt)("inlineCode",{parentName:"p"},"add a PGP key")," next to the user's avatar to generate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Specify the externalId value")),(0,r.kt)("p",{parentName:"li"},"When issuing the staking operation, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--external_id")," parameter to be the PGP key generated in the previous step."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: After the user completes the staking operation, the avatar customized by the user can be displayed on AlayaScan.")),(0,r.kt)("h2",{id:"initiate-a-staking-operation"},"Initiate a staking operation"),(0,r.kt)("p",null,"If the consensus node deployment is complete and is catching up the blocknumber of ",(0,r.kt)("a",{parentName:"p",href:"https://scan.alaya.network/"},"AlayaScan"),", you can use MTool for staking operations. Please ensure that the balance of the staking account is sufficient before staking. The minimum threshold for staking is ten thousand ATP."),(0,r.kt)("p",null,"Excuting command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mtool-client staking --config $MTOOLDIR/validator/validator_config.json --keystore $MTOOLDIR/keystore/staking.json --amount 10000 --benefit_address xxx196278ns22j23awdfj9f2d4vz0pedld8a2fzwwj --delegated_reward_rate 5000 --node_name myNode --website www.mywebsite.com --details myNodeDescription --external_id 121412312\n")),(0,r.kt)("p",null,"Enter the password of the staking wallet and press Enter. If the following information is displayed, the staking is successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"operation finished\ntransaction hash:\n0x89b964d27d0caf1d8bf268f721eb123c4af57aed36187bea90b262f4769eeb9b\nSUCCESS\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Parameter description:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"config\uff1anode configuration file"),(0,r.kt)("li",{parentName:"ul"},"keystore: staking wallet file"),(0,r.kt)("li",{parentName:"ul"},"amount: staking amount, not less than 10000ATP-staking threshold, no more than 8 decimal places"),(0,r.kt)("li",{parentName:"ul"},"restrictedamount: not less than 10000ATP-staking threshold, no more than 8 decimal points (staking using locked balance)"),(0,r.kt)("li",{parentName:"ul"},"autoamount: Not less than 10000ATP-Priority to use the lock-up balance staking, if the lock-up balance is not enough for the staking deposit, then use free amount staking"),(0,r.kt)("li",{parentName:"ul"},"benefit_address: benefit account to receive block-packing reward and staking reward"),(0,r.kt)("li",{parentName:"ul"},"delegated_reward_rate\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,r.kt)("li",{parentName:"ul"},"node",(0,r.kt)("em",{parentName:"li"},"name\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,r.kt)("li",{parentName:"ul"},"website\uff1anode website, 30 bytes"),(0,r.kt)("li",{parentName:"ul"},"details\uff1anode description, 280 bytes"),(0,r.kt)("li",{parentName:"ul"},"external_id\uff1anode Icon ID of keybase.io, or identity authentication ID"))))}p.isMDXComponent=!0}}]);