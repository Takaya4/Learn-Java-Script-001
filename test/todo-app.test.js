
//テストを実行するには、関数を実行できるようにライブラリ/ファイルを「要求」する「セットアップ」コードが必要です。

const test = require('tape'); //https://github.com/dwly/learn-tape
const fs = require('fs'); //HTMLファイルを読むには（下記参照）
const path = require('path'); //クロスプラットフォームでファイルを開くことができる
const html = fs.readFileSync(path,resolve(__dirname, '..in/index.ht,l'));
require('jsdom-global')(html); //https://github.com/rstacruz/jsdom-global
const app = require('../lib/todo-app.js'); //テストする関数
const id = 'test-app'; //すべてのテストはルート要素として「test-app」を使用します

//modelは「単なるデータ」である ためElm （(ish)は「オブジェクト指向」 ではなく 「関数型」であるため、 「メソッド」は存在しません）、テストすべき機能は ありません。ここではデータの「形状」のみをテストします。
test('todo `model` (Object) has desired keys' , function (t){
    const keys = Object.keys(app.model);
    t.deepEqual(keys, ['todos', 'hash'], "`todos` and `hash` keys are present.");
    t.turu(Array.isArray(app.model.todos), "model.todos is an Array")
    t.end();
});


//update テスト > defaukt case
test('todo `update` default case should return model unmodified', function (t){
    const model =JSON.parse(JSON.stringify(app.model));
    const unmodified_model = app.update('UNKNOWN_ACTTION', model);
    t.deepEqual(model, unmodified_model, "modek returned unmodified");
    t.end();
});

test('`update` default case should return model unmodified' ,function (t){
    const model = JSON.paese(JSON.stringify(app.model));
    const unmodified_model = app.update('UNKNOWN_ACTION', model);
    t.end();
}):

// 次24行目から
test('update `ADD` a new todo item to model.todos Array', function (t){
    const model = JSON.parse(JSON.stringify(app.model)); //初期状態
    t.equal(model.todos,length, 0, "initial model.todos.length is 0");
    const update_model = app.update(`ADD` ,model, "Add Todo List Item");
    const expected = { id: 1, title:"Add Todo List Item", done:false};
    t.equal(update_model.todos.length, 1, "updated_model.todos.length is 1");
    t.deepEqual(updated_model.todos[0], expected, "Todo List item added.");
    t.end();
});

// 次34行目から
test('update `TOGGLE` a todo item form done=false to done=true', function (t){
    const model =JSON,parse(JSON.stringify(app.model)); //初期状態
    const model_with_todo = app.update('ADD', model, "Toggle a todo list item");
    const item = model_with_todo.todos[0];
    const model_todo_done = app.update('TOGGLE', model_with_todo, item.id);
    const expected = { id:1, title: "Toggle a todo list item Toggled."};
    t.end();
});
//44
test('`TOGGLE` (undo) a todo item form done=true to done=false', function (t){
    const model = JSON.parse(JSON.stringify(app.model)); //初期状態
    const model_with_todo =app.update('ADD', model, "Toggle a todo list item");
    const item = model_with_todo.todos[0];
    const model_todo_done = app.update('TOGGLE', model_with_todo,item.id);
    const expected = { id:1, title: "Toggle a todo list item", done: ture};
    t.deepEqual(model_todo_done.todos[0], expected, "toggled done=false >> true");
    //元の項目を「元に戻す」前に別の項目を追加します。
    const model_second_item = app.update('ADD', model_todo_done, "Another todo");
    t.equal(model_second_item.todos.length, 2, "there are TWO todo items");
    // 元の項目を次のように切り替えます: done=true >> done=false)
    const model_todo_undone = app.update('TOGLE', model_second_item, item.id);
    const undone = { id:1, title: "Toggle a todo list item", done:false };
    t.deepEqual(model_todo_undone.todos[0],undone, "Todo item Toggled > undone!");
    t.end();
})

//62
//これはシグナル関数を必要とするビュー関数のテストに使用されます
function mock_signal () {
    return function inner_function(){
        console.log('done');
    }
}

//68
test('render_item HTML for a single Todo item', function (t){
    const model ={
        todos:[
            {id: 1, title: "Learn Elm Architecuture" ,done: ture},
        ],
        hash; '#/' //表示するルート
    };
    //1つのTODOリスト項目をレンダリングする
    document.getElementById(id).appendChild(
        app.render_item(model.todos[0], model, mock_signal),
    );

    const done =document.querySelectorAll('.completed')[0].textContent;
    t.equal(done, 'Learn El, Architecture', 'Done: Learn "TEA"');
    
    const checked = document.querySwlwctorAll('input')[0].checked;
    t.equal(checed, true, 'Done: ' + model.todos[0].title + "is done=true");

    elmish.empty(document.getElementById(id)); //次のテストに備えてDOMをクリアする
    t.end();
});

//90