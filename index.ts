import { add } from "add";
import { init } from "init";

enum CommandEnum {
  add = "add",
  Init = "init",
}

const choosecommand = (command: CommandEnum) => {
  switch (command) {
    case CommandEnum.add:
      return init();
    case CommandEnum.add:
      return add();
    default:
      break;
  }
  console.error('暂时不支持此命令');
};
