## ClassDef ReceiptsViewSet
**ReceiptsViewSet**: The function of ReceiptsViewSet is to handle the retrieval and filtering of AsnDetailModel objects based on specific criteria, and provide a response with a structured dataset for visualization.

**attributes**:
- pagination_class: None
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: AsnDetailFilter

**Code Description**:
The ReceiptsViewSet class extends the ModelViewSet class and includes methods to retrieve the project ID, get the queryset of AsnDetailModel objects, determine the serializer class, and generate a response with a structured dataset for visualization.

The get_project method retrieves the project ID from the request's kwargs, while the get_queryset method filters AsnDetailModel objects based on the user's authentication status and specific criteria such as openid, asn_status, create_time, and id.

The get_serializer_class method selects the appropriate serializer class based on the action of the viewset, returning asnserializers.ASNDetailGetSerializer for the 'list' action.

The list method retrieves the queryset, processes the data to create a structured dataset for visualization, and returns a Response with the context containing the dataset and series for visualization.

This class utilizes the AsnDetailFilter class for filtering AsnDetailModel objects based on various fields and lookup types, providing flexibility in data retrieval and manipulation.

**Note**: The ReceiptsViewSet class serves as a crucial component in handling the retrieval, filtering, and visualization of AsnDetailModel objects within the project's functionality.

**Output Example**:
{
    "dataset": {
        "source": [
            {
                "2022-01-01": 100.0,
                "2022-01-02": 150.0,
                ...
            }
        ],
        "dimensions": ["product", "2022-01-01", "2022-01-02", ...]
    },
    "series": [
        {
            "type": 'bar',
            "barWidth": '4%',
            ...
        }
    ]
}
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- No parameters are passed explicitly to this function.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None.

In the project, this function is called within the get_queryset method of the ReceiptsViewSet class. Within get_queryset, the get_project function is used to obtain the 'id' value, which is then utilized to filter AsnDetailModel objects based on certain conditions. The function ensures that the correct 'id' is retrieved for further processing within the get_queryset method.

**Note**:
- The get_project function is designed to handle exceptions by returning None if the 'pk' value cannot be retrieved.
- It is essential to ensure that the self.kwargs dictionary contains the 'pk' key before calling this function to avoid potential errors.

**Output Example**:
If the 'pk' value is successfully retrieved, the function may return an integer value representing the 'id'. For example, if 'pk' is 123, the function would return 123.
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter AsnDetailModel objects based on specific conditions depending on the presence of a user and the 'id' value obtained from the get_project function.

**parameters**:
- No explicit parameters are passed to this function.

**Code Description**:
The get_queryset function first retrieves the 'id' value by calling the get_project function. It then checks if there is a user in the request. If a user exists, it further checks if the 'id' is None. Based on these conditions, the function filters AsnDetailModel objects with specific criteria, including openid, asn_status, create_time, and is_delete fields. The filtering conditions vary depending on the presence of the 'id' value. If the 'id' is not None, an additional filter based on the 'id' is applied.

This function ensures that the queryset of AsnDetailModel objects returned is tailored to the user's authentication status and the availability of the 'id' value. By applying these filters, the function retrieves relevant ASN details for further processing within the project.

The get_queryset function is called within the ReceiptsViewSet class in the views.py file of the dashboard app. It plays a crucial role in fetching and filtering ASN details based on dynamic conditions, contributing to the functionality of handling and displaying receipt data within the project.

**Note**:
- The get_queryset function relies on the get_project function to obtain the 'id' value, emphasizing the importance of proper execution order within the ReceiptsViewSet class.
- It is essential to understand the logic behind the filtering conditions in the function to ensure accurate retrieval of ASN details based on user authentication and 'id' availability.

**Output Example**:
An example output of the get_queryset function could be a queryset of AsnDetailModel objects filtered based on specific conditions, such as openid, asn_status, create_time, and is_delete fields, tailored to the user's authentication status and the 'id' value obtained.
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**Code Description**:
The get_serializer_class function checks the action being performed and returns the ASNDetailGetSerializer class if the action is 'list'. Otherwise, it calls the http_method_not_allowed method with the request parameter.

This function is crucial in the ReceiptsViewSet within the project's dashboard views, where it selects the serializer class for handling list actions.

**Note**: Developers can rely on this function to dynamically choose the serializer class based on the action, ensuring proper serialization of data for the 'list' action in the ReceiptsViewSet.

