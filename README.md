# query-string-generator

## Install Dependencies
```
yarn install
```

## Build And Serve The App
```
yarn serve
```

## Start App
- Open up browser
- Go to http://localhost:8080/

## Play with The App
- There are four tabs in the app for user inputs
- Query strings are generated on top of the page
- To begin with, default options will be loaded
- In each tab, after clicking on the `save` button, the setting for the current tab would be synced to global store and trigger update on the generated query string

## Acceptance Criteria
```
Mr Little Z has multiple spaceships in his spaceport, and he finds it hard to keep track of them. He would like to build a web application to help him find the best spaceship for the job each day.

Each spaceship has multiple attributes: color, maximum speed, and date of manufacture. Some spaceships are also equipped with a pulse-laser.

For maximum efficiency, Mr Little Z would like to be able to filter his spaceships by these features.

Build a filtering application that will generate a query string that fulfills Mr Little Z’s selected filters. Imagine that this query string will be sent to an API, which will return a list of spaceships. Updating the filters should update the query string. Please note that you are not expected to return any data: the final product will be the filter UI and a generated query string.

Colors
There are a fixed number of colors to choose from. Mr Little Z needs to be able to choose multiple color options:
	•	All the selected colors
	•	Any of the selected colors
	•	None of the selected colors

Maximum speed
Maximum speed is an integer between 50 and 200. Mr Little Z needs to be able to choose:
	•	Less than
	•	More than
	•	Exactly

Date of manufacture
Mr Little Z’s spaceships have been made between 1980 and 2020. Mr Little Z should be able to select dates:
	•	After
	•	Before
	•	On the exact date

Pulse-Laser
Mr Little Z would like to choose between
	•	Has pulse laser
	•	Does not have pulse laser
```


