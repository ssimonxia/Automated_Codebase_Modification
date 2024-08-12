## FunctionDef file_headers_bin
**file_headers_bin**: The function of file_headers_bin is to return a list of headers for a binary file related to stock information.

**parameters**: This Function does not take any parameters.

**Code Description**: The file_headers_bin function returns a list of strings representing the headers for a binary file containing stock information. The headers include 'bin_name', 'goods_code', 'goods_desc', 'goods_qty', 'pick_qty', 'picked_qty', 'bin_size', 'bin_property', 'create_time', and 'update_time'. 

This function is utilized in the following classes within the project:
1. FileBinListRenderCN class: In this class, the file_headers_bin function is called to set the header attribute for rendering a CSV file with Chinese labels.
2. FileBinListRenderEN class: Similarly, in this class, the file_headers_bin function is used to set the header attribute for rendering a CSV file with English labels.

**Note**: Developers can rely on the file_headers_bin function to consistently retrieve the headers for binary files containing stock information across different renderers in the project.

**Output Example**: 
['bin_name', 'goods_code', 'goods_desc', 'goods_qty', 'pick_qty', 'picked_qty', 'bin_size', 'bin_property', 'create_time', 'update_time']
## FunctionDef cn_data_header_bin
**cn_data_header_bin**: The function of cn_data_header_bin is to return a dictionary containing key-value pairs of Chinese labels for data headers related to warehouse bin information.

**parameters**: This Function does not take any parameters.

**Code Description**: The cn_data_header_bin function returns a dictionary with key-value pairs where the keys represent the data headers for warehouse bin information, and the values are the corresponding Chinese labels for each header. The keys include 'bin_name', 'goods_code', 'goods_desc', 'goods_qty', 'pick_qty', 'picked_qty', 'bin_size', 'bin_property', 'create_time', and 'update_time'.

This function is called within the FileBinListRenderCN class in the same module. In the context of the FileBinListRenderCN class, the cn_data_header_bin function is used to set the labels attribute with the Chinese labels for the data headers related to warehouse bins.

**Note**: Developers can utilize this function to easily retrieve Chinese labels for warehouse bin data headers, which can be useful for localization and displaying information in Chinese language.

