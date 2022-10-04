/**
 * split the url into a list
 * @param url the url to convert
 * @returns the split array
 * @example /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
 */
export default function urlToList(url?: string): string[] {
  if (!url || url === '/') {
    return ['/'];
  }
  const urlList = url.split('/').filter((i) => i);
  return urlList.map((_, index) => `/${urlList.slice(0, index + 1).join('/')}`);
}
