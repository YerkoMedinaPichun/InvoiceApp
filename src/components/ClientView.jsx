import PropTypes from "prop-types";

const ClientView = ({ title, client }) => {
	// const { name, lastname, adress } = client;
	// const { country, region, city, commune, street, number } = adress;

	const {
		name,
		lastname,
		adress: { country, region, city, commune, street, number },
	} = client;

	return (
		<>
			<h3>{title}</h3>
			<ul className="list-group">
				<li className="list-group-item active">
					{name} {lastname}
				</li>

				<li className="list-group-item">
					{country}, {region}, {city}, {commune}, {street} {number}
				</li>
			</ul>
		</>
	);
};

ClientView.propTypes = {
	title: PropTypes.string.isRequired,
	client: PropTypes.object.isRequired,
};

export default ClientView;
