## ＜Git環境の構築＞
### ■事前準備
Gitをインストール（https://git-scm.com/download/winからダウンロード）

## ＜GitHub環境の構築＞
### ■事前準備
1. GitHubのアカウント登録
2. GitHubでリポジトリを作成
3. GitHubでSSH Keyの作成
```
　$ cd ~/.ssh
　$ ssh-keygen -t rsa
　$ github_id_rsa
　Enter
　Enter
　github_id_rsa.pubをvscodeで開き内容をコピーして、GithubのSSH Keysへペーストして登録
```

### ■GitBashでconfigの設定
```
$ touch config
$ vi config
　a（挿入）
　Host github
　　HostName github.com
　　IdentityFile ~/.ssh/gihub_id_rsa
　　User git
　Esc
　:wq
$ ssh -T github（うまくいったかを確認）
```
### ■リモートレポジトリからpull
```
$ git pull origin YOUR_BRANCH_NAME
# オンライン更新をつかみ、ローカル作業にマージする
```

### ■VScodeでリモートレポジトリへpush
```
$ git init
$ git add .
$ git commit
　a（挿入）
　コミットメッセージを入力
　Esc
　:wq
　Enter
$ git branch -M master
$ git remote add origin git@github.com:aiharamasaki/js.study.git
※fatal: remote origin already exists.というエラーが出たら、$ git remote rm originでoriginを削除
$ git push -u origin master
```

### ■コミット＆プッシュ
```
$ git add .
$ git commit
　a（挿入）
　コミットメッセージを入力
　Esc
　:wq
　Enter
$ git push
→　$ git push origin HEAD:post
```

## ＜Git branch（ひくラジ）＞
```
$ git checkout develop
$ Git pull
```
```
$ git branch feature/credit_00 　//ブランチを作る
$ git checkout feature/credit_00　//ブランチに切り替える
$ git push --set-upstream origin feature/credit_00
画面左からコミット＆プッシュ
githubのPull reqests→create pull requests
```
```
$ git reset (--hard)
$ git checkout -b post origin/post
```
