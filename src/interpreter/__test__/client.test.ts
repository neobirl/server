import assert from "assert";
import { describe, it } from "node:test";
import { BirlClient } from "../BirlClient";
const birlClient = new BirlClient();

describe('convertToC method', ()=>{
    const imports = '#include <stdio.h>\n#include <math.h>\n\n';
    
    it('should return a string value', ()=>{
        const code = birlClient['convertToC']('HORA DO SHOW\nBIRL');
        assert.equal(typeof code, 'string');
    });

    it(`should return "int main(void){" `, ()=>{
        const code = birlClient['convertToC']('HORA DO SHOW');
        assert.equal(imports + 'int main (void) {', code);
    });
})