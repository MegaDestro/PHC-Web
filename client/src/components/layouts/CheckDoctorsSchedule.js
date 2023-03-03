import React, { useContext, useEffect, useState } from "react";

import GlobalContext from "../../context/global/GlobalContext";

const CheckDoctorsSchedule = () => {
  const globalContext = useContext(GlobalContext);
  const { getSchedule, schedule } = globalContext;
  const [data, setData] = useState(null);
  const d=new Date().getDay();
  const[day, setDay] = useState(d-1);
  useEffect(() => {
    const fetchData = async () => {
      await getSchedule();
      setData(schedule);
    };
    fetchData();
    setDay(day)
  }, [day]);
  return (
    <div className="container mt-4">
          <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
            <a class={`nav-link ${day===0?'active':''}`} aria-current={day===0? 'true': 'false'} href="#" onClick={() => setDay(0)}>Monday</a>
            </li>
           <li class="nav-item">
           <a class={`nav-link ${day===1?'active':''}`} aria-current={day===1? 'true': 'false'} href="#" onClick={() => setDay(1)}>Tuesday</a>
           </li>
            <li class="nav-item">
            <a class={`nav-link ${day===2?'active':''}`} aria-current={day===2? 'true': 'false'} href="#" onClick={() => setDay(2)}>Wednesday</a>
            </li>
            <li class="nav-item">
            <a class={`nav-link ${day===3?'active':''}`} aria-current={day===3? 'true': 'false'} href="#" onClick={() => setDay(3)}>Thursday</a>
            </li>
            <li class="nav-item">
            <a class={`nav-link ${day===4?'active':''}`} aria-current={day===4? 'true': 'false'} href="#" onClick={() => setDay(4)}>Friday</a>
            </li>
            <li class="nav-item">
            <a class={`nav-link ${day===5?'active':''}`} aria-current={day===5? 'true': 'false'} href="#" onClick={() => setDay(5)}>Saturday</a>
            </li>
            <li class="nav-item">
            <a class={`nav-link ${day===6?'active':''}`} aria-current={day===6? 'true': 'false'} href="#" onClick={() => setDay(6)}>Sunday</a>
            </li>
          
          </ul>
        </div>
        <div class="card-body">
        <table
        class='table my-3 text-center'
        style={{ width: "80%", margin: "auto" }}
        >
          <thead class='table-dark'>
            <tr>
              <th scope='col'>S.No</th>
              <th scope='col'>Name</th>
              <th scope='col'>Suffix</th>
              <th scope='col'>Arrival Time</th>
              <th scope='col'>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {data ? data.map((item, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.degree}</td>
                  <td>{item.timing[day][0]}</td>
                  <td>{item.timing[day][1]}</td>
                </tr>
              );
            }) : null}
          </tbody>
      </table>
        </div>
      </div>
    </div>
  );
};

export default CheckDoctorsSchedule;
