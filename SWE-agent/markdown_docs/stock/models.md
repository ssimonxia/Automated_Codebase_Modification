## ClassDef StockListModel
**StockListModel**: The function of StockListModel is to define a model that represents stock information with various fields such as goods code, quantity, and timestamps.

**attributes**: 
- goods_code: CharField to store the goods code.
- goods_desc: CharField to store the goods description.
- goods_qty: BigIntegerField to store the total quantity of goods.
- onhand_stock: BigIntegerField to store the on hand stock quantity.
- can_order_stock: BigIntegerField to store the quantity of stock that can be ordered.
- ordered_stock: BigIntegerField to store the quantity of ordered stock.
- inspect_stock: BigIntegerField to store the quantity of stock under inspection.
- hold_stock: BigIntegerField to store the quantity of stock on hold.
- damage_stock: BigIntegerField to store the quantity of damaged stock.
- asn_stock: BigIntegerField to store the quantity of stock related to ASN (Advanced Shipping Notice).
- dn_stock: BigIntegerField to store the quantity of stock related to DN (Delivery Note).
- pre_load_stock: BigIntegerField to store the quantity of stock for pre-loading.
- pre_sort_stock: BigIntegerField to store the quantity of stock for pre-sorting.
- sorted_stock: BigIntegerField to store the quantity of sorted stock.
- pick_stock: BigIntegerField to store the quantity of stock available for picking.
- picked_stock: BigIntegerField to store the quantity of stock that has been picked.
- back_order_stock: BigIntegerField to store the quantity of stock on backorder.
- supplier: CharField to store the goods supplier information.
- openid: CharField to store the Openid.
- create_time: DateTimeField to store the creation timestamp.
- update_time: DateTimeField to store the last update timestamp.

**Code Description**: 
The StockListModel class is a Django model that defines the structure of a stock list. It includes fields to store various stock-related information such as goods code, quantities, supplier details, and timestamps for creation and updates. The class also specifies metadata such as the database table name, verbose names, and ordering.

This model is utilized in other parts of the project, such as in the StockListFilter Meta class where the model is referenced along with filter fields for querying. Additionally, in the StockListGetSerializer and FileListRenderSerializer Meta classes, the model is specified for serialization with specific configurations like excluding certain fields and setting read-only fields.

In the StockListViewSet and FileListDownloadView views, the get_queryset method uses the StockListModel to filter stock data based on the user's authentication and project ID, returning the corresponding queryset.

**Note**: Developers can use the StockListModel class to represent and manage stock information in the project, ensuring consistency and efficiency in handling stock-related data.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the StockListModel class.

**attributes**: 
- db_table: Specifies the database table name for the StockListModel class as 'stocklist'.
- verbose_name: Sets a human-readable name for the Stock List model as 'Stock List'.
- verbose_name_plural: Provides a plural name for the Stock List model as 'Stock List'.
- ordering: Defines the default ordering of query results by the 'id' field in descending order.

**Code Description**: 
The Meta class within the StockListModel class in models.py file is used to specify metadata options for the StockListModel class. 
- The db_table attribute is set to 'stocklist', which indicates the name of the database table to be used for storing instances of the StockListModel class.
- The verbose_name attribute is assigned the value 'Stock List', serving as a human-readable name for the Stock List model.
- verbose_name_plural is set to "Stock List" to provide a plural name for the Stock List model.
- The ordering attribute is configured with ['-id'], specifying the default ordering of query results to be based on the 'id' field in descending order.

**Note**: 
Developers can customize the metadata options for the StockListModel class by modifying the attributes within the Meta class according to their specific requirements. The ordering attribute allows developers to define the default sorting behavior for query results based on the specified field and order.
***
## ClassDef StockBinModel
**StockBinModel**: The StockBinModel class represents a model for storing information about stock bins. It is a subclass of the models.Model class from the Django framework.

**Attributes**:
- bin_name: A character field representing the name of the stock bin.
- goods_code: A character field representing the code of the goods stored in the bin.
- goods_desc: A character field representing the description of the goods.
- goods_qty: A BigIntegerField representing the quantity of goods in the bin.
- pick_qty: A BigIntegerField representing the quantity of goods picked from the bin.
- picked_qty: A BigIntegerField representing the quantity of goods already picked from the bin.
- bin_size: A character field representing the size of the bin.
- bin_property: A character field representing the property of the bin.
- t_code: A character field representing the transaction code.
- openid: A character field representing the Openid.
- create_time: A DateTimeField representing the creation time of the bin.
- update_time: A DateTimeField representing the last update time of the bin.

