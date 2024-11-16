import React from "react";
import {CURRENTLINE, PINK} from "../../helpers/colors";
import Contact from "./Contact";
import {noUser} from "../../assets/no-found.gif";
import Spiner from "../Spiner";


const Cantacts = ({contacts, load, setCantacts}) => {
    console.log(contacts ,"dsgsdg")
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2" />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {load?<>
         <Spiner/>
            </>:
            <section className="container">
                <div className="row">

                        {contacts.length >  0 ? contacts.map(c=>(
                            <Contact key={c.id} contact={c} setCantacts={setCantacts} />
                        )):
                            (
                            <div className="text-center py-5" style={{backgroundColor:CURRENTLINE}}>
                                <p className="text-white">مخاطبی یافت نشد ...</p>
                             <img src={require("../../assets/no-found.gif")} alt=".." className="w-25"/>
                            </div>
                        ) }
                </div>
            </section>}
        </>
    )
};

export default Cantacts;