const basePath = process.env.NODE_ENV === "production" ? "/jurisia-site" : "";

export function assetUrl(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