**Output Example**:
ASNDetailGetSerializer
***
### FunctionDef notice_lang(self)
**notice_lang**: The function of notice_lang is to retrieve the language information from the HTTP headers in the request.

**parameters**: 
- self: The instance of the class.
  
**Code Description**: 
The notice_lang function accesses the 'HTTP_LANGUAGE' header from the request's META information using the self.request attribute. It then retrieves the language value and returns it.

**Note**: 
Make sure that the 'HTTP_LANGUAGE' header is set in the request's META information for this function to work correctly.

**Output Example**: 
If the 'HTTP_LANGUAGE' header in the request is 'en-US', the function will return 'en-US'.
***
### FunctionDef list(self, request)
**list**: The function of list is to process queryset data, organize it into a specific format, and return a response containing the structured dataset and series for visualization.

**parameters**:
- request: Represents the request made to the function.
- *args: Represents variable positional arguments.
- **kwargs: Represents variable keyword arguments.

**Code Description**:
The list function first retrieves a queryset using the get_queryset method from the same class. It then initializes various variables to store context, dataset, dimensions, source, series, and bar_charts configuration. The function processes the queryset data by annotating it with month and day values extracted from the 'create_time' field, and then aggregates the 'goods_cost' field based on the annotated values. The processed data is structured into a dictionary format and appended to the source list. Additionally, the function updates the dimensions list and series list with the processed data and bar_charts configuration, respectively. Finally, the function constructs the context dictionary containing the dataset and series, and returns a Response object with the context.

The list function is an integral part of the ReceiptsViewSet class in the views.py file of the dashboard app. It plays a crucial role in preparing and organizing data for visualization, specifically for generating bar charts based on receipt information. By structuring the data and configuring the visualization parameters, the function facilitates the presentation of receipt data in a visually appealing format.

**Note**:
- The list function relies on the get_queryset method to fetch the necessary data for visualization, highlighting the interdependence of functions within the ReceiptsViewSet class.
- Understanding the structure of the dataset, dimensions, and series is essential for customizing the visualization output according to project requirements.

**Output Example**:
{
    "dataset": {
        "source": [
            {
                "month-day": 123.45,
                ...
            }
        ],
        "dimensions": ["product", "month-day"]
    },
    "series": [
        {
            "type": "bar",
            "barWidth": "4%",
            "barGap": "60%",
            "barCategoryGap": "10%",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": "true",
                        "position": "top"
                    }
                }
            }
        }
    ]
}
***
## ClassDef SalesViewSet
**SalesViewSet**: The function of SalesViewSet is to handle sales data and provide a list of data in response.

**attributes**:
- pagination_class: None
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: DnDetailFilter

**Code Description**:
The `SalesViewSet` class is a viewset that extends `ModelViewSet` to manage sales data. It includes methods to retrieve a list of data, get the project ID, get the queryset based on user and project ID, determine the serializer class based on the action, retrieve the language from the request, and list data for visualization purposes.

The `get_project` method retrieves the project ID from the request parameters. The `get_queryset` method filters `DnDetailModel` objects based on user authentication, project ID, date range, and deletion status. The `get_serializer_class` method selects the serializer class based on the action type.

The `notice_lang` method retrieves the language from the request headers. The `list` method processes the queryset data, annotates it with month and day information, and prepares a context with dataset and visualization details before returning a response.

This class utilizes the `DnDetailFilter` for filtering `DnDetailModel` objects based on specified fields and lookup types.

**Note**: Developers can customize the behavior of this viewset by modifying the queryset logic, serializer selection, and data processing methods according to project requirements.

**Output Example**:
```
{
    "dataset": {
        "source": [{...}],
        "dimensions": [...]
    },
    "series": [{...}],
    ...
}
```
### FunctionDef get_project(self)
**get_project**: The function of get_project is to retrieve the 'pk' value from the self.kwargs dictionary and return it.

**parameters**:
- No parameters are passed explicitly to this function.

**Code Description**:
The get_project function attempts to retrieve the 'pk' value from the self.kwargs dictionary. If successful, it returns the 'pk' value; otherwise, it returns None.

In the context of the project, this function is called within the get_queryset function of the SalesViewSet class. In get_queryset, the get_project function is used to obtain the 'id' value, which is then utilized to filter DnDetailModel objects based on certain conditions.

