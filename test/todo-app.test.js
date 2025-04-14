
//テストを実行するには、関数を実行できるようにライブラリ/ファイルを「要求」する「セットアップ」コードが必要です。

const test = require('tape'); //https://github.com/dwly/learn-tape
const fs = require('fs'); //to read html files (see below)
const path = require('path'); //so we can open files cross-platform
const html = fs.readFileSync(path,resolve(__dirname, '..in/index.ht,l'));
require('jsdom-global')(html); //https://github.com/rstacruz/jsdom-global
const app = require('../lib/todo-app.js'); //functions to test
const id = 'test-app'; //allt tests use 'test-app' as root element

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