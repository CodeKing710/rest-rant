# REST-rant

Application for reviewing restaurants.

***

Available Routes:

| Method | Route | Purpose |
| --- | --- | --- |
| GET | / | Home page |
| GET | /places | Places home page |
| POST | /places | Creates new place |
| GET | /places/new | Page for adding new places |
| GET | /places/:id | Grabs specific place in detail |
| PUT | /places/:id | Updates specific place info |
| GET | /places/:id/edit | Page for editing existing places |
| DELETE | /places/:id | Removes specific place |
| POST | /places/:id/rant | Creates comment about specific place |
| DELETE | /places/:id/rant/:rId | Deletes specific comment about specific place |
| --- | --- | --- |
| GET | * | All 404 pages |

***

Places Structure:
name<string>
city<string>
state<string>
food<string>
pic<string>