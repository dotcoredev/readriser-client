import { match } from "path-to-regexp";

export function pathnameRegexp(href: string, pathname: string): boolean {
	href = href
		.split("/")
		.filter((value) => value != "dashboard")
		.join("/");
	pathname = pathname
		.split("/")
		.filter((value) => value != "dashboard")
		.join("/");

	if (pathname === href) return true;
	if (!href) return false;

	return !!match(href)(pathname) || pathname.startsWith(href);
}
