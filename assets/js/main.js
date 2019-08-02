chrome.runtime.sendMessage({ text: "QiitaのSampleを送ります。" }, function (response) {
    console.log(response.text); // →　QiitaのSampleを返します。
});

// 「START」ボタンを押した時にメッセージを送信する
$('#start_push').click(function () {
    chrome.runtime.sendMessage({ text: "QiitaのSampleを送ります。" }, function (response) {
        console.log(response.text);
    });
});

$('#start_push').click(function () {
    chrome.runtime.sendMessage({ status: "start" }, function (response) {
        console.log(response.status); // → startをセットしました。
    });
});


$('#confirm_push').click(function () {
    chrome.storage.local.get(["status"], function (value) {
        console.log('status : '+value.status) // → status : start
    });
});
