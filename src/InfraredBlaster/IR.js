

//import * as RNIRManagerModule  from 'react-native-ir-manager';
import IRManager, { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager';
//import RNIRManagerModule, { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager';
// ../../node_modules/
//https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
//const IRManager = require('react-native-ir-manager');
//import RNIRManagerModule, { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager';
//import * as IRManager from 'react-native-ir-manager';
class IR {
    pauseDevice () {
        const testcode = "0000 006D 0000 0020 000A 0046 000A 001E 000A 001E 000A 001E 000A 001E 000A 001E 000A 001E 000A 0046 000A 001E 000A 0046 000A 001E 000A 001E 000A 001E 000A 0046 000A 001E 000A 0677 000A 0046 000A 001E 000A 001E 000A 001E 000A 001E 000A 0046 000A 0046 000A 001E 000A 0046 000A 001E 000A 0046 000A 0046 000A 0046 000A 001E 000A 0046 000A 0677";
        this.transmitProntoCode(testcode);
    }

    hasIrEmitter() {
        IRManager.hasIrEmitter()
        .then(hasIrEmitter => console.log(hasIrEmitter ? 'Device has IR emitter' : "Device doesn't have IR emitter"));
    }
    
    getCarrierFrequencies() {
        IRManager.getCarrierFrequencies()
        .then(console.log)
        .catch(console.log);
    }
    
    transmitProntoCode(prontoHexCode) {
        IRManager.transmitProntoCode(prontoHexCode)
        .then(console.log)
        .catch(console.log);
    }
}
export { IR };