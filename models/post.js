module.exports = (sequelize, DataTypes) => {
	const board = sequelize.define('board',{
		order_id: {
			type:DataTypes.UUID,
			defaultValue: Sequelize.UUIDV4,
			unique: true,
		},
		title: {
			type: DataTypes.STRING(),
			allowNull: false,
			validate: {
				len: {
				 args: [3, 50],
   				 msg: '글자수는 50글자 이내이어야 합니다.'
    			}
			}
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		created: {
			
		}
	});
	board.associate = function (models) {
		order.belongsTo(models.user, {
			onDelete: 'cascade',
			foreignKey: 'writer',
			sourceKEy: 'id'
		})
	}
	return board;
}