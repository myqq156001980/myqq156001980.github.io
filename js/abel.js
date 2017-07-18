(function () {

    var start_day = new Date('2015/08/22');
    var start_timestamp = Math.floor(start_day.getTime() / 1000);

    var little_hippo_start_day = new Date('2017/02/17');
    var little_hippo_start_timestamp = Math.floor(little_hippo_start_day.getTime() / 1000);

    var seconds_one_day = 86400;

    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    // js中月份是从0开始的要 + 1
    // 例子：
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
    Date.prototype.Format = function (fmt) { //author: szq
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    function init() {

        var current_day = new Date();
        var current_timestamp = Math.floor(current_day.getTime() / 1000);
        var now_days = Math.ceil((current_timestamp - start_timestamp) / seconds_one_day);
        document.getElementById("mmd_yyd_days").innerHTML = now_days.toString();
        // var progressBar = document.getElementById('p');
        // progressBar.value = now_days;
        // var sp = document.getElementById('sp');
        // sp.innerHTML = (now_days / 100).toString();

        var little_hippo_days = Math.ceil((current_timestamp - little_hippo_start_timestamp) / seconds_one_day);
        document.getElementById("little_hippo_days").innerHTML = little_hippo_days.toString();

    }


    var q = function () {
        var number = document.getElementById("qNumber").value;
        if (number == "") {
            return;
        }
        if (isNaN(number)) {
            alert("请输入数字！！");
            return;
        }
        number = parseInt(number);

        var result = (start_timestamp + seconds_one_day * (number - 1)) * 1000;
        var tmp = new Date(result);
        // var fullYear = tmp.getFullYear();
        // var month = tmp.getMonth() + 1;
        // var days = tmp.getDate();
        // var res = prefixStr + fullYear + "年" + month + "月" + days + "日"
        var prefixStr = "萌萌哒和园园哒相遇" + number + "天的日子~--> "
        var res = prefixStr + tmp.Format("yyyy年MM月dd日");
//        document.getElementById("qNumber").value = number;
        document.getElementById("show_query_date").innerHTML = res;
    }

    var hippo_query = function () {
        var number = document.getElementById("hippo_number").value;
        if (number == "") {
            return;
        }
        if (isNaN(number)) {
            alert("请输入数字！！");
            return;
        }
        number = parseInt(number);

        var result = (little_hippo_start_timestamp + seconds_one_day * (number - 1)) * 1000;
        var tmp = new Date(result);
        // var fullYear = tmp.getFullYear();
        // var month = tmp.getMonth() + 1;
        // var days = tmp.getDate();
        // var res = prefixStr + fullYear + "年" + month + "月" + days + "日"
        var prefixStr = "小河马出生第" + number + "天的日子~--> "
        var res = prefixStr + tmp.Format("yyyy年MM月dd日");
//        document.getElementById("hippo_number").value = number;
        document.getElementById("hippo_show_query_date").innerHTML = res;
    }

    document.getElementById("qNumber").onblur = q;
    document.getElementById("hippo_number").onblur = hippo_query;
    init();

    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    }

})();