import { AppGesture } from "../lib/AppGesture";
import { Vibro } from "../lib/Vibro";


function onTestButtonClick() {
  hmUI.showToast({
    text: "Clicked!"
  });

  Vibro.run(25);
}


let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;

__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {
    hmUI.setStatusBarVisible(true)

    AppGesture.on("left", () => {
      hmApp.gotoPage({
        url: "page/AboutScreen",
      });
    });
    AppGesture.init();

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 194,
      w: 192,
      h: 32,
      text: "Hello, World!",
      text_size: 24,
      color: 0xFFFFFF,
      align_h: hmUI.align.CENTER_H
    });

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 16,
      y: 240,
      w: 192 - 32,
      h: 48,
      text: "Click",
      radius: 24,
      color: 0xF48FB1,
      normal_color: 0x27040f,
      press_color: 0x380621,
      click_func: onTestButtonClick
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 240+64,
      w: 192,
      h: 32,
      text: "<- swipe to about",
      text_size: 18,
      color: 0xCCCCCC,
      align_h: hmUI.align.CENTER_H
    });
  },
  onDestroy() {

    // On destroy, remove if not required

  }
});
