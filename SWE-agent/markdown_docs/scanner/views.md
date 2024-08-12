## ClassDef SannerDnDetailPickingListView
**SannerDnDetailPickingListView**: The function of SannerDnDetailPickingListView is to handle the viewset for listing DN detail data for picking.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: DnDetailFilter

**Code Description**:
The `SannerDnDetailPickingListView` class extends `viewsets.ModelViewSet` and provides functionalities for retrieving a data list, pagination, filtering, and ordering of DN detail data for picking. 

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the DN detail data based on the user and project ID, ensuring that only valid data is returned. The `get_serializer_class` method determines the serializer class based on the action performed, returning the appropriate serializer for listing, retrieving, or deleting data.

This class utilizes the `MyPageNumberPagination` for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering and ordering, and `DnDetailFilter` for applying specific filters to the DN detail data.

The `SannerDnDetailPickingListView` class is called in the project to handle the listing of DN detail data for picking, ensuring that the data is filtered and paginated correctly for the end-users.

**Note**: Developers can customize the filtering and ordering behavior by modifying the `ordering_fields` and `filter_class` attributes according to the project requirements.

**Output Example**:
{
    "id": 1,
    "dn_code": "DN001",
    "customer": "Customer A",
    "goods_code": "G001",
    "goods_desc": "Product X",
    "goods_qty": 100,
    "pick_qty": 50,
    "picked_qty": 50,
    "intransit_qty": 0,
    "delivery_actual_qty": 50,
    "delivery_shortage_qty": 0,
    "delivery_more_qty": 0,
    "delivery_damage_qty": 0,
    "goods_weight": 10.5,
    "goods_volume": 0.25,
    "creater": "User123",
    "back_order_label": false,
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T08:30:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- No parameters are passed explicitly, as the function accesses 'pk' from self.kwargs.

**Code Description**:
The get_project function first attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value. If an exception occurs during this process, it returns None.

This function is called within the get_queryset method of the SannerDnDetailPickingListView class in views.py. In the get_queryset method, the get_project function is used to obtain the 'id' value, which is then utilized to filter DnDetailModel objects based on certain conditions.

**Note**:
- It is important to handle exceptions appropriately when using this function to ensure robustness.
- Ensure that the self.kwargs dictionary contains the 'pk' key before calling this function to avoid potential errors.

**Output Example**:
If the 'pk' value is successfully retrieved from self.kwargs:
```
123
```

If an exception occurs during the retrieval process:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter DnDetailModel objects based on specific conditions related to the user and project ID.

**parameters**:
- No explicit parameters are passed to the function.

**Code Description**:
The get_queryset function first retrieves the project ID using the get_project method. It then checks if the request user exists. If the user exists, it further checks if the project ID is None. Depending on these conditions, the function filters DnDetailModel objects accordingly and returns the filtered queryset. If the request user does not exist, an empty queryset is returned.

This function is utilized within the SannerDnDetailPickingListView class in views.py to customize the queryset of DnDetailModel objects based on the user and project ID.

**Note**:
- Ensure that the request object contains the necessary user information for proper filtering.
- Handle the returned queryset appropriately in the calling code to process the filtered DnDetailModel objects effectively.

**Output Example**:
If the request user exists and the project ID is not None:
```
<QuerySet [<DnDetailModel: Object1>, <DnDetailModel: Object2>, ...]>
```

If the request user does not exist:
```
<QuerySet []>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**Code Description**:
The `get_serializer_class` method checks the action being performed. If the action is 'list', 'retrieve', or 'destroy', it returns the `SannerDnDetailPickingListGetSerializer` serializer class, which is responsible for serializing data related to picking lists for delivery notes. If the action does not match these conditions, the method handles the HTTP method not allowed error.

This method plays a crucial role in the `SannerDnDetailPickingListView` class in the `scanner/views.py` file, ensuring that the correct serializer is used for the specific action, thereby facilitating the serialization of data based on the requested operation.

**Note**:
Developers should ensure that the actions specified in the method align with the expected behavior to correctly serialize the data. Additionally, it is essential to maintain consistency between the actions and the corresponding serializer classes to avoid errors during serialization.

**Output Example**:
- If the action is 'list', the method returns the `SannerDnDetailPickingListGetSerializer` class.
- If the action is 'update', an HTTP method not allowed error is handled.
***
## ClassDef ListViewSet
**ListViewSet**: The function of ListViewSet is to handle the viewset for listing data.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
ListViewSet is a class that extends viewsets.ModelViewSet and provides functionality for listing data. It includes the following methods:

1. get_project(): Retrieves the 'pk' parameter from the request's kwargs.
2. get_queryset(): Returns a queryset based on the request user and project ID.
3. get_serializer_class(): Determines the serializer class based on the action.
4. create(): Handles the creation of a new list item with specific data and generates a response.

The class uses MyPageNumberPagination for pagination, DjangoFilterBackend and OrderingFilter for filtering, and Filter for filtering data. It interacts with ListModel to retrieve and create list items based on the request.

**Note**: ListViewSet is designed to handle listing data and creating new list items in a structured and efficient manner.

**Output Example**:
{
    "bar_code": "ABCD1234"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during the retrieval process, it returns None.

In the context of the project, the get_project function is called within the get_queryset function of the ListViewSet class in views.py. In the get_queryset function, the get_project function is used to obtain the 'id' value, which is then used to filter ListModel objects based on certain conditions.

**Note**: It is important to handle exceptions properly when using the get_project function to ensure smooth execution and error handling.

**Output Example**: 
- If 'pk' value exists in self.kwargs: 
    - Output: 123 (assuming 'pk' value is 123)
- If 'pk' value does not exist in self.kwargs or an exception occurs:
    - Output: None
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve and filter ListModel objects based on certain conditions.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_queryset function first calls the get_project function to obtain the 'id' value from the self.kwargs dictionary. It then checks if the request user exists and filters ListModel objects accordingly. If 'id' is None, it filters objects based on the request auth openid. If 'id' is not None, it filters objects based on both the request auth openid and the obtained 'id'. If the request user does not exist, the function returns an empty queryset.

In the context of the project, the get_queryset function is a method of the ListViewSet class in views.py. It utilizes the get_project function to retrieve necessary information for filtering ListModel objects. Proper exception handling is crucial when using the get_project function to ensure smooth execution and error handling.

**Note**: It is important to ensure that the necessary conditions are met to retrieve the correct ListModel objects based on the logic implemented in the get_queryset function.

**Output Example**: 
- If the request user exists and 'id' is None: 
    - Output: ListModel.objects.filter(openid=self.request.auth.openid)
- If the request user exists and 'id' is not None: 
    - Output: ListModel.objects.filter(openid=self.request.auth.openid, id=id)
- If the request user does not exist: 
    - Output: ListModel.objects.none()
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action performed.

**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'list', it returns the ListGetSerializer class from the serializers module. Otherwise, it calls the http_method_not_allowed method with the request parameter.

The ListGetSerializer class is responsible for serializing data from the ListModel class with specific read-only fields and a custom method for retrieving the request time. This serializer is used in the scanner application for serializing data during 'list' actions in the ListViewSet.

**Note**:
Developers can utilize the get_serializer_class function to dynamically select the appropriate serializer class based on the action being performed.

**Output Example**:
If the action is 'list', the function returns the ListGetSerializer class.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new entry in the ListModel based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object. It then extracts the 'process' key from the data and proceeds to create a JWT token using the create_token function from utils/jwt.py. Subsequently, a new entry is created in the ListModel database table with the extracted process information, along with the generated token and a unique barcode. Finally, the function returns a response containing the generated barcode.

In case the 'process' key is not found in the data, an APIException is raised with a message prompting the user to provide a specific process name.

The create function interacts with the create_token function to generate a token for the provided data, which is then stored in the ListModel database table.

**Note**:
- Ensure that the 'process' key is included in the data sent with the request.
- Handle the APIException appropriately in the calling code to manage cases where the process key is missing.

**Output Example**:
{'bar_code': 'a1b2c3d4e5f6'}
***
## ClassDef SannerView
**SannerView**: The function of SannerView is to handle data retrieval operations based on specific criteria.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: 'id', 'create_time', 'update_time'
- filter_class: Filter
- lookup_field: 'bar_code'

**Code Description**:
SannerView is a class that extends viewsets.ModelViewSet and provides methods to retrieve data, get the project based on the provided bar code, get the queryset based on user authentication and bar code, determine the serializer class based on the action, and retrieve a specific instance.

In the get_project method, the bar code is retrieved from the request parameters. The get_queryset method filters the queryset based on user authentication and the bar code. The get_serializer_class method selects the appropriate serializer class based on the action. The retrieve method retrieves a specific instance and returns the serialized data.

This class utilizes the MyPageNumberPagination for pagination, DjangoFilterBackend and OrderingFilter for filtering, and Filter for filtering data based on specific criteria.

**Note**: It's important to ensure that the necessary dependencies such as MyPageNumberPagination, DjangoFilterBackend, OrderingFilter, and Filter are properly imported and configured for the SannerView class to function correctly.

**Output Example**:
{
    "id": 1,
    "name": "Example",
    "description": "Sample data",
    "create_time": "2022-01-01T00:00:00Z",
    "update_time": "2022-01-01T00:00:00Z"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'bar_code' value from the 'kwargs' attribute of the object. 

**parameters**: 
- No parameters are passed explicitly, as the function operates on the 'self' object.

**Code Description**: 
The get_project function attempts to access the 'bar_code' value from the 'kwargs' attribute of the object. If successful, it returns the 'bar_code' value; otherwise, it returns None. This function is used to extract the barcode information for further processing within the ScannerView class.

In the calling object 'get_queryset', the get_project function is invoked to retrieve the 'bar_code' value. Depending on the presence of the user and the 'id', different queries are executed on the ListModel objects to filter the results based on the 'openid' and 'bar_code' values.

**Note**: 
- It is important to handle exceptions appropriately when using this function to ensure smooth execution.
- Ensure that the 'bar_code' value is available in the 'kwargs' attribute to avoid potential errors.

**Output Example**: 
If the 'bar_code' value is successfully retrieved, the function may return a string representing the barcode, such as '123456789'. If the 'bar_code' is not found in the 'kwargs', the function will return None.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter ListModel objects based on the 'openid' and 'bar_code' values, retrieved using the get_project function.

**parameters**: 
- No parameters are explicitly passed to the get_queryset function, as it operates on the 'self' object.

**Code Description**: 
The get_queryset function first calls the get_project function to retrieve the 'bar_code' value. It then checks if the request user is authenticated and based on the presence of 'id', filters the ListModel objects accordingly using the 'openid' and 'bar_code' values. If the user is not authenticated, an empty queryset is returned. This function is crucial for querying and filtering ListModel objects within the ScannerView class based on specific criteria.

In the context of the ScannerView class, the get_queryset function plays a key role in retrieving and filtering data from the ListModel objects. By utilizing the get_project function, it ensures that the 'bar_code' value is available for accurate filtering. Depending on the authentication status and 'id' presence, different queries are executed to fetch the desired data.

**Note**: 
- Proper exception handling is essential when utilizing the get_queryset function to maintain smooth execution flow.
- Ensure that the 'bar_code' value is present in the 'kwargs' attribute to avoid potential errors during filtering operations.

**Output Example**: 
- If the 'bar_code' value is successfully retrieved and the conditions are met, the function may return a queryset containing filtered ListModel objects based on the 'openid' and 'bar_code' values. If the user is not authenticated, an empty queryset will be returned.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. If the action is 'retrieve', it returns the ListGetSerializer class; otherwise, it calls the http_method_not_allowed method.

**Code Description**:
The get_serializer_class function checks the action being performed. If the action is 'retrieve', it returns the ListGetSerializer class from the serializers module. This serializer is responsible for formatting data from the ListModel class with specific read-only fields and a custom method for retrieving the request time. If the action is not 'retrieve', the function calls the http_method_not_allowed method to handle the request.

The ListGetSerializer class defines fields such as 'creater', 'create_time', 'update_time', and 'request_time' for serialization. The 'request_time' field is a SerializerMethodField that retrieves the current time using the get_request_time method.

This function is crucial in determining the appropriate serializer class based on the action performed in the ScannerView.

**Note**:
Developers can utilize the get_serializer_class function to dynamically select the serializer class based on the action being executed in the ScannerView.

**Output Example**:
If the action is 'retrieve', the function returns the ListGetSerializer class for serializing data from the ListModel class with specific read-only fields and the current request time.
***
### FunctionDef retrieve(self, request)
**retrieve**: The function of retrieve is to fetch and return the serialized data of a specific object.

**parameters**:
- request: Represents the HTTP request received.
- *args: Represents additional positional arguments.
- **kwargs: Represents additional keyword arguments.

**Code Description**:
The retrieve function first retrieves the specific object using the get_object method. Then, it serializes the object using the get_serializer method. Finally, it returns the serialized data in the response using the Response class.

**Note**:
- This function is typically used in API views to retrieve and return specific object data.
- Ensure that the necessary permissions and authentication checks are in place before calling this function.

**Output Example**:
```json
{
    "id": 1,
    "name": "Example",
    "description": "This is an example object"
}
```
***
