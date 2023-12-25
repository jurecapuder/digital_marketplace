"use client";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { User } from "../payload-types";

const UserAccountNav = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black">Username</p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
