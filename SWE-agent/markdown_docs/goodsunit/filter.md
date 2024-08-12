## ClassDef Filter
**Filter**: The function of Filter is to define filtering options for the ListModel data based on specific fields.

**attributes**:
- model: ListModel
- fields: A dictionary containing field names as keys and a list of filter options as values.

**Code Description**:
The `Filter` class is a subclass of `FilterSet` that provides filtering options for the `ListModel` model. The `Meta` inner class defines the model to be filtered and the fields along with their corresponding filter options. The fields include "id", "goods_unit", "creater", "is_delete", "create_time", and "update_time", each with specific filter options such as 'exact', 'iexact', 'contains', 'in', 'range', etc.

In the `APIViewSet` class in `goodsunit/views.py`, the `Filter` class is assigned to the `filter_class` attribute, indicating that the filtering options defined in the `Filter` class will be used for filtering the queryset in the API views. This allows for filtering the `ListModel` data based on the specified fields and filter options when making requests to the API endpoints.

**Note**: Developers can utilize the `Filter` class to customize and apply filtering options to the `ListModel` data within the API views, enhancing the flexibility and functionality of data retrieval and manipulation.
### ClassDef Meta
**Meta**: The function of Meta is to define the metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for the filter.
- fields: Contains a dictionary where each key represents a field name and the corresponding value is a list of lookup types that can be applied to that field.

**Code Description**: 
The Meta class in the Filter class is used to specify metadata options. It defines two attributes:
1. **model**: This attribute is set to ListModel, indicating the model to be used for the filter.
2. **fields**: This attribute is a dictionary where each key represents a field name in the model, and the corresponding value is a list of lookup types that can be applied to that field. For example, for the "id" field, lookup types such as 'exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range' are allowed. Similarly, other fields like "goods_unit", "creater", "is_delete", "create_time", and "update_time" have their respective allowed lookup types.

**Note**: 
Developers can utilize the Meta class in the Filter class to specify the model and define the lookup types that can be used for filtering specific fields. It provides a structured way to configure filtering options for the Filter class based on the defined model and field requirements.
***
