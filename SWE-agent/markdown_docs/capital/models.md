## ClassDef ListModel
**ListModel**: The function of ListModel is to define a model for managing capital data with fields such as capital name, quantity, cost, creator information, openid, deletion label, creation time, and update time.

**attributes**: 
- capital_name: A CharField to store the name of the capital.
- capital_qty: A BigIntegerField to store the quantity of the capital.
- capital_cost: A FloatField to store the cost of the capital.
- creater: A CharField to store information about who created the capital data.
- openid: A CharField to store the openid related to the capital data.
- is_delete: A BooleanField to indicate the deletion status of the capital data.
- create_time: A DateTimeField to store the creation time of the capital data.
- update_time: A DateTimeField to store the last update time of the capital data.

**Code Description**: 
The ListModel class is a model in Django's ORM (Object-Relational Mapping) system that represents a table in the database. It inherits from the models.Model class provided by Django. The class defines several fields to store information related to capital data such as name, quantity, cost, creator details, openid, deletion status, creation time, and update time. Additionally, the class Meta inner class is used to specify metadata for the model, including the database table name, verbose names for better readability, and the default ordering of records based on the 'id' field in descending order.

**Note**: 
Developers can use this ListModel class to interact with the database table named 'capital' and perform operations such as creating, updating, deleting, and querying capital data. The class provides a structured way to manage and access information related to capital entities within the application.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the ListModel class.

**attributes**:
- db_table: Specifies the database table name for the model.
- verbose_name: Sets a human-readable name for the model.
- verbose_name_plural: Defines the plural name for the model.
- ordering: Specifies the default ordering for query sets of the model.

**Code Description**:
The Meta class in the ListModel class is used to provide metadata options for the model. In this specific implementation:
- The db_table attribute is set to 'capital', indicating the database table name for the model.
- The verbose_name attribute is set to 'Capital', providing a human-readable name for the model.
- The verbose_name_plural attribute is set to "Capital", defining the plural name for the model.
- The ordering attribute is set to ['-id'], which specifies the default ordering for query sets of the model based on the 'id' field in descending order.

**Note**:
Developers can customize the Meta class attributes to tailor the behavior and presentation of the ListModel class according to their specific requirements.
***
