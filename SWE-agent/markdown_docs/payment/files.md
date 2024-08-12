## FunctionDef file_headers
**file_headers**: The function of file_headers is to return a list of specific headers related to file data for transportation records.
**parameters**: This Function does not take any parameters.
**Code Description**: The file_headers function returns a list of headers including 'send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'create_time', and 'update_time'. These headers are essential for organizing and categorizing transportation data in files.
In the project, the file_headers function is called by two classes: FreightfileRenderCN and FreightfileRenderEN. Both classes are responsible for rendering CSV files, and they utilize the headers returned by file_headers to define the structure of the files. By using the headers provided by file_headers, the classes ensure that the transportation data is correctly formatted and labeled in the CSV files they generate.
**Note**: It is important to ensure that the order and spelling of the headers returned by file_headers are consistent with the data structure expected by the classes that utilize them.
**Output Example**: 
['send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'create_time', 'update_time']
## FunctionDef cn_data_header
**cn_data_header**: The function of cn_data_header is to return a dictionary containing key-value pairs of Chinese labels for specific data headers related to transportation information.

**parameters**: This Function does not take any parameters.

**Code Description**: The cn_data_header function returns a dictionary with key-value pairs representing various data headers related to transportation information in Chinese. The keys include 'send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'create_time', and 'update_time', each mapped to their corresponding Chinese label.

In the project, the cn_data_header function is utilized in the FreightfileRenderCN class from the same files.py module. Within the FreightfileRenderCN class, the labels attribute is assigned the dictionary returned by cn_data_header, which is used to provide Chinese labels for specific data headers in the context of rendering CSV files for freight information.

**Note**: Developers can use the cn_data_header function to easily access Chinese labels for transportation-related data headers, enhancing the readability and usability of the rendered information.

**Output Example**:
{
    'send_city': '始发城市',
    'receiver_city': '到货城市',
    'weight_fee': '单公斤运费',
    'volume_fee': '每立方米运费',
    'min_payment': '最小运费',
    'transportation_supplier': '承运商',
    'creater': '创建人',
    'create_time': '创建时间',
    'update_time': '更新时间'
}
## FunctionDef en_data_header
The function of en_data_header is to return a dictionary containing key-value pairs of data headers related to transportation and payment.

**parameters**: 
- None

**Code Description**: 
The en_data_header function returns a dictionary with key-value pairs representing various data headers such as send city, receiver city, weight fee, volume fee, min payment, transportation supplier, creater, create time, and update time.

This function is called within the FreightfileRenderEN class in the files.py module. In the context of the project, the en_data_header function is used to set labels for CSV file rendering, specifically for English language data headers related to freight files.

**Note**: 
Developers can utilize the en_data_header function to easily access and manage data headers for transportation and payment-related information.

**Output Example**: 
{
    'send_city': 'Send City',
    'receiver_city': 'Receiver City',
    'weight_fee': 'Weight Fee',
    'volume_fee': 'Volume Fee',
    'min_payment': 'Min Payment',
    'transportation_supplier': 'Transportation Supplier',
    'creater': 'Creater',
    'create_time': 'Create Time',
    'update_time': 'Update Time'
}
## ClassDef FreightfileRenderCN
**FreightfileRenderCN**: The function of FreightfileRenderCN is to render CSV files with Chinese labels for specific data headers related to transportation information.

**attributes**:
- header: Contains a list of specific headers related to file data for transportation records.
- labels: Contains a dictionary with key-value pairs of Chinese labels for data headers related to transportation information.

**Code Description**:
The FreightfileRenderCN class extends the CSVStreamingRenderer class and utilizes the file_headers and cn_data_header functions to define the structure of CSV files for transportation data. The header attribute stores the list of headers returned by the file_headers function, including 'send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'create_time', and 'update_time'. The labels attribute stores the dictionary returned by the cn_data_header function, providing Chinese labels for the headers in the context of rendering CSV files.

In the project, the FreightfileRenderCN class is used in the FreightfileDownloadView class to render CSV files with Chinese labels based on the data headers specified. By incorporating the Chinese labels, the rendered files enhance readability and usability for users who prefer Chinese language representation of transportation data.

**Note**:
Developers should ensure that the file_headers and cn_data_header functions return headers and labels in a consistent order to maintain the integrity of the data structure in the rendered CSV files. Additionally, the FreightfileRenderCN class plays a crucial role in generating CSV files with Chinese labels, catering to diverse user preferences and enhancing the overall user experience.
## ClassDef FreightfileRenderEN
**FreightfileRenderEN**: The function of FreightfileRenderEN is to render CSV files with English language data headers related to transportation and payment.

**attributes**:
- header: A list of specific headers related to file data for transportation records.
- labels: A dictionary containing key-value pairs of English language data headers related to transportation and payment.

**Code Description**:
The FreightfileRenderEN class extends the CSVStreamingRenderer class and utilizes the file_headers and en_data_header functions to define the structure and labels of CSV files for transportation data. The header attribute is assigned the list of headers returned by the file_headers function, including 'send_city', 'receiver_city', 'weight_fee', 'volume_fee', 'min_payment', 'transportation_supplier', 'creater', 'create_time', and 'update_time'. The labels attribute is set to the dictionary of English data headers provided by the en_data_header function. By incorporating these headers and labels, FreightfileRenderEN ensures that the CSV files it generates are properly formatted and labeled for English-speaking users.

**Note**:
Developers should ensure that the order and spelling of the headers returned by file_headers and the English labels from en_data_header are consistent to maintain the integrity of the transportation data in the rendered CSV files.
