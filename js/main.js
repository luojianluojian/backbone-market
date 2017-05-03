require({
    baseUrl: './',
    paths: {
        js: 'js',
        order: 'lib/requirejs/order',
        text: 'lib/requirejs/text'
     },
    waitSeconds: 0//除了排查js脚本问题，网络问题以外的一个解决方法是加大Require的等待时间waitSeconds，或者直接设置为0，这个参数的意义是：The number of seconds to wait before giving up on loading a script. Setting it to 0 disables the timeout. The default is 7 seconds.
});

require([
    'order!lib/jquery/jquery-min',
    'order!plugin/myfocus-2.0.1.min',
    'order!lib/underscore/underscore-min',
    'order!lib/backbone/backbone-min',
    'order!lib/backbone/backbone.localStorage-min',
    'order!js/app'
], function () {
    App = _.last(arguments);
    App.initialize();
});