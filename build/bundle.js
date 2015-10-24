/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// declare a new module called 'myApp', and make it require the `ng-admin` module as a dependency
	'use strict';
	
	var myApp = angular.module('myApp', ['ng-admin']);
	// declare a function to run when the module bootstraps (during the 'config' phase)
	myApp.config(['NgAdminConfigurationProvider', function (nga) {
	    // create an admin application
	    var admin = nga.application('农业价格数据中心@VAG').baseApiUrl('http://10.76.6.118:3000/'); // main Api endpoint
	    // add entities
	    admin.addEntity(nga.entity('jgsb'));
	    admin.addEntity(nga.entity('mofcom'));
	    admin.addEntity(nga.entity('ymt'));
	    admin.addEntity(nga.entity('_3w3n'));
	
	    // configure entities
	    __webpack_require__(2)(nga, admin);
	    __webpack_require__(3)(nga, admin);
	    __webpack_require__(4)(nga, admin);
	    __webpack_require__(5)(nga, admin);
	
	    // attach the admin application to the DOM and execute it
	    nga.configure(admin);
	}]);
	
	myApp.config(['RestangularProvider', function (RestangularProvider) {
	    RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {
	        if (operation == "getList") {
	            // custom pagination params
	            if (params._page) {
	                headers = headers || {};
	                headers['Range-Unit'] = what;
	                headers['Range'] = (params._page - 1) * params._perPage + '-' + (params._page * params._perPage - 1);
	                //params._start = (params._page - 1) * params._perPage;
	                //params._end = params._page * params._perPage;
	                delete params._page;
	                delete params._perPage;
	            }
	
	            // custom sort params
	            if (params._sortField) {
	                params.order = params._sortField + '.' + params._sortDir.toLowerCase();
	                //params._sort = params._sortField;
	                //params._order = params._sortDir;
	                delete params._sortField;
	                delete params._sortDir;
	            }
	            // custom filters
	            if (params._filters) {
	                for (var filter in params._filters) {
	                    params[filter] = 'eq.' + params._filters[filter];
	                }
	                delete params._filters;
	            }
	        }
	        //params.name = 'eq.面粉';
	        return { params: params };
	    });
	
	    RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
	        switch (operation) {
	            case 'get':
	                return data[0];
	            case 'getList':
	                response.totalCount = response.headers('Content-Range').split('/')[1];
	                break;
	        }
	
	        return data;
	    });
	}]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (nga, admin) {
	    var jgsb = admin.getEntity('jgsb');
	    jgsb.label('农业信息网');
	    jgsb.listView().title('农业信息网').fields([nga.field('id'), nga.field('name').label('产品名称'), nga.field('market').label('市场'), nga.field('avg_price').label('均价'), nga.field('prod_place').label('产地'), nga.field('time').label('时间')]).filters([nga.field('name').label('产品名称'), nga.field('market').label('市场')]).sortField('id').sortDir('ASC');
	
	    return jgsb;
	};
	
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (nga, admin) {
	    var mofcom = admin.getEntity('mofcom');
	    mofcom.label('新农村商网');
	    mofcom.listView().title('新农村商网').fields([nga.field('id'), nga.field('name').label('产品名称'), nga.field('category').label('类别'), nga.field('price').label('价格'), nga.field('province').label('省市'), nga.field('market').label('市场'), nga.field('time').label('时间')]).filters([nga.field('name').label('产品名称'), nga.field('category').label('类别'), nga.field('province').label('省市'), nga.field('market').label('市场')]).sortField('id').sortDir('ASC');
	
	    return mofcom;
	};
	
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (nga, admin) {
	    var ymt = admin.getEntity('ymt');
	    ymt.label('一亩田');
	    ymt.listView().title('一亩田').fields([nga.field('id'), nga.field('name').label('产品名称'), nga.field('category').label('类别'), nga.field('province').label('省市'), nga.field('price').label('价格'), nga.field('time').label('时间')]).filters([nga.field('name').label('产品名称'), nga.field('category').label('类别'), nga.field('province').label('省市')]).sortField('id').sortDir('ASC');
	
	    return ymt;
	};
	
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (nga, admin) {
	    var _3w3n = admin.getEntity('_3w3n');
	    _3w3n.label('农产品价格信息网');
	    _3w3n.listView().title('农产品价格信息网').fields([nga.field('id'), nga.field('name').label('产品名称'), nga.field('price').label('价格'), nga.field('unit').label('单位'), nga.field('tradeplace').label('产地'), nga.field('trend').label('来源'), nga.field('time').label('时间')]).filters([nga.field('name').label('产品名称'), nga.field('tradeplace').label('产地')]).sortField('id').sortDir('ASC');
	
	    return _3w3n;
	};
	
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map