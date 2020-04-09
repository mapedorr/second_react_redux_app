import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home_page'>
        <h1>
          Welcome to <span className='superweb'>SuperWeb</span>
          <span className='version'>V0.1.0</span>
        </h1>
        <p>
          I made this site for practicing React, React-Redux, Redux-Thunk, React
          Hooks and CSS Grid.
        </p>
        <p>It all started because (two courses of) Wes Bos.</p>
        <hr />
        <p>Just click on things... the site is full of placeholders...</p>
        <br />
        <p>
          \(@^0^@)/ and <span className='love c_r'>love</span> \(@^0^@)/
        </p>
        <div className='can_do'>
          <h2 className='title'>
            Things you can do in <span className='superweb'>SuperWeb</span>
          </h2>
          <h3 className='col_title'>POSTS</h3>
          <h3 className='col_title'>ALBUMS</h3>
          <h3 className='col_title'>TODOS</h3>
          <p className='col_desc'>
            > Wait the data to load
            <br />
            > wait the comments to load
            <br />
            that's all
            <br/>
          </p>
          <p className='col_desc'>
            > Wait the data to load,
            <br />
            > click on any album to open it
            <br />> click on any image to open it
          </p>
          <p className='col_desc'>
            > Wait the data to load,
            <br />
            ...that's all
            <br />
            (T_T)
          </p>
          <span className="extra">
          &#9658; you can read if you want, but is mere lorem ipsum &#9668;
          </span>
        </div>
      </div>
    );
  }
}
