// import '../css/talkLog.scss';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// color
const titleColor = '#273246'; //タイトル背景色
const baseColor = '#ffffff'; // 背景色
const myTextColor = '#00d9ff'; // 吹き出しの色（自分）
const elderTextColor = '#ffaa00'; // 吹き出しの色（相手）

const lineContainer = css`
  padding: 0;
  //background: ${baseColor};
  overflow: hidden;
  //max-width: 400px;
  margin: 50px;
  font-size: 80%;
  width: 80%;
`;

const lineContents = css`
  padding: 10px;
  overflow: hidden;
  width: 100%;
  height: 80%;
  //line-height: 135%;

  &.scroll {
    height: 100%;
    overflow-y: scroll;
  }
`;

const lineLeft = css`
  position: relative;
  display: block;
  margin: 5px 0;
  max-width: 100%;
  float: left;
  margin-right: 15px;
  clear: both;
`;

const lineRight = css`
  position: relative;
  display: block;
  margin: 5px 0;
  max-width: 90%;
  float: right;
  margin-right: 15px;
  clear: both;
`;

const lineText = css`
  margin: 0;
  position: relative;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 20px;
`;

const elderText = css`
  background-color: ${elderTextColor};

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    left: -10px;
    top: 10px;
    margin-top: -4px;
    border-right: 15px solid ${elderTextColor};
    border-top: 7.5px solid transparent;
    border-bottom: 7.5px solid transparent;
  }
`;

const myText = css`
  background-color: ${myTextColor};

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    right: -10px;
    top: 10px;
    margin-top: -4px;
    margin-right: 0px;
    border-left: 15px solid ${myTextColor};
    border-top: 7.5px solid transparent;
    border-bottom: 7.5px solid transparent;
  }
`;

const lineDate = css`
  content: '';
  position: absolute;
  display: block;
  width: 100px;
  text-align: right;
  left: -30px;
  bottom: 0px;
  font-size: 80%;
  color: #ffffff;
`;


const TalkLog = ({ talklog, speaker }) => {
  return (
    <>
      <div className='line_container' css={lineContainer}>
        <div className='line_contents scroll' css={lineContents}>
          {/* 全会話記録 */}
          {talklog.map((item) => (
            item.who !== speaker ? (
              <div className='line_left' css={lineLeft}>
                <div className='text' css={[lineText, elderText]}>{item.message_text}</div>
                <span className='date' css={lineDate}></span>
              </div>
            ) : (
              <div className='line_right' css={lineRight}>
                <div className='text' css={[lineText, myText]}>{item.message_text}</div>
                <span className='date' css={lineDate}>
                  {/* ok <br/> */}
                  {/* <span>{item.message_timestamp}</span> */}
                </span>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default TalkLog;