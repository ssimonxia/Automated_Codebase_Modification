## ClassDef FBMsg
**FBMsg**: The function of FBMsg is to provide a collection of error and success messages with corresponding codes.

**Attributes**:
- None

**Code Description**:
The `FBMsg` class is a utility class that provides a collection of error and success messages with corresponding codes. Each method in the class returns a dictionary containing a code, a message, and a data field. The code represents the status of the operation, the message provides a description of the status, and the data field can be used to pass additional information.

The class contains various error messages such as `err_contact_name`, `err_contact_mobile`, `err_contact_comments`, `err_order_same`, `err_order_no`, `err_order_fail`, `err_ret`, `err_data`, `err_tc`, `err_tc_empty`, `err_delete`, `err_code1`, `err_status`, `err_user_name`, `err_auth`, `err_user_same`, `error_referer`, `err_password1_empty`, `err_password2_empty`, `err_password_not_same`, `err_psw`, `err_dev`, `err_register_more`, `err_openid`, `err_more_user`, `err_req_day`, `err_req_shipping_list`, `err_req_stock_list`, `err_req_baseinfo_list`, `err_goods_code`, `err_authid`, `err_bad`, `err_auth_open`, `err_goods_code`, `err_po_num_empty`, `err_po_num`, `err_po_qty_type`, `err_po_qty`, `err_same_po_num`, `err_lot_num`, `err_lot_num_empty`, `err_lot_num_format`, `err_po_supplier`, `err_po_supplier_empty`, `err_po_goods_code`, `err_po_status_empty`, `err_po_status_less`, `err_po_status_same`, `err_po_status_more`, `err_po_status_big`, `err_po_status_delete`, `err_po_status_patch`, `err_po_actual_delivery_stock_patch`, `err_po_actual_delivery_stock_more`, `err_po_actual_delivery_stock_zero`, `err_po_actual_delivery_stock_moreall`, `err_po_actual_delivery_stock_again`, `err_sort_stock_bin_name`, `err_sort_stock_bin_name_error`, `err_sort_stock_qty`, `err_sort_stock_qty_empty`, `err_sort_stock_qty_zero`, `err_sort_stock_qty_more`, `err_sort_stock_bin_type`, `wms_ret`, `wms_same`, `wms_err`, `wms_errfile`, `wms_time`, `wms_vip_get`, `wms_vip`, `wms_dev`, `wms_user_owner`, `wms_warehouse_more`, `wms_company_more`, `wms_binproperty`, `wms_binsize`, `wms_no_user`, `wms_po_status_1`, `wms_po_empty`, `wms_po_status_predelivery`, `wms_po_status_predelivery_detail`, `wms_po_status_preload_detail`, `wms_po_qty_up_more`, `wms_po_qty_dup_more`, `wms_po_qty_all_up_more`, `wms_so_picked_more`, `wms_dongtai`, `wms_capcha`, `wms_capcha_l`, `wms_capcha_n`.

These error messages cover a wide range of scenarios, such as validation errors, authentication errors, data availability errors, and more. They can be used to provide informative error responses to API requests or to handle specific error conditions in the application.

The class also includes a few success messages such as `ret`, `ret_auth`, `wms_ret`, `wms_dongtai`. These messages indicate successful operations and can be used to provide feedback or confirmation to the user.

**Note**:
- The error messages follow a consistent structure with a code, message, and data field.
- The success messages provide a code and can be used to indicate successful operations.

**Output Example**:
```python
{
    "code": "200",
    "msg": "Success Create",
    "data": None
}
```
### FunctionDef ret
**ret**: The function of ret is to create a dictionary object and return it.

**parameters**:
- No parameters are required for this function.

**Code Description**:
The `ret` function creates a dictionary object named `ret` with three key-value pairs: "code" with a value of "200", "msg" with a value of "Success Create", and "data" with a value of `None`. It then returns the `ret` dictionary.

This function is called in two different objects within the project: `userlogin/views.py/login` and `userregister/views.py/register`. In both cases, the `ret` dictionary is used to construct a response object that is returned as a JSON response.

In the `login` function, if the user authentication fails, the `ret` dictionary is modified by adding the `data` key with the value of the `data` parameter received in the request. This modified `ret` dictionary is then returned as a JSON response.

In the `register` function, after successfully creating a new user and performing various database operations, the `ret` dictionary is modified by adding the `ip` key with the value of the `ip` variable obtained from the request. The `data` key is also modified to include additional information related to the user. Finally, the modified `ret` dictionary is returned as a JSON response.

**Note**:
- The `ret` function does not accept any parameters.
- The `ret` dictionary is used to construct JSON responses in different parts of the project.
- The structure and content of the `ret` dictionary may vary depending on the context in which it is used.

**Output Example**:
{
  "code": "200",
  "msg": "Success Create",
  "data": null
}
***
### FunctionDef err_contact_name
**err_contact_name**: The function of err_contact_name is to define an error message related to a missing contact name.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_contact_name function creates a dictionary named err_contact_name with three key-value pairs: "code" with a value of "1001", "msg" with a value of "称谓不能为空" (which translates to "Title cannot be empty"), and "data" with a value of None. This dictionary represents an error message related to a missing contact name.

**Note**: This function is designed to provide a specific error message for cases where a contact name is missing. It does not require any input parameters and simply returns the predefined error message dictionary.

**Output Example**: 
{"code": "1001", "msg": "称谓不能为空", "data": None}
***
### FunctionDef err_contact_mobile
**err_contact_mobile**: The function of err_contact_mobile is to define an error message related to a missing contact mobile number.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_contact_mobile function creates a dictionary named err_contact_mobile with three key-value pairs:
- "code": "1002"
- "msg": "联系电话不能为空" (which translates to "Contact mobile number cannot be empty")
- "data": None

The function then returns the err_contact_mobile dictionary.

**Note**: This function is specifically designed to handle the scenario where a contact mobile number is missing. The error message is in Chinese, indicating that the contact mobile number cannot be empty.

**Output Example**: 
{"code": "1002", "msg": "联系电话不能为空", "data": None}
***
### FunctionDef err_contact_comments
**err_contact_comments**: The function of err_contact_comments is to define an error message related to empty contact comments.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_contact_comments function creates a dictionary named err_contact_comments with the keys "code", "msg", and "data". The value associated with the "code" key is "1003", indicating the specific error code. The value associated with the "msg" key is "备注不能为空", which translates to "Comments cannot be empty". The "data" key is set to None. Finally, the function returns the err_contact_comments dictionary.

**Note**: This function is designed to handle errors related to empty contact comments. Developers can utilize this function to retrieve a predefined error message when encountering this specific issue in their code.

**Output Example**: 
{"code": "1003", "msg": "备注不能为空", "data": None}
***
### FunctionDef err_order_same
**err_order_same**: The function of err_order_same is to define an error message related to an existing order.

**parameters**:
- This Function does not take any parameters.

**Code Description**:
The err_order_same Function creates a dictionary named err_order_same with three key-value pairs:
- "code": "1004"
- "msg": "订单已存在" (which translates to "Order already exists")
- "data": None

The Function then returns the err_order_same dictionary.

**Note**:
- This Function is a simple error message definition and does not require any input parameters.
- The error message code "1004" indicates that the order already exists.
- The error message "订单已存在" is in Chinese and translates to "Order already exists" in English.

**Output Example**:
{"code": "1004", "msg": "订单已存在", "data": None}
***
### FunctionDef err_order_no
**err_order_no**: The function of err_order_no is to define an error message related to an invalid order.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_order_no function creates a dictionary named err_order_no containing error code, message, and data set to None. The error code is "1005" and the error message is "无效订单" which translates to "Invalid order" in English.

**Note**: This function is a predefined error message for an invalid order scenario.

