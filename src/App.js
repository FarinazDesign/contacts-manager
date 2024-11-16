import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Navbar,
  Contact,
  Cantacts,
  AddContact,
  ViewContact,
  Spiner,
  SearchContact,
  EditContact,
} from "./components";
import axios from "axios";
import https from "./utils/https";

const App = () => {
  const [getCantacts, setCantacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getGroup, setGroup] = useState([]);

     const handleGetContacts = async () => {
    try {
      const { data } = await https.get("/category");
      console.log(data)
      if (data.success == true) {

        await setCantacts(data?.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // const fetchData=async()=>{
    //     try{
    //         setLoading(true);
    //         const  {data:contactData} = await axios.get("https://api.tiademco.com/api/v1/product");
    //         if(contactData.success == true){
    //             console.log(contactData);
    //           await  setCantacts(contactData?.data?.data);
    //         }

    //         setLoading(false);
    //   }catch(err){
    //         console.log(err.message);
    //         setLoading(false);
    //   }}
    //   fetchData()
    handleGetContacts();
  }, []);

  //   useEffect(()=>{
  //     console.log("results : ",getCantacts)
  //   },[getCantacts])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/Contacts" />} />
        <Route
          path="/contacts"
          element={<Cantacts setCantacts={setCantacts} contacts={getCantacts} load={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;
