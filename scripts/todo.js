// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示

'use strict';
const todo = require('todo');

module.exports = (robot) => {

// respond -> ボット名の呼び出しに反応
robot.respond(/todo (.+)/i, (msg) => {
  const task = msg.match[1].trim();
  todo.todo(task);
  msg.send(task + 'を追加しました！');
});

robot.respond(/done (.+)/i, (msg) => {
  const task = msg.match[1].trim();
  todo.done(task);
  msg.send(task + 'を終了しました！');
});

robot.respond(/del (.+)/i, (msg) => {
  const task = msg.match[1].trim();
  todo.del(task);
  msg.send(task + 'を削除しました！');
});

robot.respond(/list/i, (msg) => {
  const list = todo.list();
  if(list.length === 0){
    msg.send('未完了のタスクはありません');
  }else{
    msg.send('未完了のタスクは' + list.length + '個あります\n' + list.join('\n'));
  }
});
robot.respond(/donelist/i, (msg) => {
  const doneList = todo.doneList();
  if(doneList.length === 0){
    msg.send('完了したタスクはありません');
  }else{
    msg.send('終了したタスクは' + doneList.length + '個あります\n' + doneList.join('\n'));
  }
});

}
