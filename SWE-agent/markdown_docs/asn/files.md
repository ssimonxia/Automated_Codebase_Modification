## FunctionDef list_file_headers
**list_file_headers**: The function of list_file_headers is to return a list of headers related to ASN (Advanced Shipping Notice) files.

**parameters**: This Function does not take any parameters.

**Code Description**: The list_file_headers function returns a list of strings representing headers commonly found in ASN files. The headers include 'asn_code', 'asn_status', 'total_weight', 'total_volume', 'total_cost', 'supplier', 'creater', 'create_time', and 'update_time'. These headers are essential for identifying and managing ASN data.

In the project, this function is called by two classes: FileListRenderCN and FileListRenderEN. Both classes inherit from CSVStreamingRenderer and use the list_file_headers function to set the header attribute for rendering CSV files in Chinese and English, respectively. This demonstrates the reusability of the list_file_headers function across different renderers for handling ASN file data in multiple languages.

**Note**: Developers can rely on the list_file_headers function to consistently retrieve the necessary headers for processing ASN files in various contexts.

**Output Example**: 
['asn_code', 'asn_status', 'total_weight', 'total_volume', 'total_cost', 'supplier', 'creater', 'create_time', 'update_time']
## FunctionDef list_cn_data_header
**list_cn_data_header**: The function of list_cn_data_header is to return a dictionary containing key-value pairs of Chinese data headers related to ASN information.

**parameters**: This Function does not take any parameters.

**Code Description**: The list_cn_data_header function returns a dictionary with key-value pairs representing different headers for ASN data in Chinese. The keys include 'asn_code', 'asn_status', 'total_weight', 'total_volume', 'total_cost', 'supplier', 'creater', 'create_time', and 'update_time', each associated with its corresponding Chinese translation.

In the project, this function is called within the FileListRenderCN class. The labels attribute of the class is assigned the return value of list_cn_data_header, which implies that these Chinese data headers are used for rendering CSV files in a Chinese context.

**Note**: Developers can utilize this function to easily retrieve a set of Chinese data headers for ASN-related information, which can be useful for localization or displaying data in a specific language.

