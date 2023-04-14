import { sayHello } from "../../utils";
import { isValid } from "./validate";

if (isValid(0, 1, 3, 4)) {
  sayHello('Romário');
}