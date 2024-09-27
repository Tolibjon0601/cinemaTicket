import { Link, useLocation } from "react-router-dom";
import HeaderSeans from "../../icons/headerSeans";
import PosterImg from "../../icons/headerAfisha";

const Header = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<header className="py-[22px] flex items-center justify-between">
			<div className="ml-20">
				<Link to="/">
					<img src="./image/header_logo.svg" alt="Company Logo" />
				</Link>
			</div>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<Link to="/">
							<PosterImg color={currentPath === "/" ? "#c61f1f" : "#a1a1a1"} />
						</Link>
					</li>

					<li>
						<Link to="/seanspage">

							<HeaderSeans color={currentPath === "/seanspage" ? "#c61f1f" : "#a1a1a1"} />
						</Link>
					</li>

					<li>
						<Link to="/ticketpage">
							<img src="./image/header_bilet.svg" alt="" />
						</Link>
					</li>
					<li>
						<Link to="/searchpage">
							<img src="./image/header_search.svg" alt="" />
						</Link>
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-5">
				<select name="lang" className="py-2 px-4 text-lg rounded-xl text-black">
					<option value="">Ру</option>
					<option value="">Uz</option>
				</select>
				<Link to="/login">
					<button className="py-[22px] px-[66px] bg-main_color rounded-xl font-medium text-lg text-white">
						Войти
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
