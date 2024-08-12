## ClassDef Migration
**Migration**: The function of Migration is to define a migration operation for creating two models, ListModel and TypeListModel, with their respective fields and options.

**attributes**:
- initial: A boolean attribute set to True.
- dependencies: An empty list indicating no dependencies for the migration.
- operations: A list of migration operations to be executed, including creating ListModel and TypeListModel models.

**Code Description**:
The Migration class inherits from migrations.Migration and defines the migration operations to create two models, ListModel and TypeListModel. 
- ListModel:
    - Fields:
        - id: BigAutoField as the primary key.
        - staff_name: CharField for staff name.
        - staff_type: CharField for staff type.
        - check_code: IntegerField with a default value of 8888.
        - openid: CharField for openid.
        - is_delete: BooleanField with a default value of False.
        - create_time: DateTimeField set to auto_now_add.
        - update_time: DateTimeField set to auto_now with a nullable option.
        - error_check_code_counter: IntegerField with a default value of 0.
        - is_lock: BooleanField with a default value of False.
    - Options:
        - verbose_name: 'Staff'.
        - verbose_name_plural: 'Staff'.
        - db_table: 'staff'.
        - ordering: ['staff_name'].
- TypeListModel:
    - Fields:
        - id: BigAutoField as the primary key.
        - staff_type: CharField for staff type.
        - openid: CharField for openid.
        - creater: CharField for the creator.
        - create_time: DateTimeField set to auto_now_add.
        - update_time: DateTimeField set to auto_now with a nullable option.
    - Options:
        - verbose_name: 'Staff Type'.
        - verbose_name_plural: 'Staff Type'.
        - db_table: 'stafftype'.
        - ordering: ['staff_type'].

**Note**:
- The Migration class is used to define database schema changes and data migrations in Django applications.
- Ensure to review and customize the fields and options according to the specific requirements of the project.
