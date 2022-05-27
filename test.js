import EE09Utils from "./EE09Utils.js";
import mimeToMdiIcon from "./File/mimeToMdiIcon.js";

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
console.log("----------math-------");
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

//string
console.log("----------string-------");
console.log(
    "$utils.string.noSpecialChar(\"Crême brûlée\")",
    $utils.string.noSpecialChar("Crême brûlée")
);
console.log(
    "$utils.string.noSpecialChar(\"ça va bien ?\")",
    $utils.string.noSpecialChar("ça va bien ?")
); // 1500

console.log("----------files-------");

console.log(
    "$utils.file.extension('toto.jpeg',true)",
    $utils.file.extension('toto.jpeg',true)
);
console.log(
    "$utils.file.humanSize(1024*1024*1024*1.5)",
    $utils.file.humanSize(1024*1024*1024*1.5)
);

console.log(
    "mimeToMdiIcon('toto.pdf')",
    mimeToMdiIcon('toto.pdf')
);
console.log(
    "mimeToMdiIcon(null,'video/mp4')",
    mimeToMdiIcon(null,'video/mp4')
);