**Output Example**: 
{"code": "1005", "msg": "无效订单", "data": None}
***
### FunctionDef err_order_fail
**err_order_fail**: The function of err_order_fail is to return a dictionary containing an error code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_order_fail function creates a dictionary named err_order_fail with the keys "code", "msg", and "data". The "code" key is set to "1006", the "msg" key is set to "订单支付失败" (which translates to "Order payment failed"), and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message related to a failed order payment. The error code "1006" and the message "订单支付失败" are hardcoded within the function.

**Output Example**: 
{"code": "1006", "msg": "订单支付失败", "data": None}
***
### FunctionDef err_ret
**err_ret**: The function of err_ret is to return a predefined error response dictionary containing a code, message, and optional data.

**parameters**:
- None

**Code Description**:
The `err_ret` function initializes a dictionary named `err_ret` with predefined error information including a code "1011", a message "User Name Or Password Error", and a `None` value for data. It then returns this dictionary.

In the project, the `err_ret` function is called within the `login` function in `userlogin/views.py`. In the `login` function, `err_ret` is used to construct an error response in case of invalid user credentials. The function sets the data field in the error response dictionary and returns it as a JSON response.

**Note**:
- The `err_ret` function is a simple utility function for generating error responses.
- It is important to handle the returned error response appropriately in the calling code to provide meaningful feedback to users.

**Output Example**:
```json
{
    "code": "1011",
    "msg": "User Name Or Password Error",
    "data": {
        "name": "example_user",
        "password": "example_password"
    }
}
```
***
### FunctionDef err_data
**err_data**: The function of err_data is to create and return an error data dictionary with predefined values.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_data Function initializes a dictionary named err_data with the keys "code", "msg", and "data" set to "1012", "数据不可用" (which translates to "Data not available"), and None respectively. It then returns this dictionary.

**Note**: This Function is designed to provide a consistent error data structure with a specific error code and message. It does not accept any input parameters and always returns the same error data dictionary.

**Output Example**: 
{"code": "1012", "msg": "数据不可用", "data": None}
***
### FunctionDef err_tc
**err_tc**: The function of err_tc is to define an error message object with a specific code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_tc function creates an error message object with the code "1013", message "transaction_code错误" (which translates to "transaction_code error" in English), and sets the data attribute to None. The function then returns this error message object.

**Note**: This function is designed to provide a predefined error message structure for the specified error code and message. It can be used to standardize error handling in the application.

**Output Example**: 
{"code": "1013", "msg": "transaction_code错误", "data": None}
***
### FunctionDef err_tc_empty
**err_tc_empty**: The function of err_tc_empty is to return a predefined error message object indicating that the data does not exist.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_tc_empty function creates a dictionary named err_tc_empty with three key-value pairs: "code" with a value of "1014", "msg" with a value of "数据不存在" (which translates to "Data does not exist" in English), and "data" with a value of None. This dictionary is then returned by the function.

**Note**: This function is designed to be used when there is a need to handle cases where certain data is expected but not found.

**Output Example**: 
{"code": "1014", "msg": "数据不存在", "data": None}
***
### FunctionDef err_delete
**err_delete**: The function of err_delete is to define an error message object with a specific code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_delete Function creates an error message object named err_delete with the following properties:
- "code": "1015"
- "msg": "该条数据已经删除"
- "data": None

When the Function is called, it returns the err_delete object.

**Note**: This Function is designed to provide a predefined error message for cases where a specific data has been deleted.

**Output Example**: 
{"code": "1015", "msg": "该条数据已经删除", "data": None}
***
### FunctionDef err_code1
**err_code1**: The function of err_code1 is to return a predefined error code dictionary with code "1016", message "数据已存在" (data already exists), and data set to None.
**parameters**: This Function does not take any parameters.
**Code Description**: The err_code1 Function defines a dictionary named err_code1 with keys "code", "msg", and "data" set to "1016", "数据已存在" (data already exists), and None respectively. It then returns this dictionary.
**Note**: This Function is a simple error code generator with a predefined error message. It does not require any input parameters and always returns the same error code dictionary.
**Output Example**: {"code": "1016", "msg": "数据已存在", "data": None}
***
### FunctionDef err_status
**err_status**: The function of err_status is to return a predefined error status dictionary.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_status function initializes a dictionary named err_status with keys "code", "msg", and "data". The values associated with these keys are "1017", "状态已经存在，无需修改" (meaning "Status already exists, no need to modify" in English), and None, respectively. The function then returns this err_status dictionary.

**Note**: This function is designed to provide a predefined error status dictionary and does not require any input parameters.

**Output Example**: 
{"code": "1017", "msg": "状态已经存在，无需修改", "data": None}
***
### FunctionDef err_user_name
**err_user_name**: The function of err_user_name is to define an error message related to an empty username.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_user_name Function creates a dictionary named err_user_name containing an error code, message, and data. The error code is set to "1018", the message is "用户名不可以为空" (which translates to "Username cannot be empty"), and the data is set to None. The Function then returns this dictionary.

**Note**: This Function is designed to handle cases where a username is empty and provide a specific error message for such scenarios.

**Output Example**: 
{"code": "1018", "msg": "用户名不可以为空", "data": None}
***
### FunctionDef err_auth
**err_auth**: The function of err_auth is to define an error message related to authentication.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_auth function creates a dictionary named err_auth containing an error code "1021" and an error message '用户不存在' which translates to 'User does not exist'.

**Note**: This function is designed to provide a specific error message related to authentication issues.

**Output Example**: 
{'code': "1021", 'msg': '用户不存在'}
***
### FunctionDef err_user_same
**err_user_same**: The function of err_user_same is to return an error message indicating that the user already exists.

**parameters**:
- This function does not take any parameters.

**Code Description**:
The `err_user_same` function is a simple function that returns a dictionary containing an error code and message. The error code is set to "1022" and the error message is set to "User Is Exists". The function then returns this dictionary.

In the project, this function is called in the `register` function of the `userregister/views.py` file. If a user with the same name already exists in the database, the `err_user_same` function is called to generate an error response. The error response includes the user's IP address and the name of the user that already exists. This error response is then returned as a JSON response.

**Note**:
- This function does not have any specific notes or considerations.

**Output Example**:
{
    'code': '1022',
    'msg': 'User Is Exists'
}
***
### FunctionDef error_referer
**error_referer**: The function of error_referer is to return a dictionary containing an error code and message.

**parameters**: This Function does not take any parameters.

**Code Description**: The error_referer function creates a dictionary named error_referer with keys 'code' and 'msg' containing the values "1023" and '错误的token' respectively. It then returns this dictionary.

**Note**: This function is a simple utility function that generates a predefined error message. It does not require any input parameters and always returns the same error message.

**Output Example**: 
{'code': "1023", 'msg': '错误的token'}
***
### FunctionDef err_password1_empty
**err_password1_empty**: The function of err_password1_empty is to return an error message indicating that the password cannot be empty.

**parameters**:
- This function does not take any parameters.

**Code Description**:
The `err_password1_empty` function is a simple function that returns a dictionary containing an error code and message. The error code is set to "1024" and the error message is set to "Password Can Not Be Empty". This function is used to handle the case when the `password1` field is empty during user registration.

In the project, this function is called in the `register` function of the `userregister/views.py` file. If the `password1` field is None or an empty string, the `err_password1_empty` function is called to generate an error message. The error message is then returned as a JSON response.

**Note**:
- This function does not have any specific notes regarding its usage.

**Output Example**:
```python
{
    'code': '1024',
    'msg': 'Password Can Not Be Empty'
}
```
***
### FunctionDef err_password2_empty
**err_password2_empty**: The function of err_password2_empty is to return an error message indicating that the password confirmation field is empty.

**parameters**:
- This function does not take any parameters.

