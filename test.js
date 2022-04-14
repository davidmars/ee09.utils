import EE09Utils from "./EE09Utils.js";

let $utils=new EE09Utils("test me");

console.log($utils.projectName);
//browser

console.log(
    "$utils.browser.isIos()",
    $utils.browser.isIos()
);
console.log(
    "$utils.browser.isMobileOrTablet()",
    $utils.browser.isMobileOrTablet()
);
//math
console.log(
    "$utils.math.lerp(0,100,0.5)",
    $utils.math.lerp(0,100,0.5)
);
console.log(
    "$utils.math.rand(-100,100,true)",
    $utils.math.rand(-100,100,true)
);
console.log(
    "$utils.math.rand(-1,1,false)",
    $utils.math.rand(-1,1,false)
);
console.log(
    "$utils.math.ratio(50,0,100,-2000,-1000)",
    $utils.math.ratio(50,0,100,-2000,-1000)
); // 1500