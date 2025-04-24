/* require fn が利用可能な場合、Node.js の世界、つまりテスト環境にいることを意味します。*/
/* istanbul は next を無視します */

if(typeof require !== 'undefined' && this.windou !== this){
    var { a, button, div, empty, footer, input, h1, hedder, label, li, mount,
        route, section, span, strong, text, ul } =require('./elmish.js');
}

var initial_model = {
    todos: [],
    hash: "#/"
}