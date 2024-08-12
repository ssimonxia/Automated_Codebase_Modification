## ClassDef TransportationFeeListModel
**TransportationFeeListModel**: The function of TransportationFeeListModel is to represent a model for storing transportation fee information.

**Attributes**:
- send_city: A character field representing the city from which the transportation is sent.
- receiver_city: A character field representing the city to which the transportation is received.
- weight_fee: A float field representing the fee based on the weight of the transportation.
- volume_fee: A float field representing the fee based on the volume of the transportation.
- min_payment: A float field representing the minimum payment required for the transportation.
- transportation_supplier: A character field representing the transportation supplier.
- creater: A character field representing the creator of the transportation fee.
- openid: A character field representing the OpenID associated with the transportation fee.
- is_delete: A boolean field indicating whether the transportation fee has been deleted.
- create_time: A DateTime field representing the time when the transportation fee was created.
- update_time: A DateTime field representing the time when the transportation fee was last updated.

**Code Description**:
The `TransportationFeeListModel` class is a model class that inherits from the `models.Model` class provided by Django. It represents a table in the database that stores transportation fee information. The class defines various fields to store different attributes of the transportation fee, such as the send city, receiver city, weight fee, volume fee, minimum payment, transportation supplier, creator, OpenID, deletion status, creation time, and update time.

The class also defines a nested `Meta` class, which provides metadata for the `TransportationFeeListModel` model. The `Meta` class specifies the database table name as 'transportationfee', the verbose name as 'Transportation Fee', the verbose name in plural form as 'Transportation Fee', and the default ordering as descending order based on the 'id' field.

The `TransportationFeeListModel` model is used in various parts of the project. It is used in the `TransportationFeeListFilter` class in the `payment/filter.py` file to define the available filter fields and lookup types for querying transportation fee records. It is also used in several serializers in the `payment/serializers.py` file, such as `FreightGetSerializer`, `FreightPostSerializer`, `FreightUpdateSerializer`, `FreightPartialUpdateSerializer`, and `FreightfileRenderSerializer`, to define the fields and behavior for serializing and deserializing transportation fee data. Additionally, it is used in the `TransportationFeeListViewSet` class in the `payment/views.py` file to retrieve the queryset of transportation fee records based on the user and project.

**Note**: The `TransportationFeeListModel` class represents a model for storing transportation fee information in the database. It is used in various parts of the project for querying, creating, updating, and deleting transportation fee records. Developers should refer to the specific use cases and documentation of the related classes and files mentioned above for more details on how to interact with the `TransportationFeeListModel` model.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the TransportationFeeListModel class.

**attributes**:
- db_table: Specifies the database table name for the model.
- verbose_name: Sets a human-readable name for the model.
- verbose_name_plural: Defines a plural name for the model.
- ordering: Specifies the default ordering for query sets of the model.

**Code Description**:
The Meta class in the TransportationFeeListModel defines metadata options for the model. The db_table attribute is set to 'transportationfee', indicating the database table name to be used for the model. The verbose_name attribute is assigned 'Transportation Fee', providing a human-readable name for the model. The verbose_name_plural attribute is set to "Transportation Fee" to define the plural name for the model. Lastly, the ordering attribute is configured with ['-id'], specifying the default ordering of query sets to be based on the 'id' field in descending order.

**Note**:
Developers can customize the metadata options for the TransportationFeeListModel by modifying the attributes within the Meta class according to their specific requirements.
***
