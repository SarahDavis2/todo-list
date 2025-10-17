import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/reset.css";
import "./styles/styles.css";
// import { DOM } from "./scripts/DOM.js";
import { AppController } from "./scripts/AppController.js";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

localStorage.clear();

// const items = new Items();
// const test = new Project();
// const test2 = new Project();
// test._setTitle("TEST");
// items._addItem(test);
// items._addItem(test2);
// items._storeItem(test);


// console.log(items.getItems());
// console.log(items.getStorageItem(test.id))

// const task = new Task();
// task.setDueDate(2020, 1, 31); // wont work because private
// console.log(task.getDueDate());