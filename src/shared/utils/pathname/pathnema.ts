import { match } from "path-to-regexp";

export function pathnameRegexp(href: string, pathname: string): boolean {
	return !!match(href)(pathname);
}
