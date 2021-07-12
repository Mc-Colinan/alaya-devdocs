(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1643],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5319:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l={id:"Solidity_Migration_tutorial",title:"Migration tutorial",sidebar_label:"Migration tutorial"},i=void 0,s={unversionedId:"Solidity_Migration_tutorial",id:"Solidity_Migration_tutorial",isDocsHomePage:!1,title:"Migration tutorial",description:"Introduction",source:"@site/docs/Solidity\u8fc1\u79fb\u6559\u7a0b.md",sourceDirName:".",slug:"/Solidity_Migration_tutorial",permalink:"/alaya-devdocs/en/Solidity_Migration_tutorial",editUrl:"https://github.com/zfamz/alaya-devdocs/tree/v2/website/docs/Solidity\u8fc1\u79fb\u6559\u7a0b.md",version:"current",frontMatter:{id:"Solidity_Migration_tutorial",title:"Migration tutorial",sidebar_label:"Migration tutorial"},sidebar:"docs",previous:{title:"Getting started",permalink:"/alaya-devdocs/en/Solidity_Getting_started"},next:{title:"Development costs",permalink:"/alaya-devdocs/en/Solidity_Development_costs"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Operation Procedure",id:"operation-procedure",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Alaya supports four versions of solidity: 0.4.26, 0.5.17, 0.6.12, and 0.7.1. If you migrate contracts with versions above 0.7.1, you need to reduce the version number and remove the syntax related to the higher version."),(0,o.kt)("p",null,"If you want to migrate Ethereum's smart contract to Alaya, you can do this with the ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya-truffle")," development tool. First, to make sure have ",(0,o.kt)("inlineCode",{parentName:"p"},"alaya-truffle")," installed correctly, just follow these steps."),(0,o.kt)("p",null,"The migration of Ethereum's ERC200513Token contract to Alaya is demonstrated below\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ERC200513Token.sol")," contract are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity 0.5.17;\n\ncontract ERC200513Token {\n    string public name; \n    string public symbol; \n    uint8 public decimals = 18;  //18 decimals is the strongly suggested default, avoid changing it\n    uint256 public totalSupply = 10000000000000000000 ether; \n\n    // This creates an array with all balances\n    mapping(address => uint256) public balanceOf;\n    mapping(address => mapping(address => uint256)) public allowance;\n\n    //This generates a public event on the blockchain that will notify clients\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    // This notifies clients about the amount burnt\n    event Burn(address indexed from, uint256 value);\n\n    /**\n     * Constructor function\n     */\n    constructor(uint256 initialSupply, string memory tokenName, string memory tokenSymbol) public {\n        totalSupply = initialSupply * 10 ** uint256(decimals); // Update total supply with the decimal amount\n        balanceOf[msg.sender] = totalSupply; // Give the creator all initial tokens\n        name = tokenName; // Set the name for display purposes    \n        symbol = tokenSymbol; \n    }\n    /**\n     * get the name for display purposes\n     */\n    function getName() view public returns (string memory){\n        return name;\n    }\n\n    /**\n     * get token symbol\n     */\n    function getSymbol() view public returns (string memory){\n        return symbol;\n    }\n \n    function getDecimals() public view returns (uint8){\n        return decimals;\n    }\n\n    function getTotalSupply() public view returns (uint256 theTotalSupply) {\n        theTotalSupply = totalSupply;\n        return theTotalSupply;\n    }\n\n    function getBalanceOf(address _owner) public view returns (uint256 balance) {\n        //get _owner's balance\n        return balanceOf[_owner];\n    }\n    /**\n     * Transfer tokens from other address\n     */\n    function _transfer(address _from, address _to, uint _value) internal returns (bool success){\n        // Make sure the destination address is not 0x0, Because address 0x0 represents destruction\n        require(_to != address(0x0));\n        // Check the sender balance\n        require(balanceOf[_from] >= _value);\n        // Make sure _value>0\n        require(balanceOf[_to] + _value > balanceOf[_to]);\n\n        uint previousBalances = balanceOf[_from] + balanceOf[_to];\n        // Subtract from the sender\n        balanceOf[_from] -= _value;\n        // Add the same to the recipient\n        balanceOf[_to] += _value;\n        emit Transfer(_from, _to, _value);\n\n        return (balanceOf[_from] + balanceOf[_to] == previousBalances);\n    }\n\n    /**\n     *  Transfer tokens from other address\n     *\n     *  Send `_value` tokens to `_to` on behalf of `_from`\n     *\n     * @param _to The address of the recipient\n     * @param _value the amount to send\n     */\n    function transfer(address _to, uint256 _value) public returns (bool success){\n        return _transfer(msg.sender, _to, _value);\n    }\n\n    /**\n     * Transfer tokens from other address\n     *\n     * @param _from The address of the sender\n     * @param _to The address of the recipient\n     * @param _value the amount to send\n     */\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {\n        require(_value <= allowance[_from][msg.sender]);\n        // Check allowance\n        allowance[_from][msg.sender] -= _value;\n        _transfer(_from, _to, _value);\n        return true;\n    }\n\n    /**\n     * Set allowance for other address\n     *\n     * Allows `_spender` to spend no more than `_value` tokens on your behalf\n     * \n     * @param _spender The address authorized to spend\n     * @param _value the max amount they can spend\n     */\n    function approve(address _spender, uint256 _value) public\n    returns (bool success) {\n        allowance[msg.sender][_spender] = _value;\n        return true;\n    }\n\n\n    /**\n     *\n     * Gets the remaining number of tokens that _spender can issue from account _owner\n     */\n    function getAllowance(address _owner, address _spender) public view returns (uint remaining){\n        return allowance[_owner][_spender];\n    }\n\n    /**\n     * Destroy tokens\n     *\n     * Remove `_value` tokens from the system irreversibly\n     *\n     */\n    function burn(uint256 _value) public returns (bool success) {\n        require(balanceOf[msg.sender] >= _value);\n        // Check if the sender has enough\n        balanceOf[msg.sender] -= _value;\n        // Subtract from the sender\n        totalSupply -= _value;\n        // Updates totalSupply\n        emit Burn(msg.sender, _value);\n        return true;\n    }\n\n    /**\n     * Destroy tokens from other account\n     *\n     * Remove `_value` tokens from the system irreversibly on behalf of `_from`.\n     *\n     * @param _from the address of the sender\n     * @param _value the amount of money to burn\n     */\n    function burnFrom(address _from, uint256 _value) public returns (bool success) {\n        require(balanceOf[_from] >= _value);\n        // Check if the targeted balance is enough\n        require(_value <= allowance[_from][msg.sender]);\n        // Check allowance\n        balanceOf[_from] -= _value;\n        // Subtract from the targeted balance\n        allowance[_from][msg.sender] -= _value;\n        // Subtract from the sender's allowance\n        totalSupply -= _value;\n        // Update totalSupply\n        emit Burn(_from, _value);\n        return true;\n    }\n}\n")),(0,o.kt)("h3",{id:"operation-procedure"},"Operation Procedure"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1.")," Create new directory for example project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir example && cd example\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After the command is executed,project directory structure is as follows:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2."),"  Init project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alaya-truffle init\n")),(0,o.kt)("p",null,"After the command is executed,project directory structure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"contracts/"),": solidity contract directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"migrations/"),": depoly file directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"test/"),": test script directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),": alaya-truffle config"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3.")," Move ERC200513Token contract compiled in to example/contracts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ERC200513Token.sol"),(0,o.kt)("li",{parentName:"ul"},"Alaya's smart contract unit is ATP,VON. To migrate the Ethereum smart contract to Alaya,please change the Ethereum denomination to Alaya denomination.also note the ether /ATP market rate\uff08for this contract, we assume the market exchange rate1:1,uint256 public totalSupply = 10000000000000000000 ether; change to uint256 public totalSupply = 10000000000000000000 atp; \uff09"),(0,o.kt)("li",{parentName:"ul"},"The compiled version modifies the version supported by Alaya."),(0,o.kt)("li",{parentName:"ul"},"modify address: ",(0,o.kt)("inlineCode",{parentName:"li"},"require(_to != address(0x0)")," modify to ",(0,o.kt)("inlineCode",{parentName:"li"},'require(_to != address("atx1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq89qwkc") || _to != address("atp1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqdruy9j"))')),(0,o.kt)("li",{parentName:"ul"},"Alaya's smart contract block.timestamp is current block timestamp as milliseconds since unix epoch, and Ethereum smart contract is seconds.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4.")," Modify the compilation version number and chain-dependent configuration in truffle-config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'module.exports = {\n  networks: {\n     development: {\n      host: "10.1.1.6",     // chain address\n      port: 8806,            // chain rpc port\n      network_id: "*",       // Any network (default: none)\n      from: "atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp", // the wallet address of deployment contract \n      gas: 999999,\n      gasPrice: 50000000004,         \n     },\n  },\n\n  compilers: {\n    solc: {\n       version: "0.5.17",    // the version number used in compiling the contract is the same as the contract definition\n       docker: false,        // Use "0.5.1" you\'ve installed locally with docker\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step5.")," Compile contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alaya-truffle compile\n")),(0,o.kt)("p",null,"The following is the output of the successful compilation\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Compiling your contracts...\nCompiling ./contracts/ERC200513Token.sol\nCompiling ./contracts/Migrations.sol\n  compilation warnings encountered:\n\nWarning: This is a pre-release compiler version, please do not use it in production.\nArtifacts written to /home/guest/example/build/contracts\nCompiled successfully using: \n  solc: 0.5.17+commit.d117da36.Emscripten.clang\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step6.")," Create deploy script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd migrations && touch 2_initial_ERC200513Token.js\n")),(0,o.kt)("p",null,"Deploy script 2_initial_ERC200513Token.js content is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const ERC200513Token = artifacts.require(\"ERC200513Token\"); //contract class name\nmodule.exports = function(deployer) {\n  deployer.deploy(ERC200513Token,100,'PLA','PLAT'); //ERC200513Token abstract and constructor params\n};  \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step7.")," Deploy contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alaya-truffle migrate\n")),(0,o.kt)("p",null,"After deploying successfully, you will see log info as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Compiling your contracts...\nEverything is up to date, there is nothing to compile.\n2_initial_ERC200513Token.js\n   Deploying 'ERC200513Token'\n     transaction hash:    0xa1770aecf4cffb0e75a172e06e75a9e9cb2d36bf89291b57d504e8c054985e99\n     Blocks: 0            Seconds: 0\n     contract address:    atp1kekwl4v2q0qc0g9cr6c8adsx0p2n7c90ygp5tv//new contract address\n     block number:        265657\n     block timestamp:     1581742216965\n     account:             atp1jtfqqqr6436ppj6ccnrh8xjg7qals3ctnnmurp\n     balance:             90000000.826385379994114416\n     gas used:            638876\n     gas price:           50.000000004 gVON\n     value sent:          0 ATP\n     total cost:          0.031943800002555504 ATP\n     Saving migration to chain.\n     Saving artifacts\n     Total cost:     0.031943800002555504 ATP\nSummary\n Total deployments:   2\n Final cost:          0.037844150003027532 ATP\n")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);