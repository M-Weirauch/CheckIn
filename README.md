# CheckIn

## Definition

We want to create a platform that allows employees/freelancers to improve their collaboration experience.

## Core Functionality

  - See whos around without having to search the whole workplace
  - Meetup for coffee breaks with new People
  - Meetup for Lunch with new People
  - Meetup for discussion about topics that are interesting
  
 ## Prototype Build: Option 1
 
 The Login process has been simplified due to insecurity about mac adress issues. Our Core Features will use a very simple login system.
 It contains the following steps:
 
 ### Steps
 
1. Scan a QR Code
2. A Webpage executes some java script that checks for a cookie
  1. If the cookie exists, it will be matched with a user account in the db
  2. If the cookie does not exist, the user is being displayed a sign up page after that the cookie will be written as persistent
3. The User is now registered as present and will be displayed on the dashboard
4. If the user leaves, he will scan a qr code again and will be marked as non present

### Advantages

Independant of any pre existing infrastructure and therefore easily deployable. 

### Disadvantages

Requires a lot of effort from every member/employee every day (has to scan qr code twice).

## Prototype Build: Option 2

### Steps

1. Connect to the Wifi
2. The Router pushes to an api and provides mac address
3. The API matches MAC-Adresses to user accounts
4. The User will be automatically put on the dashboard and is now present

### Advantages

The User has to put up effort once, to create an account. After that its all automated

### Disadvantages

Its unclear yet, if the devices disconnect from the wifi in a standby mode and how this will affect our application (users should not vanish from the board only because they're inactive).