**Code Description**:
The `err_password2_empty` function is a simple function that returns a dictionary containing an error code and message. The error code is set to "1025" and the error message is set to "Please Confirm The Password". This function is used to handle cases where the password confirmation field is empty during user registration.

In the project, this function is called in the `register` function of the `userregister/views.py` file. If the `password2` field is None or an empty string, the `err_password2_empty` function is called to generate an error response. The error response includes the error code, message, IP address, and the name of the user who triggered the error. This response is then returned as a JSON response to the client.

**Note**:
- This function does not perform any validation or checks on the password confirmation field. It simply returns an error message indicating that the field is empty.
- The error response generated by this function is used to handle the specific case of an empty password confirmation field during user registration.

**Output Example**:
```
{
    'code': '1025',
    'msg': 'Please Confirm The Password'
}
```
***
### FunctionDef err_password_not_same
**err_password_not_same**: The function of err_password_not_same is to generate an error message indicating that the password entered by the user is not the same. 

**Parameters**:
- None

**Code Description**:
The `err_password_not_same` function returns a dictionary object that contains an error code and message. The error code is set to "1026" and the error message is set to "Password Is Not Same One". This function is typically used in scenarios where the user is required to enter a password twice (e.g., during registration or password reset) and the entered passwords do not match.

In the given code snippet, the `err_password_not_same` function is called within the `register` function of the `userregister/views.py` file. It is used to handle the case where the `password1` and `password2` fields do not match. If the passwords do not match, the `err_password_not_same` function is called and a JSON response containing the error message is returned.

**Note**:
- This function does not accept any parameters.
- The error code and message can be customized according to the specific requirements of the application.

**Output Example**:
```
{
    'code': '1026',
    'msg': 'Password Is Not Same One'
}
```
***
### FunctionDef err_psw
**err_psw**: The function of err_psw is to define an error message related to incorrect user password.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_psw function creates a dictionary named err_psw containing two key-value pairs: "code" with a value of "1027" and "msg" with a value of "用户密码错误" which translates to "User password error" in English. This dictionary is then returned by the function.

**Note**: This function is designed to specifically handle errors related to incorrect user passwords.

**Output Example**: 
{"code": "1027", "msg": "用户密码错误"}
***
### FunctionDef err_dev
**err_dev**: The function of err_dev is to define an error message dictionary with a specific error code and message related to non-developer openid.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_dev Function creates a dictionary named err_dev with two key-value pairs: "code" with a value of "1028" and "msg" with a value of "非开发者openid，无法使用此功能" which translates to "Non-developer openid, unable to use this function".

**Note**: This Function is designed to handle errors related to non-developer openid scenarios.

**Output Example**: 
{"code": "1028", "msg": "非开发者openid，无法使用此功能"}
***
### FunctionDef err_register_more
**err_register_more**: The function of err_register_more is to define an error message related to account registration limits.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_register_more Function creates a dictionary named err_register_more containing an error code "1029" and an error message "1个ip只能注册2个账号" which translates to "1 IP can only register 2 accounts" in English. The function then returns this dictionary.

**Note**: This Function is designed to handle errors related to account registration limits, specifically restricting the number of accounts that can be registered per IP address.

**Output Example**: 
{"code": "1029", "msg": "1个ip只能注册2个账号"}
***
### FunctionDef err_openid
**err_openid**: The function of err_openid is to define an error message related to the absence of an openid.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_openid function creates a dictionary named err_openid with two key-value pairs: "code" with the value "1030" and "msg" with the value "没有openid" which translates to "no openid" in English. It then returns this dictionary.

**Note**: This function is specifically designed to handle errors related to the absence of an openid in a system.

**Output Example**: 
{"code": "1030", "msg": "没有openid"}
***
### FunctionDef err_more_user
**err_more_user**: The function of err_more_user is to define an error message related to exceeding the maximum number of users that can be created for a single account.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_more_user function creates a dictionary named err_more_user containing an error code "1041" and an error message "一个账号只能建立5个用户" which translates to "A single account can only create 5 users" in English. The function then returns this dictionary.

**Note**: This function is designed to handle the specific error scenario of exceeding the user limit for a single account.

**Output Example**: 
{"code": "1041", "msg": "一个账号只能建立5个用户"}
***
### FunctionDef err_req_day
**err_req_day**: The function of err_req_day is to define and return an error message related to a missing shipment record.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_req_day function creates a dictionary named err_req_day with two key-value pairs: "code" with a value of "1042" and "msg" with a value of "发货记录至少需要" which translates to "Shipment record is required at least" in English. The function then returns this dictionary.

**Note**: This function is designed to handle error messages related to missing shipment records. It does not require any input parameters and always returns the same predefined error message.

**Output Example**: 
{"code": "1042", "msg": "发货记录至少需要"}
***
### FunctionDef err_req_shipping_list
**err_req_shipping_list**: The function of err_req_shipping_list is to define an error message related to a missing shipping record.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_req_shipping_list function creates a dictionary named err_req_shipping_list with two key-value pairs: "code" with the value "1043" and "msg" with the value "请上传发货记录" which translates to "Please upload the shipping record" in English. The function then returns this dictionary.

**Note**: This function is designed to handle errors related to missing shipping records and provides a specific error message with a corresponding error code.

**Output Example**: 
{"code": "1043", "msg": "请上传发货记录"}
***
### FunctionDef err_req_stock_list
**err_req_stock_list**: The function of err_req_stock_list is to return an error message dictionary with a specific error code and message.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_req_stock_list function creates a dictionary named err_req_stock_list with the keys "code" and "msg" containing the error code "1044" and the error message "请上传现有库存" which translates to "Please upload existing inventory" in English. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message related to requesting stock list operations.

**Output Example**: 
{"code": "1044", "msg": "请上传现有库存"}
***
### FunctionDef err_req_baseinfo_list
**err_req_baseinfo_list**: The function of err_req_baseinfo_list is to return an error message dictionary containing a specific error code and message related to requesting basic information.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_req_baseinfo_list function defines a dictionary named err_req_baseinfo_list with keys "code" and "msg" containing the error code "1045" and the error message "请上传基础信息" which translates to "Please upload basic information" in English. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message related to requesting basic information. It does not require any input parameters and simply returns the error message dictionary.

**Output Example**: 
{"code": "1045", "msg": "请上传基础信息"}
***
### FunctionDef err_goods_code
**err_goods_code**: The function of err_goods_code is to return a dictionary containing an error code and message for a non-existent goods code.
**parameters**: This Function does not take any parameters.
**Code Description**: The err_goods_code function defines a dictionary named err_goods_code with keys "code" and "msg" containing the error code "1046" and the error message "该商品编号不存在" which translates to "The goods code does not exist" in English. The function then returns this dictionary.
**Note**: This function is designed to handle errors related to non-existent goods codes.
**Output Example**: 
{"code": "1046", "msg": "该商品编号不存在"}
***
### FunctionDef err_authid
**err_authid**: The function of err_authid is to define an error message related to the absence of an authid.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_authid function creates a dictionary named err_authid containing an error code "1033" and an error message "没有authid" which translates to "No authid" in English. The function then returns this dictionary.

**Note**: This function is designed to handle errors specifically related to the absence of an authid. It provides a predefined error code and message for this particular scenario.

**Output Example**: 
{"code": "1033", "msg": "没有authid"}
***
### FunctionDef ret_auth
**ret_auth**: The function of ret_auth is to return a dictionary containing a code and a message indicating successful verification.

**parameters**: 
This Function does not take any parameters.

**Code Description**:
The ret_auth Function creates a dictionary named ret_auth with keys "code" and "msg" containing the values "1032" and "验证通过" respectively. It then returns this dictionary.

**Note**: 
This Function is a simple utility function that is used to generate a predefined response for successful authentication.

