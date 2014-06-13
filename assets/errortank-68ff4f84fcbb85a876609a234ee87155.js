(function() {
    window.ErrorTank || (window.ErrorTank = {}), ErrorTank.Notifier = function() {
        function r() {}
        return r.send = function(r, n, t) {
            var i;
            if (null == n && (n = null), null == t && (t = null), !r) throw "A description is required";
            return i = {
                description:r,
                backtrace:n,
                environment:t
            }, jQuery.ajax({
                url:"https://127.0.0.1/easel/api/v1/messages",
                type:"POST",
                cache:!1,
                data:{
                    data:i
                }
            });
        }, r;
    }();
}).call(this);