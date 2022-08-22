function Quotes(props) {
  const style={
    // backgroundColor: 'rgb(41, 40, 40)',
    height:'75vh',
    width:'100vw',
    color:'rgb(41, 40, 40)',
    marginTop:'-5%',
    fontSize:'1.2rem',
    display:'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div style={style}>
      <h1>Personal Quotes:</h1>
      <i>"{props.content}"</i>
    </div>
  );
}

export default Quotes;