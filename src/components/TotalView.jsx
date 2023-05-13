import PropTypes from "prop-types";

const TotalView = ({ total }) => {
	return (
		<>
			<div className="text-end">
				<span className="badge bg-success py-2 px-4">{total}</span>
			</div>
		</>
	);
};

TotalView.propTypes = {
	total: PropTypes.number.isRequired,
};

export default TotalView;
