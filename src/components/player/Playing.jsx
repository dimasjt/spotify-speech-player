import React, { Component } from 'react';
import reactCSS from 'reactcss';
import { Image, Clearfix } from 'react-bootstrap';

const styles = reactCSS({
  'default': {
    cover: {
      width: '80px',
      float: 'left',
      border: '1px solid #ccc',
    },
    caption: {
      float: 'left',
      marginLeft: '20px',
    },
  },
});

export default class Playing extends Component {
  render() {
    const image = "http://erpimgs.idealhere.com/ImageFormal/f6/c8/d1/f6c8d14b-6cbe-4147-b317-106163155b83/heads/18b37c22-e5cb-4440-af21-61831c080843.jpg";

    return (
      <div>
        <div style={styles.cover}>
          <Image src={image} rounded responsive />
        </div>
        <div style={styles.caption}>
          <h4>track name</h4>
          <div>track name</div>
        </div>

        <Clearfix />
      </div>
    );
  }
};
