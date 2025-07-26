# react-awesome-paginate
React awesome paginate is a modern, typescript based pagination component. You can use it in your project.

[![NPM](https://nodei.co/npm/react-awesome-paginate.svg?color=red)](https://nodei.co/npm/react-awesome-paginate/)

# Installation

> npm i react-awesome-paginate --save

# Usage

```
import React, { useState } from "React";
import Pagination from 'react-awesome-paginate';

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