**Output Example**:
{"code": "1032", "msg": "验证通过"}
***
### FunctionDef err_bad
**err_bad**: The function of err_bad is to define and return a dictionary containing an error code and message related to submitting illegal data.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_bad function defines a dictionary named err_bad with two key-value pairs:
- "code": "1031"
- "msg": "提交了非法数据，多次提交直接封号"

When the function is called, it returns the err_bad dictionary.

**Note**: This function is designed to provide a predefined error code and message related to submitting illegal data. It does not require any input parameters and simply returns the predefined dictionary.

**Output Example**: 
{"code": "1031", "msg": "提交了非法数据，多次提交直接封号"}
***
### FunctionDef err_auth_open
**err_auth_open**: The function of err_auth_open is to return a dictionary containing an error code and a corresponding error message.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_auth_open function creates a dictionary named err_auth_open with two key-value pairs. The key "err_auth_open" has a value of "1034", which represents the error code, and the key "msg" has a value of "非本授权码下账号", which is the error message translated as "Non-account under this authorization code".

**Note**: This function is a simple error handler that provides a predefined error code and message. It does not involve any complex logic or external dependencies.

**Output Example**: 
{"err_auth_open": "1034", "msg": "非本授权码下账号"}
***
### FunctionDef err_goods_code
**err_goods_code**: The function of err_goods_code is to define and return an error code dictionary for a non-existent goods code.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_goods_code Function initializes a dictionary named err_goods_code with the keys "code", "msg", and "data". The values associated with these keys are "1051", "商品编码不存在" (which translates to "Goods code does not exist"), and None respectively. The Function then returns this dictionary.

**Note**: This Function is designed to be used when handling errors related to non-existent goods codes.

**Output Example**: 
{"code": "1051", "msg": "商品编码不存在", "data": None}
***
### FunctionDef err_po_num_empty
**err_po_num_empty**: The function of err_po_num_empty is to define an error message for an empty order number.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_num_empty function creates a dictionary named err_po_num_empty containing an error code, message, and data. The error code is "1060", the message is "订单号不可以为空" (Order number cannot be empty), and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle cases where an order number is missing or empty.

**Output Example**: 
{"code": "1060", "msg": "订单号不可以为空", "data": None}
***
### FunctionDef err_po_num
**err_po_num**: The function of err_po_num is to define and return an error message related to an existing order.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_num function creates a dictionary named err_po_num containing error code "1061", error message "订单已经存在" (which translates to "Order already exists" in English), and sets the data field to None. It then returns this dictionary.

**Note**: This function is designed to provide a predefined error message for cases where an order already exists.

**Output Example**: 
{"code": "1061", "msg": "订单已经存在", "data": None}
***
### FunctionDef err_po_qty_type
**err_po_qty_type**: The function of err_po_qty_type is to define an error message related to the quantity type in a purchase order.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_qty_type function creates a dictionary named err_po_qty_type with three key-value pairs: "code" with a value of "1062", "msg" with a value of "数量必须是数字" (which translates to "Quantity must be a number"), and "data" with a value of None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to the quantity type in a purchase order. It does not require any input parameters and always returns the same predefined error message structure.

**Output Example**: 
{"code": "1062", "msg": "数量必须是数字", "data": None}
***
### FunctionDef err_po_qty
**err_po_qty**: The function of err_po_qty is to define an error message related to the quantity being greater than 0.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_qty function creates a dictionary named err_po_qty with three key-value pairs:
- "code": "1063"
- "msg": "数量必须大于0" (which translates to "Quantity must be greater than 0")
- "data": None

The function then returns this dictionary containing the error code, message, and data.

**Note**: This function is designed to provide a specific error message related to the quantity being greater than 0. It does not require any input parameters and always returns the same predefined error message structure.

**Output Example**: 
{"code": "1063", "msg": "数量必须大于0", "data": None}
***
### FunctionDef err_same_po_num
**err_same_po_num**: The function of err_same_po_num is to define an error message object for a specific error code related to inconsistent order codes.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_same_po_num function creates an error message object with the following attributes:
- "code": "1063"
- "msg": "订单编码不一致"
- "data": None

**Note**: This function is designed to be used when there is a need to generate an error message for cases where order codes are inconsistent.

**Output Example**: 
{"code": "1063", "msg": "订单编码不一致", "data": None}
***
### FunctionDef err_lot_num
**err_lot_num**: The function of err_lot_num is to define an error message dictionary related to a missing lot number.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_lot_num function initializes a dictionary named err_lot_num with the keys "code", "msg", and "data". The "code" key is set to "1064", the "msg" key is set to "缺少lot_num，格式为:YYYY-MM-DD" (which translates to "Missing lot number, format should be: YYYY-MM-DD"), and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle errors related to missing lot numbers and provides a predefined error message structure.

**Output Example**: 
{"code": "1064", "msg": "缺少lot_num，格式为:YYYY-MM-DD", "data": None}
***
### FunctionDef err_lot_num_empty
**err_lot_num_empty**: The function of err_lot_num_empty is to define an error message for when the lot number is empty.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_lot_num_empty function creates a dictionary named err_lot_num_empty with three key-value pairs: "code" with a value of "1065", "msg" with a value of "lot_num不能为空，格式为:YYYY-MM-DD", and "data" with a value of None. This dictionary represents an error message indicating that the lot number cannot be empty and should follow the format: YYYY-MM-DD. The function then returns this dictionary.

**Note**: This function is designed to be used when handling errors related to empty lot numbers in a specific format. It provides a predefined error message structure for such cases.

**Output Example**: 
{"code": "1065", "msg": "lot_num不能为空，格式为:YYYY-MM-DD", "data": None}
***
### FunctionDef err_lot_num_format
**err_lot_num_format**: The function of err_lot_num_format is to define an error message for an incorrect lot number format.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_lot_num_format function creates a dictionary named err_lot_num_format with three key-value pairs: "code" with a value of "1066", "msg" with a value of "lot_num格式不正确，格式为:YYYY-MM-DD", and "data" with a value of None. This dictionary represents an error message indicating that the lot number format is incorrect and should be in the format: YYYY-MM-DD.

**Note**: This function is designed to be used when validating lot number formats in a system. Developers can call this function to retrieve the predefined error message for incorrect lot number formats.

**Output Example**: 
{
    "code": "1066",
    "msg": "lot_num格式不正确，格式为:YYYY-MM-DD",
    "data": None
}
***
### FunctionDef err_po_supplier
**err_po_supplier**: The function of err_po_supplier is to define an error message related to a missing supplier field in a purchase order.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_supplier function creates a dictionary named err_po_supplier with three key-value pairs:
- "code": "1067"
- "msg": "字段supplier不能为空" (which translates to "field supplier cannot be empty")
- "data": None

The function then returns the err_po_supplier dictionary.

**Note**: This function is specifically designed to handle errors related to missing supplier information in a purchase order. It provides a predefined error message structure for such scenarios.

**Output Example**: 
{"code": "1067", "msg": "字段supplier不能为空", "data": None}
***
### FunctionDef err_po_supplier_empty
**err_po_supplier_empty**: The function of err_po_supplier_empty is to define an error message related to a non-existent supplier.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_supplier_empty function creates a dictionary named err_po_supplier_empty containing error code, message, and data related to a non-existent supplier. The error code is "1068", the message is "供应商不存在" (which translates to "Supplier does not exist" in English), and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle cases where a supplier is not found in the system. It provides a predefined error message structure for such scenarios.

**Output Example**: 
{"code": "1068", "msg": "供应商不存在", "data": None}
***
### FunctionDef err_po_goods_code
**err_po_goods_code**: The function of err_po_goods_code is to define an error message related to a missing goods code.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_goods_code function creates a dictionary named err_po_goods_code with three key-value pairs: "code" with a value of "1069", "msg" with a value of "商品编码不能为空" (which translates to "Goods code cannot be empty"), and "data" with a value of None. The function then returns this dictionary.

