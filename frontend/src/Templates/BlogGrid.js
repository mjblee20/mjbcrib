// Imports Dependencies 
import React from 'react';

import './BlogGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';

const posts = [
  {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, {
    avatar: 'Picture Here',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vitae harum nam? Recusandae facilis, velit eius iste quos ipsum animi quam optio magni maxime architecto praesentium sit blanditiis in amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia minus dolorem iure maxime, soluta optio deleniti asperiores totam? Expedita eum ea vitae commodi consequuntur voluptate hic dignissimos explicabo sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste sit alias cumque fugit reiciendis nihil sint, vero architecto aperiam rem, repellendus voluptatibus labore placeat nulla excepturi fuga ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores officia tempore veniam odit ducimus adipisci. Dignissimos, reprehenderit eligendi. Alias laboriosam magnam omnis ad provident voluptates perferendis, iste quasi accusantium voluptas!'
  }, 
]


const BlogGrid = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('post new blog');
  }

  return(
    <div className='blog-page-container'>

      <PageHeader title='Blog' color='var(--navy)'/>

      {/* TODO: Eventually it's own Compound js file */}
      <div className='blog-posts-container'>

        {posts.map( post => (
          /* TODO: Eventually it's own Compound js file */
          <div className='post'>
            {/* TODO: Eventually it's own Atom js file */}
            <div className='poster-row'>
              <div className='avatar'>
                <div className='headshot'> 
                  {post.avatar}
                </div>
              </div>
              <div className='poster-info'>
                <div className='poster'>
                  Bill
                </div>
                <div className='post-time'>
                  Today
                </div>
              </div>
              

              
            </div>
            {/* TODO: Eventually it's own Atom js file */}
            <div className='post-content'>{post.content}</div>
          </div>
        ))}
      </div>

      <form className="new-post-form">
        <h1>New Post</h1>
        <textarea className='new-post-content'>

        </textarea>

        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>

      <PageFooter title='' />

    </div>
  );
}

export default BlogGrid;
