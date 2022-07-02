/**
 * Utils Collection
 * most of code is from open source library
 * credit & thanks to thundersdata-frontend ,lodash, rc-component, wetrial ,k2-react-utils
 */

// ============================Content Utils=============================
/**
 * _lodash_ , _boolean_ , _devices_ , _constant_ , _array_ , _string_ , _object_
 * -types_ , _constant_ , _storage_ , _mock_ , _jsencrypt_
 */
// ============================END Content=============================

/**
 * common use of _lodash_
 */
export { _get } from './lodash/get';
export { _omit } from './lodash/omit';
export { _pick } from './lodash/pick';
export { _pickBy } from './lodash/pickBy';
/**
 * common use of _boolean_
 */
export { default as isBrowser } from './boolean/isBrowser';
export { default as isCanUseDom } from './boolean/isCanUseDom';
export { default as isExternalLink } from './boolean/isExternalLink';
export { default as isImg } from './boolean/isImg';
export { default as isMobile } from './boolean/isMobile';
export { default as isPromise } from './boolean/isPromise';
export { default as isUrl } from './boolean/isUrl';

/**
 *  _devices_
 */
export { default as keyCode } from './devices/keyCode';
export { default as browser } from './devices/browser';
/**
 *  _debug_
 */
export { default as deprecated } from './debug/deprecated';
export * as warning from './debug/warning';
export * as logger from './debug/logger';
/**
 *  _jsencrypt_
 */
export * as encrypt from './encrypt';

/**
 *  _array_
 */
export { default as urlToList } from './array/urlToList';
/**
 *  _object_
 */
export { default as getKeyNameByValue } from './obj/getKeyNameByValue';
export { getOnlyValue, removeEmpty } from './obj/removeEmpty';
export { default as renameObjKeys } from './obj/renameObjKeys';
export { default as dataToOption } from './obj/dataToOption';
/**
 *  _string_
 */
export { default as formatNumber } from './string/formatNumber';
export { default as textEllipsis } from './string/textEllipsis';
/**
 *  _mock_
 */
export { default as guid } from './mock/guid';
export * as lorem from './mock/lorem';
export { default as nanoid } from './mock/nanoid';

/**
 * _storage_
 */
export * as authority from './storage/authority';
/**
 * _types_
 */
export * from './types';
/**
 * _constant_
 */
export * from './constant';
export * from './constant/layout';
export * from './constant/date';
export { default as validateMsgEnglish } from './constant/validateMsgEnglish';
/**
 * _constant_
 */
export { default as regex } from './regex';