**Note**: This function is designed to handle errors related to missing goods codes.

**Output Example**: 
{"code": "1069", "msg": "商品编码不能为空", "data": None}
***
### FunctionDef err_po_status_empty
**err_po_status_empty**: The function of err_po_status_empty is to define an error message object related to an empty order status.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_empty function creates a dictionary named err_po_status_empty containing error code, message, and data related to an empty order status. The error code is "1070", the message is "订单状态不能为空" (Order status cannot be empty), and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle cases where an order status is missing or empty, providing a predefined error message structure for such scenarios.

**Output Example**: 
{"code": "1070", "msg": "订单状态不能为空", "data": None}
***
### FunctionDef err_po_status_less
**err_po_status_less**: The function of err_po_status_less is to define an error message object related to an irreversible order status.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_less function creates a dictionary named err_po_status_less containing error code "1071", error message "订单状态不可逆" (which translates to "Order status is irreversible"), and sets the data field to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to irreversible order status. It does not require any input parameters and simply returns a predefined error object.

**Output Example**: 
{"code": "1071", "msg": "订单状态不可逆", "data": None}
***
### FunctionDef err_po_status_same
**err_po_status_same**: The function of err_po_status_same is to define an error message related to the status of an order being the same.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_same Function creates a dictionary named err_po_status_same with three key-value pairs: "code" with a value of "1072", "msg" with a value of "订单状态不可以相同" (which translates to "Order status cannot be the same"), and "data" with a value of None. The function then returns this dictionary.

**Note**: This Function is a simple error message definition and does not require any input parameters.

**Output Example**: 
{"code": "1072", "msg": "订单状态不可以相同", "data": None}
***
### FunctionDef err_po_status_more
**err_po_status_more**: The function of err_po_status_more is to define and return an error message related to a specific order status change scenario.
**parameters**: This Function does not take any parameters.
**Code Description**: The err_po_status_more function creates a dictionary named err_po_status_more containing error code, message, and data related to a specific order status change scenario. The dictionary is then returned as the output of the function.
**Note**: This function is designed to handle a specific error scenario related to changing order status and provides a predefined error message structure.
**Output Example**: {"code": "1073", "msg": "订单状态不可以直接跨级更改", "data": None}
***
### FunctionDef err_po_status_big
**err_po_status_big**: The function of err_po_status_big is to define an error message with a specific code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_big function creates a dictionary named err_po_status_big with the keys "code", "msg", and "data". The "code" key has a value of "1074", the "msg" key has a value of "此接口只支持9以内的状态变化" (which translates to "This interface only supports status changes within 9" in English), and the "data" key has a value of None. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message related to a specific status change limitation within an interface.

**Output Example**: 
{"code": "1074", "msg": "此接口只支持9以内的状态变化", "data": None}
***
### FunctionDef err_po_status_delete
**err_po_status_delete**: The function of err_po_status_delete is to define an error message related to the deletion of orders with a specific status.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_delete function creates a dictionary named err_po_status_delete with three key-value pairs:
- "code": "1075"
- "msg": "只有订单状态为1的订单可以删除" (Only orders with status 1 can be deleted)
- "data": None

The function then returns the err_po_status_delete dictionary.

**Note**: This function is designed to provide a specific error message related to the deletion of orders with a particular status. It does not require any input parameters and simply returns a predefined error message dictionary.

**Output Example**: 
{"code": "1075", "msg": "只有订单状态为1的订单可以删除", "data": None}
***
### FunctionDef err_po_status_patch
**err_po_status_patch**: The function of err_po_status_patch is to define an error message related to a specific order status patch operation.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_status_patch function initializes a dictionary named err_po_status_patch with the keys "code", "msg", and "data". The values associated with these keys are "1076", "只有订单状态为1的订单可以修改" (which translates to "Only orders with a status of 1 can be modified"), and None respectively. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message for cases where only orders with a specific status can be modified.

**Output Example**: 
{"code": "1076", "msg": "只有订单状态为1的订单可以修改", "data": None}
***
### FunctionDef err_po_actual_delivery_stock_patch
**err_po_actual_delivery_stock_patch**: The function of err_po_actual_delivery_stock_patch is to define an error message related to actual delivery stock patch.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_actual_delivery_stock_patch function creates a dictionary containing an error code, message, and data. The error code is set to "1077", the message is "实际到货数量不可以为空" (which translates to "Actual delivery quantity cannot be empty" in English), and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle errors related to actual delivery stock patch and provides a specific error message for the scenario described.

**Output Example**: 
{"code": "1077", "msg": "实际到货数量不可以为空", "data": None}
***
### FunctionDef err_po_actual_delivery_stock_more
**err_po_actual_delivery_stock_more**: The function of err_po_actual_delivery_stock_more is to define an error message related to actual delivery stock exceeding the ordered quantity.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_actual_delivery_stock_more function creates a dictionary named err_po_actual_delivery_stock_more containing error code, message, and data. The error code is "1078", the message states "Actual delivery quantity cannot be greater than the ordered quantity", and the data field is set to None. The function then returns this dictionary.

**Note**: This function is designed to handle cases where the actual delivery quantity exceeds the quantity specified in the order. It provides a predefined error message structure for such scenarios.

**Output Example**: 
{"code": "1078", "msg": "Actual delivery quantity cannot be greater than the ordered quantity", "data": None}
***
### FunctionDef err_po_actual_delivery_stock_zero
**err_po_actual_delivery_stock_zero**: The function of err_po_actual_delivery_stock_zero is to define an error message related to the actual delivery stock being zero.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_po_actual_delivery_stock_zero function creates a dictionary named err_po_actual_delivery_stock_zero with three key-value pairs: "code" with the value "1079", "msg" with the value "实际到货数量不可以小于0" (which translates to "Actual delivery quantity cannot be less than 0" in English), and "data" with the value None. The function then returns this dictionary.

**Note**: This function is designed to handle errors related to the actual delivery stock being zero in a purchase order scenario.

**Output Example**: 
{"code": "1079", "msg": "实际到货数量不可以小于0", "data": None}
***
### FunctionDef err_po_actual_delivery_stock_moreall
**err_po_actual_delivery_stock_moreall**: The function of err_po_actual_delivery_stock_moreall is to define an error message related to exceeding the ordered quantity in actual delivery.

**parameters**: This Function does not take any parameters.

**Code Description**: The function creates a dictionary named err_po_actual_delivery_stock_moreall with keys "code", "msg", and "data". The "code" key is set to "1080", the "msg" key is set to "到货数量不可以大于订单数量" which translates to "The quantity of goods received cannot be greater than the quantity ordered", and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to exceeding the ordered quantity during actual delivery. It does not require any input parameters and simply returns a predefined error message dictionary.

**Output Example**: 
{"code": "1080", "msg": "到货数量不可以大于订单数量", "data": None}
***
### FunctionDef err_po_actual_delivery_stock_again
**err_po_actual_delivery_stock_again**: The function of err_po_actual_delivery_stock_again is to define an error message related to modifying the same quantity repeatedly.

**parameters**: This Function does not take any parameters.

**Code Description**: The function initializes a dictionary named err_po_actual_delivery_stock_again with a code, message, and data key-value pair. The code is set to "1081", the message is "不要重复修改相同的数量" which translates to "Do not modify the same quantity repeatedly", and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to modifying the same quantity multiple times. It does not require any input parameters and simply returns a predefined dictionary with error information.

**Output Example**: 
{"code": "1081", "msg": "不要重复修改相同的数量", "data": None}
***
### FunctionDef err_sort_stock_bin_name
**err_sort_stock_bin_name**: The function of err_sort_stock_bin_name is to define and return an error message related to a missing stock bin name during the sorting process.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_sort_stock_bin_name Function initializes a dictionary named err_sort_stock_bin_name with three key-value pairs: "code" with the value "1082", "msg" with the value "上架库位名称不能为空" (which translates to "Stock bin name cannot be empty" in English), and "data" with the value None. It then returns this dictionary as the output.

