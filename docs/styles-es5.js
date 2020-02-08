(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/noty/lib/noty.css":
  /*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/horie/src/github.com/is2ei/ngx-noty/node_modules/postcss-loader/src??embedded!/Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/noty.css ***!
    \************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesNotyLibNotyCss(module, exports) {
    module.exports = [[module.i, ".noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  z-index: 9999999;\n  -webkit-transform: translateZ(0) scale(1, 1);\n          transform: translateZ(0) scale(1, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n  filter: blur(0);\n  -webkit-filter: blur(0);\n  max-width: 90%; }\n\n#noty_layout__top {\n  top: 0;\n  left: 5%;\n  width: 90%; }\n\n#noty_layout__topLeft {\n  top: 20px;\n  left: 20px;\n  width: 325px; }\n\n#noty_layout__topCenter {\n  top: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1); }\n\n#noty_layout__topRight {\n  top: 20px;\n  right: 20px;\n  width: 325px; }\n\n#noty_layout__bottom {\n  bottom: 0;\n  left: 5%;\n  width: 90%; }\n\n#noty_layout__bottomLeft {\n  bottom: 20px;\n  left: 20px;\n  width: 325px; }\n\n#noty_layout__bottomCenter {\n  bottom: 5%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1); }\n\n#noty_layout__bottomRight {\n  bottom: 20px;\n  right: 20px;\n  width: 325px; }\n\n#noty_layout__center {\n  top: 50%;\n  left: 50%;\n  width: 325px;\n          -webkit-transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1); }\n\n#noty_layout__centerLeft {\n  top: 50%;\n  left: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1); }\n\n#noty_layout__centerRight {\n  top: 50%;\n  right: 20px;\n  width: 325px;\n          -webkit-transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n                  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1); }\n\n.noty_progressbar {\n  display: none; }\n\n.noty_has_timeout.noty_has_progressbar .noty_progressbar {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 100%;\n  background-color: #646464;\n  opacity: 0.2;\n  filter: alpha(opacity=10); }\n\n.noty_bar {\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translate(0, 0) translateZ(0) scale(1, 1);\n      transform: translate(0, 0) scale(1, 1);\n  -webkit-font-smoothing: subpixel-antialiased;\n  overflow: hidden; }\n\n.noty_effects_open {\n  opacity: 0;\n  -webkit-transform: translate(50%);\n          transform: translate(50%);\n  -webkit-animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.noty_effects_close {\n  -webkit-animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.noty_fix_effects_height {\n  -webkit-animation: noty_anim_height 75ms ease-out;\n          animation: noty_anim_height 75ms ease-out; }\n\n.noty_close_with_click {\n  cursor: pointer; }\n\n.noty_close_button {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  cursor: pointer;\n  -webkit-transition: all .2s ease-out;\n  transition: all .2s ease-out; }\n\n.noty_close_button:hover {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.noty_modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 10000;\n  opacity: .3;\n  left: 0;\n  top: 0; }\n\n.noty_modal.noty_modal_open {\n  opacity: 0;\n  -webkit-animation: noty_modal_in .3s ease-out;\n          animation: noty_modal_in .3s ease-out; }\n\n.noty_modal.noty_modal_close {\n  -webkit-animation: noty_modal_out .3s ease-out;\n          animation: noty_modal_out .3s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes noty_modal_in {\n  100% {\n    opacity: .3; } }\n\n@keyframes noty_modal_in {\n  100% {\n    opacity: .3; } }\n\n@-webkit-keyframes noty_modal_out {\n  100% {\n    opacity: 0; } }\n\n@keyframes noty_modal_out {\n  100% {\n    opacity: 0; } }\n\n@keyframes noty_modal_out {\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes noty_anim_in {\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n@keyframes noty_anim_in {\n  100% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    opacity: 1; } }\n\n@-webkit-keyframes noty_anim_out {\n  100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0; } }\n\n@keyframes noty_anim_out {\n  100% {\n    -webkit-transform: translate(50%);\n            transform: translate(50%);\n    opacity: 0; } }\n\n@-webkit-keyframes noty_anim_height {\n  100% {\n    height: 0; } }\n\n@keyframes noty_anim_height {\n  100% {\n    height: 0; } }\n\n/*# sourceMappingURL=noty.css.map*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3R5L2xpYi9ub3R5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiw0Q0FBNEM7VUFDcEMsb0NBQW9DO0VBQzVDLG1DQUFtQztVQUMzQiwyQkFBMkI7RUFDbkMsNENBQTRDO0VBQzVDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYyxFQUFFOztBQUVsQjtFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVSxFQUFFOztBQUVkO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZLEVBQUU7O0FBRWhCO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO1VBRUoseUVBQWlFO2tCQUFqRSxpRUFBaUUsRUFBRTs7QUFFN0U7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVUsRUFBRTs7QUFFZDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWSxFQUFFOztBQUVoQjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtVQUVKLHlFQUFpRTtrQkFBakUsaUVBQWlFLEVBQUU7O0FBRTdFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUU7O0FBRWhCO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO1VBRUosNEZBQW9GO2tCQUFwRixvRkFBb0YsRUFBRTs7QUFFaEc7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7VUFFSiw0RUFBb0U7a0JBQXBFLG9FQUFvRSxFQUFFOztBQUVoRjtFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtVQUVKLDRFQUFvRTtrQkFBcEUsb0VBQW9FLEVBQUU7O0FBRWhGO0VBQ0UsYUFBYSxFQUFFOztBQUVqQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCLEVBQUU7O0FBRTdCO0VBQ0UsbUNBQW1DO0VBQ25DLDREQUE0RDtNQUV4RCxzQ0FBc0M7RUFDMUMsNENBQTRDO0VBQzVDLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLFVBQVU7RUFDVixpQ0FBaUM7VUFFekIseUJBQXlCO0VBQ2pDLDJFQUEyRTtVQUNuRSxtRUFBbUU7RUFDM0UscUNBQXFDO1VBQzdCLDZCQUE2QixFQUFFOztBQUV6QztFQUNFLDRFQUE0RTtVQUNwRSxvRUFBb0U7RUFDNUUscUNBQXFDO1VBQzdCLDZCQUE2QixFQUFFOztBQUV6QztFQUNFLGlEQUFpRDtVQUN6Qyx5Q0FBeUMsRUFBRTs7QUFFckQ7RUFDRSxlQUFlLEVBQUU7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNEJBQTRCLEVBQUU7O0FBRWhDO0VBQ0Usb0NBQW9DLEVBQUU7O0FBRXhDO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU0sRUFBRTs7QUFFVjtFQUNFLFVBQVU7RUFDViw2Q0FBNkM7VUFDckMscUNBQXFDLEVBQUU7O0FBRWpEO0VBQ0UsOENBQThDO1VBQ3RDLHNDQUFzQztFQUM5QyxxQ0FBcUM7VUFDN0IsNkJBQTZCLEVBQUU7O0FBRXpDO0VBQ0U7SUFDRSxXQUFXLEVBQUUsRUFBRTs7QUFFbkI7RUFDRTtJQUNFLFdBQVcsRUFBRSxFQUFFOztBQUVuQjtFQUNFO0lBQ0UsVUFBVSxFQUFFLEVBQUU7O0FBRWxCO0VBQ0U7SUFDRSxVQUFVLEVBQUUsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLFVBQVUsRUFBRSxFQUFFOztBQUVsQjtFQUNFO0lBQ0UsK0JBQStCO1lBQ3ZCLHVCQUF1QjtJQUMvQixVQUFVLEVBQUUsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLCtCQUErQjtZQUN2Qix1QkFBdUI7SUFDL0IsVUFBVSxFQUFFLEVBQUU7O0FBRWxCO0VBQ0U7SUFDRSxpQ0FBaUM7WUFDekIseUJBQXlCO0lBQ2pDLFVBQVUsRUFBRSxFQUFFOztBQUVsQjtFQUNFO0lBQ0UsaUNBQWlDO1lBQ3pCLHlCQUF5QjtJQUNqQyxVQUFVLEVBQUUsRUFBRTs7QUFFbEI7RUFDRTtJQUNFLFNBQVMsRUFBRSxFQUFFOztBQUVqQjtFQUNFO0lBQ0UsU0FBUyxFQUFFLEVBQUU7O0FBRWpCLGtDQUFrQyIsImZpbGUiOiJub2RlX21vZHVsZXMvbm90eS9saWIvbm90eS5jc3MifQ== */", '', '']];
    /***/
  },

  /***/
  "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/noty/lib/themes/mint.css":
  /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/horie/src/github.com/is2ei/ngx-noty/node_modules/postcss-loader/src??embedded!/Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/themes/mint.css ***!
    \*******************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesNotyLibThemesMintCss(module, exports) {
    module.exports = [[module.i, ".noty_theme__mint.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative; }\n  .noty_theme__mint.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px; }\n  .noty_theme__mint.noty_bar .noty_buttons {\n    padding: 10px; }\n  .noty_theme__mint.noty_type__alert,\n.noty_theme__mint.noty_type__notification {\n  background-color: #fff;\n  border-bottom: 1px solid #D1D1D1;\n  color: #2F2F2F; }\n  .noty_theme__mint.noty_type__warning {\n  background-color: #FFAE42;\n  border-bottom: 1px solid #E89F3C;\n  color: #fff; }\n  .noty_theme__mint.noty_type__error {\n  background-color: #DE636F;\n  border-bottom: 1px solid #CA5A65;\n  color: #fff; }\n  .noty_theme__mint.noty_type__info,\n.noty_theme__mint.noty_type__information {\n  background-color: #7F7EFF;\n  border-bottom: 1px solid #7473E8;\n  color: #fff; }\n  .noty_theme__mint.noty_type__success {\n  background-color: #AFC765;\n  border-bottom: 1px solid #A0B55C;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3R5L2xpYi90aGVtZXMvbWludC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRTtFQUNwQjtJQUNFLGFBQWE7SUFDYixlQUFlLEVBQUU7RUFDbkI7SUFDRSxhQUFhLEVBQUU7RUFFbkI7O0VBRUUsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxjQUFjLEVBQUU7RUFFbEI7RUFDRSx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBRTtFQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxXQUFXLEVBQUU7RUFFZjs7RUFFRSx5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBRTtFQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxXQUFXLEVBQUUiLCJmaWxlIjoibm9kZV9tb2R1bGVzL25vdHkvbGliL3RoZW1lcy9taW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3R5X3RoZW1lX19taW50Lm5vdHlfYmFyIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5vdHlfdGhlbWVfX21pbnQubm90eV9iYXIgLm5vdHlfYm9keSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLm5vdHlfdGhlbWVfX21pbnQubm90eV9iYXIgLm5vdHlfYnV0dG9ucyB7XG4gICAgcGFkZGluZzogMTBweDsgfVxuXG4ubm90eV90aGVtZV9fbWludC5ub3R5X3R5cGVfX2FsZXJ0LFxuLm5vdHlfdGhlbWVfX21pbnQubm90eV90eXBlX19ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QxRDFEMTtcbiAgY29sb3I6ICMyRjJGMkY7IH1cblxuLm5vdHlfdGhlbWVfX21pbnQubm90eV90eXBlX193YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQUU0MjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFODlGM0M7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5ub3R5X3RoZW1lX19taW50Lm5vdHlfdHlwZV9fZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREU2MzZGO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NBNUE2NTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLm5vdHlfdGhlbWVfX21pbnQubm90eV90eXBlX19pbmZvLFxuLm5vdHlfdGhlbWVfX21pbnQubm90eV90eXBlX19pbmZvcm1hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3RjdFRkY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzQ3M0U4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG4ubm90eV90aGVtZV9fbWludC5ub3R5X3R5cGVfX3N1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUZDNzY1O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0EwQjU1QztcbiAgY29sb3I6ICNmZmY7IH1cbiJdfQ== */", '', '']];
    /***/
  },

  /***/
  "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!***************************************************************************************************************************************************************************************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/horie/src/github.com/is2ei/ngx-noty/node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \***************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "../../node_modules/noty/lib/noty.css":
  /*!*********************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/noty.css ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNotyLibNotyCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./noty.css */
    "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/noty/lib/noty.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  "../../node_modules/noty/lib/themes/mint.css":
  /*!****************************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/themes/mint.css ***!
    \****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNotyLibThemesMintCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./mint.css */
    "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/noty/lib/themes/mint.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!*********************************************************************************************************************!*\
    !*** /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./styles.css */
    "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!*****************************************************************************************************************************************************************************************!*\
    !*** multi ./src/styles.css /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/noty.css /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/themes/mint.css ***!
    \*****************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/horie/src/github.com/is2ei/ngx-noty/projects/demo/src/styles.css */
    "./src/styles.css");

    __webpack_require__(
    /*! /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/noty.css */
    "../../node_modules/noty/lib/noty.css");

    module.exports = __webpack_require__(
    /*! /Users/horie/src/github.com/is2ei/ngx-noty/node_modules/noty/lib/themes/mint.css */
    "../../node_modules/noty/lib/themes/mint.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map