# git的目录解构
├── COMMIT_EDITMSG  // 上一次提交的 msg
├── FETCH_HEAD // 远端的所有分支头指针 hash
├── HEAD // 当前头指针
├── ORIG_HEAD // 
├── config // 记录一些配置和远端映射
├── description // 仓库描述
├── hooks // commit lint规则 husky植入
│   ├── applypatch-msg
│   ├── applypatch-msg.sample
│   ├── commit-msg
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-applypatch
│   ├── post-checkout
│   ├── post-commit
│   ├── post-merge
│   ├── post-receive
│   ├── post-rewrite
│   ├── post-update
│   ├── post-update.sample
│   ├── pre-applypatch
│   ├── pre-applypatch.sample
│   ├── pre-auto-gc
│   ├── pre-commit
│   ├── pre-commit.sample
│   ├── pre-merge-commit
│   ├── pre-merge-commit.sample
│   ├── pre-push
│   ├── pre-push.sample
│   ├── pre-rebase
│   ├── pre-rebase.sample
│   ├── pre-receive
│   ├── pre-receive.sample
│   ├── prepare-commit-msg
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout
│   ├── push-to-checkout.sample
│   ├── sendemail-validate
│   ├── update
│   └── update.sample
├── index // 暂存区
├── info
│   ├── exclude
│   └── refs
├── logs // 顾名思义，记录我们的git log
│   ├── HEAD
│   └── refs
├── objects // git 存储的我们的文件
│   
├── lost-found //一些悬空的文件
│   ├── commit
│   └── other
├── packed-refs 打包好的指针头
└── refs // 所有的hash
    ├── heads
    ├── remotes
    └── tags