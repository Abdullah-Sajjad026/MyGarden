export function toKebabCase(str: string): string {
  return str
    ?.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    ?.join('-')
}


export async function fetcher(...args: unknown[]) {
  // @ts-ignore
  let res = await fetch(...args)
  return res.json()
}

export function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}