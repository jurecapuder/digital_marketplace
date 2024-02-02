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
            <div className="flex justify-center">
              <Icons.logo className="h-12 w-auto" />
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer;