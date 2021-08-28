module.exports = (sequelize, DataTypes) => {
	const sale = sequelize.define('sale',{
		monthly_sale: {
			type: DataTypes.INT(),
			allowNull: false
		},
		weekly_sale: {
			type: DataTypes.INT(),
			allowNull: false
		},
	});

	sale.associate = function (models) {
		sale.belongsTo(models.product, {
			onDelete: 'cascade',
			foreignKey: 'product_id',
			sourceKEy: 'product_id'
		})
	}
	return sale;
}


