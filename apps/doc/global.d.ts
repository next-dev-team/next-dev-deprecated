// with prefix $ sign is global register in .umirc.ts with webpack we need manual copy type to here by run  `gen-type` in package.json then copy from folderXxx/*.d.ts

/**
 * @description global no need to import
 * usage: console.log("log", $const.a)
 */

declare const $cons: typeof import('@/constant').default
declare const $helper: typeof import('@/helper/global').default
declare const $sel: typeof import('@/stores/global').default
