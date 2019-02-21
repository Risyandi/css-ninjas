!function (i) {
        console.log(i, ":value i");
    i.fn.pollbox = function (t) {
            console.log(t, ":value t");
        this.id = "0"; var n = i.extend({ id: this.id }, t); console.log(n, ":value n"); console.log(n.id, ":value n.id");
         i(this).html("<iframe id='opini-widgets-" + n.id + "' nama='opini_widgets' style='transition: height .2s;-webkit-transition: height .2s;-moz-transition: height .2s;-o-transition: height .2s' frameborder='0' scrolling='no' width='100%' height='300px' src='http://localhost:8080/widget/polling/" + n.id + "'></iframe>")
    }; 
    var t = window.addEventListener ? "addEventListener" : "attachEvent", n = window[t], e = "attachEvent" == t ? "onmessage" : "message"; n(e, 
    function (t) {
            console.log(t, ":value of t");
            console.log(t.currentTarget.location.origin, ":value of location");
            console.log(t.origin, ":value of t.origin");
         if ("http://localhost:8080" == t.origin) { 
             var n = t.data.split("-")[0], e = t.data.split("-")[1]; n >= 200 && i("#opini-widgets-" + e).attr("height", n) 
                console.log(n, ":value height content in iframe");
                console.log(e, ":value id content in iframe");
            } 
    }, !1)
}(jQuery);
