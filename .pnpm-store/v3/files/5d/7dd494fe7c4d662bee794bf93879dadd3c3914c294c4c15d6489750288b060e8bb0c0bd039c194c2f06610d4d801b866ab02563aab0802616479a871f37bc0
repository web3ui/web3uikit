/**
 * Returns whether the given image URL exists
 */
function imgExists(url: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement("img");
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Extracts a name for the site from the DOM
 */
const getSiteName = (window: Window): string => {
  const { document } = window;

  const siteName = document.querySelector<HTMLMetaElement>('head > meta[property="og:site_name"]');
  if (siteName) {
    return siteName.content;
  }

  const metaTitle = document.querySelector<HTMLMetaElement>('head > meta[name="title"]');
  if (metaTitle) {
    return metaTitle.content;
  }

  if (document.title && document.title.length > 0) {
    return document.title;
  }

  return window.location.hostname;
};

/**
 * Extracts an icon for the site from the DOM
 */
async function getSiteIcon(window: Window): Promise<string> {
  try {
    const { document } = window;

    // Use the site's favicon if it exists
    let icon = document.querySelector<HTMLLinkElement>('head > link[rel="shortcut icon"]');
    if (icon && (await imgExists(icon.href))) {
      return icon.href;
    }

    // Search through available icons in no particular order
    icon = Array.from(document.querySelectorAll<HTMLLinkElement>('head > link[rel="icon"]')).find((_icon) => Boolean(_icon.href));
    if (icon && (await imgExists(icon.href))) {
      return icon.href;
    }

    return "";
  } catch (error) {
    return "";
  }
}

/**
 * Gets site metadata and returns it
 *
 */
const getSiteMetadata = async (): Promise<{ name: string; icon: string }> => ({
  name: getSiteName(window),
  icon: await getSiteIcon(window),
});

export default getSiteMetadata;
