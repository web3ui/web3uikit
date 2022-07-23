import { JRPCEngine } from "@toruslabs/openlogin-jrpc";

import log from "./loglevel";
import messages from "./messages";
import { getPreopenInstanceId, NOOP } from "./utils";

/**
 * Returns whether the given image URL exists
 * @param url - the url of the image
 * @returns - whether the image exists
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
const getSiteName = (window: Window) => {
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
async function getSiteIcon(window: Window): Promise<string | null> {
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

  return null;
}

/**
 * Gets site metadata and returns it
 *
 */
const getSiteMetadata = async () => ({
  name: getSiteName(window),
  icon: await getSiteIcon(window),
});

/**
 * Sends site metadata over an RPC request.
 */
export default async function sendSiteMetadata(engine: JRPCEngine): Promise<void> {
  try {
    const domainMetadata = await getSiteMetadata();
    // call engine.handle directly to avoid normal RPC request handling
    engine.handle(
      {
        jsonrpc: "2.0",
        id: getPreopenInstanceId(),
        method: "wallet_sendDomainMetadata",
        params: domainMetadata,
      },
      NOOP
    );
  } catch (error) {
    log.error({
      message: messages.errors.sendSiteMetadata(),
      originalError: error,
    });
  }
}
