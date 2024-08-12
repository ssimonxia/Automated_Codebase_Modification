## ClassDef AsnListFilter
**AsnListFilter**: The function of AsnListFilter is to define a filter for the AsnListModel based on specified fields and their corresponding lookup types.

**Attributes**:
- `model`: Specifies the model to be filtered, which is AsnListModel in this case.
- `fields`: Defines the fields of the model and their corresponding lookup types for filtering.

**Code Description**:
The `AsnListFilter` class is a subclass of `FilterSet` and is used to define a filter for the `AsnListModel` based on specified fields and their corresponding lookup types. It provides a way to filter the queryset of `AsnListModel` based on various conditions.

The `Meta` class within `AsnListFilter` is used to define the model and fields to be filtered. The `model` attribute specifies the model to be filtered, which is `AsnListModel` in this case. The `fields` attribute is a dictionary that defines the fields of the model and their corresponding lookup types for filtering.

The lookup types specified in the `fields` dictionary determine how the filtering is performed. For example, the lookup type 'exact' performs an exact match, 'contains' performs a case-sensitive substring match, and 'iexact' performs a case-insensitive exact match. Other lookup types such as 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range' provide additional filtering options based on the field values.

The `AsnListFilter` class can be used in conjunction with other components, such as viewsets or views, to filter the queryset of `AsnListModel` based on the specified fields and their lookup types.

**Note**: The `AsnListFilter` class is designed to be used as a filter backend in conjunction with other components, such as viewsets or views. It provides a flexible way to filter the queryset of `AsnListModel` based on various conditions.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the AsnListModel class.

**Attributes**:
- model: AsnListModel
- fields: A dictionary containing field names as keys and a list of lookup types as values.

**Code Description**:
The Meta class within the AsnListFilter class defines metadata options for the AsnListModel class. It specifies the model attribute as AsnListModel, indicating the model associated with this metadata. The fields attribute is a dictionary that maps field names to a list of lookup types. This configuration allows for defining the supported lookup types for each field in the AsnListModel.

The Meta class plays a crucial role in configuring how the AsnListModel class interacts with the database and how filtering operations are performed on its fields. By specifying the model and supported lookup types for each field, developers can control the behavior of queries and filtering operations when working with instances of the AsnListModel class.

**Note**:
- The Meta class is used to provide metadata options for the AsnListModel class, influencing database interactions and filtering operations.
- Developers can customize the behavior of the AsnListModel class by adjusting the metadata options defined in the Meta class.
***
## ClassDef AsnDetailFilter
**AsnDetailFilter**: The AsnDetailFilter class is a filter class that is used to filter the AsnDetailModel objects based on specified criteria.

**Attributes**:
- model: The model attribute specifies the model class that the filter is applied to, which in this case is the AsnDetailModel.
- fields: The fields attribute defines the fields of the model that can be used for filtering. Each field is associated with a list of lookup types that can be used for filtering.

**Code Description**:
The AsnDetailFilter class is a subclass of the FilterSet class, which is provided by the Django Filter package. It is used to define the filters that can be applied to the AsnDetailModel objects.

The Meta class is nested inside the AsnDetailFilter class and is used to define the metadata for the filter. In this case, the model attribute is set to the AsnDetailModel class, which specifies the model that the filter is applied to. The fields attribute is a dictionary that defines the fields of the model that can be used for filtering. Each field is associated with a list of lookup types that can be used for filtering.

The AsnDetailFilter class provides a way to filter the AsnDetailModel objects based on various criteria such as the id, asn_code, asn_status, supplier, goods_code, goods_desc, goods_qty, goods_actual_qty, sorted_qty, goods_shortage_qty, goods_more_qty, goods_damage_qty, goods_weight, goods_volume, goods_cost, creater, is_delete, create_time, and update_time fields.

The filter_backends attribute specifies the filter backends that are used for filtering. In this case, the DjangoFilterBackend and OrderingFilter backends are used.

The ordering_fields attribute specifies the fields that can be used for ordering the filtered results.

The filter_class attribute is set to the AsnDetailFilter class itself, which specifies the filter class to be used for filtering.

The get_project method is a helper method that retrieves the project id from the request's kwargs.

The get_queryset method is used to retrieve the queryset of AsnDetailModel objects that will be filtered. It checks if the user is authenticated and retrieves the objects based on the project id and the user's openid. If the user is not authenticated, an empty queryset is returned.

The get_serializer_class method is used to determine the serializer class to be used based on the action of the viewset. Different serializer classes are used for different actions such as list, retrieve, create, and update.

The create and update methods are overridden to provide custom logic for creating and updating the AsnDetailModel objects. These methods handle the creation and update of the objects based on the request data and perform additional checks and operations.

**Note**: The AsnDetailFilter class provides a flexible and customizable way to filter the AsnDetailModel objects based on various criteria. It can be used in conjunction with other viewsets and serializers to provide powerful filtering capabilities in the project.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the AsnDetailModel class.

**Attributes**:
- model: AsnDetailModel
- fields: A dictionary containing field names as keys and a list of lookup types as values.

**Code Description**:
The Meta class within the AsnDetailFilter class defines metadata options for the AsnDetailModel class. It specifies the model attribute as AsnDetailModel, indicating the model associated with this metadata class. Additionally, the fields attribute is a dictionary that maps field names to a list of lookup types that can be used for filtering data when querying the AsnDetailModel instances.

The fields dictionary contains various field names from the AsnDetailModel class as keys, such as "id", "asn_code", "asn_status", "supplier", "goods_code", "goods_desc", and more. Each field name is associated with a list of lookup types that can be used to filter data based on that field in queries. For example, the "id" field supports lookups like 'exact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'.

This Meta class provides a way to customize how the AsnDetailModel instances are filtered based on specific field-value conditions, allowing for more precise data retrieval and manipulation in the project.

**Note**:
Developers can leverage the Meta class in the AsnDetailFilter to define custom filtering options for the AsnDetailModel instances. By specifying the model and fields attributes, developers can control how data is filtered and queried within the project's ASN management system.
***
