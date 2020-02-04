import React from 'react';
import './AboutInfo.css';
import CheckInBtn from '../Atoms/CheckInBtn';

function AboutInfo() {

  function handleCheckIn() {
    console.log("great job! you're 1% better than yesterday!");
  }

  function handleFailed() {
    console.log("you're bad you're very bad");
  }

  return (
    <div className='habits'>
      <div className='habits-header'>
        <h2>Habits</h2>
        <br />
        <h4>Why I got so into habits... </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi dolor neque ad repellat sapiente iste atque placeat voluptatum dolorum quos, adipisci earum velit ullam qui doloremque molestias perferendis distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate, pariatur eaque aut distinctio ipsam sint, quis dolor tempore nobis omnis dolorem eveniet? Voluptatum aliquam, saepe aut reiciendis nostrum a? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt doloribus id, dolorum aliquid esse deleniti nisi nulla incidunt modi soluta quidem, excepturi vero. Explicabo, ipsum. Obcaecati omnis numquam culpa cum.</p>
      </div>
          {/* I believe that opportunities are only available to those who are well prepared. That's why I wish to be in the group that is well prepared and ready to grab the opportunity for myself. After reading Jame's Clear's Book {bookname} [Atomic Habits] I've been moved to begin the betterment of myself. */}
          {/* TODO: Amazon book link to James Clear's book */}
      <div className='habits-body'>
        <div className='current-habits-list'>
          <h3>Current habits working on building and getting rid of:</h3>
          <ul className='habits-list'>
            <li>Exercise</li>
            <li>Productivity</li>
            <li>Smoking</li>
          </ul>
          
        </div>
        <div className='check-habits'>
          <h3>Checkin' in for the day... </h3>
          {/* TODO: A place to check progress done */}
          <CheckInBtn onClick={handleCheckIn}>I did it!</CheckInBtn>
          <CheckInBtn onClick={handleFailed}>I'm sorry...</CheckInBtn>
        </div>
        <div className='progress-chart'>
          <h3>Calculating Improvements... </h3>
          {/* TODO: Graph display of how much you've improved with everyday you're 1% better than you were recording each and every time you successfully maintained a habit or failed to keep it up */}
          <p>Your trajectory to becoming a better you</p>
          <div>
            Graph will go here
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo;
