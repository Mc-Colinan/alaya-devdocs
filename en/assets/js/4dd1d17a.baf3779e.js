(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[9913],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r={id:"Verifiable_Computation",title:"Verifiable Computation",sidebar_label:"Verifiable Computation"},l=void 0,s={unversionedId:"Verifiable_Computation",id:"Verifiable_Computation",isDocsHomePage:!1,title:"Verifiable Computation",description:"Scalability is the key bottleneck for current blockchain technology to hinder it from being adopted by large-scale applications. In view of this, more and more blockchain researchers are working on scalability solutions. One of the main factors resulting in its poor scalability is the limited processing ability for a single node. Besides, every newly generated transaction will be executed repeatedly by every single node on blockchain to validate its legitimacy, which severely impedes the efficiency of blockchain.",source:"@site/docs/\u53ef\u9a8c\u8bc1\u8ba1\u7b97.md",sourceDirName:".",slug:"/Verifiable_Computation",permalink:"/alaya-devdocs/en/Verifiable_Computation",editUrl:"https://github.com/zfamz/alaya-devdocs/tree/v2/website/docs/\u53ef\u9a8c\u8bc1\u8ba1\u7b97.md",version:"current",frontMatter:{id:"Verifiable_Computation",title:"Verifiable Computation",sidebar_label:"Verifiable Computation"}},c=[{value:"Introduction to zkSNARK",id:"introduction-to-zksnark",children:[{value:"How it works",id:"how-it-works",children:[]}]},{value:"Verifiable contract",id:"verifiable-contract",children:[{value:"Compiling verifiable contract",id:"compiling-verifiable-contract",children:[]},{value:"How it works",id:"how-it-works-1",children:[]},{value:"The incentive mechanism of verifiable contract",id:"the-incentive-mechanism-of-verifiable-contract",children:[]}]},{value:"Analysis to the VC solution",id:"analysis-to-the-vc-solution",children:[{value:"Performance analysis",id:"performance-analysis",children:[]},{value:"Comparison of different VC technologies",id:"comparison-of-different-vc-technologies",children:[]},{value:"Future plans",id:"future-plans",children:[]}]}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scalability is the key bottleneck for current blockchain technology to hinder it from being adopted by large-scale applications. In view of this, more and more blockchain researchers are working on scalability solutions. One of the main factors resulting in its poor scalability is the limited processing ability for a single node. Besides, every newly generated transaction will be executed repeatedly by every single node on blockchain to validate its legitimacy, which severely impedes the efficiency of blockchain."),(0,o.kt)("p",null,"Alaya builds a scalability solution called verifiable smart contract which is implemented by verifiable computing (VC) cryptography algorithm (currently based on zkSNARK). The whole idea is outsourcing complex computing contracts to third parties that possess more computing power than those who issue the computing tasks. After finishing executing the computing task, the output result and the corresponding correctness proof will be stored on-chain. And then every node that would like to utilize the output result can simply verify the correctness proof before getting the output result, which means there is no need to execute the computing task directly that takes more cost than verifying the proof. By means of this, more computing contract tasks are able to be processed by a single node without loss of security."),(0,o.kt)("h2",{id:"introduction-to-zksnark"},"Introduction to zkSNARK"),(0,o.kt)("p",null,'zkSNARK, which abbreviates from "zero- knowledge Succinct Non-interactive ARgument of Knowledge", is one kind of zero knowledge proof cryptographic primitives. It is a method that one party can prove to another party that he knows the secret knowledge without revealing it. As claimed by its name, three things it solves are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Zero-knowledge:")," No additional information would be revealed during the process of verifying.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Succinct:")," No need to convey any information apart from the secret knowledge itself, and it can be verified easily.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-interactive:")," To verify the proof, amounts of interactions between prover and verifier are required. In the newly zkSNARK construction, it can be reduced by setting up a public trusted zone."))),(0,o.kt)("h3",{id:"how-it-works"},"How it works"),(0,o.kt)("h4",{id:"transforming-the-target-problem-into-quadratic-arithmetic-program-qap"},"Transforming the target problem into Quadratic Arithmetic Program (QAP)"),(0,o.kt)("p",null,"For example, get the solution of the equation $x^3+x+5=35$. Suppose Alice knows the solution is $x=3$, but she doesn't want to reveal it to Bob while proving to him that she does know it."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4091).Z})),(0,o.kt)("p",null,"\\\nReferring to Vitalik's blog",(0,o.kt)("sup",null,"[1]"),", it can be solved as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Alice transforms the computing equation to the basic arithmetics (can be seen as the logic gates in circuits)."),(0,o.kt)("li",{parentName:"ol"},"Alice converts the basic arithmetics to the Rank-1 Constraint Systems (R1CS).")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"R1CS")," is a sequence combined with the vectors $(a,b,c)$. Suppose the solution of this R1CS is vector $s$, then it must satisfy the equation $s\\cdot a\\times s\\cdot b - s\\cdot c = 0$, where $\\cdot$ is the multiplication between vectors and $a,b,c$ are the vector of coefficients. Completing the conversion of all basic arithmetics, and arrange the coefficients vector in order, then obtain three final matrices $A$,$B$ and $C$."),(0,o.kt)("p",null,"Each logic gate is corresponding to a gadget, in which defines the constraints and the method of generating witness. And we can also customize complex logic gate, such as $mod$, $compare$, $etc$, which can consist of multiple constraints."),(0,o.kt)("p",null,"The length of each vector is equal to the numbers of all variables in this system, in which include the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"~one")," put at the first index position representing 1, and the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"~out")," representing the output, and some intermediate variables $sym","_","1, sym","_","2, sym","_","3$ as shown in Figure 1. Generally, these vectors are sparse and only of which are at the logical gate-related variable positions would be assigned the value, and all the left positions would be assigned 0."),(0,o.kt)("p",null,"The vector $s$ in Figure 1 can be mapped to ",(0,o.kt)("em",{parentName:"p"},"[~one, x, ~out, sym","_","1, sym","_","2, sym","_","3]"),", the one that satisfies all constraint conditions is the solution of the computing equation, and it's the so-called $witness$, which equals to ",(0,o.kt)("em",{parentName:"p"},"[1,3,35,9,27,30]"),"."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Transforming ",(0,o.kt)("inlineCode",{parentName:"li"},"R1CS")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"QAP"),".")),(0,o.kt)("p",null,"With obtained three matrices $A$, $B$, and $C$ in the previous step, we are able to get polynomials $A(n)$, $B(n)$ and $C(n)$ responding $A$, $B$, and $C$ respectively by the Lagrangian interpolation. Then the computing equation can be reduced to obtain a vector $s$, which satisfies $s\\cdot C(n)-s\\cdot A(n) \\times s\\cdot B(n)=0$ when $n=1,2,3,4,5,6$ respectively. And it is equivalent to satisfy the equation $s\\cdot C(n)-s\\cdot A(n) \\times s\\cdot B(n)=H(n)*Z(n)$, where $Z(n)=(n-1)(n-2)(n-3)(n-4)(n-5)(n-6)$."),(0,o.kt)("h4",{id:"sampling-for-succint-verification"},"Sampling for succint verification"),(0,o.kt)("p",null,"After completing a series of transformations above, the computing equation is reduced to obtain the solution of the new equation $s\\cdot C(n)-s\\cdot A(n) \\times s\\cdot B(n)=H(n)*Z(n)$."),(0,o.kt)("p",null,"Alice can use the solution $s$ she already knows to compute polynomials $P(n)$ and $H(n) = P(n)/Z(n)$, and then sends $P(n)$ and $H(n)$ to the verifier Bob. When Bob succeeds receiving both two of them, he would tell that Alice does know the solution by checking whether $P(n)$ equals to $H(n)*Z(n)$ or not."),(0,o.kt)("p",null,"$s$ is not leaked by this means, but since the degree of polynomial tends to be pretty large, resulting ineffective time cost for transmitting and computing to make it impractical, and another reason is that it cannot be guaranteed $P(n)$ consists of $s\\cdot C(n)-s\\cdot A(n) \\times s\\cdot B(n)$."),(0,o.kt)("p",null,"Therefore, the solution cannot be leaked not only, but also can be verified succinctly. zkSNARK takes the way of sampling verification to simply the verification process, i.e., Bob randomly selects $t$, then sends it to Alice. Alice computes $P(t)$ and $H(t)$, and sends them back to Bob to be verified. The processes are shown below:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Bob randomly select a point $n=t$, which called the sampling point, then sends it to Alice;"),(0,o.kt)("li",{parentName:"ol"},"Alice computes $P(t)$ and $H(t)$;"),(0,o.kt)("li",{parentName:"ol"},"Alice sends back $P(t)$ and $H(t)$ to Bob;"),(0,o.kt)("li",{parentName:"ol"},"Bob checks whether $P(t)$ is equal to $H(t)\\times Z(t)$ or not."))),(0,o.kt)("p",null,"By this mean of verification, Bob can assure Alice knows the solution with high probability. Since it has a little probability that there is another solution satisfying $P(t)=H(t)\\times Z(t)$, it cannot be 100 percent guaranteed Alice knows the solution. Suppose the degree of $A$, $B$ and $C$ is $d$, then the degree of $p(n)$ is $2d$ and the number of intersections of two inequality polynomials is $2d$ at most, which is very small compared to the number of elements $n$ in the finite field, and the probability is only $2d/n$ if $t$ randomly selected by Alice can make $P(x)$ be validated."),(0,o.kt)("h4",{id:"homomorphic-hiding"},"Homomorphic hiding"),(0,o.kt)("p",null,"Since $t$ is revealed to Alice, she can also construct P'(t), H'(t) such that H'(t) = P'(t)/Z(t) holds. Then the sampling point $t$ should be hidden from the prover Alice while making she knows it. zkSNARK can do this by homomorphic hiding."),(0,o.kt)("p",null,'"Homomorphic Hiding" is a property of the mapping $E$ from input $x$ to output $X$:'),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"For most $x$, given $X=E(x)$, $x$ cannot be deduced vice versa;"),(0,o.kt)("li",{parentName:"ol"},"If $x_1\\neq x_2$, then $E(x_1)\\neq E(x_2)$;"),(0,o.kt)("li",{parentName:"ol"},"$E(ax_1+bx_2) = a ","*"," E(x_1) + b ","*"," E(x_2)$."))),(0,o.kt)("p",null,"Instead of informing Alice the sampling point directly, Bob provides a sequence of mapping values $ E(t_1), E(t_2), E(t_3),..., E(t_N)$ from input $t_0, t_1, t_2, t_3, ..., t_n$ respectively. The processing steps are listed below:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Bob computes $\u200b\u200b E(t_1), E(t_2), E(t_3),..., E(t_N)$, and sends all of them to Alice;"),(0,o.kt)("li",{parentName:"ol"},"Alice computes $E(P(t))$ and $E(H(t))$;"),(0,o.kt)("li",{parentName:"ol"},"Alice sends back $E(P(t)$ and $E(H(t))$ to Bob;"),(0,o.kt)("li",{parentName:"ol"},"Bob checks whether $E(P(t))$ is equal to $E(H(t))\\times E(Z(t))$ or not. (since Bob knows $t$, he can compute $z(t)=a$, and obtain $E(aH(t))$)."))),(0,o.kt)("h4",{id:"kca"},"KCA"),(0,o.kt)("p",null,"Suppose the prover doesn't know the solution $s$ satisfying $s\\cdot C(n)-s\\cdot A(n) \\times s\\cdot B(n)=H(n) ","*"," Z(n)$, but she knows another solution $s'$ satifying $s'\\cdot C'(n)-s'\\cdot A'(n) \\times s'\\cdot B'(n)=H'(n)","*","Z(n)$. Then the prover can use the coefficient vectors $A'(n)$, $B'(n)$ and $C'(n)$ to compute $P'(n)=s\\cdot C'(n)-s\\cdot A'(n) ","*"," s\\cdot B'(n)$, then it would be sent to the verifier to get verified. How can the verifier knows the prover computes $P(n)$ does use the difined coefficient vectors $A(n)$, $B(n)$ and $C(n)$? The whole process is Knowledge of Coefficient Test and Assumption, which abbreviated by KCA. The details of KCA are described below."),(0,o.kt)("p",null,"Firstly, we define $\\alpha$ is the pair of $(a,b)$ satisfying $b=\\alpha ","*"," a$, where $","*","$ is the multiplication operation on Elliptic Curves, meeting two properties:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"If $\\alpha$ is big enough, it is nearly impossible to compute $\\alpha$ from $a$ and $b$;"),(0,o.kt)("li",{parentName:"ol"},"Addition and multiplication operations satisfy the characteristics of commutative groups."))),(0,o.kt)("p",null,"We utilize the properties of $\\alpha$ to construct a process called KCA (Knowledge of Coefficient Test and Assumption):"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Bob randomly selects $\\alpha$ and generates pair $(a,b)$, he saves $\\alpha$, but sends $(a,b)$ to Alice;"),(0,o.kt)("li",{parentName:"ol"},"Alice selects $\\lambda$ and generates new pair $(a',b')=(\\lambda \\cdot a, \\lambda \\cdot b)$, then returns $(a',b')$ to Bob. With the commutative formula, it can be proved that $(a', b')$ is also a $\\alpha$ pair: $b' = \\lambda \\cdot b = \\lambda \\alpha \\cdot a = \\alpha (\\lambda \\cdot a) = \\alpha \\cdot a'$;"),(0,o.kt)("li",{parentName:"ol"},"Bob check if $(a',b')$ is a $\\alpha$ pair, if yes, it can be claimed Alice knows $\\lambda$."))),(0,o.kt)("p",null,"Extending to the conditions of multiple KCA:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Bob sends a sequence of pair $\\alpha$ to Alice;"),(0,o.kt)("li",{parentName:"ol"},"Alice applys $(a',b')=(c_1\\cdot a_1+c_2\\cdot a_2,c_1\\cdot b_1+c_2\\cdot b_2)$ to generate a newly $\\alpha$ pair;"),(0,o.kt)("li",{parentName:"ol"},"If Bob validates that $(a',b')$ is a $\\alpha$ pair, it can be claimed Alice knows array $c=","[c_1,c_2]","$."))),(0,o.kt)("p",null,"Back to the beginning: the prover Alice can construct polynomials $P'(n)$ that are independent of $A(n)$, $B(n)$ and $C(n)$ to satisfy the equation, so we can modify the example in the previous section to a new one, where Bob only sends $E(A(t))$, $E(B(t))$ and $E(C(t))$ to Alice. Only based on them, Alice is able to construct $E(P(t))$."),(0,o.kt)("h4",{id:"bilinear-map-homomorphic-hiding-of-multiplication"},"Bilinear map: homomorphic hiding of multiplication"),(0,o.kt)("p",null,"In the KCA verification described above, it involves multiplication in order to verify $E(\\alpha A(t)) = \\alpha E(A(t))$, while $\\alpha$ is deprecated when constructing the trusted parameters. So bilinear map is acquired to make the homomorphic hiding for multiplication."),(0,o.kt)("p",null,"The homomorphic hiding described above is one-to-one, i.e., mapping an input to an output. A bilinear map maps two elements from two responding fields to an element in the third field: $e(X, Y) \\rightarrow Z$, and has linearity property on both inputs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$e(P+R, Q) = e(P, Q) + e(R, Q) e(P, Q+S) = e(P, Q) + e(P, S)$")),(0,o.kt)("p",null,"Suppose that $(a, b)$ and $(c, d)$ are two different factorizations of $x$ (i.e. $x = ab = cd$), there are two additive homomorphic maps $E_1$ and $E_2$, and a bilinear map $e$, such that The equation below is always true:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$e(E_1(a), E_2(b)) = e(E_1(c), E_2(d)) = X$")),(0,o.kt)("p",null,"Then, the map of $x\\rightarrow X$ is also an additive homomorphic map."),(0,o.kt)("p",null,"From the above we have derived the homomorphic hiding formula of multiplication:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$E(xy) = e(E_1(x), E_2(y))$")),(0,o.kt)("p",null,"According to the formula above, in order to verify $\\pi_A' ?=\\alpha \\pi_A$, we can convert it to verify $e(\\pi_A, E_2(\\alpha)) ?= e(\\pi_A', E_2(1))$ (B, C is in the same way)."),(0,o.kt)("h4",{id:"none-interaction"},"None interaction"),(0,o.kt)("p",null,"In the example above, Bob need to send amounts of sequences of $E(A(t))$, $E(B(t))$ and $E(C(t))$ to Alice, where the sequence data is pretty massive, and is time-consuming during the transmitting process, and also is not simply enough. Here is the solution: zkSNARK packs punch of data $E(A(t))$, $E(B(t))$ and $E(C(t))$ that Bob sent to Alice to the so-called ",(0,o.kt)("em",{parentName:"p"},"Common Reference String"),' (CRS), which is generated by a kind of trusted way, and used in the process of all of transaction verification as the consensus of all nodes. Therefore, the verification way is changed from an interactive "request-response" way to the way of simply submitting a proof.'),(0,o.kt)("h2",{id:"verifiable-contract"},"Verifiable contract"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"VC",src:n(7643).Z})),(0,o.kt)("center",null,(0,o.kt)("font",{size:"2"},"Figure 2: The VC architect in Alaya"),(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"\\\nThe workflow of VC in Alaya is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vc-contract template:")," The user codes the vc contract according to the provided template, and any computing model can be implemented, mainly implementing three interfaces:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Compute()"),": Initiate the computing request"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Real_compute()"),": Generate computing results and proof"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Set_result()"),": verify the results and proof"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vclang:")," The vclang compiles the vc contract into the executable file supported by wasm vm. There is no need to care about the specific libsnark api usage method for developers, just only to code their own computing model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vcc-reslover:")," The vcc-resolver presets the interface layer that supports access to the libcsnark api in the wasm virtual machine, and invokes the libcsnark interface in c-go mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Libcsnark:")," The Libcsnark encapsulates libsnark api, making it accessible for C interface with the implemented libsnark by C++."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vc_pool:")," The vc_pool is responsible for processing vc transaction, distributing vc computing tasks and putting computing results and proofs onto the blockchain.")),(0,o.kt)("h3",{id:"compiling-verifiable-contract"},"Compiling verifiable contract"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vclang",src:n(4346).Z})),(0,o.kt)("center",null,(0,o.kt)("font",{size:"2"},"Figure 3: Compiling verifiable contract to WASM"),(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"\\\nThe processes of compling verifiable contract are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The vc compiler compiles the contract coded by users to ",(0,o.kt)("inlineCode",{parentName:"li"},"IRs"),", and then converted to ",(0,o.kt)("inlineCode",{parentName:"li"},"SSA"),", finally, it would be transformed into ",(0,o.kt)("inlineCode",{parentName:"li"},"ggs"),", which is the gadget representation supported by libcsnark."),(0,o.kt)("li",{parentName:"ol"},"Combines ",(0,o.kt)("inlineCode",{parentName:"li"},"gss")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"keygenTemp.cpp")," to generate ",(0,o.kt)("inlineCode",{parentName:"li"},"keygen"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"vclang")," generates $pk$ and $vk$ (CRS construction) by ",(0,o.kt)("inlineCode",{parentName:"li"},"keygen"),". This process performs a large number of elliptic curve multiplication operations, and after finishing generating $pk$ and $vk$, both of them would be serialized into the contract template, where $pk$ is used to generate trusted parameters, and $vk$ is the trusted parameter for verification."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"vclang")," serializes $pk$ and $vk$ into ",(0,o.kt)("inlineCode",{parentName:"li"},"vccTemp.cpp")," to generate ",(0,o.kt)("inlineCode",{parentName:"li"},"vcc.cpp"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"vclang")," compiles ",(0,o.kt)("inlineCode",{parentName:"li"},"vcc.cpp")," to obtain ",(0,o.kt)("inlineCode",{parentName:"li"},"vcc.wasm"),".")),(0,o.kt)("h3",{id:"how-it-works-1"},"How it works"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vc-work",src:n(3619).Z})),(0,o.kt)("center",null,(0,o.kt)("font",{size:"2"},"Figure 4: The workflow of verifiable contract"),(0,o.kt)("br",null)," "),(0,o.kt)("p",null,"\\\nHere is the workflow of verifiable contract:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After finishing compiling the contract, $pk$ and $vk$ would be obtained and would be deployed onto Alaya for storge to make them accessible to other nodes, and from being tampered."),(0,o.kt)("li",{parentName:"ol"},"When executes the ",(0,o.kt)("inlineCode",{parentName:"li"},"vc compute")," transaction, a ",(0,o.kt)("inlineCode",{parentName:"li"},"vc task")," would be created, which is combined with ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," of the transaction and the input parameter ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," corresponding its key ",(0,o.kt)("inlineCode",{parentName:"li"},"taskid"),"."),(0,o.kt)("li",{parentName:"ol"},"Once the ",(0,o.kt)("inlineCode",{parentName:"li"},"compute")," transaction succeed being confirmed, the transaction parsing event would be invoked by the ",(0,o.kt)("inlineCode",{parentName:"li"},"vc pool")," to check whether this task could be added to the ",(0,o.kt)("inlineCode",{parentName:"li"},"vc pool")," or not."),(0,o.kt)("li",{parentName:"ol"},"Waiting for 20 blocks confirmation, it starts to execute ",(0,o.kt)("inlineCode",{parentName:"li"},"real_compute"),", which is off-chain computation making it no fee cost. The processes of ",(0,o.kt)("inlineCode",{parentName:"li"},"real_compute")," are two steps. Firstly, computing the witness $s$ according to the obtained ",(0,o.kt)("inlineCode",{parentName:"li"},"gadget")," sequence in the previous compilation. Secondly, with the additional ",(0,o.kt)("inlineCode",{parentName:"li"},"pk")," got in step 1, the computing node can generate the final ",(0,o.kt)("inlineCode",{parentName:"li"},"proof"),", which is a sequence of proofs combined with $\\pi_A$, $\\pi_B$, $\\pi_C$, etc."),(0,o.kt)("li",{parentName:"ol"},"The result and proof are deployed onto Alaya by ",(0,o.kt)("inlineCode",{parentName:"li"},"Set_result(proof,result)"),", which is mainly executing ",(0,o.kt)("inlineCode",{parentName:"li"},"verify (vk,proof,input)"),". Once validated, the transaction initiator would be rewarded for its computing contribution. The verify time of zkSNARK is relatively short compared to the time of proof generation, but it is also related to the length of the input parameter, so it is necessary to pay attention to limiting the length of the input parameter, preventing the gas cost of the transaction from being too high, and increasing the cost of the verifier.")),(0,o.kt)("h3",{id:"the-incentive-mechanism-of-verifiable-contract"},"The incentive mechanism of verifiable contract"),(0,o.kt)("p",null,"Users who have the requirement to outsource their computation need to mortgage the appropriate fees to the contract.\nEach node in the Alaya network can compete for the computing task. Once the computing node succeeds in finishing the computing task and obtain the result and the corresponding proof, the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_result")," transaction request would be initiated after that the computing node finished paying the miner fee. As the verifying node receives this request, the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_result")," would be executed in the meantime, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"proof")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," parameters encapsulated in the transaction would be validated their legitimacy. If yes, it could be considered that the computing node obtains the correct result. Meanwhile, the mortgage fee would be transferred to the requester's account as the incentive, and no incentive would be offered if fails."),(0,o.kt)("h2",{id:"analysis-to-the-vc-solution"},"Analysis to the VC solution"),(0,o.kt)("h3",{id:"performance-analysis"},"Performance analysis"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"computing stage"),(0,o.kt)("th",{parentName:"tr",align:null},"operation"),(0,o.kt)("th",{parentName:"tr",align:null},"user"),(0,o.kt)("th",{parentName:"tr",align:null},"computing node"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keygen construction"),(0,o.kt)("td",{parentName:"tr",align:null},"exponential"),(0,o.kt)("td",{parentName:"tr",align:null},"O(m+n)"),(0,o.kt)("td",{parentName:"tr",align:null},"0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"real_compute"),(0,o.kt)("td",{parentName:"tr",align:null},"exponential"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"O(m)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"set_result"),(0,o.kt)("td",{parentName:"tr",align:null},"hyperbolic matching operation, exponential"),(0,o.kt)("td",{parentName:"tr",align:null},"O(1),O(n)"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("p",null,"where $m$ is the degree of polynomials $A$,$B$ and $C$, $n$ is the length of input parameter."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"keygen construction:")," homomorphic hiding the sampled value to generate trusted parameters. Since $m$ is a large number commonly, and it is an exponential operation, then it would take a relatively long time. As this process is done after compiling the contract, it would not affect the performance of contract executing."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"real_compute:")," $O(m)$ times of exponential operations are required to generate the witness and proof. And this can be distributed to third parties for fast computation."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"set_result:")," According to the specific input, the verify process generate parts of the proof, requiring $O(n)$ times of operations, and then take the fixed hyperbolic matching operation to make the verification. Since this process is done on-chain, it needs to be optimized to assure it at an acceptable computing cost.")),(0,o.kt)("h3",{id:"comparison-of-different-vc-technologies"},"Comparison of different VC technologies"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"time(Setup)"),(0,o.kt)("th",{parentName:"tr",align:null},"key len(Setup)"),(0,o.kt)("th",{parentName:"tr",align:null},"time(Proving)"),(0,o.kt)("th",{parentName:"tr",align:null},"memory(Proving)"),(0,o.kt)("th",{parentName:"tr",align:null},"time(Verifying)"),(0,o.kt)("th",{parentName:"tr",align:null},"proof len(Verifying)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zkSNARK"),(0,o.kt)("td",{parentName:"tr",align:null},"~28min"),(0,o.kt)("td",{parentName:"tr",align:null},"~18GB"),(0,o.kt)("td",{parentName:"tr",align:null},"~18min"),(0,o.kt)("td",{parentName:"tr",align:null},"~216GB"),(0,o.kt)("td",{parentName:"tr",align:null},"<10ms"),(0,o.kt)("td",{parentName:"tr",align:null},"230B")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zkSNARK(Zcash-Sprout)"),(0,o.kt)("td",{parentName:"tr",align:null},"~27hr(6 player)"),(0,o.kt)("td",{parentName:"tr",align:null},"~900MB"),(0,o.kt)("td",{parentName:"tr",align:null},"~37s"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.5GB"),(0,o.kt)("td",{parentName:"tr",align:null},"<10ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~300B")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zkSNARK(Zcash-Sapling)"),(0,o.kt)("td",{parentName:"tr",align:null},"months-MPC"),(0,o.kt)("td",{parentName:"tr",align:null},"<800MB"),(0,o.kt)("td",{parentName:"tr",align:null},"~7s"),(0,o.kt)("td",{parentName:"tr",align:null},"~40MB"),(0,o.kt)("td",{parentName:"tr",align:null},"<10ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~200B")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zkSTARK"),(0,o.kt)("td",{parentName:"tr",align:null},"<0.1s"),(0,o.kt)("td",{parentName:"tr",align:null},"16B"),(0,o.kt)("td",{parentName:"tr",align:null},"6min"),(0,o.kt)("td",{parentName:"tr",align:null},"131GB"),(0,o.kt)("td",{parentName:"tr",align:null},"~0.1s"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.2MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bulletproof"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"2min"),(0,o.kt)("td",{parentName:"tr",align:null},"~1MB"),(0,o.kt)("td",{parentName:"tr",align:null},"~3s"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.5KB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ZKBoo()"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"~33ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~MBs"),(0,o.kt)("td",{parentName:"tr",align:null},"~38ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~200KB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ligero()"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"~140ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~MBs"),(0,o.kt)("td",{parentName:"tr",align:null},"~60ms"),(0,o.kt)("td",{parentName:"tr",align:null},"~34KB")))),(0,o.kt)("h3",{id:"future-plans"},"Future plans"),(0,o.kt)("p",null,"Alaya will implement more optimized VC algorithm, it would be optimized in the following several ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cutting the ZK property off from SNARK to improve its efficiency, decreases the proof generation and verification time."),(0,o.kt)("li",{parentName:"ol"},"Implementing privacy-preserving computing combining with MPC and HE."),(0,o.kt)("li",{parentName:"ol"},"Considering adopting more optimized elliptic curves to increase the speed of encryption on ECC."),(0,o.kt)("li",{parentName:"ol"},"Optimizing the verification process, including pre-processing the hyperbolic matching operation and presetting intermediate values to keep it from the repeated computation."),(0,o.kt)("li",{parentName:"ol"},"Adopting some algorithms like MPC to guarantee security during the process of Setup.")),(0,o.kt)("h4",{id:"reference"},"Reference"),(0,o.kt)("p",null,"[1]",". ",(0,o.kt)("a",{parentName:"p",href:"https://vitalik.ca/"},"https://vitalik.ca/")))}m.isMDXComponent=!0},4091:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vc1-e-ba6b1b712b365cae29c4407face4570a.png"},4346:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vc3-e-9e1c4749112b6b7dbab177a6b5f57b17.png"},7643:function(e,t,n){"use strict";t.Z=n.p+"assets/images/verifiable_contract-ac499461e85a05c19b3445a207201f28.png"},3619:function(e,t,n){"use strict";t.Z=n.p+"assets/images/verifiable_contract_flow-5130e75ce03c88f2dd103baffc86435f.png"}}]);