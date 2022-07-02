const regex = {
  /**
   * isExternalLink regexp
   */
  isExternalLink: /^(https?:|mailto:|tel:)/,
  /**
   * url regexp
   */
  urlRegexp:
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
  isImg: /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/, // /\.(gif|jpg|jpeg|png|svg|JPG|PNG|GIF|JPEG|SVG)$/;

  /* Positive integer */
  positiveInteger: /^[1-9]*[1-9][0-9]*$/,

  /* Must be a number */
  number: /^\d+$/,
  /* The decimal place of numeric type can only enter the second digit */
  decimal2: /^[0-9]+(.[0-9]{2})?$/,
  unEmpty: /^\S+$/,
  username: /^[a-z_0-9]{2,16}$/,
  password: /^[a-zA-Z_0-9]{6,32}$/,
  mobPhone: /^0?(13|14|15|16|17|18|19)\d{9}$/,
  captcha: /^\d{4}$/,
  smsVerify: /^\d{4}$/,
  telPhone: /^(\d{3,4}-?\d{7,8})$/,
  phone: /^1\d{10}$/,
  phoneCode: /^(\d{4,6})$/,
  personCode:
    /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
  bankCard: /^(\d{16}|\d{19})$/,
  integer: /^[0-9][0-9]*$/,
  email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
  url: /^([a-z]+:\/\/)?([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/,
  httpUrl:
    /^(http|https):\/\/([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/,
};

export default regex;
