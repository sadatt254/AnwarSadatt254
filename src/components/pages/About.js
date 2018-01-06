import React, { Component } from 'react';

import Button from '../partials/Button';
import AvatarCard from '../partials/Avatars';
import PageIdentity from '../partials/PageId';

class About extends Component {
  render() {
    return (
      <div className="about-component app-content">
        <div className="columns">
          <div className="column">
			<PageIdentity />
            <AvatarCard 
              avatarImg={require("../../images/14446071_1175636312501729_2826977849243634336_n.jpg")} 
              alternative="about avatar"/>
          </div>
          <div className="column">
            <div className="about-content">
              <div className="heading">
                <h1 className="title am-center am-bold white">hello i am anwar magara</h1>
                <p className="am-center">web designer / developer</p>
              </div>
            </div>
            <p className="am-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora dolorum corporis architecto culpa perspiciatis sapiente a reprehenderit voluptatem. Ut voluptatem ipsa possimus natus libero consectetur ea debitis quasi eveniet.</p>
            <Button path="/portfolio" urlName="view my work"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
