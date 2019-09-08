import React from 'react';
import './directory-style.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : [
                {
                  title: 'Wedding Album',
                  imageUrl: 'http://www.leosinani.com/wedding1.jpg',
                  id: 1,
                  linkUrl: 'shop/wedding'
                },
                {
                  title: 'Honey Moon Album',
                  imageUrl: 'http://www.leosinani.com/HoneyMoon1.jpg',
                  id: 2,
                  linkUrl: 'shop/honeymoon'
                },
                {
                  title: 'New Years Album',
                  imageUrl: 'http://www.leosinani.com/newyear.jpg',
                  id: 3,
                  linkUrl: 'shop/newyear'
                },
                {
                  title: 'Birthday Album',
                  imageUrl: 'http://www.leosinani.com/birthday1.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/birthday'
                },
                {
                  title: 'My Niece Album',
                  imageUrl: 'http://www.leosinani.com/neice.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/niece'
                }
              ]
        }
    }
render(){
    return(
<div className='directory-menu'>
    {
        this.state.sections.map(({title, id, imageUrl, size}) => <MenuItem key={id} title={title} image={imageUrl} size={size}/>)
    }
</div>
    )
}
}

export default Directory;