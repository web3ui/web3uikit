import { IWalletConnectExtensionAdapter } from "@web3auth/base";
import bowser from "bowser";
import { memo, useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";

import Image from "./Image";

const walletConnectIcon = <Image imageId="wallet-connect" width="114px" />;

interface WalletConnectProps {
  walletConnectUri: string;
  wcAdapters: IWalletConnectExtensionAdapter[];
}

interface IMobileRegistryEntry {
  name: string;
  logo: string;
  universalLink: string;
  deepLink: string;
  href: string;
}
type platform = "mobile" | "desktop";

type os = "iOS" | "Android";

function formatIOSMobile(params: { uri: string; universalLink?: string; deepLink?: string }) {
  const encodedUri: string = encodeURIComponent(params.uri);
  if (params.universalLink) {
    return `${params.universalLink}/wc?uri=${encodedUri}`;
  }
  if (params.deepLink) {
    return `${params.deepLink}${params.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}`;
  }
  return "";
}

function formatMobileRegistryEntry(
  entry: IWalletConnectExtensionAdapter,
  walletConnectUri: string,
  os: os,
  platform: "mobile" | "desktop" = "mobile"
): IMobileRegistryEntry {
  const universalLink = entry[platform].universal || "";
  const deepLink = entry[platform].native || "";
  return {
    name: entry.name || "",
    logo: entry.logo || "",
    universalLink,
    deepLink,
    href: os === bowser.OS_MAP.iOS ? formatIOSMobile({ uri: walletConnectUri, universalLink, deepLink }) : walletConnectUri,
  };
}

function formatMobileRegistry(
  registry: IWalletConnectExtensionAdapter[],
  walletConnectUri: string,
  os: os,
  platform: platform = "mobile"
): IMobileRegistryEntry[] {
  return Object.values<IWalletConnectExtensionAdapter>(registry)
    .filter((entry) => !!entry[platform].universal || !!entry[platform].native)
    .map((entry) => formatMobileRegistryEntry(entry, walletConnectUri, os, platform));
}

function WalletConnect(props: WalletConnectProps) {
  const { walletConnectUri, wcAdapters } = props;
  const [links, setLinks] = useState<IMobileRegistryEntry[]>([]);

  const deviceDetails = useMemo<{ platform: platform; os: os }>(() => {
    const browser = bowser.getParser(window.navigator.userAgent);
    return { platform: browser.getPlatformType() as platform, os: browser.getOSName() as os };
  }, [window.navigator.userAgent]);

  useEffect(() => {
    if (deviceDetails.platform === bowser.PLATFORMS_MAP.mobile) {
      const mobileLinks = formatMobileRegistry(wcAdapters, walletConnectUri, deviceDetails.os, deviceDetails.platform);
      setLinks(mobileLinks);
    }
  }, [wcAdapters, deviceDetails.os, deviceDetails.platform, walletConnectUri]);

  // TODO: show only wcAdapters of current chain
  return (
    <div className="w3ajs-wallet-connect w3a-wallet-connect">
      <div
        className={`w3ajs-wallet-connect__container w3a-wallet-connect__container${
          deviceDetails.os === bowser.OS_MAP.Android ? " w3a-wallet-connect__container--android" : ""
        }`}
      >
        <div className="w3a-wallet-connect__logo">{walletConnectIcon}</div>
        {deviceDetails.platform === bowser.PLATFORMS_MAP.desktop ? (
          <div className="w3a-wallet-connect__container-desktop">
            <div>Scan QR code with a WalletConnect-compatible wallet</div>
            <div className="w3ajs-wallet-connect-qr w3a-wallet-connect-qr">
              <QRCode size={200} value={walletConnectUri} />
            </div>
          </div>
        ) : (
          <div className="w3a-wallet-connect__container-btn-group">
            {links.map((link) => {
              return deviceDetails.os === bowser.OS_MAP.iOS ? (
                <div className="w3a-wallet-connect__container-ios">
                  <a key={link.name} href={link.href} rel="noopener noreferrer" target="_blank">
                    <button type="button" className="w3a-button w3a-button--icon">
                      <img src={link.logo} height="auto" width="auto" alt={`login-${link.name}`} />
                    </button>
                    <p className="w3a-adapter-item__label">{link.name}</p>
                  </a>
                </div>
              ) : (
                <div className="w3a-wallet-connect__container-android">
                  <a key={link.name} href={link.href} rel="noopener noreferrer" target="_blank">
                    <button type="button" className="w3a-button">
                      Connect
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(WalletConnect);
