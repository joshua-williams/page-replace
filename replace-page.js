function replacePage(url){
    window.replacePageUrl = url;
    window.addEventListener('load', function(){
        var body = document.getElementsByTagName('body')[0];
        var meta = document.createElement('meta');
        meta.setAttribute('name','viewport');
        meta.setAttribute('content', 'width=device-width, initial-scale=1');
        document.getElementsByTagName('head')[0].appendChild(meta);
        var html = '<style>body{border:0px;padding:0px;margin:0px;background:none;;overflow:hidden;}' +
            'iframe{height: 100vh;width: 100vw;border:0px;margin:0px;padding: 0px;</style>' +
            '<iframe src="'+window.replacePageUrl+'"></iframe>';
        body.innerHTML = html;
    });
}