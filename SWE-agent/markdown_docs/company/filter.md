## ClassDef Filter
**Filter**: The function of Filter is to define filter options for the ListModel data based on specific fields.

**attributes**:
- model: ListModel
- fields: A dictionary containing field names as keys and a list of filter options as values.

**Code Description**:
The `Filter` class is a subclass of `FilterSet` and is used to specify filtering options for the `ListModel` data. The class contains a nested `Meta` class where the `model` attribute is set to `ListModel` and the `fields` attribute is defined as a dictionary. Each key in the `fields` dictionary represents a field in the `ListModel`, and the corresponding value is a list of filter options that can be applied to that field.

In the `fields` dictionary, various fields such as "id", "company_name", "company_city", "company_address", "company_contact", "company_manager", "creater", "is_delete", "create_time", and "update_time" are defined along with their respective filter options. These filter options include operations like exact match, case-insensitive exact match, greater than, greater than or equal to, less than, less than or equal to, is null, in a list, range, and various string matching operations like contains and case-insensitive contains.

The `Filter` class is utilized in the `APIViewSet` class in the `company/views.py` file. In the `APIViewSet` class, the `filter_class` attribute is set to `Filter`, indicating that the defined filter options in the `Filter` class will be applied when filtering the `ListModel` data. This allows for efficient filtering of data based on specific criteria specified in the `fields` attribute of the `Filter` class.

**Note**:
Developers can customize the filter options for the `ListModel` data by modifying the `fields` attribute in the `Filter` class according to their specific requirements.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for filtering.
- fields: Contains a dictionary where each key represents a field in the model, and the corresponding value is a list of filter options available for that field.

**Code Description**: 
The Meta class within the Filter class is used to specify metadata options for filtering data. It contains two attributes: model and fields. The model attribute is set to ListModel, indicating the model to be used for filtering. The fields attribute is a dictionary where each key represents a field in the model, and the corresponding value is a list of filter options available for that field. These filter options include 'exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range' for numeric fields, and 'exact', 'iexact', 'contains', 'icontains' for string fields. This allows for precise and flexible filtering of data based on specified criteria.

**Note**: Developers can customize the filter options for each field in the model by updating the fields dictionary in the Meta class. This provides a way to control how data is filtered when using the Filter class.
***
