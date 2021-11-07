import React, { useState, useEffect } from 'react';
import Dataset from '../../dataset';
import Table from '../../components/Table/Table';

const Root = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...Dataset])
  }, [])

  return (                                                                                                                                                             
   <>
      <Table data={data}/>
   </>
  )

}

export default Root;
