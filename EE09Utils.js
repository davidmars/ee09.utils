import Math from "./Math.js";
import Browser from "./Browser.js";
import LocalStorage from "./LocalStorage.js";
export default class EE09Utils{
    constructor(projectName="ee09-utils-project-default") {
        this.projectName=projectName;
        this.math=Math;
        this.browser=Browser;
        this.ls=new LocalStorage(this.projectName);
    }
}