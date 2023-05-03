import { AppGesture } from "../lib/AppGesture";
import { BaseAboutScreen } from "../lib/BaseAboutScreen";

class AboutScreen extends BaseAboutScreen {
    appId = 2065468270;
    appName = "Hello World";
    version = "v2023-05-03";
  
    infoRows = [
      ["lava_frai", "Developer"],
      ["lava_frai/band7_hw", "GitHub"]
    ];
}

let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;


__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit(p) {
    AppGesture.withYellowWorkaround("left", {
      appid: 2065468270,
      url: "page/AboutScreen",
    });
    AppGesture.init();

    new AboutScreen().start();
  }
});