## ClassDef Migration
**Migration**: The function of Migration is to handle database schema changes and data migrations in Django.

**attributes**: 
- initial: A boolean attribute indicating if this migration is the initial one.
- dependencies: A list of dependencies for this migration.
- operations: A list of database operations to be applied in this migration.

**Code Description**:
The `Migration` class inherits from `migrations.Migration` in Django and contains attributes to manage database migrations. It includes a list of operations to create models (`DispatchListModel` and `ListModel`) with specific fields and options for each model.

**Note**: When using the `Migration` class, ensure that the dependencies are correctly defined to manage the order of migrations. Review the operations carefully to understand the database changes that will be applied during the migration process.
