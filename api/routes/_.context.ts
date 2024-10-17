/**
* This is the default context for Counterfact.
*
* It defines the context object in the REPL 
* and the $.context object in the code.
*
* Add properties and methods to suit your needs.
* 
* See https://counterfact.dev/docs/usage.html#working-with-state-the-codecontextcode-object-and-codecontexttscode
*/
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const data = require('../../test.json');

export class Context {
  getResponse() {
    return data;
  }
}

