import Link from "next/link";

export default function Navbar() {
    return <nav className="navbar">
        <h1>Navbar</h1>
        <div className="links">
            <Link href='/jobs'> Jobs </Link>
        </div>
    </nav>
}