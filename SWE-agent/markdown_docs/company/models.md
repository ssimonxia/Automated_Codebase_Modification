## ClassDef ListModel
**ListModel**: The function of ListModel is to define a model for storing company information.

**attributes**: 
- company_name: a CharField to store the name of the company.
- company_city: a CharField to store the city where the company is located.
- company_address: a CharField to store the address of the company.
- company_contact: a CharField to store the contact information of the company.
- company_manager: a CharField to store the name of the company manager.
- creater: a CharField to store the creator of the company entry.
- openid: a CharField to store the Openid associated with the company.
- is_delete: a BooleanField to label if the company entry is deleted.
- create_time: a DateTimeField to store the timestamp of when the company entry was created.
- update_time: a DateTimeField to store the timestamp of when the company entry was last updated.

**Code Description**: 
The ListModel class defines a model for storing company details such as name, city, address, contact information, manager, creator, Openid, deletion status, creation time, and update time. It inherits from the models.Model class provided by Django. The Meta class within ListModel specifies metadata including the database table name, verbose name, verbose name plural, and default ordering based on the company name.

**Note**: 
Developers can use this ListModel class to create instances representing company information in the database. The class provides fields to store various details about a company and includes metadata for customization such as verbose names and ordering.
### ClassDef Meta
**Meta**: The function of Meta is to define metadata options for the ListModel class.

**attributes**:
- db_table: 'company'
- verbose_name: 'Company'
- verbose_name_plural: "Company"
- ordering: ['company_name']

**Code Description**:
The Meta class within the ListModel class in models.py file of the company module is used to specify metadata options for the ListModel class. 
- The `db_table` attribute is set to 'company', indicating the database table name to be used for this model.
- The `verbose_name` attribute is set to 'Company', providing a human-readable name for the model.
- The `verbose_name_plural` attribute is set to "Company", specifying the plural name for the model.
- The `ordering` attribute is set to ['company_name'], defining the default ordering of records based on the 'company_name' field.

**Note**:
Developers can customize these metadata options according to their specific requirements by modifying the attributes within the Meta class.
***
