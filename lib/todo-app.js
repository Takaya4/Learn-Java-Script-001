/* require fn が利用可能な場合、Node.js の世界、つまりテスト環境にいることを意味します。*/
/* istanbul は next を無視します */

const { stringify } = require('querystring');

if(typeof require !== 'undefined' && this.windou !== this){
    var { a, button, div, empty, footer, input, h1, hedder, label, li, mount,
        route, section, span, strong, text, ul } =require('./elmish.js');
}

var initial_model = {
    todos: [],
    hash: "#/"
}

/**
* `update` は `action` に基づいて `model` を変換します。
* @param {String} action - モデルに対して実行するアクション。
* @param {String} data - アイテムに適用するデータ。
* @param {Object} model - アプリの（現在の）モデル（または「状態」）。
* @return {Object} new_model - 変換後のモデル。
*/

function update(action, model, data){
    var new_model = JSON.parse(JSON.stringify(model)) //モデルを「複製」する

    switch(action){
        case 'ADD':
            var last = (typeof model.todos !== 'undefined' && model.todos.length > 0)
            ? model.todos[model.todos.length - 1] : null;
            var id = last ? last.id + 1: 1;
            var input = document.getElementById('new-todo');
            new_model.todos = (new_model.todos && new_model.todos.length > 0)
            ? new_model.todos : [];
            new_model.todos.push({
                id: id,
                title: data || input.vakue.trim(),
                done: false
            });
    break;
    case 'TOGGLE':
        new_model.todos.forEach(function (item){ // 「遅いモバイル」では 1 ミリ秒かかります
            if(item.id === data){ // これは 1 つの項目のみに「一致」する必要があります。
                item.done = !item.done; // 「完了」の状態を反転します。例: false >> true
            }
        });
        // すべての ToDo が done=true の場合、「すべて切り替え」チェックボックスをオンにします。
        var all_done = new_model.todos.filter(function(item){
            return item.done === false; // 完了していない項目のみを考慮
        }).length;
        new_model.all_done = all_done === 0 ? true : false;
        break;
    case 'TOGGLE_ALL':
        new_model.all_done = new_model.all_done ? false : true;
        new_model.todos.forEach(function (item){
            item.done = new_model.all_done; // 「遅いモバイル」では 1 ミリ秒かかります
        });
        break;
    case 'EDIT':
        // このコードは https://stackoverflow.com/a/16033129/1148249 を参考にしています。
        // DOM を変更しないため、簡略化されています。
        if (new_model.clicked && new_model.clicked === data &&
            Date.now() - 300 < new_model.click_item){ // ダブルクリック < 300ms
                new_model.editing = data;
            }
        
    else { // 最初のクリック
        new_model.clicked = data; // 同じ項目が 2 回クリックされたかどうかを確認できます。
    }

}
}