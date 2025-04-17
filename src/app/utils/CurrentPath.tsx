"use client"
import { usePathname } from 'next/navigation';


const CurrentPath = () => {
  const path = usePathname();

  const hiddenNav = ["/signin", "/signup"];
  const currunetPath = hiddenNav.includes(path.toString());
  return currunetPath
}

export default CurrentPath