**Note**: This Function is designed to handle errors specifically related to missing stock bin names during sorting operations.

**Output Example**: 
{"code": "1082", "msg": "上架库位名称不能为空", "data": None}
***
### FunctionDef err_sort_stock_bin_name_error
**err_sort_stock_bin_name_error**: The function of err_sort_stock_bin_name_error is to define an error message related to a missing stock bin during sorting.
**parameters**: This Function does not take any parameters.
**Code Description**: The function initializes a dictionary named err_sort_stock_bin_name_error with keys "code", "msg", and "data" to represent the error code, error message, and additional data respectively. The error code is set to "1083" and the error message is set to "上架库位不存在" which translates to "Stock bin for sorting does not exist". The data field is set to None.
**Note**: This function is a predefined error message for handling cases where the stock bin is not found during sorting operations.
**Output Example**: 
{
    "code": "1083",
    "msg": "上架库位不存在",
    "data": None
}
***
### FunctionDef err_sort_stock_qty
**err_sort_stock_qty**: The function of err_sort_stock_qty is to define and return an error message related to the requirement of having a stock quantity for sorting.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_sort_stock_qty function creates a dictionary named err_sort_stock_qty containing the keys "code", "msg", and "data". The "code" key holds the value "1084", the "msg" key holds the message "需要有上架数量" which translates to "Requires stock quantity" in English, and the "data" key is set to None. Finally, the function returns the err_sort_stock_qty dictionary.

**Note**: This function is a simple error message generator and does not require any input parameters.

**Output Example**: 
{
    "code": "1084",
    "msg": "需要有上架数量",
    "data": None
}
***
### FunctionDef err_sort_stock_qty_empty
**err_sort_stock_qty_empty**: The function of err_sort_stock_qty_empty is to define an error message related to empty stock quantity during sorting.

**parameters**: This Function does not take any parameters.

**Code Description**: The function initializes a dictionary named err_sort_stock_qty_empty with keys "code", "msg", and "data". The "code" key is set to "1085", the "msg" key is set to "上架数量不能为空" which translates to "Stock quantity cannot be empty", and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to empty stock quantity during sorting. It does not require any input parameters and simply returns a predefined error message dictionary.

**Output Example**: 
{"code": "1085", "msg": "上架数量不能为空", "data": None}
***
### FunctionDef err_sort_stock_qty_zero
**err_sort_stock_qty_zero**: The function of err_sort_stock_qty_zero is to create an error message dictionary indicating that the stock quantity must be greater than 0.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_sort_stock_qty_zero function initializes a dictionary named err_sort_stock_qty_zero with the keys "code", "msg", and "data". The "code" key is set to "1086", the "msg" key is set to "上架数量必须大于0" which translates to "Stock quantity must be greater than 0", and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to be used when there is a need to communicate an error message related to the stock quantity being zero.

**Output Example**: 
{"code": "1086", "msg": "上架数量必须大于0", "data": None}
***
### FunctionDef err_sort_stock_qty_more
**err_sort_stock_qty_more**: The function of err_sort_stock_qty_more is to define an error message related to exceeding the quantity of stock to be sorted.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_sort_stock_qty_more function creates a dictionary named err_sort_stock_qty_more containing an error code, message, and data. The error code is "1087", the message states "上架数量不可以超过待上架库存" which translates to "The quantity for sorting cannot exceed the pending stock to be shelved", and the data is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to exceeding the quantity of stock to be sorted. It does not require any input parameters and simply returns a predefined error dictionary.

**Output Example**: 
{"code": "1087", "msg": "上架数量不可以超过待上架库存", "data": None}
***
### FunctionDef err_sort_stock_bin_type
**err_sort_stock_bin_type**: The function of err_sort_stock_bin_type is to define and return an error message related to mismatched stock bin types during sorting.

**parameters**: This Function does not take any parameters.

**Code Description**: The err_sort_stock_bin_type function creates a dictionary named err_sort_stock_bin_type with the keys "code", "msg", and "data". The "code" key holds the value "1088", the "msg" key holds the message "上架库位属性与实际库位属性不符" (which translates to "Mismatched stock bin types during sorting" in English), and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a specific error message related to stock bin type discrepancies, which can be useful for handling and communicating such errors in the application.

**Output Example**: 
{"code": "1088", "msg": "上架库位属性与实际库位属性不符", "data": None}
***
### FunctionDef wms_ret
**wms_ret**: The function of wms_ret is to create and return a dictionary containing a code, a message, and data.

**parameters**: 
- This Function does not take any parameters.

**Code Description**: 
The wms_ret function initializes a dictionary named wms_ret with keys "code", "msg", and "data". The values associated with these keys are "200", "操作成功" (which translates to "Operation successful"), and None respectively. The function then returns this dictionary.

**Note**: 
Developers can use this function to quickly create a standard response object with a code, message, and data fields.

**Output Example**: 
{"code": "200", "msg": "操作成功", "data": None}
***
### FunctionDef wms_same
**wms_same**: The function of wms_same is to return a predefined dictionary containing a specific code, message, and data.

**parameters**: 
There are no parameters for this function.

**Code Description**: 
The wms_same function initializes a dictionary named wms_same with the keys "code", "msg", and "data". The values associated with these keys are "100001", "数据已存在" (which translates to "Data already exists" in English), and None respectively. Finally, the function returns the wms_same dictionary.

**Note**: 
This function is designed to provide a consistent response structure with a predefined code and message. It does not accept any input parameters and always returns the same dictionary.

**Output Example**: 
{"code": "100001", "msg": "数据已存在", "data": None}
***
### FunctionDef wms_err
**wms_err**: The function of wms_err is to define and return a dictionary containing error code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_err function initializes a dictionary named wms_err with keys "code", "msg", and "data" set to "100002", "数据不存在" (which means "data does not exist" in English), and None respectively. It then returns this dictionary.

**Note**: This function is designed to provide a predefined error structure with a specific error code and message. It can be used to handle and communicate errors consistently within the application.

**Output Example**: 
{"code": "100002", "msg": "数据不存在", "data": None}
***
### FunctionDef wms_errfile
**wms_errfile**: The function of wms_errfile is to return a predefined dictionary containing error code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_errfile function initializes a dictionary named wms_errfile with the keys "code", "msg", and "data". The values associated with these keys are "100003", "下载文件请求参数错误" (which translates to "Download file request parameter error"), and None respectively. Finally, the function returns the wms_errfile dictionary.

**Note**: This function is designed to provide a standardized error response in the form of a dictionary.

**Output Example**: 
{"code": "100003", "msg": "下载文件请求参数错误", "data": None}
***
### FunctionDef wms_time
**wms_time**: The function of wms_time is to return a predefined dictionary containing a specific message related to time validation.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_time function initializes a dictionary named wms_time with a specific structure containing an error message related to time validation. The dictionary has a key "results" with a nested dictionary containing keys "code", "msg", and "data". The "code" key holds the value "100004", the "msg" key holds the message "起始时间必须大于等于结束日期,默认结束日期为今天" (translated as "Start time must be greater than or equal to the end date, default end date is today"), and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is designed to provide a predefined error message related to time validation and does not have any dynamic behavior based on input parameters.

**Output Example**: 
{"results": {"code": "100004", "msg": "起始时间必须大于等于结束日期,默认结束日期为今天", "data": None}}
***
### FunctionDef wms_vip_get
**wms_vip_get**: The function of wms_vip_get is to retrieve a predefined dictionary containing information about the user's VIP level.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_vip_get function initializes a dictionary named wms_vip_get with a specific structure. The dictionary contains a key "results" with a nested dictionary containing keys "code", "msg", and "data". The values associated with these keys provide information about the user's VIP level, including a code, a message indicating the VIP level status, and data (which is set to None in this case).