**Code Description**:
The StockBinModel class is used to define the structure and behavior of the stock bin model. It inherits from the models.Model class provided by the Django framework.

The class defines several fields to store information about the stock bins, such as the bin name, goods code, goods description, quantity of goods in the bin, quantity of goods picked from the bin, quantity of goods already picked from the bin, bin size, bin property, transaction code, Openid, creation time, and last update time.

The class also defines a Meta inner class, which provides metadata for the StockBinModel model. The metadata includes the database table name, verbose names for the model and its plural form, and the default ordering of the model instances.

The StockBinModel class is used in various parts of the project. It is imported and used in the following files:
- asn/views.py: No specific usage of StockBinModel in this file.
- dn/views.py: No specific usage of StockBinModel in this file.
- scanner/serializers.py: No specific usage of StockBinModel in this file.
- scanner/views.py: No specific usage of StockBinModel in this file.
- stock/admin.py: No specific usage of StockBinModel in this file.
- stock/filter.py: No specific usage of StockBinModel in this file.
- stock/filter.py/StockBinFilter/Meta: The StockBinModel is set as the model for the StockBinFilter class.
- stock/serializers.py: The StockBinModel is used in multiple serializers, including StockBinGetSerializer, StockBinPostSerializer, and FileBinListRenderSerializer.
- stock/serializers.py/StockBinGetSerializer/Meta: The StockBinModel is set as the model for the StockBinGetSerializer class. The 'openid' field is excluded from the serializer, and the 'id', 'create_time', and 'update_time' fields are read-only.
- stock/serializers.py/StockBinPostSerializer/Meta: The StockBinModel is set as the model for the StockBinPostSerializer class. No fields are excluded, and the 'id', 'openid', 'create_time', and 'update_time' fields are read-only.
- stock/serializers.py/FileBinListRenderSerializer/Meta: The StockBinModel is set as the model for the FileBinListRenderSerializer class. The 'openid' field is excluded from the serializer.
- stock/views.py: The StockBinModel is used in the StockBinViewSet class.
- stock/views.py/StockBinViewSet/get_queryset: The get_queryset method of the StockBinViewSet class filters the StockBinModel instances based on the authenticated user and the provided id.
- stock/views.py/StockBinViewSet/create: The create method of the StockBinViewSet class creates a new StockBinModel instance based on the provided data. It performs various checks and updates related models based on the bin properties and quantities.
- stock/views.py/StockBinViewSet/update: The update method of the StockBinViewSet class updates the StockBinModel instances based on the provided data. It performs similar checks and updates as the create method.
- stock/views.py/FileBinListDownloadView/get_queryset: The get_queryset method of the FileBinListDownloadView class filters the StockBinModel instances based on the authenticated user and the provided id.

**Note**: The StockBinModel class represents the structure and behavior of the stock bin model in the project. It is used in various parts of the project to store and manipulate stock bin data. The class has several fields to store information about the stock bins, and it is associated with other models and views in the project.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the StockBinModel class.

**attributes**: 
- db_table: Specifies the database table name for the StockBinModel class as 'stockbin'.
- verbose_name: Sets a human-readable name for a single object of the StockBinModel class as 'Stock Bin'.
- verbose_name_plural: Provides a human-readable name for the StockBinModel class in plural form as 'Stock Bin'.
- ordering: Specifies the default ordering of objects returned by queries on the StockBinModel class as descending order based on the 'id' field.

**Code Description**: 
The Meta class within the StockBinModel class in the models.py file defines metadata options for the StockBinModel class. The db_table attribute specifies the name of the database table associated with the StockBinModel class. The verbose_name attribute sets a user-friendly name for a single object of the StockBinModel class, while verbose_name_plural provides a name for the class in plural form. The ordering attribute determines the default ordering of objects retrieved from queries on the StockBinModel class, sorting them in descending order based on the 'id' field.

**Note**: 
Developers can customize the behavior of the StockBinModel class by modifying the attributes within the Meta class. The db_table attribute allows specifying a custom table name in the database. The verbose_name and verbose_name_plural attributes help in providing more descriptive names for the model and its instances. The ordering attribute influences the default ordering of query results, aiding in controlling the presentation of data retrieved from the database.
***
