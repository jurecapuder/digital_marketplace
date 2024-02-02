"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";

const Footer = () => {
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  const pathname = usePathname();

  return (
    <footer className="bg-white flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Icons.logo className="h-12 w-auto" />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div aria-hidden="true" className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90" />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">
                    Become a seller
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer;