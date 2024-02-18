import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Link from "next/link";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Lailao Payment Gateway",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://https://lailao-payment-gateway-document.vercel.app/" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Lailao Payment Gateway"} />
        <meta property="og:description" content={frontMatter.description || "Lailao Payment Gateway"} />
        <meta property="og:site_name" content="Lailao Payment Gateway" />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@lailaolab" />
        <meta name="twitter:creator" content="@lailaolab" />
        {/* Meta Favicon */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://portal.lailaolab.la/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://portal.lailaolab.la/images/logo.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </>
    );
  },
  logo: (
    <>
      <img src="https://portal.lailaolab.la/images/logo.png" width={100} height={100} alt="Logo" />
      {/* <span>Lailaolab Payment Gateway</span> */}
    </>
  ),
  banner: {
    key: "lailao_payment_gateway_banner",
    text: (
      <p>
        🎉 Lailaolab Payment Gateway ເປີດໃຫ້ບໍລິການແລ້ວມື້ນີ້.{" "}
        <Link href={"https://portal.lailaolab.la"} target="_blank" style={{ color: "#4086F4" }}>
          ເລີ່ມຕົ້ນນຳໃຊ້
        </Link>
      </p>
    ),
    dismissible: false,
  },
  // logoLink: "https://portal.lailaolab.la",
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  // chat: {
  //   link: "https://discord.com",
  // },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
    // labels: "ສອບຖາມຂໍ້ມູນເພີ່ມເຕີມ",
    // useLink: "https://portal.lailaolab.la/feedback",
  },
  footer: {
    text: (
      <div>
        <a href="https://www.lailaolab.com/" target="_blank" style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
          <img width={150} src="https://cdn-images-1.medium.com/max/1200/1*QAv_cgwbLaSQJjHBhryt-Q.png" alt="lailaolab logo" />
          {/* <span>Lailaolab ICT Solutions ., Ltd</span> */}
        </a>
        <small>
          © Copyright 2023 | All Rights Reserved by <br />{" "}
          <Link target="_blank" href={"https://www.lailaolab.com/"}>
            Lailaolab ICT Solutions
          </Link>
        </small>
      </div>
    ),
  },
  gitTimestamp: false,
  // darkMode: false,
};

export default config;
