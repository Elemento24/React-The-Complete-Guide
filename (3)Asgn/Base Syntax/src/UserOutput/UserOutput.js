import React from 'react';

const UserOutput = props => {
  const style = {
    fontSize: '4rem',
    color: 'green',
    fontWeight: '100',
    textAlign: 'center'
  }

  return (
    <div className="userOutput" style={{ textAlign: 'center' }}>
      <h1 style={style}>{props.username}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nihil voluptates molestiae corrupti autem. Soluta et rem quam tempore! Eveniet aut quas magni culpa modi sunt quasi pariatur similique dolor!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nam laborum, labore neque consequuntur nesciunt, omnis obcaecati dolor dicta incidunt fuga error tempore iste vel. Deleniti iste perferendis sunt. At.</p>
    </div >
  )
}

export default UserOutput;