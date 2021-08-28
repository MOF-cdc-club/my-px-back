module.exports = (sequelize, DataTypes) => {
	const order = sequelize.define('order',{
		order_id: {
			type:DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			unique: true,
		},
		order_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date()
		},
		quantitiy: {
			type: DataTypes.INT(),
			allowNull: false
		},
	});
	order.associate = function (models) {
		order.belongsTo(models.user, {
			onDelete: 'cascade',
			foreignKey: 'orderer_id',
			sourceKEy: 'id'
		})
	}
	return order;
}