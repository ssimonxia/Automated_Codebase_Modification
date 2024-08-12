## ClassDef TransportationFeeListFilter
**TransportationFeeListFilter**: The function of TransportationFeeListFilter is to define filter options for the TransportationFeeListModel based on specified fields.

**attributes**:
- model: TransportationFeeListModel
- fields: Dictionary containing field names as keys and a list of filter options as values.

**Code Description**:
The `TransportationFeeListFilter` class is a part of the Django Filter package and serves as a filter set for the `TransportationFeeListModel`. It specifies the filter options available for different fields of the model such as `id`, `send_city`, `receiver_city`, `weight_fee`, `volume_fee`, `min_payment`, `transportation_supplier`, `creater`, `is_delete`, `create_time`, and `update_time`. Each field is associated with a list of filter options like 'exact', 'iexact', 'contains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', etc.

In the project, this filter class is utilized by the `TransportationFeeListViewSet` and `FreightfileDownloadView` classes in the `payment/views.py` file. Both classes set the `filter_class` attribute to `TransportationFeeListFilter`, enabling them to filter querysets based on the defined filter options for the `TransportationFeeListModel`.

**Note**:
Developers can use the `TransportationFeeListFilter` class to apply specific filters when querying the `TransportationFeeListModel` data, allowing for more refined and targeted data retrieval based on the defined filter options.
### ClassDef Meta
**Meta**: The function of Meta is to provide metadata for the TransportationFeeListModel model.

**Attributes**:
- model: TransportationFeeListModel
- fields: A dictionary containing filter fields and lookup types for querying transportation fee records.

**Code Description**:
The `Meta` class within the `TransportationFeeListModel` model specifies metadata for the model. It defines the model as `TransportationFeeListModel` and provides a dictionary of fields with associated lookup types for querying transportation fee records. The fields include 'id', 'send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'is_delete', 'create_time', and 'update_time', each with a list of available lookup types such as 'exact', 'iexact', 'contains', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range', 'year', 'month', 'day', and 'week_day'.

The `Meta` class plays a crucial role in defining how the `TransportationFeeListModel` model behaves in terms of database table name, verbose names, and default ordering. It enhances the functionality of the model by providing structured metadata that influences database operations and query capabilities.

**Note**: Developers can leverage the `Meta` class to customize the behavior of the `TransportationFeeListModel` model, such as specifying the database table name and defining the available filter fields and lookup types for querying transportation fee records. This metadata class adds flexibility and control to the model definition, aiding in efficient data retrieval and manipulation within the Django framework.
***
