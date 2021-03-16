import {
    assertEquals,
    assertStringIncludes
} from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { config } from "./config/index.ts"

Deno.test('#port, should equal 8000' , () => {
    const targetPortNumber = 8000;
    assertEquals(config.port, targetPortNumber)
})

Deno.test({
    name: '#response, should contain deno',
    fn: () => {
        assertStringIncludes(config.response, 'deno');
    },
    ignore: false,
    only: false
})