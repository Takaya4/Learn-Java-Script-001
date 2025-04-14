# Learn-Java-Script-001 (todo list)
JavaScript個人勉強用

以下を写経する<br>
https://github.com/dwyl/javascript-todo-list-tutorial?tab=readme-ov-file

**目標**<br>
まずは一通り写経　
<br><br><br>

**memo**
***
 - クローン：ローカルにコピーする
 - 変更はステージしてから出ないとコミットできない
<br><br><br>
**つまづき**
***
 - リモートのリポジトリとローカルのリポジトリ名が違いステージからコミットしてもgithubに変更されなかったため、リポジトリをクローンし直すが、コミット反映されず
[![Image from Gyazo](https://t.gyazo.com/teams/x-point-1/cfdbb243df0aab3a87fcb729344d9ada.png)](https://x-point-1.gyazo.com/cfdbb243df0aab3a87fcb729344d9ada)
 * branch            main       -> FETCH_HEAD
   a315ef7..05ba89b  main       -> origin/main
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
2025-04-12 23:19:33.139 [info] > git config --get commit.template [58ms]
2025-04-12 23:19:33.143 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) --ignore-case refs/heads/main refs/remotes/main [60ms]
2025-04-12 23:19:33.218 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [70ms]
2025-04-12 23:19:33.220 [info] > git status -z -uall [74ms]
2025-04-12 23:19:33.299 [info] > git merge-base refs/heads/main refs/remotes/origin/main [70ms]
2025-04-12 23:19:33.365 [info] > git diff --name-status -z --diff-filter=ADMR a315ef743b8f794ebafe2955a620516fc904c15b...refs/remotes/origin/main [64ms]
2025-04-12 23:19:34.370 [info] > git ls-files --stage -- /Users/takaya/Desktop/Learn-Java-Script-001/lib/todo-app.js [82ms]
2025-04-12 23:19:34.372 [info] > git ls-tree -l fd5b1e56bd20b788a2b77aca7a6a2a0073d56015 -- /Users/takaya/Desktop/Learn-Java-Script-001/README.md [86ms]
2025-04-12 23:19:34.372 [info] > git ls-tree -l e7daee56d97c2198fab2288747c23ef879f3167c -- /Users/takaya/Desktop/Learn-Java-Script-001/README.md [88ms]
2025-04-12 23:19:34.434 [info] > git cat-file -s 7e9a7a203213db8200470b79f7ea9a2e68106fd6 [63ms]
2025-04-12 23:19:34.434 [info] > git show --textconv fd5b1e56bd20b788a2b77aca7a6a2a0073d56015:README.md [60ms]
2025-04-12 23:19:34.434 [info] > git show --textconv e7daee56d97c2198fab2288747c23ef879f3167c:README.md [59ms]
2025-04-12 23:19:34.492 [info] > git show --textconv :lib/todo-app.js [56ms]
2025-04-12 23:19:35.386 [info] > git config --get commit.template [92ms]
2025-04-12 23:19:35.389 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) --ignore-case refs/heads/main refs/remotes/main [91ms]
2025-04-12 23:19:35.452 [info] > git status -z -uall [62ms]
2025-04-12 23:19:35.453 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [62ms]
2025-04-12 23:20:27.961 [info] > git ls-tree -l e7daee56d97c2198fab2288747c23ef879f3167c -- /Users/takaya/Desktop/Learn-Java-Script-001/README.md [1273ms]
2025-04-12 23:20:27.967 [info] > git ls-tree -l fd5b1e56bd20b788a2b77aca7a6a2a0073d56015 -- /Users/takaya/Desktop/Learn-Java-Script-001/README.md [1277ms]
 - ↑ターミナルでのこれが原因ぽい　zsh: no matches found: 〜
 - ↑ちがうんか〜〜〜〜〜〜〜い
コミットテスト