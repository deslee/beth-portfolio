angular.module('app', []);

try {
    angular.bootstrap(document, ['app']);
}
catch (e) {
    console.error(e.stack || e.message || e);
}