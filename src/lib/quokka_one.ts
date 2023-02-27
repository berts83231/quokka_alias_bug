// import { logSomething } from '$lib/quokka_two.ts'; // Fails

// Error Response
// ​​​​​Quokka PRO 'quokka_one.ts' (node: v19.7.0, TypeScript: v4.9.5)​​​​
//
// Error [ERR_MODULE_NOT_FOUND]: Cannot find package '$lib' imported from /home/chris/.quokka/src/lib/quokka_one.js
//     at new NodeError (node:internal/errors:399:5)
//     at packageResolve (node:internal/modules/esm/resolve:794:9)
//     at moduleResolve (node:internal/modules/esm/resolve:843:20)
//     at defaultResolve (node:internal/modules/esm/resolve:1058:11)
//     at nextResolve (node:internal/modules/esm/loader:163:28)
//     at async nextResolve (node:internal/modules/esm/loader:163:22)
//     at async ESMLoader.resolve (node:internal/modules/esm/loader:835:24)
//     at async ESMLoader.getModuleJob (node:internal/modules/esm/loader:416:7)
//     at async ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:78:21)

import { logSomething } from './quokka_two'; // Works

// Response

// ​​​​​Quokka PRO 'quokka_one.ts' (node: v19.7.0, TypeScript: v4.9.5)​​​​

// [λ: logSomething] ​​​​​at ​​​​​​​​logSomething​​​ ​src/lib/quokka_one.ts:19:1​

logSomething;
