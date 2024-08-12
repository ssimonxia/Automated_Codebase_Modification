# Task to do 
Add “Superpower” to driver’s database only for driverlist without updating the website layout
## Backend Directory

- **Main tools used**: Django

### GreaterWMS
- `setting.py`: Settings of the backend projects.
- `urls.py`: Paths of applications.
- `views.py`: Connect to the frontend.

### Backend Applications
- **Modules**: staff, userprofile, userregister, userln, company, supplier, ans, dn, binset, binsize, binproperty, customer, capital, cyclecount, dashboard, warehouse, goods, goodsunit, goodsclass, goodscolor, goodsbrand, goodsshape, goodsspecs, goodsorigin, payment, driver, stock, throttle, uploadfile, scanner.
  - `admin.py`: Allow to register database models so it can be viewed on admin panel.
  - `apps.py`: Name of application that is used in project settings.
  - `files.py`: Contains data header format to store.
  - `filter.py`: Define types of data to accept for each data header.
  - `models.py`: Place dataset model.
  - `serializers.py`: Types of actions done for dataset.
  - `tests.py`: Test cases.
  - `urls.py`: Place different URL routes and connect them to `views.py`.
  - `views.py`: Create different views and routes we can access on the website. Connect actions with database.
  - **Optional file**:
    - `page.py`: Defines some functions for additional actions on database.

## Other Directory

- **app**: Frontend tests (no need to worry about).
- **log**: Server running log.
- **media**: No need to worry about.
- **static**: Images for the website.
- **static_new**: Images for the website.
- **util**: Utility functions.

> Note: We do not need to worry about files that are not mentioned here.
