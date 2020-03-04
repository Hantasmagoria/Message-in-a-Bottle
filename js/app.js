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
    if (prevProps != this.props) {
      this.setState({
        loginToggle: this.props.loginToggle,
        loginStatus: this.props.loginStatus
      });
    }
  }

  redirHome() {
    location.href = "";
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          {/* navbar navbar-expand-sm bg-dark fixed-top flex-column flex-md-row */}
          <div className="nav-wrapper">
            {/* navbar-nav mr-auto */}
            <a className="left" href="" onClick={this.redirHome}>
              <img
                src="/res/brand-logo.png"
                width="100%"
                height="100%"
                alt=""
              />
            </a>
            <ul className="right">
              {/* navbar-nav mr-right */}
              <li>
                {/* nav-item */}
                {this.state.loginStatus ? (
                  <UserNav />
                ) : this.state.loginToggle ? (
                  <LoginDroplet toggieNavLogin={this.props.toggieNavLogin} />
                ) : (
                  <LoginRegButton toggieNavLogin={this.props.toggieNavLogin} />
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="login card " method="post" acceptCharset="UTF-8">
          <div className="container">
            <div className="input-field">
              <input
                className=""
                // form-control login
                type="text"
                id="username-input"
                name="username"
                onChange={this.handleChange}
              />
              <label htmlFor="username-input">Username</label>
            </div>
            <div className="input-field">
              <input
                className=""
                // form-control login
                type="password"
                id="password-input"
                name="password"
                defaultValue=""
                onChange={this.handleChange}
              />
              <label htmlFor="password-input">Password</label>
            </div>
            <input
              className="btn"
              // btn btn-primary
              type="submit"
              name="submit"
              value="Login"
            />
            <input
              className="btn"
              // btn btn-default
              type="button"
              name="cancel"
              value="Back"
              onClick={this.props.toggieNavLogin}
            />
          </div>
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
          className="btn-large"
          // btn btn-primary
          onClick={this.props.toggieNavLogin}
          type="button"
        >
          Sign in
        </button>
        <button
          className="btn-large"
          // btn btn-warning
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
      message: this.props.message,
      editTitle: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    //
  }

  render() {
    return (
      <form className="castForm" method="post">
        <TitleArea
          message={this.state.message}
          editTitle={this.state.editTitle}
        />
        <textarea className="bigfill" id="theMessage"></textarea>
        {/* form-control  */}
      </form>
    );
  }
}

class TitleArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      editTitle: this.props.editTitle
    };
  }
  componentDidUpdate(prevProps, prevState) {
    //
  }

  handleEdit = () => {
    this.setState({
      editTitle: !this.state.editTitle
    });
  };

  render() {
    return (
      <React.Fragment>
        <TitleLabelBox
          message={this.state.message}
          editTitle={this.state.editTitle}
        />
        <TitleEditButton
          editTitle={this.state.editTitle}
          handleEdit={this.handleEdit}
        />
      </React.Fragment>
    );
  }
}

class TitleLabelBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      editTitle: this.props.editTitle
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  renderLabel = () => {
    return (
      <label htmlFor="theMessage">
        {this.state.message.title ? this.state.message.title : "Title"}
      </label>
    );
  };

  renderBox = () => {
    return (
      <input
        className=""
        // form-control form-control-lg
        type="text"
        value={this.state.message.title}
        onChange={this.handleChange}
      />
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        message: this.props.message,
        editTitle: this.props.editTitle
      });
    }
  }

  render() {
    return this.state.editTitle ? this.renderBox() : this.renderLabel();
  }
}

class TitleEditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
      editTitle: this.props.editTitle
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
        message: this.props.message,
        editTitle: this.props.editTitle
      });
    }
  }

  render() {
    return (
      <button
        className={this.state.editTitle ? "" : ""}
        // "btn btn-primary" : "btn btn-info"
        onClick={this.props.handleEdit}
        type="button"
      >
        {this.state.editTitle ? "Confirm" : "Edit"}
      </button>
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

  toggieNavLogin = () => {
    this.setState({ loginToggle: !this.state.loginToggle });
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
            toggieNavLogin={this.toggieNavLogin}
          />
        </header>
        {/* <div style={{ height: navheight + "px" }}></div> */}
        <div id="main-frame" className="card-panel">
          {/* jumbotron d-flex align-items-center */}
          {/* <div className=""> */}
          {/* container-fluid h-100 */}
          {/* <div className=""> */}
          {/* row p-2 h-100 */}
          {/* <div className=""> */}
          {/* col-md-12 d-flex align-items-center justify-content-center */}
          <MidSection message={this.state.message} />
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
