## ClassDef MyPageNumberPagination
**MyPageNumberPagination**: The function of MyPageNumberPagination is to provide pagination functionality for the API views in the project. It extends the `PageNumberPagination` class provided by the Django REST framework.

**Attributes**:
- `page_size`: An integer representing the number of objects to be displayed per page. The default value is 30.
- `page_size_query_param`: A string representing the query parameter that can be used to override the `page_size` attribute. The default value is "max_page".
- `max_page_size`: An integer representing the maximum number of objects that can be displayed per page. The default value is 1000.
- `page_query_param`: A string representing the query parameter that is used to specify the current page. The default value is "page".

**Code Description**:
The `get_paginated_response` method is overridden to provide a custom paginated response. It retrieves data from various models in the project and returns a response with the paginated data along with additional information such as lists of goods units, goods classes, goods brands, goods colors, goods shapes, goods specs, goods origins, and suppliers. It also includes the total count of objects, links to the next and previous pages, and the actual data to be displayed on the current page.

The method first retrieves data from the `goods_unit`, `goods_class`, `goods_brand`, `goods_color`, `goods_shape`, `goods_specs`, `goods_origin`, and `supplier` models based on the `openid` and `is_delete` conditions. It then extracts specific fields from each data object and appends them to their respective lists.

Finally, the method constructs a `Response` object using the `OrderedDict` class from the `collections` module. The `OrderedDict` contains key-value pairs representing the paginated data and additional information. The keys include "goods_unit_list", "goods_class_list", "goods_brand_list", "goods_color_list", "goods_shape_list", "goods_specs_list", "goods_origin_list", "supplier_list", "count", "next", "previous", and "results". The "count" key represents the total count of objects, while the "next" and "previous" keys contain links to the next and previous pages respectively. The "results" key contains the actual data to be displayed on the current page.

**Note**: 
- This class should be used as the `pagination_class` attribute in the API views where pagination is required.
- The `page_size`, `page_size_query_param`, and `max_page_size` attributes can be customized according to the specific requirements of the project.

**Output Example**:
```python
{
    "goods_unit_list": ["unit1", "unit2", "unit3"],
    "goods_class_list": ["class1", "class2", "class3"],
    "goods_brand_list": ["brand1", "brand2", "brand3"],
    "goods_color_list": ["color1", "color2", "color3"],
    "goods_shape_list": ["shape1", "shape2", "shape3"],
    "goods_specs_list": ["specs1", "specs2", "specs3"],
    "goods_origin_list": ["origin1", "origin2", "origin3"],
    "supplier_list": ["supplier1", "supplier2", "supplier3"],
    "count": 100,
    "next": "https://example.com/api/goods?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "product1"
        },
        {
            "id": 2,
            "name": "product2"
        },
        {
            "id": 3,
            "name": "product3"
        }
    ]
}
```
### FunctionDef get_paginated_response(self, data)
**get_paginated_response**: The function of get_paginated_response is to retrieve paginated response data including various lists of goods units, classes, brands, colors, shapes, specifications, origins, suppliers, along with pagination information and the actual data.

**parameters**:
- data: The data to be included in the response.

**Code Description**:
The function fetches data from different tables such as goods_unit, goods_class, goods_brand, goods_color, goods_shape, goods_specs, goods_origin, and supplier based on the provided authentication information. It then constructs lists for each category by iterating over the retrieved data. Finally, it assembles the response including the lists, pagination details like count, next and previous links, and the original data passed to the function.

**Note**: 
- This function heavily relies on the structure and relationships of the database tables to fetch the required information.
- Ensure that the authentication information is correctly provided to retrieve the relevant data.

**Output Example**:
```
{
    'goods_unit_list': [...],
    'goods_class_list': [...],
    'goods_brand_list': [...],
    'goods_color_list': [...],
    'goods_shape_list': [...],
    'goods_specs_list': [...],
    'goods_origin_list': [...],
    'supplier_list': [...],
    'count': 100,
    'next': 'link_to_next_page',
    'previous': 'link_to_previous_page',
    'results': {...}
}
```
***
