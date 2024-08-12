## ClassDef BinpropertyGetSerializer
**BinpropertyGetSerializer**: The function of BinpropertyGetSerializer is to serialize data for retrieving bin properties with specific fields and formats.

**attributes**:
- bin_property: A read-only field for bin property.
- creater: A read-only field for the creator of the bin property.
- create_time: A read-only field for the creation time of the bin property in the format '%Y-%m-%d %H:%M:%S'.
- update_time: A read-only field for the update time of the bin property in the format '%Y-%m-%d %H:%M:%S'.

**Code Description**:
The `BinpropertyGetSerializer` class is a subclass of `serializers.ModelSerializer` that defines the serialization behavior for retrieving bin properties. It includes specific fields such as `bin_property`, `creater`, `create_time`, and `update_time`, all set as read-only fields. The `create_time` and `update_time` fields are formatted as '%Y-%m-%d %H:%M:%S'. 

Within the `Meta` class:
- `model`: Specifies the model to be used for serialization, in this case, `ListModel`.
- `ref_name`: Sets the reference name for the serializer as 'BinpropertyGetSerializer'.
- `exclude`: Excludes fields like 'openid', 'is_delete' from the serialization process.
- `read_only_fields`: Specifies 'id' as a read-only field.

The `BinpropertyGetSerializer` class is utilized in the `get_serializer_class` method of the `APIViewSet` in `binproperty/views.py`. In this method, based on the action being performed, if it is 'list', an instance of `BinpropertyGetSerializer` is returned for serialization. Otherwise, an HTTP method not allowed response is returned.

**Note**:
Developers can use this serializer to format and serialize data related to bin properties, ensuring specific fields are included or excluded based on the requirements. The serializer is integrated into the APIViewSet to handle serialization for list actions effectively.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the BinpropertyGetSerializer class.

**attributes**: 
- model: Specifies the model to be used by the serializer (ListModel in this case).
- ref_name: Sets the reference name for the serializer as 'BinpropertyGetSerializer'.
- exclude: Defines a list of fields to be excluded from the serialization process ('openid', 'is_delete').
- read_only_fields: Specifies a list of fields that should be read-only during serialization ('id').

**Code Description**:
The Meta class in the BinpropertyGetSerializer defines the metadata options for the serializer. The 'model' attribute specifies the model to be used by the serializer, which is ListModel in this case. The 'ref_name' attribute sets the reference name for the serializer as 'BinpropertyGetSerializer'. The 'exclude' attribute defines a list of fields that should be excluded from the serialization process, including 'openid' and 'is_delete'. Additionally, the 'read_only_fields' attribute specifies a list of fields that should be treated as read-only during serialization, with 'id' being the only field in this case.

**Note**:
Developers can customize the behavior of the serializer by adjusting the attributes in the Meta class according to their specific requirements.
***