**Note**:
- The get_project function is designed to handle exceptions by returning None if there is an error during the retrieval of the 'pk' value.
- It is important to ensure that the 'pk' value is present in the self.kwargs dictionary to avoid potential None returns.

**Output Example**:
If the 'pk' value is successfully retrieved from self.kwargs:
```
123
```

If an exception occurs during the retrieval of the 'pk' value:
```
None
```
***
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to filter DnDetailModel objects based on specific conditions depending on the presence of a user and the 'id' value obtained from the get_project function.

**parameters**:
- No parameters are explicitly passed to this function.

**Code Description**:
The get_queryset function first calls the get_project function to retrieve the 'id' value. It then checks if a user is present in the request. If a user exists, it further checks if the 'id' value is None. Based on these conditions, the function filters DnDetailModel objects with specific criteria related to 'openid', 'dn_status', 'create_time', 'id', and 'is_delete'. If no user is present, an empty queryset is returned.

This function is utilized within the SalesViewSet class in the views.py file of the dashboard app. By leveraging the get_project function, get_queryset dynamically filters DnDetailModel objects to provide relevant data based on the user's context and the 'id' value.

**Note**:
- The get_queryset function relies on the get_project function to obtain the 'id' value for filtering DnDetailModel objects.
- Ensure that the 'id' value is correctly retrieved to avoid unexpected behavior in the queryset filtering process.

**Output Example**:
If a user is present and 'id' is None:
```
<QuerySet [<DnDetailModel: object1>, <DnDetailModel: object2>, ...]>
```

If a user is present and 'id' is not None:
```
<QuerySet [<DnDetailModel: object3>, <DnDetailModel: object4>, ...]>
```

If no user is present:
```
<QuerySet []>
```
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the appropriate serializer class based on the action being performed.

**Code Description**: The `get_serializer_class` function checks the action being performed and returns the corresponding serializer class. If the action is 'list', it returns the `DNDetailGetSerializer` from dnserializers module. Otherwise, it calls the `http_method_not_allowed` method with the request parameter.

This function is crucial in the `SalesViewSet` as it helps in selecting the appropriate serializer for handling data serialization during the 'list' action. By utilizing the `DNDetailGetSerializer`, the function ensures that the data related to Delivery Note details is serialized correctly for display or processing.

**Note**: Developers can extend the functionality of this function by adding more conditions to handle different actions with specific serializer classes.

**Output Example**:
```python
return dnserializers.DNDetailGetSerializer
```
***
### FunctionDef notice_lang(self)
**notice_lang**: The function of notice_lang is to retrieve the language information from the HTTP headers of the request.

**parameters**: This Function does not take any parameters.

**Code Description**: The notice_lang function accesses the 'HTTP_LANGUAGE' key from the request's META attribute using the self parameter. It retrieves the language information provided in the HTTP headers and returns it.

**Note**: Make sure that the 'HTTP_LANGUAGE' header is correctly set in the request for this function to work as expected.

**Output Example**: 
If the 'HTTP_LANGUAGE' header in the request is 'en-US', the function will return 'en-US'.
***
### FunctionDef list(self, request)
**list**: The function of list is to generate a dataset and context for a bar chart visualization based on the queryset obtained from the get_queryset function. 

**parameters**:
- request: Represents the request made to the server.
- *args: Additional positional arguments.
- **kwargs: Additional keyword arguments.

**Code Description**:
The list function first retrieves a queryset using the get_queryset function. It then processes the queryset to generate a dataset and context for a bar chart visualization. The function iterates over the queryset results, extracts relevant data, and structures it for visualization. The final context containing the dataset and series for the bar chart is returned as a Response.

The list function is a part of the SalesViewSet class in the views.py file of the dashboard app. It utilizes the get_queryset function to fetch data and transform it into a format suitable for visualization, enhancing the user experience by presenting data in a graphical form.

**Note**:
- Ensure that the get_queryset function is correctly implemented to retrieve the necessary queryset for visualization.
- The list function focuses on data processing and visualization logic, making it crucial for generating bar chart representations based on the queryset data.

**Output Example**:
```
{
    'dataset': {
        'source': [{'1-15': 100, '2-20': 150, ...}],
        'dimensions': ['product', '1-15', '2-20', ...]
    },
    'series': [
        {
            "type": 'bar',
            "barWidth": '4%',
            "barGap": '60%',
            "barCategoryGap": '10%',
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": "true",
                        "position": "top"
                    }
                }
            }
        },
        {...}
    ]
}
```
***
