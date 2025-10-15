import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/reset.css";
import "./styles/styles.css";
import { greeting } from "./scripts/greeting.js";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

console.log(greeting);