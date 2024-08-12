## ClassDef Migration
**Migration**: The function of Migration is to define and execute database schema changes for the application.

**attributes**: 
- initial: A boolean attribute indicating if this migration is the initial one.
- dependencies: A list of dependencies for this migration.
- operations: A list of database operations to be applied during this migration.

**Code Description**: 
The `Migration` class inherits from `migrations.Migration` and contains attributes such as `initial`, `dependencies`, and `operations`. The `operations` attribute consists of two `migrations.CreateModel` operations, each defining a new model (`AsnDetailModel` and `AsnListModel`) with specific fields, options, and verbose names. These models include various fields such as `asn_code`, `asn_status`, `supplier`, `goods_code`, `goods_desc`, `goods_qty`, and more, along with options like `verbose_name`, `db_table`, and `ordering`. The models also have fields for timestamps like `create_time` and `update_time`, along with a boolean field `is_delete` for soft deletion. 

**Note**: 
Developers can customize the models and fields according to their application requirements by modifying the `operations` attribute in the `Migration` class. It is essential to understand the database schema changes being applied through each migration to avoid unintended consequences on the application's data structure.