**Note**: This function is designed to provide a predefined response regarding the user's VIP level and does not interact with external systems to retrieve real-time data.

**Output Example**: 
{"results": {"code": "100005", "msg": "您的会员等级不够，请升级会员来提权", "data": None}}
***
### FunctionDef wms_vip
**wms_vip**: The function of wms_vip is to return a dictionary containing information about a regular member's communication limit.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_vip function creates a dictionary named wms_vip with the keys "code", "msg", and "data". The "code" key holds the value "100005", the "msg" key contains the message "普通会员每天只能进行3次主动沟通" (which translates to "Regular members can only initiate communication 3 times a day" in English), and the "data" key is set to None. The function then returns this dictionary.

**Note**: This function is a simple utility function that provides information about communication limits for regular members. It does not require any input parameters and always returns the same predefined dictionary.

**Output Example**: 
{"code": "100005", "msg": "普通会员每天只能进行3次主动沟通", "data": None}
***
### FunctionDef wms_dev
**wms_dev**: The function of wms_dev is to return a dictionary containing a specific error code, message, and no data.
**parameters**: This Function does not take any parameters.
**Code Description**: The wms_dev function creates a dictionary named wms_dev with the keys "code", "msg", and "data". The "code" key has a value of "100006", the "msg" key has a value of "不可以对管理员账号进行操作" (which translates to "Cannot operate on the administrator account"), and the "data" key has a value of None. The function then returns this dictionary.
**Note**: This function is designed to provide a predefined error message related to administrator account operations.
**Output Example**: 
{"code": "100006", "msg": "不可以对管理员账号进行操作", "data": None}
***
### FunctionDef wms_user_owner
**wms_user_owner**: The function of wms_user_owner is to return a dictionary containing a specific code, message, and data.

**parameters**: 
This Function does not take any parameters.

**Code Description**:
The wms_user_owner Function creates a dictionary named wms_user_owner with the keys "code", "msg", and "data". The value associated with the "code" key is "100007", the value associated with the "msg" key is "不可以删除自己" (translated as "Cannot delete yourself"), and the value associated with the "data" key is set to None. The Function then returns this dictionary.

**Note**: 
Developers using this Function should expect to receive a dictionary with predefined keys and values. The "code" key holds a specific code, the "msg" key contains a message, and the "data" key is set to None.

**Output Example**:
{"code": "100007", "msg": "不可以删除自己", "data": None}
***
### FunctionDef wms_warehouse_more
**wms_warehouse_more**: The function of wms_warehouse_more is to return a dictionary containing information about a warehouse with a specific code, message, and no additional data.
**parameters**: This Function does not take any parameters.
**Code Description**: The wms_warehouse_more function creates a dictionary named wms_warehouse_more with the keys "code", "msg", and "data". The "code" key holds the value "100008", the "msg" key holds the value "只能创建一个仓库" (which translates to "Can only create one warehouse" in English), and the "data" key is set to None. Finally, it returns this dictionary.
**Note**: This function is a simple data retrieval function that always returns the same predefined dictionary.
**Output Example**: 
{"code": "100008", "msg": "只能创建一个仓库", "data": None}
***
### FunctionDef wms_company_more
**wms_company_more**: The function of wms_company_more is to return a predefined dictionary containing company information.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_company_more function initializes a dictionary named wms_company_more with the keys "code", "msg", and "data". The values associated with these keys are "100008", "只能创建一个公司信息" (which translates to "Can only create one company information"), and None respectively. The function then returns this dictionary.

**Note**: This function is designed to provide a specific set of company information in a structured format. It does not require any input parameters and always returns the same predefined dictionary.

**Output Example**: 
{"code": "100008", "msg": "只能创建一个公司信息", "data": None}
***
### FunctionDef wms_binproperty
**wms_binproperty**: The function of wms_binproperty is to define and return a dictionary containing information about a warehouse location property.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_binproperty function creates a dictionary named wms_binproperty with the keys "code", "msg", and "data". The values associated with these keys are "100009", "库位属性不存在" (which translates to "Location property does not exist"), and None respectively. The function then returns this dictionary.

**Note**: This function is a simple utility function that defines and returns a predefined dictionary structure. It does not require any input parameters and always returns the same dictionary structure.

**Output Example**: 
{"code": "100009", "msg": "库位属性不存在", "data": None}
***
### FunctionDef wms_binsize
**wms_binsize**: The function of wms_binsize is to return a dictionary containing a specific code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_binsize Function creates a dictionary named wms_binsize with the keys "code", "msg", and "data". The "code" key holds the value "100010", the "msg" key holds the value "库位尺寸不存在" (which translates to "Bin size does not exist" in English), and the "data" key is set to None. The Function then returns this dictionary.

**Note**: This Function is a simple utility that returns a predefined dictionary structure. It does not require any input parameters and always returns the same dictionary.

**Output Example**: 
{"code": "100010", "msg": "库位尺寸不存在", "data": None}
***
### FunctionDef wms_no_user
**wms_no_user**: The function of wms_no_user is to return a predefined dictionary containing information about a non-existent user in the system.

**parameters**: 
This Function does not take any parameters.

**Code Description**: 
The wms_no_user Function creates a dictionary named wms_no_user with a key "results" that contains another dictionary with keys "code", "msg", and "data". The "code" key has a value of "100011", the "msg" key has a value of "用户名不存在" (which translates to "Username does not exist"), and the "data" key has a value of None. This structure is then returned by the Function.

**Note**: 
This Function is designed to handle the scenario where a user does not exist in the system. It provides a consistent format for such cases.

**Output Example**: 
{"results": {"code": "100011", "msg": "用户名不存在", "data": None}}
***
### FunctionDef wms_po_status_1
**wms_po_status_1**: The function of wms_po_status_1 is to define a dictionary containing information about a specific purchase order status.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_status_1 function creates a dictionary named wms_po_status_1 with three key-value pairs:
- "code": "100012"
- "msg": "只有入库单状态为1的订单才可以删除" (Only orders with a status of 1 in the warehouse receipt can be deleted)
- "data": None

The function then returns this dictionary.

**Note**: This function is a simple data definition function that sets predefined values for a purchase order status. It does not involve any complex logic or operations.

**Output Example**: 
{"code": "100012", "msg": "只有入库单状态为1的订单才可以删除", "data": None}
***
### FunctionDef wms_po_empty
**wms_po_empty**: The function of wms_po_empty is to create a dictionary containing error code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_empty function initializes a dictionary named wms_po_empty with the keys "code", "msg", and "data". The "code" key is set to "100013", the "msg" key is set to "入库单号码不存在" which translates to "Inbound order number does not exist", and the "data" key is set to None. Finally, the function returns the wms_po_empty dictionary.

**Note**: This function is designed to provide a predefined error message related to an inbound order number not existing. It does not require any input parameters and always returns the same dictionary structure.

**Output Example**: 
{"code": "100013", "msg": "入库单号码不存在", "data": None}
***
### FunctionDef wms_po_status_predelivery
**wms_po_status_predelivery**: The function of wms_po_status_predelivery is to return a dictionary containing information about the status of a pre-delivery purchase order.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_status_predelivery function creates a dictionary named wms_po_status_predelivery with three key-value pairs:
- "code": "100014"
- "msg": "入库单已经到货"
- "data": None

The function then returns this dictionary.

**Note**: This function is a simple utility function that provides a predefined status message for a pre-delivery purchase order. It does not require any input parameters and always returns the same dictionary structure.

