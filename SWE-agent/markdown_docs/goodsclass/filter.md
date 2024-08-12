## ClassDef Filter
**Filter**: The function of Filter is to define the filtering options for the ListModel data in the APIViewSet.

**attributes**:
- model: ListModel
- fields:
    - "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "goods_class": ['exact', 'iexact', 'contains', 'icontains']
    - "creater": ['exact', 'iexact', 'contains', 'icontains']
    - "is_delete": ['exact', 'iexact']
    - "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
    - "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']

**Code Description**:
The Filter class is a subclass of FilterSet and is used to specify the filtering options for the ListModel data in the APIViewSet. It defines the fields that can be filtered along with the filter options available for each field. The Meta class inside Filter specifies the model to be filtered (ListModel) and the fields along with their filter options.

In the APIViewSet class, the Filter class is assigned to the filter_class attribute, indicating that the filtering options defined in the Filter class will be applied when filtering ListModel data in the APIViewSet. The filter_backends attribute specifies the filter backends to be used, including DjangoFilterBackend and OrderingFilter. The ordering_fields attribute specifies the fields that can be used for ordering the data.

The get_queryset method in the APIViewSet class uses the filtering options defined in the Filter class to filter the ListModel data based on the request parameters. The create, update, partial_update, and destroy methods in the APIViewSet class utilize the filtering options to perform create, update, partial update, and delete operations on the ListModel data while ensuring data integrity and ownership.

**Note**:
Developers can customize the filtering options for the ListModel data by modifying the fields and filter options in the Filter class based on their specific requirements. The Filter class plays a crucial role in enabling data filtering functionality within the APIViewSet for efficient data retrieval and manipulation.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for filtering.
- fields: Contains a dictionary where each key represents a field name and its value is a list of filter options applicable to that field.

**Code Description**: 
The Meta class in the Filter class is used to specify metadata options for filtering data. The `model` attribute is set to `ListModel`, indicating the model to be used for filtering. The `fields` attribute is a dictionary where each key represents a field name in the model, and the corresponding value is a list of filter options that can be applied to that field. For example, the "id" field can be filtered using options like 'exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'. Similarly, other fields like "goods_class", "creater", "is_delete", "create_time", and "update_time" have their own set of filter options defined.

**Note**: 
Developers can customize the filter options for each field by modifying the values in the `fields` dictionary. This allows for flexible and specific filtering of data based on the defined options for each field.
***
