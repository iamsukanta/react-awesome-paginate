# react-awesome-paginate
React awesome paginate is a modern, typescript based pagination component. You can use it in your project.

[![NPM](https://nodei.co/npm/react-awesome-paginate.svg?color=red)](https://nodei.co/npm/react-awesome-paginate/)

# Installation

Install `react-awesome-paginate` with [npm](https://www.npmjs.com/package/react-awesome-paginate):

```
npm i react-awesome-paginate --save
```
## Preview
![Pagination preview](img/sample-pagination.png)

# Import and Usage rule in your component

```
import Pagination from 'react-awesome-paginate'; // Import npm module
import 'react-awesome-paginate/dist/index.css'; // Import CSS (You can override)


// In your page
<Pagination
    currentPage=1
    totalPages=20
    onPageChange={(pageNo: number) => console.log(pageNo)}
/>
```

# Detail Usage

```
import React, { useState } from "React";
import Pagination from 'react-awesome-paginate';

// For CSS Styling, you have to import this below file (You can override, if you want.)

import 'react-awesome-paginate/dist/index.css';

const ExampleComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const handlePageChange = (pageNo) => {
        if(pageNo === currentPage)
            return;

        // API Call && Set current page 
    }

    return (
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(pageNo: number) => handlePageChange(pageNo)}
        />
    )
}

export default ExampleComponent;

```

## Props

| Name     | Type     | Status   | Description |
|----------|----------|----------|----------|
| `currentPage`| Number | Required | `currentPage` number. Default value 1 |
| `totalPages`| Number | Required | `totalPages` number. Default value 1 |


## Events

| Name     | Type     | Status   | Description |
|----------|----------|----------|----------|
| `onPageChange`| Function | Required | `onPageChange` is a Function. When event is triggerd it gives triggered page no. as a argument. |
