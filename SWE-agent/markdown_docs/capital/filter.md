## ClassDef Filter
**Filter**: The function of Filter is to define filter options for ListModel objects based on specific fields.

**attributes**:
- model: ListModel
- fields: A dictionary containing field names as keys and a list of filter options as values.

**Code Description**:
The `Filter` class is a subclass of `FilterSet` that defines filter options for `ListModel` objects based on specific fields. The class contains a nested `Meta` class where the model attribute is set to `ListModel` and the fields attribute defines filter options for various fields such as "id", "capital_name", "capital_qty", "capital_cost", "creater", "is_delete", "create_time", and "update_time".

In the `fields` attribute, each field is associated with a list of filter options that can be applied to that field. For example, the "id" field can be filtered using options like 'exact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'. Similarly, other fields like "capital_name", "capital_qty", "capital_cost", "creater", "is_delete", "create_time", and "update_time" have their own set of filter options defined.

This `Filter` class is utilized in the `APIViewSet` and `FileDownloadView` classes in the `capital/views.py` file. Both classes set the `filter_class` attribute to `Filter`, indicating that the filter options defined in the `Filter` class will be applied when filtering `ListModel` objects in these views.

**Note**: Developers can customize the filter options for different fields in the `Filter` class to enable filtering of `ListModel` objects based on specific criteria in the API views.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for filtering.
- fields: Contains a dictionary where each key represents a field name and the corresponding value is a list of filter options available for that field.

**Code Description**: 
The Meta class in the Filter class is used to specify metadata options for filtering data. It contains two attributes:
1. **model**: This attribute specifies the model to be used for filtering. In this case, the model is set to ListModel.
2. **fields**: This attribute is a dictionary where each key represents a field name in the model, and the corresponding value is a list of filter options available for that field. For example, for the "capital_name" field, filter options include 'exact', 'iexact', 'contains', and 'icontains'.

**Note**: 
Developers can customize the filter options for each field by modifying the values in the 'fields' dictionary. This allows for flexible and specific filtering of data based on different criteria.
***
