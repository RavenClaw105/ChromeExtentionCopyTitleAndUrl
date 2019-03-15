
'use strict';

/*
    chrome.tabs.query(obj, callback)で現在、開いているタブ一覧を取得する。
    objに取得対象のタブの条件を記述することで、その一覧をcallbackから受け取れる。
*/

// 開いているタブ一覧を取得
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    var text = tab.title + "\n" + "[" + tab.url + "]";
    var textArea = document.getElementById('titleAndUrlText');
    textArea.innerText = text;
    textArea.select();
    document.execCommand('copy')
    document.getElementById('titleAndUrlResult').innerText = 'Done!!';
});

