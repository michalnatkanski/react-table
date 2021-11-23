* **Tabs** – Tabs are generated automatically based on `$.type` property available within collection provided in `dataset.json` file. Once one of tabs is clicked, the table present applications only from a selected category. Active choice is highlighted, the first tab is selected by default.

* **Sections** – Each tab have list 2 sections behaving just as collapsible accordions:

  * **Mature Applications** – this section lists applications with `$.version` property matching  `>=1.0.0` pattern.
  * **Beta Applications** – this section lists applications with `$.version` properties matching  `<1.0.0` pattern.

* **Table** – Each section contains a table which exposes the following columns:

  * Application Name linked to `$.app`,
  * Author linked to `$.author.name` and
  * Version linked to `$.version`.


## How to start

open terminal and run - 
1. npm install
2. npm install node-sass (on macbook m1 core node sass is require in 4.14.1 version - npm install node-sass@4.14.1 )
3. npm start

note: the table screenshot is available in the public folder. /table_view.png