import { _isClient } from './_isClient';

const _isSsr = !_isClient;
export default _isSsr;
