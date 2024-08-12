## ClassDef Migration
**Migration**: The function of Migration is to define the database schema changes for the stock application.

**attributes**: 
- initial: A boolean attribute indicating if this migration is the initial one.
- dependencies: A list of dependencies for the migration.
- operations: A list of database operations to be applied during the migration.

**Code Description**:
The Migration class defines a database migration for the stock application. It inherits from migrations.Migration and contains attributes such as initial, dependencies, and operations. The initial attribute is set to True, indicating that this is the initial migration for the application. The dependencies attribute is an empty list, signifying that there are no dependencies for this migration. The operations attribute is a list of database operations to be executed during the migration. 

Within the operations list, there are two migrations.CreateModel operations. The first operation creates a StockBinModel with various fields such as bin_name, goods_code, goods_desc, goods_qty, pick_qty, picked_qty, bin_size, bin_property, t_code, openid, create_time, and update_time. It also includes options for verbose names, table name, and ordering.

The second operation creates a StockListModel with fields like goods_code, goods_desc, goods_qty, onhand_stock, can_order_stock, ordered_stock, inspect_stock, hold_stock, damage_stock, asn_stock, dn_stock, pre_load_stock, pre_sort_stock, sorted_stock, pick_stock, picked_stock, back_order_stock, supplier, openid, create_time, and update_time. Similar to the first operation, it includes options for verbose names, table name, and ordering.

**Note**: Developers can customize the fields and options of the models being created in the migration operations to suit the requirements of the stock application.
