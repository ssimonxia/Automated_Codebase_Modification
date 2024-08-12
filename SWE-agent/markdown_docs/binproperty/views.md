## ClassDef APIViewSet
**APIViewSet**: The function of APIViewSet is to handle various actions related to the ListModel data, including responding with a data list.

**attributes**:
- pagination_class: MyPageNumberPagination
- filter_backends: [DjangoFilterBackend, OrderingFilter]
- ordering_fields: ['id', "create_time", "update_time"]
- filter_class: Filter

**Code Description**:
The APIViewSet class is a subclass of viewsets.ModelViewSet and is responsible for managing actions on ListModel data. It includes attributes such as pagination_class, filter_backends, ordering_fields, and filter_class. The get_queryset method filters the ListModel data based on the user's request. The get_serializer_class method determines the serializer class based on the action performed, returning BinpropertyGetSerializer for the 'list' action.

In the project structure, the APIViewSet class in views.py utilizes the Filter class defined in filter.py to specify filtering options for ListModel data. By setting filter_class to Filter, the APIViewSet class ensures that the defined filter options are applied when retrieving data through API endpoints.

**Note**:
Developers can customize the filtering behavior by modifying the attributes and methods of the APIViewSet class according to their specific requirements.

**Output Example**:
{
    "data": [
        {
            "id": 1,
            "bin_property": "example",
            "creater": "user1",
            "is_delete": false,
            "create_time": "2022-01-01T00:00:00Z",
            "update_time": "2022-01-02T00:00:00Z"
        },
        {
            "id": 2,
            "bin_property": "sample",
            "creater": "user2",
            "is_delete": false,
            "create_time": "2022-01-03T00:00:00Z",
            "update_time": "2022-01-04T00:00:00Z"
        }
    ]
}
### FunctionDef get_queryset(self)
**get_queryset**: The function of get_queryset is to retrieve a queryset based on the user's authentication status.

**parameters**: This Function does not take any parameters.

**Code Description**: The get_queryset function first checks if there is a user authenticated in the request. If a user is authenticated, it returns a queryset of ListModel objects that have not been marked as deleted (is_delete=False). If there is no authenticated user, it returns an empty queryset using the none() method.

**Note**: This function is designed to handle queryset retrieval based on user authentication status, ensuring that only relevant data is returned to authenticated users.

**Output Example**: 
If the request user is authenticated:
[<ListModel: object1>, <ListModel: object2>, ...]

If the request user is not authenticated:
[]
***
### FunctionDef get_serializer_class(self)
**get_serializer_class**: The function of get_serializer_class is to determine the serializer class based on the action being performed in the APIViewSet.

**parameters**: 
- self: The instance of the class.

**Code Description**:
The `get_serializer_class` method in the `APIViewSet` class within `binproperty/views.py` is responsible for returning the appropriate serializer class based on the action being executed. If the action is 'list', the method returns an instance of the `BinpropertyGetSerializer` class from `binproperty/serializers.py`. Otherwise, it triggers an HTTP method not allowed response.

The method checks the action against a list containing 'list' and selects the `BinpropertyGetSerializer` for serialization in case of a match. This approach ensures that the data retrieved for bin properties is formatted correctly with the required fields and formats specified in the serializer class.

**Note**:
Developers can rely on this method to dynamically choose the serializer class based on the action, enhancing the flexibility and reusability of the serialization process.

**Output Example**:
BinpropertyGetSerializer (instance of the serializer class)
***
