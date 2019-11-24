var MongoClient = require('mongodb').MongoClient;
var password = require('./database_pass');
const ObjectId = require('mongodb').ObjectId;

function connectDB(callback) {
	var url = password.url;

	MongoClient.connect(url, function(err, db) {
		if(err) {
			callback(err, null);
			return;
		}
		callback(err, db);
	});
}


exports.register = function (collections, collectionName, registerInfo, callback) {

	connectDB(function (err, db) {
		var dbo = db.db(collections);
		dbo.collection(collectionName).find({"userName": registerInfo.username}).toArray(function (err, result) {
			if (err) {
				callback(err, null);
				db.close();
				return;
			}
			if(result.length != 0){
				callback(null, "the name has been used");
				db.close();
				return;
			}
		});
		dbo.collection("personal_details").find({"userName": registerInfo.username}).toArray(function (err, result) {
			if (err) {
				callback(err, null);
				db.close();
				return;
			}
			if(result.length != 0){
				callback(null, "the name has been used");
				db.close();
				return;
			}
		});

		var new_account = {
			userName: registerInfo.username,
			password: registerInfo.password,
		};

			
		var personal_details = {
			userName: registerInfo.username,
			firstName: registerInfo.firstname,
			lastName: registerInfo.lastname,
			birthday: registerInfo.birthday,
			address: registerInfo.address,
			postcode: registerInfo.postcode,
			contactNumber: registerInfo.contactNumber,
			medical_history: registerInfo.medical_history
		};

		dbo.collection("personal_details").insertOne(personal_details, function(err, res) {
			if (err) {
				callback(err, null);
				db.close();
				return;
			}
		});

		dbo.collection(collectionName).insertOne(new_account, function (err, result) {
			if (err){
				callback(err, null);
				db.close();
				return;
			}
			
		});
		callback(null, 'successful');

		db.close();
		return;
	
	});
}



exports.insert_data = function(collections, collectionName, json, callback) {
	connectDB(function (err, db) {
		var dbo = db.db(collections);
		dbo.collection(collectionName).insertOne(json, function(err, res){
			if(err){
				callback(err, null);
				db.close();
				return;
			}
			callback(null, '1');
			db.close();
			return;
		});
	});
}


exports.show = function (collections, collectionName, json, callback) {
	connectDB(function (err, db) {
		var dbo = db.db(collections);
		dbo.collection(collectionName).find({"userName": json}).toArray(function (err, result) {
			if (err){
				callback(err, null);
				db.close();
				return;
			}
			console.log(result);
			callback(null, result);
			db.close();
			return;
		});
	});
}

exports.update_data = function (collections, collectionName, json, callback) {
	connectDB(function (err, db) {
		var changes = {
			id: json.id,
			happen_new_date: json.h_new_date,
			happen_old_date: json.h_old_date,
			date: new Date().toLocaleString(),
			inchange: json.new_in,
			outchange: json.new_out,
			details: json.new_details
		};
		var dbo = db.db(collections);

		var updateOpt = { "id": changes.id, "happen_date": changes.happen_old_date};
		var updateDetail = {$set: {"happen_date": changes.happen_new_date, "date": changes.date, "money_in": changes.inchange, "money_out": changes.outchange, "details": changes.details}};

		dbo.collection("dataCol").updateOne(updateOpt, updateDetail, function (err, res) {
			if (err){
				callback(err, null);
				db.close();
				return;
			}
			callback(null, '1');
			db.close();
			return;
		});
	});
}


exports.delete = function (collections, collectionName, json, callback) {
	connectDB(function(err, db) {
		var dbo = db.db(collections);

		dbo.collection(collectionName).remove(json, function(err, obj) {
			if(err){
				callback(err, null);
				db.close();
				return;
			}
			callback(null, '1');
			db.close();
			return;
		})
	});
}

exports.comments = function(collections, collectionName, comment, callback) {
	connectDB(function(err, db) {
		var dbo = db.db(collections);

		dbo.collection(collectionName).insertOne(comment, function(err, obj) {
			if(err){
				callback(err, null);
				db.close();
				return;
			}
			callback(null, '1');
			db.close();
			return;
		})
	});
}





