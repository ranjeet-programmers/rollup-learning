import foo from "./foo.js";
import { version } from "../package.json";
import answer from "the-answer";
import _ from "lodash";
import App from "./App.jsx";

export default function () {
  console.log(foo);
  console.log("version " + version);
  console.log("the answer is " + answer);
  console.log(_.add(2, 3));
}

export { App };
