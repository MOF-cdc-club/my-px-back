import sequelize from 'sequelize';

const orderData = (sequelize, DataTypes) => {
	const order = sequelize.define('Order',{
		order_id: {
			type:DataTypes.UUID,
			defaultValue: sequelize.UUIDV4,
			unique: true,
		},
		order_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		},
		quantitiy: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	});
	
	order.associate = function (models) {
		order.belongsTo(models.User, {
			onDelete: 'cascade',
			foreignKey: 'orderer_id',
			sourceKEy: 'id'
		})
	}
	return order;
}
export default orderData;