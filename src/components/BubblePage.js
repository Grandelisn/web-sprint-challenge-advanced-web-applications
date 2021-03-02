import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColors = () => axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then(res =>{
      setColorList(res.data);
      console.log('response data in bubble page ', res.data)
    }).catch(err =>{
      console.log('error in bubble page ', err);
    })
  useEffect(() =>{
    getColors();
  }, []);

  return (
    <>
      <ColorList 
        colors={colorList} 
        updateColors={setColorList}
        getColors = {getColors}
      />

      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
