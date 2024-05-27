"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="bottom-0 right-0 w-4/5 fixed bg-black p-4 text-white">
        <ul className="flex justify-around">
          <li className="mx-4">
            <p className="text-white font-bold">©MANSA CAPITAL 2023</p>
            <p className="text-u underline text-blue-500 text-sm">
              email us: support@mansa-capital.com
            </p>
          </li>
          <li className="mx-4 text-black">
            <p>
              Message us on <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </li>
          <li className="mx-4">
            <div>
              <ul className="flex flex-row text-sm text-gray-500">
                <li>
                  <Link href="/policies/terms-and-conditions">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="mx-1">|</li>
                <li>
                  <Link href="/policies/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="mx-1">|</li>
                <li>
                  <Link href="/policies/customer-aggrement">
                    Customer Agreement
                  </Link>
                </li>
                <li className="mx-1">|</li>
                <li>
                  <Link href="/policies/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
