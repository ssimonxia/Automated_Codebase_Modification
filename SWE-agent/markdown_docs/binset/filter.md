## ClassDef Filter
**Filter**: The function of Filter is to define filter options for the ListModel class based on specific fields.

**attributes**:
- model: ListModel
- fields:
    - "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "bin_name": ['exact', 'iexact', 'contains', 'icontains']
    - "bin_size": ['exact', 'iexact', 'contains', 'icontains']
    - "bin_property": ['exact', 'iexact', 'contains', 'icontains']
    - "empty_label": ['exact', 'iexact']
    - "creater": ['exact', 'iexact', 'contains', 'icontains']
    - "is_delete": ['exact', 'iexact']
    - "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
    - "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']

**Code Description**:
The Filter class is a subclass of FilterSet and is used to specify filter options for the ListModel class. It includes a Meta class that defines the model as ListModel and specifies various fields along with their corresponding filter options. These fields include "id", "bin_name", "bin_size", "bin_property", "empty_label", "creater", "is_delete", "create_time", and "update_time". Each field is associated with a list of filter options such as 'exact', 'iexact', 'contains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', 'year', 'month', 'day', 'week_day', etc.

The Filter class provides a structured way to filter data based on the specified fields and filter options. It allows for precise querying and filtering of ListModel instances according to the defined criteria.

In the project, the Filter class is utilized by various views such as ScannerBinsetTagView, APIViewSet, and FileDownloadView to apply filtering capabilities to the ListModel instances. By specifying the filter_class attribute as Filter in these views, the defined filter options in the Filter class are utilized to filter data based on specific conditions.

**Note**:
Developers can customize the filter options in the Filter class to suit their specific filtering requirements for the ListModel instances. The defined fields and filter options provide flexibility in querying and retrieving data based on different criteria.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for filtering.
- fields: Contains a dictionary where each key represents a field name and the corresponding value is a list of filter options available for that field.

**Code Description**:
The Meta class in the Filter class is used to specify metadata options for filtering data. The "model" attribute is set to ListModel, indicating the model to be used for filtering. The "fields" attribute is a dictionary where each key represents a field name in the model, and the corresponding value is a list of filter options available for that field. These filter options include various filter types such as 'exact', 'iexact', 'contains', 'icontains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', 'year', 'month', 'day', 'week_day', etc. By defining these options in the Meta class, developers can specify how data should be filtered based on different criteria.

**Note**:
Developers can customize the filter options for each field by modifying the values in the "fields" dictionary. This allows for flexible and specific data filtering based on the requirements of the application.
***
