# Frontend Task

Makig resposive Wep-App follwoing Guideline

- Add MapBox
- create a new project with Typescript
  - make Typescript interfaces
- create a JavaScript object for any data for i wish
- add previous/next buttons to step through the destinations
- sort the list by time or alphabetically
- show only the data based on selected types

## Feature of APP.

PC

<img width="200" alt="full-screen-ver" src="https://user-images.githubusercontent.com/51284158/190865002-f31e5e79-328d-4334-a3cc-16b9ee9e5442.png">

Mobile

<img width="140" alt="mobile-ver" src="https://user-images.githubusercontent.com/51284158/190864981-e2f4a2ef-7bd0-4388-aa5c-3cf29d41b036.png">

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

\*all pages work resposive

- Index page

  - show all of My trace in word map
  - click Items (country)
    - show the details of my trace in selected country

- detail page:
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

<img width="400" alt="guide-1" src="https://user-images.githubusercontent.com/51284158/190865663-e7f38c3c-b5d5-44da-885a-c3d2d7881155.png">

Prev/ Next Button visible in only in mobile screen.

you can click Marker in detail page. you can see Info of that Place.

<img width="200" alt="guide-2" src="https://user-images.githubusercontent.com/51284158/190865670-7836fecd-9244-4c29-8fae-11ed51b84b07.png">

<img width="400" alt="guide-3" src="https://user-images.githubusercontent.com/51284158/190865675-39e82eb4-9d1c-4ac2-82c9-9f288d75e7fb.png">
