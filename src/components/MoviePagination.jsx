import { Pagination } from '@mui/material'
import React from 'react'

export const MoviePagination = ({totalPage , setPage}) => {
    const handleChangePagination = (a , b ) => {
        setPage(b)
    }
  return (
    <div>
        <div className='py-[50px] flex justify-center '>
                <Pagination onChange={handleChangePagination} count={totalPage} showFirstButton showLastButton />
            </div>
    </div>
  )
}
