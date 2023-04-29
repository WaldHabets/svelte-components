export default function genID(): string {
  return ([1e7]+1e3).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  ).toString();
}