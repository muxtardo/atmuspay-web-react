import { Link } from "react-router-dom";

const PageNotFound = (): JSX.Element => (
	<>
		<div className="row justify-content-center">
			<div className="col-lg-6 col-xl-4 mb-4">
				<div className="error-text-box">
					<svg viewBox="0 0 600 200">
						{/* Symbol */}
						<symbol id="s-text">
							<text textAnchor="middle" x="50%" y="50%" dy=".35em">404!</text>
						</symbol>

						{/* Duplicate symbols */}
						<use className="text" xlinkHref="#s-text"></use>
						<use className="text" xlinkHref="#s-text"></use>
						<use className="text" xlinkHref="#s-text"></use>
						<use className="text" xlinkHref="#s-text"></use>
						<use className="text" xlinkHref="#s-text"></use>
					</svg>
				</div>
				<div className="text-center">
					<h3 className="mt-0 mb-2">Whoops! Page not found </h3>
					<p className="text-muted mb-3">It's looking like you may have taken a wrong turn. Don't worry...
						it happens to the best of us. You might want to check your internet connection.
						Here's a little tip that might help you get back on track.</p>

					<Link to="/" className="btn btn-success waves-effect waves-light">
						Go to Home
					</Link>
				</div>
			</div>
		</div>
	</>
);

export default PageNotFound;
