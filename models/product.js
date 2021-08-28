module.exports = (sequelize, DataTypes) => {
	return sequelize.define('product',{
		product_id: {
			type:DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			unique: true,
		},
		product_name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		remaining: {
			type: DataTypes.INT(),
			allowNull: false
		},
		price: {
			type: DataTypes.INT(),
			allowNull: false,
			unique:true,
		},
		limit_item: {
			type: DataTypes.BOOLEAN(),
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING(10),
			allowNull: false,
		}
	});
}