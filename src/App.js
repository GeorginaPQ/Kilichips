import React from 'react';

import * as Container from './containers'
import StyledForm from './styles';

function App() {
  return (
  <div>
      <Container.Navbar />
      <StyledForm>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </StyledForm>
  </div>
  );
}

export default App;