**Output Example**: 
{"code": "100014", "msg": "入库单已经到货", "data": None}
***
### FunctionDef wms_po_status_predelivery_detail
**wms_po_status_predelivery_detail**: The function of wms_po_status_predelivery_detail is to return a predefined dictionary containing information about the status of a pre-delivery purchase order in a warehouse management system.

**parameters**: This Function does not take any parameters.

**Code Description**: The function initializes a dictionary named wms_po_status_predelivery_detail with the keys "code", "msg", and "data". The values associated with these keys are "100015", "入库单没有任何订单明细" (which translates to "No order details for the inbound delivery" in English), and None respectively. Finally, the function returns this dictionary.

**Note**: This function is designed to provide a specific status message related to the lack of order details in a pre-delivery purchase order scenario. It does not require any input parameters and simply returns a predefined dictionary with the status information.

**Output Example**: 
{"code": "100015", "msg": "入库单没有任何订单明细", "data": None}
***
### FunctionDef wms_po_status_preload_detail
**wms_po_status_preload_detail**: The function of wms_po_status_preload_detail is to define a dictionary containing information about the status of a purchase order preload detail.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_status_preload_detail function initializes a dictionary named wms_po_status_preload_detail with the keys "code", "msg", and "data". The values associated with these keys are "100016", "入库单没有任何订单明细" (which translates to "No order details for the inbound order" in English), and None respectively. Finally, the function returns the wms_po_status_preload_detail dictionary.

**Note**: This function is a simple utility function that creates and returns a predefined dictionary structure. It does not require any input parameters and is designed to provide a specific status message related to purchase order preload details.

**Output Example**: 
{"code": "100016", "msg": "入库单没有任何订单明细", "data": None}
***
### FunctionDef wms_po_qty_up_more
**wms_po_qty_up_more**: The function of wms_po_qty_up_more is to define a dictionary containing error code, message, and data related to exceeding the actual received quantity during goods receipt.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_qty_up_more function creates a dictionary named wms_po_qty_up_more with the following key-value pairs:
- "code": "100017"
- "msg": "实际到货上架数量不可大于实际到货数量"
- "data": None

The "code" key holds the error code, "msg" key contains the error message indicating that the actual received quantity cannot be greater than the actual received quantity, and the "data" key is set to None.

**Note**: This function is a simple utility function that defines an error message related to exceeding the actual received quantity during goods receipt.

**Output Example**: 
{
    "code": "100017",
    "msg": "实际到货上架数量不可大于实际到货数量",
    "data": None
}
***
### FunctionDef wms_po_qty_dup_more
**wms_po_qty_dup_more**: The function of wms_po_qty_dup_more is to define a dictionary containing a specific error code, message, and data, and then return this dictionary.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_qty_dup_more Function creates a dictionary named wms_po_qty_dup_more with the keys "code", "msg", and "data". The "code" key holds the value "100018", the "msg" key holds the message "破损上架数量不可大于到货破损数量" (which translates to "The damaged shelf quantity cannot be greater than the damaged quantity on arrival" in English), and the "data" key is set to None. Finally, the Function returns this dictionary.

**Note**: This Function is designed to handle a specific error scenario related to damaged quantities in a warehouse management system. The error message is in Chinese, so it might need to be translated for non-Chinese-speaking users.

**Output Example**: 
{"code": "100018", "msg": "The damaged shelf quantity cannot be greater than the damaged quantity on arrival", "data": None}
***
### FunctionDef wms_po_qty_all_up_more
**wms_po_qty_all_up_more**: The function of wms_po_qty_all_up_more is to define a dictionary containing error code, message, and data related to exceeding the quantity to be placed on shelves.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_po_qty_all_up_more function creates a dictionary named wms_po_qty_all_up_more with three key-value pairs:
- "code": "100019"
- "msg": "上架数量不可大于待上架数量"
- "data": None

The "code" key holds the error code, "msg" key contains the error message indicating that the quantity to be placed on shelves cannot exceed the pending quantity, and the "data" key is set to None.

**Note**: This function is a simple utility function that defines a specific error message related to exceeding the quantity to be placed on shelves. It does not perform any complex operations and is intended to be used for error handling in the context of inventory management systems.

**Output Example**: 
{"code": "100019", "msg": "上架数量不可大于待上架数量", "data": None}
***
### FunctionDef wms_so_picked_more
**wms_so_picked_more**: The function of wms_so_picked_more is to define a dictionary containing a specific error code, message, and data, and then return this dictionary.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_so_picked_more function creates a dictionary named wms_so_picked_more with three key-value pairs:
- "code": "100020"
- "msg": "实际拣货数量不可以大于需要拣货数量" (which translates to "Actual picking quantity cannot be greater than the required picking quantity")
- "data": None

After defining the dictionary, the function returns this dictionary.

**Note**: This function is designed to handle a specific error scenario related to picking quantities in a warehouse management system.

**Output Example**: 
{"code": "100020", "msg": "实际拣货数量不可以大于需要拣货数量", "data": None}
***
### FunctionDef wms_dongtai
**wms_dongtai**: The function of wms_dongtai is to create a dictionary containing a success message for dynamic publication.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_dongtai function initializes a dictionary named wms_dongtai with keys "code", "msg", and "data". The "code" key is set to "200", indicating a successful operation. The "msg" key is set to "动态发布成功", which translates to "Dynamic publication successful". The "data" key is set to None. Finally, the function returns the wms_dongtai dictionary.

**Note**: This function is a simple utility function that generates a predefined success message for dynamic publication. It does not require any input parameters and always returns the same dictionary structure with a success message.

**Output Example**: 
{"code": "200", "msg": "动态发布成功", "data": None}
***
### FunctionDef wms_capcha
**wms_capcha**: The function of wms_capcha is to return a dictionary containing a specific error code, message, and data.

**parameters**: 
This Function does not take any parameters.

**Code Description**: 
The wms_capcha function creates a dictionary named wms_capcha with the keys "code", "msg", and "data". The "code" key is set to "100080", the "msg" key is set to "刷新过快，请稍后再刷新验证码" (which translates to "Refresh too fast, please refresh the captcha later" in English), and the "data" key is set to None. Finally, the function returns the wms_capcha dictionary.

**Note**: 
This function is a simple utility function that generates a predefined error message in the form of a dictionary. It does not require any input parameters and always returns the same error message structure.

**Output Example**: 
{"code": "100080", "msg": "刷新过快，请稍后再刷新验证码", "data": None}
***
### FunctionDef wms_capcha_l
**wms_capcha_l**: The function of wms_capcha_l is to define a dictionary containing a specific error code, message, and data.

**parameters**: This Function does not take any parameters.

**Code Description**: The wms_capcha_l function creates a dictionary named wms_capcha_l with the following key-value pairs:
- "code": "100081"
- "msg": "验证码超时"
- "data": None

The "code" key holds the error code "100081", the "msg" key contains the message "验证码超时" which translates to "Verification code timeout", and the "data" key is set to None.

**Note**: This function is a simple utility function that defines a specific error response in the form of a dictionary. It does not require any input parameters and always returns the same predefined dictionary.

**Output Example**: 
{"code": "100081", "msg": "验证码超时", "data": None}
***
### FunctionDef wms_capcha_n
**wms_capcha_n**: The function of wms_capcha_n is to return a dictionary containing a specific error code, message, and data.

**parameters**: 
This Function does not take any parameters.

**Code Description**: 
The wms_capcha_n function creates a dictionary named wms_capcha_n with the keys "code", "msg", and "data". The "code" key has a value of "100082", the "msg" key has a value of "验证码不存在" (which translates to "Verification code does not exist" in English), and the "data" key has a value of None. The function then returns this dictionary.

**Note**: 
This function is designed to provide a predefined error response related to the non-existence of a verification code. It does not require any input parameters and always returns the same error message structure.

**Output Example**: 
{"code": "100082", "msg": "验证码不存在", "data": None}
***
