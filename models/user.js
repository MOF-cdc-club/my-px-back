module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user',{
		id: {
			type:DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		email: {
       		type: DataTypes.STRING,
       		allowNull: false,
       		unique: {
       		name: 'user_email',
       		msg: 'A user with this email already exists.'
        	}
      	},
		serial_number: {
			type: DataTypes.STRING(11),
			allowNull: false,
			unique:true,
		},
		expire_date: {
			type: DataTypes.DATEONLY(11),
			allowNull: false,
		},
		rank: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		warning: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		authority: {
			type: DataTypes.BOOLEAN,
			defaultValue: 1,
		},
	});
}