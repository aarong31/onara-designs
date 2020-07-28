import React from 'react';

import MenuItem from '../menu-item/menu-item';
import '../../main.styles.scss';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/flagged/photo-1557581462-0bf3e5907811?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 1         
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1583949867843-ec3cfe5a4bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1517466121016-3f7e7107c756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          positionT: 'positionT',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1559405173-5810abfc9403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          size: 'large',

          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size, positionT }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} positionT={positionT}  />
        ))}
      </div>
    );
  }
}

export default Directory;