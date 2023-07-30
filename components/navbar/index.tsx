"use client";

import Link from "next/link";
import React from "react";
import { LuCode, LuFileImage, LuFileVideo2, LuFileVolume, LuLayoutDashboard, LuMessageSquare, LuSettings } from "react-icons/lu";

const NavOptions = [
  {
    color: "text-pink-500",
    label: "Dashboard",
    link: '/dashboard',
    icon: LuLayoutDashboard
  },{
    color: "text-purple-500",
    label: "Conversation",
    link: '/conversation',
    icon: LuMessageSquare
  },{
    color: "text-red-500",
    label: "Image Generation",
    link: '/image-generation',
    icon: LuFileImage
  },{
    color: "text-orange-500",
    label: "Video Generation",
    link: '/video-generation',
    icon: LuFileVideo2
  },{
    color: "text-green-500",
    label: "Music Generation",
    link: '/music-generation',
    icon: LuFileVolume
  },{
    color: "text-black-500",
    label: "Code Generation",
    link: '/code-generation',
    icon: LuCode
  },{
    color: "text-white-500",
    label: "Settings",
    link: '/settings',
    icon: LuSettings

  }
]

const NavBar = () => {
  return (
    <nav className="block">
      <ul>
        {NavOptions.map(opt =>
          <li key={opt.label} className="py-2">
            <Link 
              className="flex justify-left items-center w-full hover:bg-gray-500 p-1 rounded" 
              href={opt.link}>
              <opt.icon className={opt.color} />
              <p className="px-2">{opt.label}</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
