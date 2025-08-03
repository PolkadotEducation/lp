"use client";

import Image from "next/image";
import logo from "@/public/assets/icons/logo.svg";
import logoMobile from "@/public/assets/icons/logoMobile.svg";
import { Button } from "./button";
import { useTranslations } from "next-intl";
import LanguageSelector from "./languageSelector";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

const Header = () => {
  const t = useTranslations("lp");

  const isDesktopInitial = useMediaQuery("(min-width: 768px)");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(isDesktopInitial);
  }, [isDesktopInitial]);

  return (
    <div className="flex w-screen bg-white justify-center">
      <div className="flex max-w-[1320px] w-full justify-between py-[8px] items-center px-5">
        <Image
          src={isDesktop ? logo : logoMobile}
          alt="Logo"
          width={isDesktop ? 166 : 29}
          height={48}
          className={isDesktop ? "w-[166px] h-[48px]" : "w-[29px] h-[48px]"}
          unoptimized
        />
        <div className="flex gap-x-4 md:gap-x-10 items-center">
          <LanguageSelector />
          <Button onClick={() => (window.location.href = "http://app.polkadot.education")}>{t("launch-app")}</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
