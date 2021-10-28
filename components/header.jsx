import Link from 'next/link';

function Header(props) {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <a>Accueil</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/articles"}>
                            <a>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/categories"}>
                            <a>Categories</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;