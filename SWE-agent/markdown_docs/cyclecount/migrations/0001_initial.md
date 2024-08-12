## ClassDef Migration
**Migration**: The function of Migration is to define the database schema changes for the migration process.

**attributes**: 
- initial: A boolean attribute indicating if this is the initial migration.
- dependencies: A list of dependencies for this migration.
- operations: A list of database schema operations to be applied during the migration.

**Code Description**:
The `Migration` class inherits from `migrations.Migration` and contains the schema operations for creating three different models: `CyclecountModeDayModel`, `ManualCyclecountModeModel`, and `QTYRecorder`. Each model defines a set of fields with specific data types and options such as verbose names, default values, and ordering. These models are used to represent different aspects of cycle counting and quantity recording in a database.

**Note**: When using the `Migration` class, ensure that the dependencies are correctly defined to manage the order of migrations. Pay attention to the attributes and options of the models being created to ensure the database schema is accurately represented.
