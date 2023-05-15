
function JobCard(props) {

  const duties = props.duties;
  const dutyList = duties.map((duty) => 
    <li>{duty}</li>
   );


  return (
    <>
      <div style={{ flexDirection: 'column', maxWidth: '60vw' }}>

        <div style={{ flexDirection: 'row' }}>
          <div style={{ flexDirection: 'column', paddingBottom: '10px' }}>
            <h1> {props.jobTitle}</h1>
            <p> {props.datesWorked} </p>
          </div>
          <div style={{ flexDirection: 'column', marginLeft: 'auto', width: '300px' }} >
            <p className="companyName"> {props.companyName}</p>
            <div style={{ flexWrap: 'wrap' }}>
              <p style={{ fontSize: '14px' }}> <em>{props.companyDescription}</em> </p>
            </div>
          </div>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <p> {props.summary} </p>
          <ul> { dutyList } </ul>
        </div>

      </div>


    </>

  );

}

export default JobCard;