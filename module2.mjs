/* Module 1 and Module 2 shows how to import and export components in Javascript.
The default is unique component can be accessed with any name.
But the other components should be export and import with the same name and wrapped in curly braces.*/
import name , {b,c,d} from "./module1.mjs";

console.log(name);
console.log(b+"\n"+c+"\n"+d);