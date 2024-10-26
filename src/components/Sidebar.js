import React from "react";
import {
  MdHome,
  MdSubscriptions,
  MdHistory,
  MdWatchLater,
  MdThumbUp,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <MdHome  className="tex-xl" />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className="tex-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions className="tex-xl"/>,
      name: "Subscription",
    },
  ];

  const otherLinks = [
    {
        icon: <MdOutlineVideoLibrary className="tex-xl"/>,
        name: "Library",
      },
    {
      icon: <MdHistory className="tex-xl"/>,
      name: "History",
    },
    {
      icon: <MdWatchLater className="tex-xl"/>,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUp className="tex-xl"/>,
      name: "Like",
    },
    
  ];

  return (
    <div className="w-2/12 bg-[#322f2f] pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-600 bg-[#322f2f]">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={'pl-6 py-3 hover:bg-zinc-600 rounded-xl'}>
              <a href='#' className="flex items-center gap-5">
                {icon}
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col bg-[#322f2f]">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={'pl-6 py-3 hover:bg-zinc-600 rounded-xl'}>
              <a href='#' className="flex items-center gap-5">
                {icon}
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
