## ClassDef TransportationFeeListViewSet
**TransportationFeeListViewSet**: The function of TransportationFeeListViewSet is to handle various CRUD operations for the TransportationFeeListModel, including retrieving, listing, creating, updating, partially updating, and deleting data.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: TransportationFeeListFilter

**Code Description**:
The `TransportationFeeListViewSet` class extends `viewsets.ModelViewSet` and provides methods for different actions such as retrieving, listing, creating, updating, partially updating, and deleting data related to the `TransportationFeeListModel`. It includes methods to interact with the database, handle serialization based on the action type, and perform necessary checks before executing CRUD operations.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters the queryset based on the user and project ID, ensuring data security. The `get_serializer_class` method selects the appropriate serializer class based on the action type.

The `create`, `update`, `partial_update`, and `destroy` methods handle the corresponding CRUD operations, including data validation, permission checks, serialization, and response generation. These methods ensure that only authorized users can perform specific actions on the data.

The class utilizes `MyPageNumberPagination` for pagination, `DjangoFilterBackend` and `OrderingFilter` for filtering, and `TransportationFeeListFilter` for defining filter options for the `TransportationFeeListModel`.

This class is closely related to the `TransportationFeeListModel`, `MyPageNumberPagination`, `DjangoFilterBackend`, `OrderingFilter`, and `TransportationFeeListFilter` in the project, enabling the management of transportation fee data through API endpoints.

**Note**: Developers can use the `TransportationFeeListViewSet` class to implement CRUD functionality for transportation fee data, ensuring proper data handling and security measures are in place.

