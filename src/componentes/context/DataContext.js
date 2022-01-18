import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inicialPrice, setInicialPrice] = useState(0);
  const [total, setTotal] = useState(inicialPrice);
  const [data, setData] = useState([]);
  const [carritoCount, setcarritoCount] = useState(0);
  const [vC1, setC1] = useState(false);
  const [vA1, setA1] = useState(false);
  const [vA2, setA2] = useState(false);
  const [vC2, setC2] = useState(false);
  const [vC3, setC3] = useState(false);
  const [vA3, setA3] = useState(false);
  const [vA4, setA4] = useState(false);
  const [vP1, setP1] = useState(false);
  const [vP2, setP2] = useState(false);
  const [vAN1, setAN1] = useState(false);
  const [vAN2, setAN2] = useState(false);
  const [vC4, setC4] = useState(false);


  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        carritoCount,
        setcarritoCount,
        vC1,
        setC1,
        vA1,
        setA1,
        vA2,
        setA2,
        vC2,
        setC2,
        vC3,
        setC3,
        vA3,
        setA3,
        vA4,
        setA4,
        vP1,
        setP1,
        vP2,
        setP2,
        vAN1,
        setAN1,
        vAN2,
        setAN2,
        vC4,
        setC4,
        total,
        setTotal,
        inicialPrice,
        setInicialPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
