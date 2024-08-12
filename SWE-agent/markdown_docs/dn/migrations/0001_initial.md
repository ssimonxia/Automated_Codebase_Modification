## ClassDef Migration
**Migration**: The function of Migration is to define a migration operation that creates three different models: DnDetailModel, DnListModel, and PickingListModel.

**attributes**: 
- initial: A boolean attribute set to True.
- dependencies: An empty list of dependencies.
- operations: A list of migration operations to create models.

**Code Description**:
The Migration class inherits from migrations.Migration and defines the initial attribute as True. It contains a list of dependencies that is initially empty. The operations attribute holds a list of migrations to create three models: DnDetailModel, DnListModel, and PickingListModel. Each model is created using migrations.CreateModel with specific fields, options, and verbose names to define the database schema for each model.

**Note**: Ensure to review and customize the fields, options, and verbose names of the models according to the specific requirements of the project.
