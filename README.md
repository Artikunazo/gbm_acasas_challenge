# GBM Challenge
by Arturo Casas


## Piece of Cake challenge

### Libraries
- Highcharts 3.0
- Bootstrap 5.1
- date-fns 2.28

### Description

Create a website that consumes a service which
provides the history of the IPC indicator (Índice de
Precios y Cotizaciones) and displays the values
obtained on a graph.

### Details

The route challenge is /challenges/piece-of-cake
Taking into consideration an element from the API https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e
an IIpc interface was created. That API contains IPC information like:
- date
- price
- percentageChange
- volume
- change

When piece-of-cake start, it will fire the event for get data from the API using two services with HttpClient service of Angular injected:
ipc.service and connector.service. The first service use getIpcData() for call to mGet(urlApi) method alocated in connector.service,
ipc.service return an Observable with the data getted from the API.
Before to send the data to the main.component, the responsable service will clean the duplicates records to show chart more friendly.

The data getted is assigned to chartData variable of the main.component and to same time,
chartData variable is binding in show-chart.component (it's a child component of the main.component),
show-chart.component will initialize configuration and render the Chart showing the results from the API.

The chart have:
- In X Axis will show the time
- In Y Axis will show the price.
- The chart type is areaspline.
  
End of Pice Of cake Challenge.

## Let's Rock challenge

### Libraries
- Bootstrap 5.1

### Description
Create an authentication page for the level 1 website

### Details
The route challenge is /challenges/lets-rock

Taking into consideration an element from the API https://run.mocky.io/v3/2848846d-2d41-4b8a-a98c-bf34a225b4d2
an IUser interface was created. That API contains users fake information for login: 
- username
- password
- role

When lets-rock start, it will show the login form with username and password fields.
At the moment that login button is clicked, it will show a loading spinner while the request is being processed.
   * If the request is successful, the user info is saved in session storage and it will redirect to /challenges/lets-rock/dashboard page
   * If the request is not successful, the login page will show 'Username or password incorrect as error message
   * After 3 falied attempts login, it will show 'You have exceeded the maximum number of login attempts' as error message

In the lets-rock/dashboard, it will display the user info as: username and role.
And a logout button is displayed as well. When this button is clicked, the component clean the session storage
and redirect to /challenges/lets-rock.
Login and dashboard components validate if the session storage is setted, 
In login case, if user info is setted, it will redirect to challenges/lets-rock/dashboard
In dashboard case, if user info is not setted, it will redirect to /challenges/lets-rock/

End of Let's Rock Challenge.


Note: This project was generated with [Angular CLI] version 13.3.0.


Regards!
=^._.^=
