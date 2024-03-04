import '../css/talkLog.scss';


const TalkLog = ({ talklog }) => {
  return(
    <>
      <div className='line_container'>
        <div className='line_contents scroll'>
          {/* 全会話記録 */}
          {talklog.map((item) => (
            item.who === 'elder' ? (
              <div className='line_left'>
                <div className='text'>{item.message_text}</div>
                <span className='date'></span>
              </div>
            ) : (
              <div className='line_right'>
                <div className='text'>{item.message_text}</div>
                <span className='date'>
                  {/* ok <br/> */}
                  {/* <span>{item.message_timestamp}</span> */}
                </span>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  )
}

export default TalkLog;