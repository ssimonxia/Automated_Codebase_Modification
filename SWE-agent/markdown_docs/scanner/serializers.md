## ClassDef ListGetSerializer
**ListGetSerializer**: The function of ListGetSerializer is to serialize data from the ListModel class with specific read-only fields and a custom method for retrieving request time.

**attributes**:
- creater: A read-only CharField.
- create_time: A read-only DateTimeField with a specific date-time format.
- update_time: A read-only DateTimeField with a specific date-time format.
- request_time: A SerializerMethodField.

**Code Description**:
The ListGetSerializer class is a serializer that inherits from the ModelSerializer class. It defines the fields to be serialized from the ListModel class, excluding the 'openid' field. The 'id' field is set as read-only. Additionally, it includes custom fields like 'creater', 'create_time', 'update_time', and 'request_time'. The 'request_time' field is a SerializerMethodField that retrieves the current time using the get_request_time method.

In the get_request_time method, the current time is returned using the time.time() function.

This serializer is used in the scanner application for serializing data when the actions are 'list' in the ListViewSet and 'retrieve' in the ScannerView.

**Note**:
Developers can utilize this serializer to format and present data from the ListModel class with specific read-only fields and custom methods.

**Output Example**:
{
    'creater': 'John Doe',
    'create_time': '2022-01-01 12:00:00',
    'update_time': '2022-01-02 08:30:00',
    'request_time': 1643675713.548
}
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the ListGetSerializer class.

**attributes**: 
- model: Specifies the model class to be used by the serializer.
- exclude: Defines a list of fields to be excluded from serialization.
- read_only_fields: Specifies a list of fields that should be read-only during serialization.

**Code Description**:
The Meta class in the ListGetSerializer defines the metadata options for the serializer. 
- The 'model' attribute is set to ListModel, indicating the model class that the serializer will interact with.
- The 'exclude' attribute is a list containing the field 'openid', which will be excluded from the serialization process.
- The 'read_only_fields' attribute contains the field 'id', indicating that this field should be read-only and not be allowed for writing during serialization.

**Note**: 
Developers can customize the behavior of the serializer by modifying the attributes of the Meta class according to their specific requirements.
***
### FunctionDef get_request_time(self, obj)
**get_request_time**: The function of get_request_time is to retrieve the current time when the function is called.

**parameters**:
- obj: Represents the object for which the request time is being retrieved.

**Code Description**:
The get_request_time function utilizes the time.time() method to obtain the current time in seconds since the epoch. This function does not require any additional input parameters apart from the object itself.

**Note**:
Ensure that the necessary imports for the time module are included at the beginning of the file to use the time.time() method successfully.

**Output Example**:
1609459857.37721
***
## ClassDef SannerDnDetailPickingListGetSerializer
**SannerDnDetailPickingListGetSerializer**: The function of SannerDnDetailPickingListGetSerializer is to serialize the data related to picking lists for delivery notes.

**attributes**:
- dn_code: CharField
- dn_status: IntegerField
- customer: CharField
- goods_code: CharField
- goods_qty: IntegerField
- pick_qty: IntegerField
- picked_qty: IntegerField
- intransit_qty: IntegerField
- delivery_actual_qty: IntegerField
- delivery_shortage_qty: IntegerField
- delivery_more_qty: IntegerField
- delivery_damage_qty: IntegerField
- goods_weight: FloatField
- goods_volume: FloatField
- goods_cost: FloatField
- creater: CharField
- create_time: DateTimeField
- update_time: DateTimeField
- back_order_label: BooleanField

**Code Description**:
The `SannerDnDetailPickingListGetSerializer` class is a ModelSerializer that defines the serialization of data for picking lists related to delivery notes. It includes fields such as delivery note code, status, customer details, goods information, quantities, weights, costs, creator details, timestamps, and back order labels. The class Meta specifies the model to be used and the fields to be serialized. The read_only_fields attribute defines the fields that should not be modified during deserialization.

This serializer is utilized in the `get_serializer_class` method of the `SannerDnDetailPickingListView` class in the `scanner/views.py` file. The `get_serializer_class` method determines the serializer class to be used based on the action performed. If the action is 'list', 'retrieve', or 'destroy', it returns the `SannerDnDetailPickingListGetSerializer` for serializing picking list data. Otherwise, it handles the HTTP method not allowed error.

**Note**:
Developers should ensure that the fields specified in the serializer match the fields in the corresponding model to avoid serialization errors.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the SannerDnDetailPickingListGetSerializer class.

**attributes**:
- model: DnDetailModel
- fields: List of fields to include in the serialization
- read_only_fields: List of fields that should be read-only during serialization

**Code Description**:
The Meta class within the SannerDnDetailPickingListGetSerializer class specifies metadata options for serialization. It defines the model as DnDetailModel, specifies the fields to include in the serialization, and sets read-only fields that should not be modified during serialization. The 'model' attribute refers to the DnDetailModel class, which likely contains the data structure for the serializer to work with. The 'fields' attribute lists the fields from the DnDetailModel that should be included in the serialized output. The 'read_only_fields' attribute lists fields that should not be allowed to be modified during serialization, ensuring data integrity.

**Note**:
Developers should ensure that the 'fields' and 'read_only_fields' attributes are correctly set based on the requirements of the serialization process to avoid unexpected behavior during data serialization.
***
