function Questions() {
  return (
    <>
      <div className="questions-container">
        <h1>Stuff is going to go here!</h1>
        <ul>
          <ol>
            <h4>Trying to create an user account.</h4>
            <p>Follow these steps: </p>
            <li>Go to sign in page.</li>
            <li>Click registeration Link</li>
            <li>Fill out all fields</li>
            <li>Click the Register Me Button</li>
            {/* click here: //link */}
          </ol>
          <ol>
            <h4>Problem Signing in.</h4>
            <p>Follow these steps: </p>
            <li>attempt the following:</li>
            <li>input your username and password then click sign in</li>
            <li>
              if you forgot your password or username, email staff and request a
              link to reset them
            </li>
            {/* click here: //link */}
          </ol>
          <ol>
            <h4> Problem creating a bank account</h4>
            <p>follow these steps</p>
            <li>
              if you don't have an account then create an account using the
              steps above in "creating an account list"
            </li>
            <li> navigate to the create a bank account page</li>
            {/*click here //link */}
            <li>login in using your username and password</li>
            <li>create an account: checking or saving</li>
          </ol>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Questions;
