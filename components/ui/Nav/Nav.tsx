import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "SignUp" },
  { href: "https://nextjs.org/docs", label: "Register" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex bg-blue-300 text-white items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-2xl text-blue-800 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
