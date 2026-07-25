window.initAddon = function(done){
    loadAddonCSS([
        "addons/multiplayer/css/socket.css"
    ]);

    loadAddonJS([
        "socket.io/socket.io.js",
        "addons/multiplayer/js/socket.js",
        "addons/multiplayer/js/socket-app.js"
    ], function(){
        done();
    });
};