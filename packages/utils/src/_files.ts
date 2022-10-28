function download(source: string) {
  const fileName = source.split('/').pop() as string;
  const el = document.createElement('a');
  el.setAttribute('href', source);
  el.setAttribute('download', fileName);
  document.body.appendChild(el);
  el.click();
  el.remove();
}

function getBase64(
  img: Blob | undefined,
  callback: (base64Url: string) => void,
) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img as any);
}

const _files = {
  getBase64,
  download,
};
export default _files;
