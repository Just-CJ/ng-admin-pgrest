// declare a new module called 'myApp', and make it require the `ng-admin` module as a dependency
var myApp = angular.module('myApp', ['ng-admin']);
// declare a function to run when the module bootstraps (during the 'config' phase)
myApp.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('农业价格数据中心@VAG')
    .baseApiUrl('http://10.76.6.118:3000/'); // main Api endpoint
    // add entities
    admin.addEntity(nga.entity('jgsb'));
    admin.addEntity(nga.entity('mofcom'));
    admin.addEntity(nga.entity('ymt'));
    admin.addEntity(nga.entity('_3w3n'));

    // configure entities
    require('./jgsb.js')(nga, admin);
    require('./mofcom.js')(nga, admin);
    require('./ymt.js')(nga, admin);
    require('./3w3n.js')(nga, admin);

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);

myApp.config(['RestangularProvider', function (RestangularProvider) {
    RestangularProvider.addFullRequestInterceptor(function(element, operation, what, url, headers, params) {
        if (operation == "getList") {
            // custom pagination params
            if (params._page) {
                headers = headers || {};
                headers['Range-Unit'] = what;
                headers['Range'] = ((params._page - 1) * params._perPage) + '-' + (params._page * params._perPage - 1);
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

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
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