**Output Example**: 
{
    'bin_name': '库位名称',
    'goods_code': '商品编码',
    'goods_desc': '商品描述',
    'goods_qty': '商品数量',
    'pick_qty': '等待拣货数量',
    'picked_qty': '已拣货数量',
    'bin_size': '库位尺寸',
    'bin_property': '库位属性',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef en_data_header_bin
**en_data_header_bin**: The function of en_data_header_bin is to return a dictionary containing key-value pairs of data headers in English for a specific data set.

**parameters**: This Function does not take any parameters.

**Code Description**: The en_data_header_bin function returns a dictionary with key-value pairs representing the headers of different data fields such as bin name, goods code, goods description, goods quantity, pick stock, picked stock, bin size, bin property, create time, and update time.

This function is called within the FileBinListRenderEN class in the project. In this context, the en_data_header_bin function is used to set the labels for rendering a CSV file, providing the English headers for the corresponding data fields.

**Note**: Developers can use the en_data_header_bin function to easily access and display the English data headers for a specific data set. The function simplifies the process of labeling data fields in English for better readability and understanding.

**Output Example**: 
{
    'bin_name': 'Bin Name',
    'goods_code': 'Goods Code',
    'goods_desc': 'Goods Description',
    'goods_qty': 'Goods Qty',
    'pick_qty': 'Pick Stock',
    'picked_qty': 'Picked Stock',
    'bin_size': 'Bin Size',
    'bin_property': 'Bin Property',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## FunctionDef file_headers_list
**file_headers_list**: The function of file_headers_list is to return a list of headers related to goods information.

**parameters**: This Function does not take any parameters.

**Code Description**: The file_headers_list function returns a list of strings representing various headers related to goods information such as goods code, description, quantity, stock details, and timestamps.

In the project, this function is called by two classes: FileListRenderCN and FileListRenderEN in the same file. These classes are responsible for rendering CSV files with Chinese and English headers respectively. The file_headers_list function is used to set the header attribute of these classes with the list of headers for goods information.

**Note**: This function is a simple utility function that provides a predefined list of headers. It is used to maintain consistency in the headers across different parts of the project.

**Output Example**: 
['goods_code', 'goods_desc', 'goods_qty', 'onhand_stock', 'can_order_stock', 'ordered_stock', 'inspect_stock', 'hold_stock', 'damage_stock', 'asn_stock', 'dn_stock', 'pre_load_stock', 'pre_sort_stock', 'sorted_stock', 'pick_stock', 'picked_stock', 'back_order_stock', 'create_time', 'update_time']
## FunctionDef cn_data_header_list
**cn_data_header_list**: The function of cn_data_header_list is to return a dictionary containing key-value pairs of data headers in Chinese.

**parameters**: 
- No parameters are required for this function.

**Code Description**: This function returns a dictionary with keys representing data headers related to goods information and their corresponding values in Chinese. The keys include 'goods_code', 'goods_desc', 'goods_qty', 'onhand_stock', 'can_order_stock', 'ordered_stock', 'inspect_stock', 'hold_stock', 'damage_stock', 'asn_stock', 'dn_stock', 'pre_load_stock', 'pre_sort_stock', 'sorted_stock', 'pick_stock', 'picked_stock', 'back_order_stock', 'create_time', and 'update_time'.

In the project, this function is called within the `FileListRenderCN` class in the same file. The `cn_data_header_list` function is used to set the labels for rendering a CSV file in Chinese, providing clear and descriptive headers for the data columns.

**Note**: Ensure that the keys in the dictionary returned by this function align with the expected data headers in the application to maintain consistency and clarity.

**Output Example**:
{
    'goods_code': '商品编码',
    'goods_desc': '商品描述',
    'goods_qty': '商品数量',
    'onhand_stock': '现有库存',
    'can_order_stock': '可被下单数量',
    'ordered_stock': '已被下单数量',
    'inspect_stock': '质检库存',
    'hold_stock': '锁定库存',
    'damage_stock': '破损库存',
    'asn_stock': '到货通知书数量',
    'dn_stock': '发货单数量',
    'pre_load_stock': '等待卸货数量',
    'pre_sort_stock': '等待分拣数量',
    'sorted_stock': '已分拣数量',
    'pick_stock': '等待拣货数量',
    'picked_stock': '已拣货数量',
    'back_order_stock': '欠货数量',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef en_data_header_list
**en_data_header_list**: The function of en_data_header_list is to return a dictionary containing key-value pairs of data headers in English for a specific data set.

**parameters**: This Function does not take any parameters.

**Code Description**: The en_data_header_list function returns a dictionary with English data headers for various fields such as goods code, goods description, onhand stock, and others. These headers are used to label the corresponding data fields in a dataset.

In the project, the en_data_header_list function is called within the FileListRenderEN class. The labels attribute of the FileListRenderEN class is set to the dictionary returned by the en_data_header_list function. This ensures that the English data headers are used for labeling the data fields when rendering a CSV file in English.

**Note**: It is important to ensure that the keys in the dictionary returned by en_data_header_list match the keys used in the dataset to correctly label the data fields.

**Output Example**: 
{
    'goods_code': 'Goods Code',
    'goods_desc': 'Goods Description',
    'goods_qty': 'Goods Qty',
    'onhand_stock': 'Onhand Stock',
    'can_order_stock': 'Can Order Stock',
    'ordered_stock': 'Ordered Stock',
    'inspect_stock': 'Inspect Stock',
    'hold_stock': 'Hold Stock',
    'damage_stock': 'Damage Stock',
    'asn_stock': 'ASN Stock',
    'dn_stock': 'DN Stock',
    'pre_load_stock': 'Pre Load Stock',
    'pre_sort_stock': 'Pre Sort Stock',
    'sorted_stock': 'Sorted Stock',
    'pick_stock': 'Pick Stock',
    'picked_stock': 'Picked Stock',
    'back_order_stock': 'Back Order Stock',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## ClassDef FileBinListRenderCN
**FileBinListRenderCN**: The function of FileBinListRenderCN is to render a CSV file with Chinese labels for warehouse bin information.

**attributes**:
- header: Represents the list of headers for the CSV file.
- labels: Contains the Chinese labels for the data headers related to warehouse bins.

**Code Description**:
FileBinListRenderCN class extends CSVStreamingRenderer and utilizes the file_headers_bin function to set the header attribute with a list of headers for a binary file containing stock information. Additionally, it uses the cn_data_header_bin function to set the labels attribute with Chinese labels for the data headers related to warehouse bins. This class is designed to render CSV files specifically tailored for Chinese language users.

The FileBinListRenderCN class is called within the FileBinListDownloadView class in the stock/views.py module. In the context of the FileBinListDownloadView class, instances of FileBinListRenderCN are created to render CSV data based on the language specified in the request. The get_lang method in the FileBinListDownloadView class determines whether to render the data with Chinese labels using FileBinListRenderCN or with English labels using FileBinListRenderEN based on the language header in the request.

**Note**: Developers can rely on the FileBinListRenderCN class to generate CSV files with Chinese labels for warehouse bin information, providing localization support for Chinese-speaking users in the project.
## ClassDef FileBinListRenderEN
**FileBinListRenderEN**: The function of FileBinListRenderEN is to render a CSV file with English labels for a binary file containing stock information.

**attributes**:
- header: Represents the list of headers for the CSV file.
- labels: Contains a dictionary of English data headers for the specific data set.

**Code Description**:
FileBinListRenderEN is a class that extends CSVStreamingRenderer. It initializes the header attribute by calling the file_headers_bin function to retrieve the list of headers for the CSV file. Additionally, it sets the labels attribute by utilizing the en_data_header_bin function to obtain the English data headers in a dictionary format.

This class is part of the file rendering process within the project, specifically focusing on rendering CSV files with English labels for stock-related binary data. By incorporating the file_headers_bin and en_data_header_bin functions, FileBinListRenderEN ensures consistency in displaying the appropriate headers and labels for the data fields in English.

**Note**: Developers can leverage FileBinListRenderEN to generate CSV files with English headers, enhancing the readability and understanding of stock information presented in a binary file format. The class streamlines the rendering process by automatically setting the headers and labels based on the predefined English data headers.
## ClassDef FileListRenderCN
**FileListRenderCN**: The function of FileListRenderCN is to render CSV files with Chinese headers for goods information.

**attributes**:
- header: A list of headers related to goods information.
- labels: A dictionary containing key-value pairs of data headers in Chinese.

**Code Description**:
FileListRenderCN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with Chinese headers for goods information. The class defines two attributes: header and labels. The header attribute is set to the list returned by the file_headers_list function, which provides headers such as goods code, description, quantity, and timestamps. The labels attribute is set to the dictionary returned by the cn_data_header_list function, containing key-value pairs of data headers in Chinese.

In the project, FileListRenderCN is utilized within the FileListDownloadView class in views.py to render CSV files based on the language specified in the HTTP request. The get_lang method in FileListDownloadView determines the language and utilizes FileListRenderCN to render data in Chinese if the language is set to 'zh-hans'. This ensures that the CSV files generated have clear and descriptive headers in Chinese for better readability.

**Note**: FileListRenderCN plays a crucial role in maintaining consistency and clarity in the headers of CSV files generated for goods information. The class leverages predefined headers and labels to ensure a standardized format across different parts of the project.
## ClassDef FileListRenderEN
**FileListRenderEN**: The function of FileListRenderEN is to render CSV files with English headers for goods information.

**attributes**:
- header: A list of headers related to goods information.
- labels: A dictionary containing English data headers for labeling data fields.

**Code Description**:
FileListRenderEN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with English headers for goods information. The header attribute is set to the list of headers returned by the file_headers_list function, which includes information such as goods code, description, quantity, and stock details. The labels attribute is set to the dictionary returned by the en_data_header_list function, providing English labels for data fields like goods code, goods description, onhand stock, and others. This ensures that the CSV file is rendered with consistent and clear English headers for each data field.

FileListRenderEN is called within the get_lang method of the FileListDownloadView class in views.py. Depending on the language specified in the request headers, either FileListRenderCN or FileListRenderEN is used to render the CSV file with the appropriate language headers. This class plays a crucial role in ensuring that the CSV file is presented with the correct English headers for better data interpretation.

**Note**: It is essential to maintain consistency between the headers provided by file_headers_list and the labels defined in en_data_header_list to correctly label the data fields in the rendered CSV file. Additionally, FileListRenderEN should be used in conjunction with the get_lang method to handle language-specific rendering of CSV files based on user preferences.
