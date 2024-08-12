## ClassDef Filter
**Filter**: The function of Filter is to define the filter options for the ListModel data based on specific fields.

**attributes**:
- model: ListModel
- fields:
    - "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "bin_size": ['exact', 'iexact', 'contains', 'icontains']
    - "bin_size_w": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "bin_size_d": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "bin_size_h": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "creater": ['exact', 'iexact', 'contains', 'icontains']
    - "is_delete": ['exact', 'iexact']
    - "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
    - "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']

**Code Description**:
The Filter class defines the filter options for the ListModel data. It inherits from FilterSet and specifies the model as ListModel. The fields attribute contains a dictionary with various fields of ListModel and their corresponding filter options such as exact, iexact, contains, gt, gte, lt, lte, isnull, in, range, year, month, day, week_day, icontains. These filter options can be used to filter data based on specific conditions for each field.

In the project, both APIViewSet and FileDownloadView classes utilize the Filter class as the filter_class attribute. This allows these viewsets to apply the defined filter options when filtering ListModel data in the queryset. By specifying the filter_backends and ordering_fields along with the filter_class as Filter, the viewsets can effectively filter and order the data based on the specified fields and conditions.

**Note**:
Developers can leverage the Filter class to define and apply filter options for ListModel data in the project's viewsets. By customizing the fields attribute with desired filter options, data filtering can be tailored to specific requirements within the project's API views.
### ClassDef Meta
**Meta**: The function of Meta is to define the metadata options for the Filter class.

**attributes**: 
- model: Represents the ListModel class.
- fields: A dictionary that maps field names to a list of lookup types that can be used for filtering.

**Code Description**: 
The Meta class in the Filter class is used to specify metadata options. It contains two attributes:
1. **model**: This attribute represents the ListModel class, indicating the model to which the metadata options apply.
2. **fields**: This attribute is a dictionary that maps field names to a list of lookup types. Each field name corresponds to a list of lookup types that can be used for filtering data. For example, the "id" field can be filtered using lookup types such as 'exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'.

**Note**: 
Developers can utilize the Meta class in the Filter class to define metadata options such as the model and available lookup types for filtering specific fields. This allows for customization and fine-tuning of filtering behavior within the Filter class.
***
