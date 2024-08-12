## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to handle various CRUD operations for the ListModel model, including retrieving, listing, creating, updating, partially updating, and deleting data.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The APIViewSet class extends the ModelViewSet class and provides methods to interact with the ListModel model. It includes functions to retrieve, list, create, update, partially update, and delete data. The class utilizes pagination, filtering, and ordering options for data manipulation. The get_project method retrieves the project ID from the request parameters. The get_queryset method filters data based on the user and project ID. The get_serializer_class method determines the serializer class based on the action performed. The create, update, partial_update, and destroy methods handle data creation, updating, partial updating, and deletion operations, respectively.

The APIViewSet class uses the MyPageNumberPagination class for pagination, DjangoFilterBackend and OrderingFilter for filtering, and the Filter class for defining filter options for the ListModel model. The class interacts with serializers to perform data serialization and deserialization based on the CRUD operations.

**Note**: Developers can customize the behavior of APIViewSet by modifying the methods or attributes according to specific project requirements.

**Output Example**:
{
    "id": 1,
    "driver_name": "John Doe",
    "license_plate": "ABC123",
    "contact": "1234567890",
    "creater": "Alice",
    "is_delete": false,
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T10:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value; otherwise, it returns None.

In the calling object get_queryset, the get_project function is used to obtain the 'id' value. Depending on the presence of the 'id' value and the user authentication status, the function filters ListModel objects accordingly.

**Note**:
- Ensure that the 'pk' key exists in the self.kwargs dictionary to avoid potential errors.
- Handle exceptions appropriately when accessing the 'pk' value.

**Output Example**:
If the 'pk' value is successfully retrieved and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter ListModel objects based on the 'id' value, user authentication status, and the presence of the 'id' value.

**parameters**:
- self: The reference to the current instance of the class.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if the request user is authenticated. If authenticated, it further checks if the 'id' is None. Depending on these conditions, the function filters ListModel objects by 'openid', 'id', and 'is_delete' fields. If the user is not authenticated, the function returns an empty queryset.

The get_queryset function utilizes the get_project function to obtain the 'id' value, which is crucial for filtering ListModel objects effectively based on specific criteria.

**Note**:
- Ensure that the 'pk' key exists in the self.kwargs dictionary to avoid potential errors.
- Properly handle exceptions when accessing the 'pk' value to prevent unexpected behavior.

**Output Example**:
If the user is authenticated and the 'id' value is 1, the function will return ListModel objects filtered by 'openid' equal to the request authentication 'openid', 'id' equal to 1, and 'is_delete' set to False.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed in the APIViewSet.

**parameters**:
- self: The instance of the class.
  
**Code Description**:
The get_serializer_class function contains conditional statements that check the value of self.action to determine which serializer class to return. If the action is 'list', 'retrieve', or 'destroy', it returns the DriverGetSerializer. If the action is 'create', it returns the DriverPostSerializer. For 'update', it returns the DriverUpdateSerializer, and for 'partial_update', it returns the DriverPartialUpdateSerializer. If none of these conditions are met, it calls the http_method_not_allowed method.

This function plays a crucial role in dynamically selecting the appropriate serializer class based on the action requested in the APIViewSet, ensuring that the data is serialized correctly for different operations.

**Note**:
Developers can utilize the get_serializer_class function within the APIViewSet to handle serialization of data based on specific actions like retrieval, creation, update, and partial update. By returning the corresponding serializer class, the function ensures that the data is processed and formatted correctly for the API responses.

**Output Example**:
If the action is 'create', the function will return serializers.DriverPostSerializer.
***
### FunctionDef create(self, request)
**create**: The function of create is to handle the creation of a new object based on the provided data.

**parameters**:
- request: The HTTP request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The create function first retrieves the data from the request object and then adds the 'openid' field from the request authentication information. It checks if a similar object already exists in the ListModel based on certain conditions. If the object exists, it raises an APIException with a message. Otherwise, it proceeds to serialize the data, validate it, save the serialized data, and return a response with a success status code along with the serialized data.

**Note**:
- This function assumes the existence of a ListModel to perform the object existence check.
- The function relies on the availability of request data and authentication information.

**Output Example**:
```json
{
    "id": 1,
    "driver_name": "John Doe",
    "openid": "abc123",
    "created_at": "2022-01-01T12:00:00Z",
    "updated_at": "2022-01-01T12:00:00Z"
}
```
***
### FunctionDef update(self, request, pk)
**update**: The function of update is to update data if the request is made by the owner of the data.

**parameters**:
- self: The instance of the class.
- request: The request object.
- pk: The primary key of the object to be updated.

**Code Description**:
The update function first retrieves the object to be updated using the primary key (pk). It then checks if the openid of the object matches the openid of the authenticated request. If they match, the function proceeds to update the object with the data from the request. The function then validates the serializer with the updated data, saves the serializer, and returns a response with the updated data and a success status code.

**Note**:
- This function ensures that only the owner of the data can update it.
- It is important to handle exceptions appropriately when using this function.

**Output Example**:
```json
{
    "id": 1,
    "name": "Updated Name",
    "description": "Updated Description"
}
```
***
### FunctionDef partial_update(self, request, pk)
**partial_update**: The function of partial_update is to update a specific object partially.

**parameters**:
- self: The instance of the class.
- request: The request object.
- pk: The primary key of the object to be updated.

**Code Description**:
The partial_update function first retrieves the object to be updated using the get_object method. It then checks if the openid of the object matches the openid of the authenticated request. If they do not match, an APIException is raised. If the openids match, the function proceeds to update the object partially based on the data provided in the request. The serializer is used to validate the data, and if valid, the changes are saved. Finally, the function returns a response with the updated data and a success status code along with headers.

**Note**:
- This function is designed to update only specific fields of an object, not the entire object.
- Ensure that the request contains the necessary data for the partial update to be successful.

**Output Example**:
```json
{
    "field1": "updated_value1",
    "field2": "updated_value2",
    ...
}
```
***
### FunctionDef destroy(self, request, pk)
**destroy**: The function of destroy is to delete a specific object after checking if the authenticated user has the permission to delete it.

**parameters**:
- self: The instance of the class.
- request: The request object containing metadata about the request.
- pk: The primary key of the object to be deleted.

**Code Description**:
The destroy function first retrieves the object to be deleted using the get_object method. It then checks if the openid of the object matches the openid of the authenticated user. If they do not match, an APIException is raised with a message indicating that the data cannot be deleted. If the openids match, the is_delete field of the object is set to True, and the object is saved. The function then retrieves the serializer for the object and generates success headers. Finally, it returns a Response object with the serialized data, a status code of 200, and the success headers.

**Note**:
- This function assumes that the class containing it has methods like get_object, get_serializer, and get_success_headers implemented to handle object retrieval, serialization, and header generation.
- The function relies on the request object to access the authenticated user's openid.

**Output Example**:
{
    "id": 1,
    "name": "Example Object",
    "is_delete": true
}
***
## ClassDef DispatchListViewSet
**DispatchListViewSet**: The function of DispatchListViewSet is to handle the viewset for retrieving and listing data related to dispatch lists.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: DjangoFilterBackend, OrderingFilter
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: DispatchFilter

**Code Description**:
The DispatchListViewSet class extends the ModelViewSet class and provides functionality for retrieving and listing data. It includes methods such as get_project, get_queryset, and get_serializer_class. The pagination_class attribute is set to MyPageNumberPagination for pagination control. The filter_backends attribute specifies the filter backends to be used, including DjangoFilterBackend and OrderingFilter. The ordering_fields attribute defines the fields by which the data can be ordered. The filter_class attribute is set to DispatchFilter, which defines filter options for the DispatchListModel model.

The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the queryset based on the project ID and the authenticated user. The get_serializer_class method returns the appropriate serializer class based on the action performed.

The DispatchListViewSet class interacts with the DispatchFilter class to apply filter options when querying the DispatchListModel model. This class plays a crucial role in handling data retrieval and listing operations for dispatch lists in the API endpoints.

**Note**:
Developers can customize the filter options by modifying the fields dictionary within the DispatchFilter class according to their specific requirements.

**Output Example**:
{
    "id": 1,
    "driver_name": "John Doe",
    "dn_code": "ABC123",
    "contact": "john.doe@example.com",
    "creater": "Admin",
    "create_time": "2022-01-01T12:00:00",
    "update_time": "2022-01-02T08:00:00"
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it. 

**parameters**: 
- No parameters are passed explicitly to this function. It relies on the self variable to access the 'pk' value from self.kwargs.

**Code Description**: 
The get_project function first attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value. If an exception occurs during this process, the function returns None.

In the context of the project, the get_project function is called within the get_queryset function of the DispatchListViewSet class. In get_queryset, the get_project function is used to obtain the 'pk' value, which is then used to filter DispatchListModel objects based on the 'openid' and 'id' values.

**Note**: 
Developers using this function should ensure that the 'pk' value is present in the self.kwargs dictionary to avoid potential exceptions.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve dispatch list objects based on specific conditions, including the authenticated user's openid and the provided id.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first obtains the 'id' value by calling the get_project method. It then checks if the request user is authenticated. If authenticated, it filters DispatchListModel objects based on the openid of the authenticated user. If 'id' is provided, it further filters the objects based on both openid and id. If the request user is not authenticated, an empty queryset is returned. This function effectively retrieves dispatch list objects based on the specified conditions.

In the project context, the get_queryset function is a crucial part of the DispatchListViewSet class, responsible for fetching and returning dispatch list objects tailored to the current user's authentication status and provided id. It leverages the DispatchListModel to interact with the database and retrieve the necessary data efficiently.

**Note**: 
Developers utilizing this function should ensure proper authentication of the request user to retrieve relevant dispatch list objects. Understanding the filtering logic based on openid and id is essential for accurate data retrieval.

**Output Example**: 
If the authenticated user's openid is 'example_openid' and the provided id is 1, the function will return a queryset containing dispatch list objects with openid 'example_openid' and id 1.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the DispatchListGetSerializer if the action is 'list' or 'retrieve'. This ensures that the correct serializer is used for serializing data when retrieving dispatch lists in the context of the DispatchListViewSet class.

The DispatchListGetSerializer is responsible for serializing data related to dispatch lists, including fields such as driver_name, dn_code, contact, creater, create_time, and update_time. It excludes the 'openid' field and sets 'id' as a read-only field. This serializer is crucial for handling the serialization of dispatch list data in the application.

When the get_serializer_class function is called with the action as 'list' or 'retrieve', it returns the DispatchListGetSerializer, ensuring that the data is serialized correctly for these actions.

**Note**:
Developers should ensure that the DispatchListModel is correctly defined and associated with the DispatchListGetSerializer to ensure proper serialization. The read-only fields specified in the serializer will not be included in any deserialization processes.

**Output Example**:
DispatchListGetSerializer
***
## ClassDef FileDownloadView
**FileDownloadView**: The function of FileDownloadView is to handle file download requests by rendering CSV data with Chinese headers and labels based on specific filtering criteria.

**attributes**:
- renderer_classes: A tuple containing the renderer class for CSV file rendering.
- filter_backends: A list of filter backends for data filtering.
- ordering_fields: A list of fields for data ordering.
- filter_class: The filter class used for data filtering.

**Code Description**:
The FileDownloadView class extends the ModelViewSet class and includes methods for retrieving project data, querying the dataset based on user authentication, determining the serializer class, obtaining language preferences, and generating CSV files with Chinese headers. The get_project method retrieves the project ID from the request parameters. The get_queryset method filters the ListModel dataset based on user authentication and project ID. The get_serializer_class method selects the serializer class based on the action type. The get_lang method determines the language for rendering CSV data. The list method generates a CSV file with Chinese headers and initiates the file download response.

In the project, the FileDownloadView class utilizes the FileRenderCN class to render CSV data with Chinese headers and labels. It also relies on the Filter class for data filtering based on specific fields defined in the ListModel model.

**Note**: Developers can leverage the FileDownloadView class to facilitate file downloads with customized CSV data formatting, including Chinese headers and labels. By integrating filtering options from the Filter class, the class ensures data retrieval based on specified criteria, enhancing the functionality and usability of the file download feature.

**Output Example**:
A CSV file with Chinese headers and labels for driver-related information is generated and downloaded in response to a file download request.
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**: 
- No parameters are explicitly passed to this function, as it operates on the self object.

**Code Description**: 
The get_project function first attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the value. If an exception occurs during this process, it returns None.

In the context of the project, this function is called within the get_queryset function of the FileDownloadView class. In get_queryset, the get_project function is used to obtain the 'id' value, which is then utilized to filter ListModel objects based on certain conditions.

**Note**: 
- It is important to handle exceptions appropriately when using this function, as it may return None if the 'pk' value is not found in self.kwargs.
- Ensure that the self object has the necessary attributes and values set before calling this function to avoid potential errors.

**Output Example**: 
If the 'pk' value is successfully retrieved from self.kwargs and is equal to 1, the function will return 1.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter ListModel objects based on certain conditions.

**parameters**: 
- No explicit parameters are passed to this function.

**Code Description**: 
The get_queryset function first retrieves the 'id' value by calling the get_project function. It then checks if the request user exists and filters ListModel objects accordingly. If the 'id' is None, it filters objects based on the openid and is_delete attributes. If the 'id' is not None, it additionally filters based on the 'id' attribute. If the request user does not exist, the function returns an empty queryset.

The get_queryset function utilizes the get_project function to obtain the 'id' value, which is crucial for filtering ListModel objects accurately based on the conditions specified in the code.

**Note**: 
- Ensure that the necessary attributes and values are set on the self object before calling this function to avoid potential errors.
- Handle exceptions appropriately when using the get_project function to account for cases where the 'pk' value is not found in self.kwargs.

**Output Example**: 
If the request user exists and the 'id' is 1, the function will return ListModel objects filtered by openid, id=1, and is_delete=False.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed. 

**parameters**:
- No parameters are passed explicitly, as the function accesses the 'action' attribute internally.

**Code Description**:
The get_serializer_class function checks the value of the 'action' attribute. If the action is 'list', it returns the FileRenderSerializer class from serializers.py. Otherwise, it calls the 'http_method_not_allowed' method with the request parameter.

The FileRenderSerializer class is responsible for serializing driver file-related data, including driver name, license plate, contact information, creator, creation time, and update time. It is a ModelSerializer that specifies the model to be serialized and excludes certain fields like 'openid' and 'is_delete'. This serializer class is utilized in the FileDownloadView class to serialize data for generating a CSV response when listing driver file information.

**Note**:
Developers can customize the serialization behavior by modifying the attributes and Meta options of the FileRenderSerializer class as needed.

**Output Example**:
FileRenderSerializer class object.
***
### FunctionDef get_lang(self, data)
**get_lang**: The function of get_lang is to determine the language based on the 'HTTP_LANGUAGE' header and render CSV data accordingly in Chinese or English.

**parameters**:
- self: The instance of the class.
- data: The CSV data to be rendered.

**Code Description**:
The get_lang function retrieves the language information from the 'HTTP_LANGUAGE' header in the request metadata. If the language is specified and set to 'zh-hans' (Chinese), the function utilizes the FileRenderCN class to render the CSV data with Chinese headers and labels. Otherwise, it uses the FileRenderEN class to render the data with English headers. If the language is not provided, the function defaults to rendering the data in English using FileRenderEN.

This function plays a crucial role in dynamically selecting the appropriate renderer based on the language preference, ensuring that the exported CSV files contain headers and labels in the desired language for better user understanding.

**Note**:
Developers can rely on the get_lang function to generate CSV files with language-specific headers, catering to different language preferences of users. By leveraging the language information from the request headers, this function enhances the localization of CSV data rendering within the application.

**Output Example**:
A rendered CSV file with headers and labels in the selected language based on the 'HTTP_LANGUAGE' header.
***
### FunctionDef list(self, request)
**list**: The function of list is to generate a CSV response for downloading driver file information.

**parameters**:
- self: The instance of the class.
- request: The request object.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function within the FileDownloadView class creates a CSV response containing driver file data. It first retrieves instances of data by filtering the queryset based on certain conditions. The function then determines the language for rendering the CSV data, sets the content type to "text/csv", and specifies the filename for the downloaded CSV file based on the current date and time. Finally, it returns the StreamingHttpResponse containing the rendered CSV data for download.

This function relies on the FileRenderSerializer to serialize the data and the get_lang method to determine the language-specific rendering of the CSV file. By utilizing StreamingHttpResponse, it efficiently handles the generation and delivery of the CSV response to the user for downloading driver file information.

**Note**:
Developers can customize the behavior of this function by adjusting the queryset filtering conditions or modifying the CSV response settings as needed. Ensure that the necessary data is available in the queryset to generate the desired CSV output accurately.

**Output Example**:
A CSV file containing driver file information ready for download by the user.
***
