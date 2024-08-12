## ClassDef AsnListModel
**AsnListModel**: The function of AsnListModel is to represent a model for the ASN (Advanced Shipping Notice) list in the project.

**Attributes**:
- asn_code: A character field representing the ASN code.
- asn_status: A BigIntegerField representing the status of the ASN.
- total_weight: A FloatField representing the total weight of the ASN.
- total_volume: A FloatField representing the total volume of the ASN.
- total_cost: A FloatField representing the total cost of the ASN.
- supplier: A character field representing the supplier of the ASN.
- creater: A character field representing the creator of the ASN.
- bar_code: A character field representing the bar code of the ASN.
- openid: A character field representing the openid of the ASN.
- transportation_fee: A JSONField representing the transportation fee of the ASN.
- is_delete: A BooleanField representing the delete label of the ASN.
- create_time: A DateTimeField representing the create time of the ASN.
- update_time: A DateTimeField representing the update time of the ASN.

**Code Description**:
The AsnListModel class is a model class that represents the ASN (Advanced Shipping Notice) list in the project. It inherits from the models.Model class provided by Django.

The class defines various fields that represent different attributes of an ASN. These fields include asn_code, asn_status, total_weight, total_volume, total_cost, supplier, creater, bar_code, openid, transportation_fee, is_delete, create_time, and update_time. Each field has a specific data type and additional parameters such as max_length, default value, and verbose_name for customization.

The class also defines a Meta inner class that provides metadata for the model. It specifies the database table name, verbose names for the model and its plural form, and the default ordering of the model instances.

The AsnListModel class is used to store and manage ASN data in the project. It represents a single ASN entry and provides access to its attributes through the defined fields. The class can be used to create, update, and query ASN data in the project's database.

**Note**: The AsnListModel class is used in various parts of the project, such as in the admin.py, filter.py, serializers.py, and views.py files. It is used to define the model for the ASN list, filter the ASN list based on certain criteria, serialize and deserialize ASN data, and handle CRUD operations for ASN data in the views.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the AsnListModel class.

**attributes**: 
- db_table: Specifies the database table name for the model.
- verbose_name: Sets a human-readable name for the model.
- verbose_name_plural: Provides a plural name for the model.
- ordering: Defines the default ordering for query results.

**Code Description**: 
The Meta class in the AsnListModel class is used to specify metadata options for the model. In this case, the db_table attribute is set to 'asnlist', which indicates the database table name for the model is 'asnlist'. The verbose_name attribute is set to 'ASN List', providing a human-readable name for the model. The verbose_name_plural attribute is set to "ASN List", which gives a plural name for the model. Lastly, the ordering attribute is set to ['-id'], indicating that query results should be ordered by the 'id' field in descending order by default.

**Note**: 
Developers can customize the Meta class in a Django model to define various options and behaviors for the model. These options help in managing database table names, human-readable names, plural names, and default query ordering.
***
## ClassDef AsnDetailModel
**AsnDetailModel**: The AsnDetailModel class represents the model for the ASN (Advanced Shipping Notice) detail in the project.

**Attributes**:
- asn_code: A character field representing the ASN code.
- asn_status: A BigIntegerField representing the status of the ASN.
- supplier: A character field representing the supplier of the ASN.
- goods_code: A character field representing the code of the goods.
- goods_desc: A character field representing the description of the goods.
- goods_qty: A BigIntegerField representing the quantity of the goods.
- goods_actual_qty: A BigIntegerField representing the actual quantity of the goods.
- sorted_qty: A BigIntegerField representing the quantity of goods that have been sorted.
- goods_shortage_qty: A BigIntegerField representing the quantity of goods that are in shortage.
- goods_more_qty: A BigIntegerField representing the quantity of goods that are in excess.
- goods_damage_qty: A BigIntegerField representing the quantity of goods that are damaged.
- goods_weight: A FloatField representing the weight of the goods.
- goods_volume: A FloatField representing the volume of the goods.
- goods_cost: A FloatField representing the cost of the goods.
- creater: A character field representing the creator of the ASN.
- openid: A character field representing the OpenID.
- is_delete: A BooleanField indicating whether the ASN detail is deleted.
- create_time: A DateTimeField representing the creation time of the ASN detail.
- update_time: A DateTimeField representing the last update time of the ASN detail.

**Code Description**:
The AsnDetailModel class is a Django model that represents the details of an ASN in the project. It contains various fields to store information such as the ASN code, status, supplier, goods details, quantities, weight, volume, cost, creator, and timestamps.

The class also includes a Meta inner class that defines the database table name, verbose names for the model and its plural form, and the default ordering of the records.

The AsnDetailModel class is used in various parts of the project, including the admin.py, filter.py, serializers.py, and views.py files. It is used for creating, updating, and retrieving ASN details, as well as performing operations such as moving goods to bins and generating reports.

In the views.py file, there are methods for creating, updating, and deleting ASN details. These methods perform various checks and validations, such as verifying the ownership of the data, checking the ASN status, and updating related stock quantities.

The AsnDetailModel class is also used in serializers.py for defining serializers for different operations, such as retrieving, creating, updating, and partial updating ASN details.

The AsnDetailModel class is an important component of the project's ASN management system, providing a structured and organized way to store and manage ASN details.

**Note**: The AsnDetailModel class should be used in conjunction with other classes and components of the project to fully utilize its functionality. It is important to understand the project's overall architecture and how the AsnDetailModel class fits into it.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the AsnDetailModel class.

**attributes**:
- db_table: Specifies the database table name for the model.
- verbose_name: Sets a human-readable name for the model.
- verbose_name_plural: Sets a human-readable plural name for the model.
- ordering: Defines the default ordering for query sets of the model.

**Code Description**:
The Meta class within the AsnDetailModel class in models.py file is used to provide metadata options for the AsnDetailModel class. 
- The db_table attribute is set to 'asndetail', specifying the database table name for the model.
- The verbose_name attribute is set to 'ASN Detail', providing a human-readable name for the model.
- The verbose_name_plural attribute is set to "ASN Detail", offering a human-readable plural name for the model.
- The ordering attribute is set to ['-id'], indicating the default ordering for query sets of the model based on the 'id' field in descending order.

**Note**:
Developers can customize the metadata options in the Meta class to tailor the behavior and presentation of the AsnDetailModel class in the Django application.
***
