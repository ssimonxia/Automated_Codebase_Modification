## ClassDef Filter
**Filter**: The function of Filter is to define filter options for the ListModel data based on specified fields.

**attributes**:
- model: ListModel
- fields:
    - "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "bin_property": ['exact', 'iexact', 'contains', 'icontains']
    - "creater": ['exact', 'iexact', 'contains', 'icontains']
    - "is_delete": ['exact', 'iexact']
    - "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
    - "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']

**Code Description**:
The Filter class is a subclass of FilterSet and is used to specify filtering options for the ListModel data. It contains a Meta inner class where the model is set to ListModel and fields are defined for filtering based on specific attributes such as id, bin_property, creater, is_delete, create_time, and update_time. Each field has associated filter options like 'exact', 'iexact', 'contains', 'icontains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', 'year', 'month', 'day', and 'week_day'.

In the project, the Filter class is utilized in the APIViewSet class in the views.py file. The APIViewSet class is a ModelViewSet that handles various actions including listing data. In the APIViewSet class, the filter_class attribute is set to Filter, indicating that the defined filtering options in the Filter class will be applied when filtering ListModel data. This connection ensures that the specified filter options are used when retrieving data through API endpoints.

**Note**:
Developers can customize the filter options for ListModel data by modifying the fields and associated filter types in the Filter class according to their requirements.
### ClassDef Meta
**Meta**: The function of Meta is to define the model and fields for filtering.

**attributes**: 
- model: ListModel
- fields: A dictionary containing filter options for different fields such as 'id', 'bin_property', 'creater', 'is_delete', 'create_time', and 'update_time'.

**Code Description**:
The Meta class in the Filter class is used to specify the model to be filtered and the available filter options for different fields. In this case, the model is set to ListModel, and the fields attribute is a dictionary where each key represents a field in the model, and the corresponding value is a list of filter options available for that field. For example, the 'id' field can be filtered using options like 'exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'. Similarly, other fields like 'bin_property', 'creater', 'is_delete', 'create_time', and 'update_time' have their specific filter options defined.

**Note**:
Developers can use the Meta class to customize the filtering behavior for different fields in the ListModel. Ensure that the model attribute is correctly set to the desired model class, and the fields attribute contains the appropriate filter options for each field that needs to be filtered.
***
