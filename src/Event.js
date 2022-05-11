import moment from "moment";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Event.css";
import 'moment/locale/fr';
import 'moment/locale/es';

function Event() {
  const [event, setEvent] = useState({});
  const [language, setLanguage] = useState("")
  const param = useParams();
  console.log(param.id, "< ===param");

  useEffect(() => {
    fetch(`https://api.viayendo.com/v1/event/${param.id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "Accept-Version": "1.0.0",
        "Accept-Language": "en",
        "The-Timezone-IANA": "Europe/Amsterdam",
        "X-App-Key": "TSj4qVwJ.KNZ6QCOzkeoNAThulXnbGXwSUWjZU1FC",
      },
    })
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((err) => console.log(err));
  }, []);
  let date = (event.start_date);
  let date1 = new Date(date);
  console.log(date1);

  useEffect(() => {
    const lang = navigator['userLanguage'] || navigator.language;
    setLanguage(lang); 
    console.log("lang", lang)
    moment.locale(lang);
  }, []);
  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let parsedDate = capitalizar(moment(date).format('dddd, DD-MM-YYYY HH:mm '))



  return (
    <div className="events">
      <div className="event">
        <img src={event.image} alt="Imagen" />
        <h1 className="event_title">{event.title}</h1>
        <h2 className="event_time">{parsedDate}H</h2>
        <h3 className="event_description">{event.description}</h3>
      </div>
    </div>
  );
}

export default Event;
