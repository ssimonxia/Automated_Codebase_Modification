## ClassDef Filter
**Filter**: The function of Filter is to define filter options for the ListModel data based on specific fields such as supplier name, city, address, contact, manager, level, creator, deletion status, creation time, and update time.

**attributes**:
- model: ListModel
- fields:
    - "id": ['exact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "supplier_name": ['exact', 'iexact', 'contains', 'icontains']
    - "supplier_city": ['exact', 'iexact', 'contains', 'icontains']
    - "supplier_address": ['exact', 'iexact', 'contains', 'icontains']
    - "supplier_contact": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "supplier_manager": ['exact', 'iexact', 'contains', 'icontains']
    - "supplier_level": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range']
    - "creater": ['exact', 'iexact', 'contains', 'icontains']
    - "is_delete": ['exact', 'iexact']
    - "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
    - "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']

**Code Description**:
The Filter class defines filter options for the ListModel data. It extends the FilterSet class and specifies the model as ListModel. The class provides filter options for various fields such as supplier name, city, address, contact, manager, level, creator, deletion status, creation time, and update time. These fields have specific lookup types like 'exact', 'contains', 'in', 'range', etc., allowing for precise filtering of data based on different criteria.

In the project, the Filter class is utilized in the APIViewSet and FileDownloadView classes in the supplier/views.py file. Both classes set the filter_class attribute to Filter, enabling them to apply the defined filter options to the queryset of ListModel data. This ensures that the data returned by API endpoints or file downloads is filtered according to the specified criteria.

**Note**:
Developers can customize the filter options by modifying the fields attribute of the Filter class to include additional fields or lookup types as needed. The Filter class plays a crucial role in enabling data filtering functionality within the API views and file download processes in the project.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the Filter class.

**attributes**: 
- model: Represents the model to be used for filtering.
- fields: Contains a dictionary where each key represents a field in the model, and the corresponding value is a list of filter options available for that field.

**Code Description**:
The Meta class in the Filter class is used to specify metadata options for filtering data. It contains two attributes:
1. **model**: This attribute specifies the model (ListModel in this case) to be used for filtering the data.
2. **fields**: This attribute is a dictionary where each key represents a field in the model, and the corresponding value is a list of filter options available for that field. For example, the "id" field can be filtered using options like 'exact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', and 'range'.

**Note**:
Developers can customize the filter options for each field in the model by updating the fields attribute in the Meta class.
***
