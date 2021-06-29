'use strict';

import React from 'react';
import {findDOMNode} from "react-dom";
import PropTypes from 'prop-types';
import '../src/sass/slicknav.scss';

const slicknavOptions = {
  core: [
    'label',
    'duplicate',
    'duration',
    'easingOpen',
    'easingClose',
    'closedSymbol',
    'openedSymbol',
    'prependTo',
    'appendTo',
    'parentTag',
    'closeOnClick',
    'allowParentLinks',
    'nestedParentLinks',
    'showChildren',
    'removeIds',
    'removeClasses',
    'removeStyles',
    'brand',
    'animations'
  ]
};

const slicknavEvents = {
  core: [
    'toggle',
    'open',
    'close'
  ]
};

class Slicknav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = () => this.$mobMenu.toggle();
    this.open = () => this.$mobMenu.open();
    this.close = () => this.$mobMenu.close();
  }
  
  componentDidMount() {
    let options = this.getOptions();
    this.init(options);
  }
  
  componentWillReceiveProps(nextProps) {
    this.destroy();
  }
  
  componentWillUnmount() {
    this.destroy();
  }
  
  componentDidUpdate(prevProps, prevState) {
    let options = this.getOptions();
    this.init(options);
  }
  
  init(options) {
    this.$node.slicknav(options);
    this.$mobMenu = this.$node;
  }
  
  destroy() {
    this.$mobMenu.close();
  }
  
  getOptions() {
    const options = {};
    
    let menuOptions = Object.values(slicknavOptions).reduce((a, v) => a.concat(v), []);
    
    menuOptions.forEach(val => {
      if (val in this.props.options)
        options[val] = this.props.options[val];
    });
    
    return options;
  }
  
  
  render() {
    const {
      options,
      events,
      children,
      ...props
    } = this.props;
    
    return (
      <div ref={(item) => this.$node = $(findDOMNode(item))} className={'collapse navbar-collapse'} id={'navbarSupportedContent'} {...props}>
        {children}
      </div>
    );
  }
}

Slicknav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element.isRequired),
  ]).isRequired,
  options: PropTypes.shape({
    label: PropTypes.string,
    duplicate: PropTypes.bool,
    duration: PropTypes.number,
    easingOpen: PropTypes.string,
    easingClose: PropTypes.string,
    closedSymbol: PropTypes.string,
    openedSymbol: PropTypes.string,
    prependTo: PropTypes.string,
    appendTo: PropTypes.string,
    parentTag: PropTypes.string,
    closeOnClick: PropTypes.bool,
    allowParentLinks: PropTypes.bool,
    nestedParentLinks: PropTypes.bool,
    showChildren: PropTypes.bool,
    removeIds: PropTypes.bool,
    removeClasses: PropTypes.bool,
    removeStyles: PropTypes.bool,
    brand: PropTypes.string,
    animations: PropTypes.string
  })
};

Slicknav.defaultProps = {
  options: {
    label: 'MENU',
    duplicate: true,
    duration: 200,
    easingOpen: 'swing',
    easingClose: 'swing',
    closedSymbol: '&#9658;',
    openedSymbol: '&#9660;',
    prependTo: 'body',
    appendTo: '',
    parentTag: 'a',
    closeOnClick: false,
    allowParentLinks: false,
    nestedParentLinks: true,
    showChildren: false,
    removeIds: true,
    removeClasses: false,
    removeStyles: false,
    brand: '',
    animations: 'jquery'
  },
  events: {}
};

export default Slicknav;
