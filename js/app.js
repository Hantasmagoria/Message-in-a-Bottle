//   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀
//  ▐░▌               ▐░▌     ▐░▌       ▐░▌▐░▌          ▐░▌
//  ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//   ▀▀▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌
//            ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌                    ▐░▌
//   ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌
//  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀

class Sides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }
  componentDidUpdate(prevProps, prevState) {
    //
  }

  render() {
    //   return (
    //        //
    //   );
  }
}

//  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄
// ▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌
// ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌ ▐░▌           ▐░▌
// ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌  ▐░▌         ▐░▌
// ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌   ▐░▌       ▐░▌
// ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌    ▐░▌     ▐░▌
// ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌   ▐░▌
// ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌      ▐░▌ ▐░▌
// ▐░▌     ▐░▐░▌▐░▌       ▐░▌       ▐░▐░▌
// ▐░▌      ▐░░▌▐░▌       ▐░▌        ▐░▌
//  ▀        ▀▀  ▀         ▀          ▀

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToggle: this.props.loginToggle,
      loginStatus: this.props.loginStatus
    };
  }
  componentDidUpdate(prevProps, prevState) {
    //
  }

  toggleNav = () => {
    this.setState({ loginToggle: !this.state.loginToggle });
  };

  redirHome() {
    location.href = "/";
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark fixed-top flex-column flex-md-row">
        <div className="navbar-nav mr-auto">
          <a className="nav-link" href="">
            <div id="header_logo" onClick={this.redirHome}>
              <p>
                <img src="/res/favicon.ico" width="30" height="30" alt="" />
                AMIAB.LY
              </p>
            </div>
          </a>
        </div>
        <ul className="navbar-nav mr-right">
          <li className="nav-item">
            {this.state.loginStatus ? (
              <UserNav />
            ) : this.state.loginToggle ? (
              <LoginDroplet toggleNav={this.toggleNav} />
            ) : (
              <LoginRegButton toggleNav={this.toggleNav} />
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

class LoginDroplet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <React.Fragment>
        <form className="form-horizontal" method="post" acceptCharset="UTF-8">
          <input
            className="form-control login"
            type="text"
            name="username"
            placeholder="Username.."
          />
          <br />
          <input
            className="form-control login"
            type="password"
            name="password"
            placeholder="Password.."
          />
          <br />
          <input
            className="btn btn-primary"
            type="submit"
            name="submit"
            value="Login"
          />
          <input
            className="btn btn-default"
            name="cancel"
            value="Back"
            onClick={this.props.toggleNav}
          />
        </form>
      </React.Fragment>
    );
  }
}

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return "";
  }
}

class LoginRegButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={"btn btn-primary"}
          onClick={this.props.toggleNav}
          type="button"
        >
          Login
        </button>
        <button
          className={"btn btn-warning"}
          onClick={this.props.switchToRegView}
          type="button"
        >
          Sign up
        </button>
      </React.Fragment>
    );
  }
}

//  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄
// ▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌
// ▐░▌░▌   ▐░▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
// ▐░▌▐░▌ ▐░▌▐░▌     ▐░▌     ▐░▌       ▐░▌
// ▐░▌ ▐░▐░▌ ▐░▌     ▐░▌     ▐░▌       ▐░▌
// ▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌       ▐░▌
// ▐░▌   ▀   ▐░▌     ▐░▌     ▐░▌       ▐░▌
// ▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌
// ▐░▌       ▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
// ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌
//  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀

class MidSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }
  componentDidUpdate(prevProps, prevState) {
    //
  }

  render() {
    return (
      <form className="castForm" method="post">
        <textarea className="form-control bigfill"></textarea>
      </form>
    );
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
// ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
// ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
//  ▀         ▀  ▀            ▀

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      loginToggle: false,
      currentPage: "home",
      currentUser: undefined,
      message: {
        title: "",
        content: "",
        doesExpire: true,
        createdDate:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()
      }
    };
  }
  componentDidMount() {
    //fetch states from current URL
  }

  switchToRegView = () => {
    this.setState({
      currentPage: "registration"
    });
  };

  render() {
    // let navheight = document.querySelector("nav").offsetHeight;
    return (
      <React.Fragment>
        <header>
          <Navbar
            loginStatus={this.state.loginStatus}
            loginToggle={this.state.loginToggle}
            currentPage={this.state.currentPage}
            currentUser={this.state.currentUser}
          />
        </header>
        {/* <div style={{ height: navheight + "px" }}></div> */}
        <div className="jumbotron d-flex align-items-center">
          <div className="container-fluid h-100">
            <div className="row p-2 h-100">
              <div className="col-md-12 d-flex align-items-center justify-content-center">
                <MidSection />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
