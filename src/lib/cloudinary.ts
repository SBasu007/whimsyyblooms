/**
 * Injects Cloudinary transformation parameters into a Cloudinary image URL.
 *
 * Transforms:  w_{width}, q_auto (automatic quality), f_auto (best format for browser)
 *
 * Example:
 *   Input:  https://res.cloudinary.com/dxfcddrjr/image/upload/v123/foo.jpg
 *   Output: https://res.cloudinary.com/dxfcddrjr/image/upload/w_800,q_auto,f_auto/v123/foo.jpg
 *
 * If the URL is not a Cloudinary URL the original is returned unchanged.
 */
export function cloudinaryUrl(
  url: string | null | undefined,
  width: number,
  quality = "auto"
): string {
  if (!url) return "";

  const CLOUDINARY_BASE = "https://res.cloudinary.com/";
  const UPLOAD_SEGMENT = "/image/upload/";

  if (!url.startsWith(CLOUDINARY_BASE) || !url.includes(UPLOAD_SEGMENT)) {
    return url;
  }

  // Avoid double-injecting transforms
  const afterUpload = url.split(UPLOAD_SEGMENT)[1];
  if (afterUpload && /^[a-z_]+[_,]/.test(afterUpload) && afterUpload.includes(",")) {
    // Already has transforms
    return url;
  }

  const transforms = `w_${width},q_${quality},f_auto`;
  return url.replace(UPLOAD_SEGMENT, `${UPLOAD_SEGMENT}${transforms}/`);
}
