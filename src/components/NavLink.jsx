import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive =
        href === "/"
            ? pathname === "/"
            : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`${isActive ? "bg-sky-500 text-white rounded px-3" : ""
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
