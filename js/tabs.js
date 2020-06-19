/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"tabs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/import/pages/tabs.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/import/pages/tabs.js":
/*!*************************************!*\
  !*** ./src/js/import/pages/tabs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com> 
(function ($) {
  $.fn.extend({
    easyResponsiveTabs: function easyResponsiveTabs(options) {
      //Set the default values, use comma to separate the settings, example:
      var defaults = {
        type: 'default',
        //default, vertical, accordion;
        width: 'auto',
        fit: true,
        closed: false,
        tabidentify: '',
        activetab_bg: 'white',
        inactive_bg: '#F5F5F5',
        active_border_color: '#c1c1c1',
        active_content_border_color: '#c1c1c1',
        activate: function activate() {}
      }; //Variables

      var options = $.extend(defaults, options);
      var opt = options,
          jtype = opt.type,
          jfit = opt.fit,
          jwidth = opt.width,
          vtabs = 'vertical',
          accord = 'accordion';
      var hash = window.location.hash;
      var historyApi = !!(window.history && history.replaceState); //Events

      $(this).bind('tabactivate', function (e, currentTab) {
        if (typeof options.activate === 'function') {
          options.activate.call(currentTab, e);
        }
      }); //Main function

      this.each(function () {
        var $respTabs = $(this);
        var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
        var respTabsId = $respTabs.attr('id');
        $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
        $respTabs.css({
          'display': 'block',
          'width': jwidth
        });
        if (options.type == 'vertical') $respTabsList.css('margin-top', '3px');
        $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
        $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
        jtab_options(); //Properties Function

        function jtab_options() {
          if (jtype == vtabs) {
            $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
          }

          if (jfit == true) {
            $respTabs.css({
              width: '100%',
              margin: '0px'
            });
          }

          if (jtype == accord) {
            $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
            $respTabs.find('.resp-tabs-list').css('display', 'none');
          }
        } //Assigning the h2 markup to accordion title


        var $tabItemh2;
        $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");
        $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
          'background-color': options.inactive_bg,
          'border-color': options.active_border_color
        });
        var itemCount = 0;
        $respTabs.find('.resp-accordion').each(function () {
          $tabItemh2 = $(this);
          var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
          var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
          $accItem.append($tabItem.html());
          $accItem.data($tabItem.data());
          $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + itemCount);
          itemCount++;
        }); //Assigning the 'aria-controls' to Tab items

        var count = 0,
            $tabContent;
        $respTabs.find('.resp-tab-item').each(function () {
          $tabItem = $(this);
          $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + count);
          $tabItem.attr('role', 'tab');
          $tabItem.css({
            'background-color': options.inactive_bg,
            'border-color': 'none'
          }); //Assigning the 'aria-labelledby' attr to tab-content

          var tabcount = 0;
          $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
            $tabContent = $(this);
            $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + tabcount).css({
              'border-color': options.active_border_color
            });
            tabcount++;
          });
          count++;
        }); // Show correct content area

        var tabNum = 0;

        if (hash != '') {
          var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));

          if (matches !== null && matches.length === 2) {
            tabNum = parseInt(matches[1], 10) - 1;

            if (tabNum > count) {
              tabNum = 0;
            }
          }
        } //Active correct tab


        $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
          'background-color': options.activetab_bg,
          'border-color': options.active_border_color
        }); //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode

        if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
          $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
            'background-color': options.activetab_bg + ' !important',
            'border-color': options.active_border_color,
            'background': 'none'
          });
          $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
        } //assign proper classes for when tabs mode is activated before making a selection in accordion mode
        else {} // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
          //Tab Click action function


        $respTabs.find("[role=tab]").each(function () {
          var $currentTab = $(this);
          $currentTab.click(function () {
            var $currentTab = $(this);
            var $tabAria = $currentTab.attr('aria-controls');

            if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
              $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                $(this).addClass('resp-accordion-closed');
              });
              $currentTab.removeClass('resp-tab-active').css({
                'background-color': options.inactive_bg,
                'border-color': 'none'
              });
              return false;
            }

            if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
              $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                'background-color': options.inactive_bg,
                'border-color': 'none'
              });
              $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
              $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                'background-color': options.activetab_bg,
                'border-color': options.active_border_color
              });
              $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
            } else {
              console.log('here');
              $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                'background-color': options.inactive_bg,
                'border-color': 'none'
              });
              $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
              $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                'background-color': options.activetab_bg,
                'border-color': options.active_border_color
              });
              $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
            } //Trigger tab activation event


            $currentTab.trigger('tabactivate', $currentTab); //Update Browser History

            if (historyApi) {
              var currentHash = window.location.hash;
              var tabAriaParts = $tabAria.split('tab_item-'); // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();

              var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();

              if (currentHash != "") {
                var re = new RegExp(respTabsId + "[0-9]+");

                if (currentHash.match(re) != null) {
                  newHash = currentHash.replace(re, newHash);
                } else {
                  newHash = currentHash + "|" + newHash;
                }
              } else {
                newHash = '#' + newHash;
              }

              history.replaceState(null, null, newHash);
            }
          });
        }); //Window resize function                   

        $(window).resize(function () {
          $respTabs.find('.resp-accordion-closed').removeAttr('style');
        });
      });
    }
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=tabs.js.map