## ClassDef Filter
**Filter**: The function of Filter is to define the filter options for the ListModel data.

**attributes**:
- model: ListModel
- fields: A dictionary containing filter options for various fields in the ListModel.

**Code Description**:
The Filter class is a subclass of FilterSet and is used to specify the filter options for the ListModel data. The Meta class inside Filter defines the model as ListModel and specifies the filter options for different fields such as "id", "goods_shape", "creater", "is_delete", "create_time", and "update_time". Each field has a list of filter options like 'exact', 'iexact', 'contains', 'icontains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', 'year', 'month', 'day', and 'week_day'.

In the project, the Filter class is utilized in the APIViewSet class in goodsshape/views.py. The filter_class attribute of the APIViewSet class is set to Filter, indicating that the filter options defined in the Filter class will be applied when filtering ListModel data in the APIViewSet.

**Note**:
Developers can customize the filter options for ListModel data by modifying the fields dictionary inside the Meta class of the Filter class.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the ListModel class, including the database table name, verbose names, and default ordering based on the 'goods_shape' field.

**attributes**:
- model: ListModel
- fields: Dictionary specifying the lookup types for filtering on different fields of the ListModel.

**Code Description**:
The Meta class within the ListModel defines metadata options for the model. It sets the model attribute to ListModel, indicating the model associated with this metadata. The fields attribute is a dictionary that specifies the lookup types available for filtering on various fields of the ListModel, such as 'id', 'goods_shape', 'creater', 'is_delete', 'create_time', and 'update_time'.

In the project structure, the Meta class is utilized within the Filter/Meta class in the filter.py file. By setting the model to ListModel, the Meta class establishes the connection between the metadata options and the ListModel class. The fields attribute defines the filter options available for querying ListModel instances based on specific criteria associated with each field.

**Note**:
Developers can leverage the Meta class to configure metadata options for the ListModel class, enabling customization of database table names, verbose names, and default ordering behavior. When working with the Meta class, consider the defined model and fields to ensure accurate and efficient filtering of ListModel instances based on the specified lookup types.
***
