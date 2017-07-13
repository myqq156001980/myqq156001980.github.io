/**
 * Created by sunzqc on 2017/7/13.
 */

var start_day = new Date('2015/08/22');
var start_timestamp = Math.floor(start_day.getTime() / 1000);

var little_hippo_start_day = new Date('2017/02/17');
var little_hippo_start_timestamp = Math.floor(little_hippo_start_day.getTime() / 1000);

var seconds_one_day = 86400;

function init() {

    var current_day = new Date();
    var current_timestamp = Math.floor(current_day.getTime() / 1000);
    var now_days = Math.floor((current_timestamp - start_timestamp) / seconds_one_day);
    document.getElementById("mmd_yyd_days").innerHTML = now_days.toString();
    // var progressBar = document.getElementById('p');
    // progressBar.value = now_days;
    // var sp = document.getElementById('sp');
    // sp.innerHTML = (now_days / 100).toString();

    var little_hippo_days = Math.floor((current_timestamp - little_hippo_start_timestamp) / seconds_one_day);
    document.getElementById("little_hippo_days").innerHTML = little_hippo_days.toString();

}


var q = function () {
    var number = document.getElementById("qNumber").value;
    if (isNaN(number)) {
        alert("请输入数字！！");
        return;
    }

    var result = (start_timestamp + seconds_one_day * number) * 1000;
    var tmp = new Date(result);
    var fullYear = tmp.getFullYear();
    var month = tmp.getMonth();
    var days = tmp.getDay();
    var res = fullYear + "年" + month + "月" + days + "日"

    document.getElementById("show_query_date").innerHTML = res;
}

document.getElementById("sub").onclick = q;