**Output Example**:
{
    "id": 1,
    "send_city": "New York",
    "receiver_city": "Los Angeles",
    "weight_fee": 50.00,
    "volume_fee": 30.00,
    "min_payment": 100.00,
    "transportation_supplier": "ABC Shipping",
    "creater": "John Doe",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the kwargs attribute of the object and return it.

**parameters**:
- No external parameters are passed to this function.

**Code Description**:
The get_project function first attempts to retrieve the 'pk' value from the kwargs attribute of the object using self.kwargs.get('pk'). If successful, it returns the retrieved id value. If an exception occurs during this process, it returns None.

In the context of the project, this function is called within the get_queryset function of the TransportationFeeListViewSet class. In the get_queryset function, the get_project function is used to obtain the id value, which is then used to filter TransportationFeeListModel objects based on certain conditions.

**Note**:
- The get_project function is designed to handle exceptions gracefully and return None if an error occurs.
- It is important to ensure that the 'pk' value is correctly passed to the function to retrieve the desired id.

**Output Example**:
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve transportation fee records based on specific conditions. 

**Parameters**:
- No external parameters are passed to this function.

**Code Description**:
The get_queryset function first obtains the 'id' by calling the get_project method. It then checks if the request user exists. If the 'id' is None, it filters TransportationFeeListModel objects based on the request authentication's OpenID and deletion status. If the 'id' is not None, it filters objects based on the request authentication's OpenID, 'id', and deletion status. If the request user does not exist, it returns an empty queryset.

This function is part of the TransportationFeeListViewSet class in the views.py file of the payment app. It utilizes the get_project method to retrieve the 'id' value, which is crucial for filtering the transportation fee records. By checking the request user and 'id', the function ensures that only relevant transportation fee records are returned based on the specified conditions.

**Note**:
- The get_queryset function plays a key role in fetching transportation fee records based on specific criteria.
- Developers should ensure that the necessary conditions are met to retrieve the desired transportation fee records accurately.

**Output Example**:
If the request user exists and the 'id' is 1, the function may return a queryset of transportation fee records with the specified OpenID, 'id', and deletion status.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed in the TransportationFeeListViewSet.

**parameters**:
- self: The instance of the class.

**Code Description**:
The get_serializer_class function checks the action being performed (list, retrieve, create, update, partial_update, destroy) and returns the corresponding serializer class based on the action. If the action is 'list', 'retrieve', or 'destroy', the function returns the FreightGetSerializer. For 'create', 'update', and 'partial_update' actions, it returns FreightPostSerializer, FreightUpdateSerializer, and FreightPartialUpdateSerializer respectively. If the action does not match any of these, it calls the http_method_not_allowed method.

This function plays a crucial role in dynamically selecting the appropriate serializer class to handle serialization based on the specific action requested in the TransportationFeeListViewSet.

**Note**:
Developers should ensure that the actions and corresponding serializers are correctly mapped to avoid unexpected behavior during data serialization.

**Output Example**:
- FreightGetSerializer (for list, retrieve, destroy actions)
- FreightPostSerializer (for create action)
- FreightUpdateSerializer (for update action)
- FreightPartialUpdateSerializer (for partial_update action)
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new transportation fee entry.

**parameters**:
- request: Represents the incoming request.
- *args: Represents additional positional arguments.
- **kwargs: Represents additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the incoming request, then adds the 'openid' field with the value from the authentication information. Next, it initializes a serializer with the provided data, validates the serializer, saves the data, retrieves success headers, and finally returns a response with the serialized data and a success status code.

**Note**:
- This function assumes the existence of a request object and authentication information.
- The function relies on a serializer for data validation and saving.

**Output Example**:
{
    "id": 1,
    "amount": 50.00,
    "description": "Transportation fee for the month",
    "openid": "abc123",
    "timestamp": "2022-01-01T12:00:00Z"
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update the data of a specific object if the authenticated user is the owner of that object.

**parameters**:
- request: Represents the request made to update the object.
- pk: Represents the primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the authenticated user matches the openid associated with the object. If they do not match, an APIException is raised with a message indicating that the data cannot be updated as it does not belong to the user. If the openids match, the function proceeds to update the object with the data provided in the request. The data is validated using a serializer, and if valid, the changes are saved. Finally, the function returns a response with the updated data and a success status code along with any necessary headers.

**Note**:
It is important to ensure that the user making the request is authenticated and has the necessary permissions to update the object. This function assumes that the authentication process has already taken place before reaching this point.

**Output Example**:
{
    "id": 1,
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update an object based on the provided data.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. Otherwise, the function proceeds to update the object with the provided data using a serializer with partial set to True. After validating the serializer, the changes are saved, and the function returns a response with the updated data and a success status code along with headers.

**Note**:
- This function is designed to handle partial updates, meaning only the fields provided in the request data will be updated.
- It is important to ensure that the authentication mechanism is in place to prevent unauthorized updates.

**Output Example**:
{
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the authenticated user has the permission to delete it.

**parameters**:
- request: Represents the request made to the server.
- pk: Represents the primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object does not match the openid of the authenticated user. If the condition is met, an APIException is raised with a message indicating that the data cannot be deleted. If the condition is not met, the is_delete attribute of the object is set to True, and the object is saved. The function then serializes the updated object, retrieves the success headers, and returns a response with the serialized data and a status code of 200.

**Note**:
- This function is used to delete a specific object based on the provided primary key.
- It performs a permission check to ensure that only authorized users can delete the object.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
## ClassDef FreightfileDownloadView
**FreightfileDownloadView**: The function of FreightfileDownloadView is to handle the download of CSV files containing transportation data with Chinese labels based on specified filter options.

**attributes**:
- renderer_classes: Tuple containing the renderer class for CSV file rendering.
- filter_backends: List of filter backends for data filtering.
- ordering_fields: List of fields for data ordering.
- filter_class: Filter class for defining filter options.

**Code Description**:
The FreightfileDownloadView class extends the ModelViewSet class and includes methods for retrieving project data, querying the dataset based on user authentication, determining the serializer class, obtaining language preferences, and generating CSV files with Chinese labels for transportation data. The get_project method retrieves the project ID, while the get_queryset method filters data based on user authentication and project ID. The get_serializer_class method returns the appropriate serializer class based on the action type. The get_lang method determines the language preference for rendering Chinese or English labels. The list method generates a CSV file with Chinese labels for transportation data and initiates the file download process.

In the project, the FreightfileDownloadView class utilizes the FreightfileRenderCN class to render CSV files with Chinese labels, enhancing user experience and data readability. Additionally, the class incorporates the TransportationFeeListFilter class to apply specific filter options when querying the TransportationFeeListModel data, ensuring precise data retrieval based on defined criteria.

**Note**:
Developers should ensure consistent usage of filter options and language preferences to maintain data integrity and user experience in CSV file generation for transportation data.

**Output Example**:
A CSV file named 'freight_20220101120000.csv' containing transportation data with Chinese labels for headers like 'send_city', 'receiver_city', 'weight_fee', and more.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- No parameters are passed explicitly to this function.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary, which typically contains the captured URL parameters. If successful, it returns the 'pk' value. If an exception occurs during this process, it returns None.

In the calling object, get_queryset, the get_project function is invoked to obtain the 'id' value. Subsequently, based on the 'id' value and the authenticated user in the request, different queries are executed to filter TransportationFeeListModel objects accordingly.

**Note**:
It is important to handle exceptions appropriately when using the get_project function, as it may return None if the 'pk' value is not found in self.kwargs.

**Output Example**:
If the 'pk' value is successfully retrieved from self.kwargs and is, for example, 123, the function will return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve transportation fee records based on the authenticated user and project ID, filtering them accordingly.

**Parameters**:
- No explicit parameters are passed to this function.

**Code Description**:
The get_queryset function first obtains the project ID by calling the get_project method. It then checks if the request user is authenticated. If authenticated, it filters the TransportationFeeListModel objects based on the project ID and the OpenID associated with the request. If the project ID is not available, all non-deleted transportation fee records associated with the OpenID are returned. If the user is not authenticated, an empty queryset is returned.

The function utilizes the TransportationFeeListModel model to perform the filtering based on the specified criteria. By leveraging the get_project method and request attributes, it dynamically adjusts the queryset to retrieve the relevant transportation fee records.

This function is a crucial part of the FreightfileDownloadView class in the payment/views.py file, as it determines the data to be included in the response for downloading freight files based on the user's authentication status and project ID.

**Note**:
Developers should ensure that the necessary permissions and authentication checks are in place before invoking this function to prevent unauthorized access to transportation fee records.

**Output Example**:
If the authenticated user has a project ID and valid permissions, the function may return a queryset containing transportation fee records filtered based on the specified criteria.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**parameters**: 
- self: The instance of the class.

**Code Description**:
The get_serializer_class method checks the action being performed. If the action is 'list', it returns the FreightfileRenderSerializer class from serializers. Otherwise, it calls the http_method_not_allowed method to handle the request.

The FreightfileRenderSerializer class is a ModelSerializer that defines read-only fields for serializing transportation fee details. It includes fields such as sender city, receiver city, weight fee, volume fee, transportation supplier, creator, creation time, and update time. This serializer class is utilized to serialize transportation fee data for rendering purposes in the project's views.

In the FreightfileDownloadView, the get_serializer_class method ensures that the appropriate serializer class is used when the action is 'list'. This guarantees that the data is serialized correctly for listing purposes. The FreightfileRenderSerializer class is crucial for maintaining data integrity and security during serialization.

**Note**:
Developers can rely on the get_serializer_class method to dynamically select the serializer class based on the action being performed, ensuring proper serialization of transportation fee data. The FreightfileRenderSerializer class provides read-only fields for various transportation fee details, facilitating efficient data serialization for rendering purposes.

**Output Example**:
```python
return serializers.FreightfileRenderSerializer
```
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language preference based on the 'HTTP_LANGUAGE' header in the request metadata and render CSV files with either Chinese or English labels accordingly.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language information from the 'HTTP_LANGUAGE' header in the request metadata. If the language is specified as 'zh-hans' (Chinese), it utilizes the FreightfileRenderCN class to render the CSV file with Chinese labels. Otherwise, it uses the FreightfileRenderEN class to render the CSV file with English labels. If no language is provided, the function defaults to rendering the CSV file with English labels. This function plays a crucial role in customizing the language representation of transportation data in the rendered CSV files.

In the project structure, the get_lang function is called within the list method of the FreightfileDownloadView class. It processes the data and returns a renderer based on the language preference, which is then used to generate a StreamingHttpResponse containing the CSV file with the appropriate language labels. By incorporating the get_lang function, the FreightfileDownloadView class can dynamically adjust the language of the rendered CSV files based on user preferences.

**Note**:
Developers should ensure that the 'HTTP_LANGUAGE' header is correctly set in the request metadata to enable language-based rendering. Additionally, the proper implementation of the FreightfileRenderCN and FreightfileRenderEN classes is essential to ensure accurate labeling of the CSV files based on the specified language.

**Output Example**:
A StreamingHttpResponse object containing a CSV file rendered with the appropriate language labels based on the 'HTTP_LANGUAGE' header.
***
### FunctionDef list(self, request)
**list**: The function of list is to generate a CSV file response containing serialized transportation fee data for rendering, with a filename based on the current date and time.
**parameters**:
- self: The instance of the class.
- request: The request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list method within the FreightfileDownloadView class retrieves serialized data using the FreightfileRenderSerializer class to render transportation fee details. It streams the rendered data as a CSV response with a dynamically generated filename based on the current date and time. By calling the get_lang method, the function determines the language preference for labeling the CSV file before returning the response. This function plays a crucial role in providing users with downloadable CSV files containing transportation fee information in a structured format.

**Note**:
Developers should ensure that the necessary permissions and authentication checks are in place before invoking this method to prevent unauthorized access to transportation fee data. Additionally, the proper implementation of the FreightfileRenderSerializer class and the get_lang method is essential for accurate serialization and language-based rendering of the CSV files.

**Output Example**:
A StreamingHttpResponse object containing a CSV file with serialized transportation fee data, ready for download by users.
***
