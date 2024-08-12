## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to provide CRUD (Create, Read, Update, Delete) operations for the ListModel data through various HTTP methods like GET, POST, PUT, PATCH, and DELETE.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter, ]
- ordering_fields: ['id', "create_time", "update_time", ]
- filter_class: Filter

**Code Description**:
The APIViewSet class extends the ModelViewSet class and implements methods for handling different HTTP actions on the ListModel data. It defines specific actions like retrieve, list, create, delete, partial_update, and update, each corresponding to a different HTTP method and operation. The class utilizes the Filter class for data filtering based on specified fields and lookup types. Additionally, it sets pagination, filter backends, ordering fields, and serializer classes for different actions to manage data retrieval, manipulation, and serialization effectively.

In the project, the APIViewSet class is used as a viewset in the supplier/views.py file to handle API requests related to ListModel data. It interacts with the Filter class for data filtering, MyPageNumberPagination for pagination, and various serializer classes for data serialization based on the requested actions. By defining specific methods for each CRUD operation, the APIViewSet class ensures proper data management and response handling within the API endpoints.

**Note**:
Developers can customize the behavior of the APIViewSet class by modifying the methods, serializer classes, and filter options according to the project requirements. Understanding the functionality of each method and its corresponding HTTP action is essential for implementing and extending the APIViewSet class effectively.

