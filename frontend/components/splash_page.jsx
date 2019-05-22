import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mstp = state => ({})

const splash = () => (
  <div>
    <section className="splash-1">
      <Link to="/login">
        <h1>Log in to Trolle</h1>
      </Link>
      <Link to="/signup">
        <p>or create an account</p>
      </Link>
    </section>
    <section className="splash-2">
      <div className="copy">
        <h1>Trolle lets you work more collaboratively and get more done.</h1>
        <h2>
          Trolle’s boards, lists, and cards enable you to organize and
          prioritize your projects in a fun, flexible, and rewarding way.
        </h2>
        <Link to="/signup">
          <h1>Sign Up = It's Free</h1>
        </Link>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-3">
      <div className="copy">
        <h1>Work with any team.</h1>
        <h2>
          Whether it’s for work, a side project or even the next family
          vacation, Trello helps your team stay organized.
        </h2>
        <Link to="/signup">
          <h1>Start doing →</h1>
        </Link>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-4">
      <div className="copy">
        <h1>Information at a glance</h1>
        <h2>
          Dive into the details by adding comments, attachments, due dates, and
          more directly to Trello cards. Collaborate on projects from beginning
          to end.
        </h2>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-5">
      <div className="copy">
        <h1>See how it works</h1>
        <h2>
          Go from idea to action in seconds with Trello’s intuitively simple
          boards, lists, and cards.
        </h2>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-6">
      <div className="copy">
        <h1>Trello your way</h1>
        <h2>
          Use Trello the way your team works best. We’ve got the flexibility &
          features to fit any team’s style.
        </h2>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-7">
      <div className="copy">
        <h1>The Team Playbook</h1>
        <h2>
          It’s easy to get your team up and running with Trello. We’ve collected
          all of the boards and tools you need to succeed in one handy resource.
        </h2>
        <Link to="/signup">
          <h1>Make A Game Plan</h1>
        </Link>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-8">
      <div className="copy">
        <h1>A Productivity Platform</h1>
        <h2>
          Integrate the apps your team already uses directly into your workflow.
          Power-Ups turn Trello boards into living applications to meet your
          team's unique business needs.
        </h2>
        <Link to="/signup">
          <h1>Power-Up Your Workflow</h1>
        </Link>
      </div>
      <img src={window.splash_image_1} />
    </section>
    <section className="splash-9">
      <div className="copy">
        <h1>Always In Sync</h1>
        <h2>
          No matter where you are, Trello stays in sync across all of your
          devices. Collaborate with your team anywhere, from sitting on the bus
          to sitting on the beach.
        </h2>
      </div>
    </section>
    <section className="splash-10">
      <img src={window.splash_image_1} />
      <div className="copy">
        <h1>Start Planning Today</h1>
        <h2>
          Sign up and become one of the millions of people around the world
          using Trello to get more done.
        </h2>
        <Link to="/signup">
          <h1>Get Started - It's Free!</h1>
        </Link>
      </div>
      <img src={window.splash_image_1} />
    </section>
  </div>
)

export default connect(mstp)(splash)
