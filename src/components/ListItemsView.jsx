import PropTypes from "prop-types";
import RowItemView from "./RowItemView";

const ListItemsView = ({ title, items, handlerDeleteItem }) => {
	return (
		<>
			<h4 className="mt-5">{title}</h4>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Producto</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{items.map(({ id, product, price, quantity }) => {
						return (
							<RowItemView
								key={id}
								id={id}
								product={product}
								price={price}
								quantity={quantity}
								handlerDeleteItem={(id) => handlerDeleteItem(id)}
							/>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

ListItemsView.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	handlerDeleteItem: PropTypes.func.isRequired,
};

export default ListItemsView;
