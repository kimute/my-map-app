# Frontend side project

Abuot this App..
This App. shows my Trace sequentially where I lived and where I went.

Making responsive Wep-App follwoing Guideline

- Add MapBox
- create a new project with Typescript
  - make Typescript interfaces
- create a JavaScript object data (any Data about me)
- add previous/next buttons to step through the destinations
- sort the list by time or alphabetically
- show only the data based on selected types

## Feature of APP.

PC

<img width="200" alt="pc-ver" src="https://user-images.githubusercontent.com/51284158/190891111-02b6e94b-f93c-428b-8b39-bb850f74d8c5.png">

Mobile

<img width="141" alt="m-ver" src="https://user-images.githubusercontent.com/51284158/190891181-20b961e5-d6ce-4fff-8e5c-b20975b53270.png">

## Stack

<div style="display:flex">
<img alt="Nextjs" src ="https://img.shields.io/badge/NextJS-v12.3.0-000000.svg?&style=for-the-badge&logo=Nextjs&logoColor=000000"/>
<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-v4.8.3-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=3178C6"/>
<img alt="Tailwind CSS" src ="https://img.shields.io/badge/TailWindCSS-v3.1.8-06B6D4.svg?&style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4"/>
<img alt="jest" src ="https://img.shields.io/badge/Jest-v28.1.2-C21325.svg?&style=for-the-badge&logo=Jest&logoColor=C21325"/></div>
react-map-gl(for using MapBox)

## Getting started

```sh
cd my-map-app && npm i
```

## Running tests

```sh
cd my-map-app && npm run test
```

## What I did

Page:

\*all pages work responsive

- Index page

  - show all of My trace in word map
  - click Items (country)
    - show the details of my trace in selected country

- Detail page:
  - prev , next button are activated in Mobil screen
    - show details of the places where I lived, traveled and studied
  - click Marker
    - show the Image of selected place

Components:

- fetch API

  - fetch Mock API(JSON file: public/myList.json)
  - components/api/
    - requestAPI.js , fetchData.js

- MapBox.tsx

  - rendering map & fetched data
  - reusable

- MapBox.tsx

  - reusable

- uitls

  - sort, filtering functions
  - reusable

Hooks:

- useEffect
- useState
- useRecoilState, useSetRecoilState (for Recoil)

Test:

- Jest

  ```sh
  PASS  test/component.test.tsx
  <Button/>
    ✓ it should be rendering with props (22 ms)
    ✓ it should be deactivated (4 ms)
  <MapBox/>
    ✓ it shoudld be renders without crashing (152 ms)

  Test Suites: 1 passed, 1 total
  Tests:       3 passed, 3 total
  Snapshots:   0 total
  Time:        2.132 s
  Ran all test suites.
  ```

## How it works.

Map shows the whole place where I've been

Click the country & you can see details of my history in that country.

<img width="400" alt="guide-1" src="https://user-images.githubusercontent.com/51284158/190891318-98b08d23-787d-4989-a5a0-9d366004a08b.png">

Prev/ Next Button are visible in mobile screen.

you can click Marker to see the specific Info. of the Place in detail page.

<img width="200" alt="guide-4" src="https://user-images.githubusercontent.com/51284158/190891215-49ae94aa-56d0-4cd9-a14d-272c60898df9.png">

<img width="400" alt="guide-2" src="https://user-images.githubusercontent.com/51284158/190891209-e9e81430-dd48-4ade-a8a1-5f275afa3cee.png">

<img width="400" alt="guide-3" src="https://user-images.githubusercontent.com/51284158/190891214-f87835e2-1664-4ee4-a32f-fd0531ee9795.png">