**Output Example**: 
{
    'asn_code': 'ASN单号',
    'asn_status': 'ASN状态',
    'total_weight': '总重量',
    'total_volume': '总体积',
    'total_cost': '总成本',
    'supplier': '供应商',
    'creater': '创建人',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef list_en_data_header
**list_en_data_header**: The function of list_en_data_header is to return a dictionary containing English labels for various data headers related to an ASN (Advanced Shipping Notice).

**parameters**: This Function does not take any parameters.

**Code Description**: The list_en_data_header function returns a dictionary with keys representing different data headers related to an ASN, and their corresponding English labels as values. The data headers included in the dictionary are 'asn_code', 'asn_status', 'total_weight', 'total_volume', 'total_cost', 'supplier', 'creater', 'create_time', and 'update_time'.

This function is utilized in the FileListRenderEN class within the project. In the FileListRenderEN class, the labels attribute is assigned the return value of list_en_data_header, which provides the English labels for the data headers used in rendering a file list in English.

**Note**: Developers can use this function to easily access English labels for ASN data headers in their applications.

**Output Example**: 
{
    'asn_code': 'ASN Code',
    'asn_status': 'ASN Status',
    'total_weight': 'Total Weight',
    'total_volume': 'Total Volume',
    'total_cost': 'Total Cost',
    'supplier': 'Supplier',
    'creater': 'Creater',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## FunctionDef detail_file_headers
**detail_file_headers**: The function of detail_file_headers is to return a list of headers related to details of an ASN (Advanced Shipping Notice) file.

**parameters**: This Function does not take any parameters.

**Code Description**: The detail_file_headers function returns a list of strings representing various headers related to the details of an ASN file. These headers include information such as ASN code, status, supplier details, goods information (code, description, quantity, actual quantity, sorted quantity, shortage quantity, excess quantity, damaged quantity), weight, volume, cost, creator details, and timestamps for creation and update.

This function is utilized in two different classes within the project: FileDetailRenderCN and FileDetailRenderEN. In both classes, the detail_file_headers function is called to set the header attribute, which is used to define the headers for rendering CSV files in Chinese and English versions, respectively. This ensures that the headers for the CSV files generated by these classes align with the details specified in the ASN file.

**Note**: Developers can rely on the detail_file_headers function to retrieve a standardized list of headers for ASN file details, ensuring consistency in the representation of information across different parts of the project.

**Output Example**: 
['asn_code', 'asn_status', 'supplier', 'goods_code', 'goods_desc', 'goods_qty', 'goods_actual_qty', 'sorted_qty', 'goods_shortage_qty', 'goods_more_qty', 'goods_damage_qty', 'goods_weight', 'goods_volume', 'goods_cost', 'creater', 'create_time', 'update_time']
## FunctionDef detail_cn_data_header
**detail_cn_data_header**: The function of detail_cn_data_header is to return a dictionary containing details related to ASN data in Chinese.

**parameters**: This Function does not take any parameters.

**Code Description**: The detail_cn_data_header function returns a dictionary with key-value pairs representing various details related to ASN data in Chinese. The keys include 'asn_code', 'asn_status', 'supplier', 'goods_code', 'goods_desc', 'goods_qty', 'goods_actual_qty', 'sorted_qty', 'goods_shortage_qty', 'goods_more_qty', 'goods_damage_qty', 'goods_weight', 'goods_volume', 'goods_cost', 'creater', 'create_time', and 'update_time', each associated with a corresponding Chinese description.

When called by the FileDetailRenderCN class in the project, the labels attribute of the class is set to the dictionary returned by detail_cn_data_header. This indicates that the details related to ASN data in Chinese are used as labels for rendering CSV files in the Chinese version of the file detail renderer.

**Note**: Developers can use this function to retrieve a predefined set of ASN data details in Chinese for labeling purposes in file rendering or other related tasks.

**Output Example**:
{
    'asn_code': 'ASN单号',
    'asn_status': 'ASN状态',
    'supplier': '供应商',
    'goods_code': '商品编码',
    'goods_desc': '商品描述',
    'goods_qty': '订单数量',
    'goods_actual_qty': '实际到货数量',
    'sorted_qty': '已分拣数量',
    'goods_shortage_qty': '少到货数量',
    'goods_more_qty': '多到货数量',
    'goods_damage_qty': '破损数量',
    'goods_weight': '商品重量',
    'goods_volume': '商品体积',
    'goods_cost': '商品成本',
    'creater': '创建人',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef detail_en_data_header
**detail_en_data_header**: The function of detail_en_data_header is to return a dictionary containing details related to ASN data in English.

**parameters**: This Function does not take any parameters.

**Code Description**: The detail_en_data_header function returns a dictionary with key-value pairs representing various details related to ASN data in English. The keys include 'asn_code', 'asn_status', 'supplier', 'goods_code', 'goods_desc', 'goods_qty', 'goods_actual_qty', 'sorted_qty', 'goods_shortage_qty', 'goods_more_qty', 'goods_damage_qty', 'goods_weight', 'goods_volume', 'goods_cost', 'creater', 'create_time', and 'update_time', each associated with its corresponding English description.

In the project, this function is utilized in the FileDetailRenderEN class. The labels attribute of the class is set to the return value of detail_en_data_header, which implies that the dictionary returned by detail_en_data_header is used to define labels for rendering a file in English.

**Note**: Ensure that the keys in the dictionary returned by this function are used appropriately in the context of rendering ASN data in English.

**Output Example**: 
{
    'asn_code': 'ASN Code',
    'asn_status': 'ASN Status',
    'supplier': 'Supplier',
    'goods_code': 'Goods Code',
    'goods_desc': 'Goods Description',
    'goods_qty': 'Goods Qty',
    'goods_actual_qty': 'Goods Actual Qty',
    'sorted_qty': 'Sorted Qty',
    'goods_shortage_qty': 'Goods Shortage Qty',
    'goods_more_qty': 'Goods More Qty',
    'goods_damage_qty': 'Goods Damage Qty',
    'goods_weight': 'Goods Weight',
    'goods_volume': 'Goods Volume',
    'goods_cost': 'Goods Cost',
    'creater': 'Creater',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## ClassDef FileListRenderCN
**FileListRenderCN**: The function of FileListRenderCN is to render CSV files with Chinese data headers related to ASN (Advanced Shipping Notice) information.

**attributes**:
- header: A list of headers commonly found in ASN files.
- labels: A dictionary containing key-value pairs of Chinese data headers for ASN information.

**Code Description**:
FileListRenderCN is a class that inherits from CSVStreamingRenderer and is specifically designed to handle rendering CSV files with Chinese data headers for ASN data. The class utilizes the list_file_headers function to set the header attribute, which includes essential headers such as 'asn_code', 'asn_status', 'total_weight', 'total_volume', 'total_cost', 'supplier', 'creater', 'create_time', and 'update_time'. Additionally, the labels attribute is assigned the return value of the list_cn_data_header function, providing Chinese translations for the ASN data headers.

In the project, FileListRenderCN is called within the FileListDownloadView class to determine the language for rendering CSV files based on the 'HTTP_LANGUAGE' header in the request. If the language is set to 'zh-hans' (Simplified Chinese), FileListRenderCN is used to render the data; otherwise, FileListRenderEN is utilized. This language-specific rendering ensures that the CSV files display the appropriate language for the ASN data headers.

**Note**: Developers can leverage FileListRenderCN to generate CSV files with Chinese data headers for ASN information, facilitating localization and language-specific data presentation in the project.
## ClassDef FileListRenderEN
**FileListRenderEN**: The function of FileListRenderEN is to render a file list in English by utilizing the headers and labels specific to ASN (Advanced Shipping Notice) data.

**attributes**:
- header: A list of headers related to ASN files.
- labels: A dictionary containing English labels for various data headers related to an ASN.

**Code Description**:
The FileListRenderEN class inherits from CSVStreamingRenderer and initializes the header attribute by calling the list_file_headers function to set the list of headers for rendering CSV files. Additionally, the labels attribute is set by invoking the list_en_data_header function to provide English labels for the data headers used in rendering the file list in English. By utilizing these attributes, FileListRenderEN enables the rendering of ASN data in English with the appropriate headers and labels.

This class demonstrates the integration of language-specific data handling within the project, allowing for the generation of file lists tailored to English-speaking users. The use of list_file_headers and list_en_data_header functions ensures consistency in the representation of ASN data across different languages, enhancing the user experience and data management capabilities.

**Note**:
Developers can leverage the FileListRenderEN class to generate file lists in English with accurate headers and labels, facilitating the interpretation and utilization of ASN data in an English context.
## ClassDef FileDetailRenderCN
**FileDetailRenderCN**: The function of FileDetailRenderCN is to render CSV files with Chinese labels based on the details related to ASN data.

**attributes**:
- header: A list of headers related to details of an ASN file.
- labels: A dictionary containing details related to ASN data in Chinese.

**Code Description**:
FileDetailRenderCN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with Chinese labels. The class utilizes the detail_file_headers function to set the header attribute, which defines the headers for the CSV files. Additionally, the labels attribute is set using the detail_cn_data_header function, providing Chinese descriptions for the ASN data details. By incorporating these headers and labels, FileDetailRenderCN ensures that the rendered CSV files accurately represent the details of an ASN file in Chinese.

The detail_file_headers function returns a list of headers such as ASN code, status, supplier details, goods information, weight, volume, cost, creator details, and timestamps. On the other hand, the detail_cn_data_header function returns a dictionary with key-value pairs representing the same details in Chinese. These functions are crucial for maintaining consistency and clarity in representing ASN data across different parts of the project.

In the project, the FileDetailRenderCN class is called within the FileDetailDownloadView class to render CSV files based on the ASN data. The get_lang method in the FileDetailDownloadView class determines the language for rendering, utilizing FileDetailRenderCN to render data in Chinese if the language is set to 'zh-hans'. This integration ensures that the CSV files generated by FileDetailRenderCN align with the specified Chinese labels for ASN data.

**Note**: Developers can rely on FileDetailRenderCN to generate CSV files with accurate Chinese labels for ASN data representation, enhancing the localization and usability of the rendered files.
## ClassDef FileDetailRenderEN
**FileDetailRenderEN**: The function of FileDetailRenderEN is to render CSV files with English labels based on the details related to ASN data.

**attributes**:
- header: Represents the list of headers related to ASN file details.
- labels: Contains a dictionary with English descriptions for ASN data details.

**Code Description**:
FileDetailRenderEN is a class that extends CSVStreamingRenderer and is responsible for rendering CSV files with English labels for ASN data. The class utilizes the detail_file_headers function to set the header attribute, which defines the headers for the CSV files. Additionally, the labels attribute is set using the detail_en_data_header function, providing English descriptions for the ASN data details.

The header attribute is initialized with the list of headers returned by the detail_file_headers function, ensuring consistency in the representation of ASN file details in the generated CSV files. Similarly, the labels attribute is populated with a dictionary containing English descriptions for each key related to ASN data, as defined by the detail_en_data_header function.

In the project, the FileDetailRenderEN class is utilized in the get_lang method of the FileDetailDownloadView class in asn/views.py. Depending on the language specified in the request, an instance of FileDetailRenderEN is created to render the CSV file with English labels, ensuring proper localization of the data.

**Note**: Developers should ensure that the detail_file_headers and detail_en_data_header functions are correctly implemented to maintain consistency in the headers and labels used for rendering ASN data in English.