**Output Example**:
{
    "id": 1,
    "supplier_name": "Example Supplier",
    "supplier_city": "Example City",
    "supplier_address": "123 Example Street",
    "supplier_contact": "123-456-7890",
    "supplier_manager": "John Doe",
    "supplier_level": "A",
    "creater": "Jane Smith",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None.

In the calling object get_queryset, the get_project function is invoked to obtain the 'id' value. Subsequently, based on the user authentication status and the availability of 'id', different queries are executed on the ListModel to filter the results accordingly.

**Note**:
- This function is designed to handle exceptions by returning None if the 'pk' value cannot be retrieved.
- It is crucial to ensure that the 'pk' value is present in the self.kwargs dictionary to avoid potential errors.

**Output Example**:
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter results from the ListModel based on user authentication status and the availability of an 'id' value.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks the user authentication status and filters the ListModel results accordingly. If the user is authenticated and 'id' is available, the function filters the ListModel by openid, id, and is_delete=False. If the user is not authenticated, the function returns an empty queryset using ListModel.objects.none().

The get_queryset function is essential for customizing query results based on user authentication and the presence of an 'id' value. By utilizing the get_project function, it ensures the correct 'id' value is obtained before filtering the ListModel results.

**Note**:
- It is crucial to ensure that the 'pk' value is present in the self.kwargs dictionary for the get_project function to retrieve the correct 'id'.
- The function handles different scenarios based on user authentication status to provide tailored query results.

**Output Example**:
If the user is authenticated and the 'id' value is 1, the function will return a queryset filtered by openid, id=1, and is_delete=False from the ListModel.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine and return the appropriate serializer class based on the action being performed within the APIViewSet.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_serializer_class function contains conditional statements that check the action being performed. Depending on the action ('list', 'retrieve', 'destroy', 'create', 'update', 'partial_update'), it returns the corresponding serializer class. If the action is related to listing, retrieving, or deleting, the function returns the SupplierGetSerializer. For creating new entries, it returns the SupplierPostSerializer. For updating supplier information, it returns the SupplierUpdateSerializer. If the action is for partial updates, the function returns the SupplierPartialUpdateSerializer. In case the action does not match any of the predefined actions, it calls the http_method_not_allowed method.

This function plays a crucial role in dynamically selecting the appropriate serializer class based on the action performed within the APIViewSet, ensuring the correct serialization of supplier data according to the specific action requirements.

**Note**:
Developers should ensure that the actions defined in the conditional statements align with the expected behaviors in the project. Additionally, the serializer classes returned should be utilized appropriately to maintain data consistency and integrity within the system.

**Output Example**:
- If the action is 'list', the function returns SupplierGetSerializer.
- If the action is 'create', the function returns SupplierPostSerializer.
- If the action is 'update', the function returns SupplierUpdateSerializer.
- If the action is 'partial_update', the function returns SupplierPartialUpdateSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new instance of a model with specific validations and return the serialized data upon successful creation.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object. It then adds the 'openid' value from the request's authentication information to the data. Subsequently, it checks if an existing entry with the same 'openid', 'supplier_name', and 'is_delete' fields exists in the ListModel. If the entry exists, an APIException is raised with a message indicating that the data already exists. If the entry does not exist, the function proceeds to create a serializer instance with the provided data. The function validates the serializer, saves the data, retrieves success headers, and returns a response with the serialized data and a status code of 200.

**Note**:
- This function assumes the existence of a ListModel and a serializer associated with it.
- The function relies on the request object to access data and authentication information.

**Output Example**:
{
    "id": 1,
    "supplier_name": "Example Supplier",
    "openid": "example_openid",
    "is_delete": false
}
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update a specific object instance.

**parameters**:
- request: Represents the request made to update the object.
- pk: Represents the primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. Otherwise, the function proceeds to update the object with the data from the request. The data is validated using the serializer, and if valid, the changes are saved. Finally, the function returns a response with the updated data and a success status code along with any additional headers.

**Note**:
- This function assumes the existence of a get_object method to retrieve the object to be updated and a get_serializer method to serialize the data.
- It is important to ensure that the authentication mechanism is properly implemented to prevent unauthorized updates.
- The response includes the updated data and any headers that may be needed for further processing.

**Output Example**:
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to partially update data based on the provided request and primary key.

**parameters**:
- self: The instance of the class.
- request: The request object containing the data to be updated.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the primary key. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. If the openids match, the function proceeds to update the data based on the request data. The function uses a serializer to validate the data, saves the updated data, and retrieves the success headers. Finally, it returns a response containing the updated data with a status code of 200 and the success headers.

**Note**:
It is important to ensure that the request contains the necessary data for the partial update to avoid any validation errors.

**Output Example**:
{
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the request is authorized.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised with a message indicating that the data cannot be deleted. If the openids match, the is_delete field of the object is set to True, and the object is saved. The function then retrieves the serializer for the object and generates success headers. Finally, it returns a response with the serialized data, a status code of 200, and the success headers.

**Note**:
- This function is designed to delete an object only if the request is authorized.
- Make sure to handle the APIException appropriately in your code.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
## ClassDef FileDownloadView
**FileDownloadView**: The function of FileDownloadView is to handle file downloads of CSV files containing supplier information based on specific filter criteria and language preferences.

**attributes**:
- renderer_classes: Specifies the renderer classes for file rendering.
- filter_backends: Defines the filter backends for data filtering.
- ordering_fields: Specifies the fields for data ordering.
- filter_class: Indicates the filter class for data filtering.

**Code Description**:
FileDownloadView is a class that extends the ModelViewSet class and implements various methods to facilitate the download of CSV files containing supplier information. The class utilizes renderer_classes to set the renderer for file rendering, filter_backends to define filter options, ordering_fields to specify ordering fields, and filter_class to apply filters to the queryset.

The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the ListModel data based on the user and project ID. The get_serializer_class method returns the serializer class based on the action type. The get_lang method determines the language for rendering the CSV file.

The list method generates the CSV file content by filtering data, rendering it in the preferred language, and creating a StreamingHttpResponse for file download. The response includes the CSV content with appropriate headers and a filename based on the current timestamp.

FileDownloadView interacts with the ListModel data through filtering and serialization, ensuring that the downloaded CSV files contain accurate supplier information based on user preferences and language settings.

**Note**: Developers can customize the filter options, renderer classes, and language preferences in FileDownloadView to meet specific requirements for downloading supplier data in CSV format.

**Output Example**:
A CSV file named 'supplier_20220101120000.csv' containing supplier information in Chinese language.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are passed explicitly, as the function accesses 'pk' from self.kwargs.

**Code Description**: 
The get_project function first attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during this process, the function returns None.

This function is utilized within the get_queryset method of the FileDownloadView class. In get_queryset, the get_project function is called to obtain the 'id' value. Depending on the 'id' value and the presence of a user in the request, different filtering conditions are applied to the ListModel queryset.

**Note**: 
It's important to handle exceptions properly when using this function to ensure robustness in case the 'pk' value is not found in self.kwargs.

**Output Example**: 
If 'pk' is found in self.kwargs and has a value of 123, the function will return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter the ListModel queryset based on the 'id' value obtained from the get_project function and the presence of a user in the request.

**parameters**: 
- No explicit parameters are passed to the function.

**Code Description**: 
The get_queryset function first calls the get_project method to retrieve the 'id' value. It then checks if there is a user in the request. If a user exists, it filters the ListModel queryset based on the 'id' value and the user's openid. If 'id' is None, it filters by openid and is_delete=False. If 'id' is not None, it filters by openid, id, and is_delete=False. If no user is found in the request, an empty ListModel queryset is returned.

This function is a part of the FileDownloadView class and plays a crucial role in determining the queryset based on specific conditions.

**Note**: 
It's essential to ensure that the get_project function returns the expected 'id' value to avoid unexpected behavior in filtering the ListModel queryset.

**Output Example**: 
If a user is present in the request and the 'id' value is 123, the function will return a filtered ListModel queryset containing objects with openid equal to the user's openid, id equal to 123, and is_delete set to False.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class to be used based on the action performed, returning FileRenderSerializer for the 'list' action.

**parameters**: None

**Code Description**:
The get_serializer_class method checks the action being performed, and if the action is 'list', it returns the FileRenderSerializer class. This serializer class is responsible for serializing supplier-related data into a specific format for rendering. The FileRenderSerializer class defines various fields such as supplier_name, supplier_city, supplier_address, and more, and is configured to exclude certain fields like openid and is_delete. In the context of the project, this method is utilized in the FileDownloadView to determine the appropriate serializer for rendering data in a CSV format for download.

**Note**:
Developers can customize the serialization behavior by modifying the fields and Meta options of the FileRenderSerializer class as needed.

**Output Example**:
FileRenderSerializer
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language based on the 'HTTP_LANGUAGE' header in the request and render CSV files accordingly in Chinese or English using FileRenderCN or FileRenderEN classes.

**parameters**:
- self: The instance of the class.
- data: The data to be rendered in the CSV file.

**Code Description**:
The get_lang function retrieves the language information from the 'HTTP_LANGUAGE' header in the request. If the language is 'zh-hans' (Chinese), it utilizes the FileRenderCN class to render the CSV file with Chinese labels. Otherwise, it uses the FileRenderEN class to render the CSV file with English labels. If no language is specified, the function defaults to rendering the CSV file with English labels.

In the context of the project, the get_lang function is called within the list function of the FileDownloadView class. It processes the data obtained from the queryset, selects the appropriate renderer based on the language, and generates a StreamingHttpResponse containing the rendered CSV file. The response is then configured with necessary headers for file download.

**Note**: It is essential to ensure that the 'HTTP_LANGUAGE' header is correctly set in the request to determine the language for rendering the CSV file accurately.

**Output Example**:
A StreamingHttpResponse object containing the rendered CSV file based on the language specified in the request.
***
### FunctionDef list(self, request)
**list**: The function of list is to serialize data related to supplier information into a CSV format for download.

**parameters**:
- self: The instance of the class.
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileDownloadView class serializes instances of supplier data using the FileRenderSerializer. It generates a CSV file by rendering the serialized data and constructs a StreamingHttpResponse object with the CSV content. The response is configured with headers for file download, including a filename based on the current date and time.

The function utilizes the FileRenderSerializer class to format supplier data and facilitates CSV file downloads for users. By calling the get_lang function, it determines the language for rendering the CSV file based on the 'HTTP_LANGUAGE' header in the request. The response provides a downloadable CSV file tailored to the user's language preference.

**Note**:
Developers can customize the CSV rendering behavior by adjusting the FileRenderSerializer class and ensuring the correct language header in the request for accurate file rendering.

**Output Example**:
A StreamingHttpResponse object containing the CSV file with supplier information for download.
***
