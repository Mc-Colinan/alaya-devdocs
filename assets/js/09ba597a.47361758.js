(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[4038],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(h,r(r({ref:a},c),{},{components:t})):n.createElement(h,r({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2020:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=t(2122),o=t(9756),l=(t(7294),t(3905)),r={id:"Command_Line_Tools",title:"Alaya Command Line Tools",sidebar_label:"Alaya Command line tools"},i=void 0,s={unversionedId:"Command_Line_Tools",id:"Command_Line_Tools",isDocsHomePage:!1,title:"Alaya Command Line Tools",description:"Introducing the program Alaya instructions",source:"@site/docs/Alaya\u547d\u4ee4\u884c\u5de5\u5177.md",sourceDirName:".",slug:"/Command_Line_Tools",permalink:"/alaya-devdocs/Command_Line_Tools",editUrl:"https://github.com/luo-dahui/alaya-devdocs/tree/v2/website/docs/Alaya\u547d\u4ee4\u884c\u5de5\u5177.md",version:"current",frontMatter:{id:"Command_Line_Tools",title:"Alaya Command Line Tools",sidebar_label:"Alaya Command line tools"},sidebar:"docs",previous:{title:"MTool offline tutorial",permalink:"/alaya-devdocs/OffLine_MTool_Manual"},next:{title:"FAQs about Node",permalink:"/alaya-devdocs/FAQs_about_Node"}},p=[{value:"Introducing the program Alaya instructions",id:"introducing-the-program-alaya-instructions",children:[]},{value:"Common rpc commands",id:"common-rpc-commands",children:[{value:"admin",id:"admin",children:[]},{value:"platon",id:"platon",children:[]},{value:"personal",id:"personal",children:[]},{value:"net",id:"net",children:[]},{value:"debug",id:"debug",children:[]}]},{value:"alayakey tool instructiona",id:"alayakey-tool-instructiona",children:[{value:"Common commands",id:"common-commands",children:[]}]}],c={toc:p};function u(e){var a=e.components,t=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introducing-the-program-alaya-instructions"},"Introducing the program Alaya instructions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'NAME:\n   platon.exe - the platon-go command line interface\n\n   Copyright 2019 The PlatON-Go Authors\n\nUSAGE:\n   platon.exe [options] command [command options] [arguments...]\n\nVERSION:\n   0.14.0-unstable\n\nCOMMANDS:\n   account           Manage accounts\n   attach            Start an interactive JavaScript environment (connect to node)\n   bug               opens a window to report a bug on the platon repo\n   console           Start an interactive JavaScript environment\n   copydb            Create a local chain from a target chaindata folder\n   dump              Dump a specific block from storage\n   dumpconfig        Show configuration values\n   export-preimages  Export the preimage database into an RLP stream\n   import-preimages  Import the preimage database from an RLP stream\n   init              Bootstrap and initialize a new genesis block\n   js                Execute the specified JavaScript files\n   license           Display license information\n   removedb          Remove blockchain and state databases\n   version           Print version numbers\n   help, h           Shows a list of commands or help for one command\n\nPLATON OPTIONS:\n  --config value                                        TOML configuration file\n  --datadir "C:\\Users\\jungle\\AppData\\Roaming\\PlatON"  Data directory for the databases and keystore\n  --keystore                                            Directory for the keystore (default = inside the datadir)\n  --nousb                                               Disables monitoring for and managing USB hardware wallets\n  --networkid value                                     Network identifier (integer, 1=Frontier, 2=Morden (disused), 3=Ropsten, 4=Rinkeby) (default: 1)\n  --main                                                Mainnet network: pre-configured main network (default network)\n  --testnet                                             Testnet network: pre-configured test network\n  --alaya                                               alaya network: pre-configured alaya network\n  --alayatestnet                                        alaya test network: pre-configured alaya test network\n  --syncmode "full"                                     Blockchain sync mode ("fast", "full", or "light")\n  --identity value                                      Custom node name\n  --lightserv value                                     Maximum percentage of time allowed for serving LES requests (0-90) (default: 0)\n  --lightpeers value                                    Maximum number of LES client peers (default: 100)\n  --lightkdf                                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength\n\nDEVELOPER CHAIN OPTIONS:\n  --dev.period value  Block period to use in developer mode (0 = mine only if transaction pending) (default: 0)\n\nTRANSACTION POOL OPTIONS:\n  --txpool.locals value         Comma separated accounts to treat as locals (no flush, priority inclusion)\n  --txpool.nolocals             Disables price exemptions for locally submitted transactions\n  --txpool.journal value        Disk journal for local transaction to survive node restarts (default: "transactions.rlp")\n  --txpool.rejournal value      Time interval to regenerate the local transaction journal (default: 1h0m0s)\n  --txpool.pricelimit value     Minimum gas price limit to enforce for acceptance into the pool (default: 1)\n  --txpool.pricebump value      Price bump percentage to replace an already existing transaction (default: 10)\n  --txpool.accountslots value   Minimum number of executable transaction slots guaranteed per account (default: 16)\n  --txpool.globalslots value    Maximum number of executable transaction slots for all accounts (default: 16384)\n  --txpool.accountqueue value   Maximum number of non-executable transaction slots permitted per account (default: 64)\n  --txpool.globalqueue value    Maximum number of non-executable transaction slots for all accounts (default: 4096)\n  --txpool.globaltxcount value  Maximum number of transactions for package (default: 3000)\n  --txpool.lifetime value       Maximum amount of time non-executable transaction are queued (default: 3h0m0s)\n  --txpool.cacheSize value      After receiving the specified number of transactions from the remote, move the transactions in the queen to pending (default: 0)\n\nPERFORMANCE TUNING OPTIONS:\n  --cache value           Megabytes of memory allocated to internal caching (default: 1024)\n  --cache.database value  Percentage of cache memory allowance to use for database io (default: 75)\n  --cache.gc value        Percentage of cache memory allowance to use for trie pruning (default: 25)\n  --cache.triedb value    Megabytes of memory allocated to triedb internal caching (default: 512)\n\nACCOUNT OPTIONS:\n  --unlock value    Comma separated list of accounts to unlock\n  --password value  Password file to use for non-interactive password input\n\nAPI AND CONSOLE OPTIONS:\n  --rpc                  Enable the HTTP-RPC server\n  --rpcaddr value        HTTP-RPC server listening interface (default: "localhost")\n  --rpcport value        HTTP-RPC server listening port (default: 6789)\n  --rpcapi value         API\'s offered over the HTTP-RPC interface\n  --ws                   Enable the WS-RPC server\n  --wsaddr value         WS-RPC server listening interface (default: "localhost")\n  --wsport value         WS-RPC server listening port (default: 6790)\n  --wsapi value          API\'s offered over the WS-RPC interface\n  --wsorigins value      Origins from which to accept websockets requests\n  --ipcdisable           Disable the IPC-RPC server\n  --ipcpath              Filename for IPC socket/pipe within the datadir (explicit paths escape it)\n  --rpccorsdomain value  Comma separated list of domains from which to accept cross origin requests (browser enforced)\n  --rpcvhosts value      Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts \'*\' wildcard. (default: "localhost")\n  --jspath loadScript    JavaScript root path for loadScript (default: ".")\n  --exec value           Execute JavaScript statement\n  --preload value        Comma separated list of JavaScript files to preload into the console\n\nNETWORKING OPTIONS:\n  --bootnodes value          Comma separated enode URLs for P2P discovery bootstrap (set v4+v5 instead for light servers)\n  --bootnodesv4 value        Comma separated enode URLs for P2P v4 discovery bootstrap (light server, full nodes)\n  --port value               Network listening port (default: 16789)\n  --maxpeers value           Maximum number of network peers (network disabled if set to 0) (default: 50)\n  --maxconsensuspeers value  Maximum number of network consensus peers (network disabled if set to 0) (default: 75)\n  --maxpendpeers value       Maximum number of pending connection attempts (defaults used if set to 0) (default: 0)\n  --nat value                NAT port mapping mechanism (any|none|upnp|pmp|extip:<IP>) (default: "any")\n  --nodiscover               Disables the peer discovery mechanism (manual peer addition)\n  --netrestrict value        Restricts network communication to the given IP networks (CIDR masks)\n  --nodekey value            P2P node key file\n  --nodekeyhex value         P2P node key as hex (for testing)\n\nMINER OPTIONS:\n  --miner.gasprice "1000000000"  Minimum gas price for mining a transaction\n  --miner.gastarget value        Target gas floor for mined blocks (default: 4712388)\n\nGAS PRICE ORACLE OPTIONS:\n  --gpoblocks value      Number of recent blocks to check for gas prices (default: 20)\n  --gpopercentile value  Suggested gas price is the given percentile of a set of recent transaction gas prices (default: 60)\n\nLOGGING AND DEBUGGING OPTIONS:\n  --nocompaction            Disables db compaction after import\n  --verbosity value         Logging verbosity: 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)\n  --vmodule value           Per-module verbosity: comma-separated list of <pattern>=<level> (e.g. eth/*=5,p2p=4)\n  --backtrace value         Request a stack trace at a specific logging statement (e.g. "block.go:271")\n  --debug                   Prepends log messages with call-site location (file and line number)\n  --pprof                   Enable the pprof HTTP server\n  --pprofaddr value         pprof HTTP server listening interface (default: "127.0.0.1")\n  --pprofport value         pprof HTTP server listening port (default: 6060)\n  --memprofilerate value    Turn on memory profiling with the given rate (default: 524288)\n  --blockprofilerate value  Turn on block profiling with the given rate (default: 0)\n  --cpuprofile value        Write CPU profile to the given file\n  --trace value             Write execution trace to the given file\n  --wasmlog value           output wasm contract log to file\n\nMETRICS AND STATS OPTIONS:\n  --metrics                          Enable metrics collection and reporting\n  --metrics.influxdb                 Enable metrics export/push to an external InfluxDB database\n  --metrics.influxdb.endpoint value  InfluxDB API endpoint to report metrics to (default: "http://localhost:8086")\n  --metrics.influxdb.database value  InfluxDB database name to push reported metrics to (default: "platon")\n  --metrics.influxdb.username value  Username to authorize access to the database (default: "test")\n  --metrics.influxdb.password value  Password to authorize access to the database (default: "test")\n  --metrics.influxdb.host.tag host   InfluxDB host tag attached to all measurements (default: "localhost")\n\nDEPRECATED OPTIONS:\n  --targetgaslimit value   Target gas floor for mined blocks (deprecated, use --miner.gastarget) (default: 4712388)\n  --gasprice "1000000000"  Minimum gas price for mining a transaction (deprecated, use --miner.gasprice)\n\nCBFT OPTIONS:\n  --cbft.msg_queue_size value      Message queue size (default: 1024)\n  --cbft.wal.disabled              Disable the Wal server\n  --cbft.max_ping_latency value    Maximum latency of ping (default: 2000)\n  --cbft.blskey value              BLS key file\n  --cbft.blacklist_deadline value  Blacklist effective time. uint:minute (default: "60")\n\nDB OPTIONS:\n  --db.nogc               Disables database garbage collection\n  --db.gc_interval value  Block interval for garbage collection (default: 86400)\n  --db.gc_timeout value   Maximum time for database garbage collection (default: 1m0s)\n  --db.gc_mpt             Enables database garbage collection MPT\n  --db.gc_block value     Number of cache block states, default 10 (default: 10)\n\nVM OPTIONS:\n  --vm.wasm_type value         The actual implementation type of the wasm instance (default: "wagon")\n  --vm.timeout_duration value  The VM execution timeout duration (uint: ms) (default: 0)\n\nMISC OPTIONS:\n  --help, -h  show help\n\n\nCOPYRIGHT:\n   Copyright 2019 The PlatON-Go Authors\n')),(0,l.kt)("h2",{id:"common-rpc-commands"},"Common rpc commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Description",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The rpc port is changed according to the actual startup command and the default is 6789")))),(0,l.kt)("h3",{id:"admin"},"admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the data directory of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.datadir\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the ChainID of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.chainId\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the id of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.id\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the blsPubKey of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.blsPubKey\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the p2p port number of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"platon attach http://localhost:6789 -exec admin.nodeInfo.ports.listener\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the connection information of peers of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.peers\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the genesis block hash of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.genesis\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the maximum number of blocks ($amount) of a single node in each consensus round of cbft consensus"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.amount\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the time window of block generation by a single node in each consensus round of cbft consensus ($period, unit: ms)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.cbft.period\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Blocking time interval = period / 1000 / amount")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Get the binary version number and signature information"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'admin.getProgramVersion()'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Obtain zero- knowledge proof information (use the node's private key to prove whether the certificate issued by the interface is correct and used for node pledge)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'admin.getSchnorrNIZKProve()'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the type of virtual machine used at the bottom (EVM / WASM)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec admin.nodeInfo.protocols.platon.config.interpreter\n")))),(0,l.kt)("h3",{id:"platon"},"platon"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View all wallet addresses under the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.accounts\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the block height of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.blockNumber\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the balance of the specified account ($account is the account address)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBalance(\"$account\")'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query the number of transactions in the specified block ($blockNumber is the block height or block hash of the specified block)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBlockTransactionCount($blockNumber)'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query transaction information ($txHash is transaction hash)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransaction(\"$txHash\")'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query transaction receipt ($txHash is transaction hash)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransactionReceipt(\"$txHash\")'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query the number of transactions in the specified account (parameter $address is the account address, used to specify the nonce of the transaction when sending the transaction)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getTransactionCount(\"$address\")'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query the pending transaction of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.pendingTransactions\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the default gasPrice of the current node (unit: von)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.gasPrice\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Estimate the gas of the transaction (parameter $transaction is the transaction details, unit: von)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.estimateGas($transaction)'\n")),(0,l.kt)("p",{parentName:"li"},"For example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'platon attach http://localhost:6789 -exec \'platon.estimateGas({from:"lax1fyeszufxwxk62p46djncj86rd553skpptsj8v6",to:"lax1zhllhqu72wz66cdwly8983xhla2sann75j2ec2",value:"0x10000000000000",data:"0x11",gas:"0x88888",gasprice:"0x333333",nonce:"11"})\'\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the p2p protocol number of the underlying version of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'web3.toDecimal(platon.protocolVersion)'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"See if the current node is in sync"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec platon.syncing\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Get details of specified block"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'platon.getBlock($blockNumber)'\n")))),(0,l.kt)("h3",{id:"personal"},"personal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generate wallet (parameter is wallet password)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.newAccount(\"88888888\")'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import private key to generate wallet"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.importRawKey($privateKey, $password)'\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"privateKey: private key, remove the leading 0x"),(0,l.kt)("li",{parentName:"ul"},"password: wallet password")),(0,l.kt)("p",{parentName:"blockquote"},"Back to:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Wallet address"))),(0,l.kt)("p",{parentName:"li"},"For example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'platon attach http://localhost:6789 -exec \'personal.importRawKey ("842d943dbb50a8d3fe63af2f82fda3d8f0ca817fe8d47e61698142bac7c24212", "88888888")\'\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View account address"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.listAccounts'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View local wallet information, including wallet address, wallet file path and wallet status"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.listWallets'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lock account"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.lockAccount(platon.accounts[0])'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unlock account"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'personal.unlockAccount(platon.accounts[0], \"88888888\", 24*3600)'\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Account address"),(0,l.kt)("li",{parentName:"ul"},"Wallet password"),(0,l.kt)("li",{parentName:"ul"},"Unlock time in seconds")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Send unsigned transactions"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'platon attach http://localhost:6789 -exec \'personal.sendTransaction({from: platon.accounts[2], to: platon.accounts[0], value:web3.toVon("0.1","lat"), nonce: platon.getTransactionCount(platon.accounts[2])}, "88888888") \'\n')))),(0,l.kt)("h3",{id:"net"},"net"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the networkid of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.version\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check whether the p2p port of the current node is in the listening state"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.listening\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"View the number of peer connections of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec net.peerCount\n")))),(0,l.kt)("h3",{id:"debug"},"debug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query the economic model configuration parameters of the current node"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach http://localhost:6789 -exec 'debug.economicConfig()'\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Set log level"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"platon attach http://localhost:6789 -exec 'debug.verbosity(4)'\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Log level description:"),(0,l.kt)("p",{parentName:"blockquote"},"0: CRIT"),(0,l.kt)("p",{parentName:"blockquote"},"1: ERROR"),(0,l.kt)("p",{parentName:"blockquote"},"2: WARN"),(0,l.kt)("p",{parentName:"blockquote"},"3: INFO"),(0,l.kt)("p",{parentName:"blockquote"},"4: DEBUG"),(0,l.kt)("p",{parentName:"blockquote"},"5: TRACE")))),(0,l.kt)("h2",{id:"alayakey-tool-instructiona"},"alayakey tool instructiona"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"alayakey [global options] command [command options] [arguments...]\n\nVERSION:\n   0.14.0-unstable-16aced7d\n\nCOMMANDS:\n   generate generate new keyfile\n   inspect inspect a keyfile\n   changepassphrase change the passphrase on a keyfile\n   signmessage sign a message\n   verifymessage verify the signature of a signed message\n   genkeypair generate new private key pair\n   genblskeypair generate new bls private key pair\n   updateaddress update hex/bech32 address to mainnet/testnet bech32 address\n   help Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --help, -h show help\n   --version, -v print the version\n")),(0,l.kt)("h3",{id:"common-commands"},"Common commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate wallet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey generate - generate new keyfile\n\nUSAGE:\n   alayakey generate [command options] [<keyfile>]\n\nDESCRIPTION:\n\nGenerate a new keyfile.\n\nIf you want to encrypt an existing private key, it can be specified by setting\n--privatekey with the location of the file containing the private key.\n\n\nOPTIONS:\n   --passwordfile value the file that contains the passphrase for the keyfile\n   --json output JSON instead of human-readable format\n   --privatekey value file containing a raw private key to encrypt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A new wallet can be generated by the following command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey generate\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can also use the following command to encrypt a privatekey in plaintext to generate a wallet file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey generate --privatekey ./prikey --json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate a public and private key pair")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME:\n   alayakey genkeypair - generate new private key pair\n\nUSAGE:\n   alayakey genkeypair [command options] [ ]\n\nDESCRIPTION:\n   \nGenerate a new private key pair.\n\n\nOPTIONS:\n   --json  output JSON instead of human-readable format\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate node BLS public and private key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME:\n   alayakey genblskeypair-generate new bls private key pair\n\nUSAGE:\n   alayakey genblskeypair [command options] []\n\nDESCRIPTION:\n\nGenerate a new bls private key pair.\n\n\nOPTIONS:\n   --json output JSON instead of human-readable format\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Convert any EIP55/bech32 address to alaya address")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"NAME:\n   alayakey updateaddress-update hex/bech32 address to mainnet/testnet bech32 address\n\nUSAGE:\n   alayakey updateaddress [command options] [<address> <address>...]\n\nDESCRIPTION:\n\nupdate hex/bech32 address to mainnet/testnet bech32 address.\n\n\nOPTIONS:\n   --json output JSON instead of human-readable format\n   --hexAddressFile value file bech32/hex accounts want to update to mainnet/testnet bech32 address,file like [hex,hex...]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The following command converts EIP55 address to alaya address")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"alayakey updateaddress 0x1000000000000000000000000000000000000001\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This command supports converting any bech32 address to alaya address, such as:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"alayakey updateaddress lax19phpafljm0mgu2fj8mrwyarftpafynxvj0d7lh\noriginAddress: lax19phpafljm0mgu2fj8mrwyarftpafynxvj0d7lh\nmain net Address: atp19phpafljm0mgu2fj8mrwyarftpafynxvyuffwh\nother net Address: atx19phpafljm0mgu2fj8mrwyarftpafynxvw64raa\n")))}u.isMDXComponent=!0}}]);