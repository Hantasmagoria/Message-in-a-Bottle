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
    this.state = { ...this.props };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({ ...this.props });
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="navbar">
          {/* navbar navbar-expand-sm bg-dark fixed-top flex-column flex-md-row */}
          <div className="nav-wrapper">
            {/* navbar-nav mr-auto */}
            <a
              className="brand-logo left"
              onClick={this.props.switchToHomeView}
            >
              <img
                className="hide-on-med-and-down"
                src="/res/brand-logo.png"
                width="200vw"
                height="100%"
                alt=""
              />
              <img
                className="hide-on-large-only"
                src="/res/brand-logo-only.png"
                width="100vw"
                height="100%"
                alt=""
              />
            </a>
            <ul className="right">
              {/* navbar-nav mr-right */}
              <li>
                {/* nav-item */}
                {this.state.loginStatus ? (
                  <UserNav {...this.state} />
                ) : this.state.loginToggle ? (
                  <LoginDroplet
                    toggieNavLogin={this.props.toggieNavLogin}
                    setCurrentUser={this.props.setCurrentUser}
                  />
                ) : (
                  <LoginRegButton
                    toggieNavLogin={this.props.toggieNavLogin}
                    switchToRegView={this.props.switchToRegView}
                  />
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
    this.state = { username: "", password: "" };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    await fetch("https://amiablydb.herokuapp.com/users/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        if (resJson) {
          // all the way up: isLoggedIn=false, currentUser=undefined
          this.props.setCurrentUser({ ...resJson });
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="login card "
          method="post"
          acceptCharset="UTF-8"
          onSubmit={this.handleSubmit}
        >
          <div className="container">
            <div className="input-field">
              <input
                className=""
                // form-control login
                type="text"
                id="username-input-login"
                name="username"
                onChange={this.handleChange}
              />
              <label htmlFor="username-input-login">Username</label>
            </div>
            <div className="input-field">
              <input
                className=""
                // form-control login
                type="password"
                id="password-input-login"
                name="password"
                defaultValue=""
                onChange={this.handleChange}
              />
              <label htmlFor="password-input-login">Password</label>
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
    this.state = { ...this.props };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({ ...this.props });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn-large"
          type="button"
          onClick={this.props.switchToDashView}
        >
          {this.state.currentUser.username}
        </button>
      </React.Fragment>
    );
  }
}

class LoginRegButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({ ...this.props });
    }
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
      ...this.props,
      username: "",
      password: ""
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({ ...this.props });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    switch (e.target.name) {
      case "home":
        let data = { ...this.state.message };
        await fetch("https://amiablydb.herokuapp.com/posts", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        break;
      case "registration":
        data = { username: this.state.username, password: this.state.password };
        await fetch("https://amiablydb.herokuapp.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: data
        });
        break;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name == "usernameReg" ? "username" : "password"]: e.target.value
    });
  };

  renderMain() {
    return (
      <form className="castForm" name="home" onSubmit={this.handleSubmit}>
        <TitleArea {...this.state} changeTitle={this.props.changeTitle} />
        <TextArea
          {...this.state}
          changeMessageContent={this.props.changeMessageContent}
        />
      </form>
    );
  }

  renderReg() {
    return (
      <form
        className="castForm"
        name="registration"
        onSubmit={this.handleSubmit}
      >
        <RegistrationArea
          {...this.state}
          handleChange={this.handleChange}
          switchToHomeView={this.props.switchToHomeView}
        />
      </form>
    );
  }

  renderDash() {
    // TODO: fix dashboard
    return (
      <div className="section">
        <div className="row">
          <div className="col s12 m12">
            <DashboardArea {...this.state} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.currentPage == "home"
      ? this.renderMain()
      : this.state.currentPage == "registration"
      ? this.renderReg()
      : this.renderDash();
  }
}

class DashboardArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      postsArray: []
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({ ...this.props });
    }
  }

  async componentDidMount() {
    await fetch("https://amiablydb.herokuapp.com/users/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: this.state.currentUser.username })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          postsArray: data.posts.map(post => {
            return { title: post.title, url: post.url, _id: post._id };
          })
        });
      });
  }
  render() {
    // return "";
    const posts = this.state.postsArray.map(post => {
      return (
        <div className="col l4 s12" key={post._id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <a className="light" href={"/" + post.url}>
                Click me!
              </a>
            </div>
          </div>
        </div>
      );
    });
    return <React.Fragment>{posts}</React.Fragment>;
  }
}

class TitleArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({ ...this.props });
    }
  }

  handleEdit = () => {
    this.setState({
      editTitle: !this.state.editTitle
    });
    this.props.changeTitle(this.state.message.title);
  };

  editTitleMethod = newTitle => {
    this.setState({
      message: {
        title: newTitle
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <TitleLabelBox {...this.state} editTitleMethod={this.editTitleMethod} />
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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.message != this.props.message) {
      // console.log("update");

      this.setState({
        message: this.props.message
      });
    }
  }

  handleChange = e => {
    this.props.editTitleMethod(e.target.value);
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
      editTitle: this.props.editTitle
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps != this.props) {
      this.setState({
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

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      username: "",
      password: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({ ...this.props });
    }
  }

  handleChange = e => {
    this.props.changeMessageContent(e.target.value);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = { ...this.state.message };
    let user = this.state.currentUser.username;
    let post = {
      username: user,
      url: data.uniqueURL,
      title: data.title
    };

    await fetch("https://amiablydb.herokuapp.com/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);
      });

    // TODO: find out of the resJson can be flushed to localhost (look out for console log)
    if (user) {
      await fetch("https://amiablydb.herokuapp.com/users/", {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      })
        .then(res => {
          return res.json();
        })
        .then(resJson => {
          console.log(resJson);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <textarea
          className="bigfill"
          id="theMessage"
          value={this.state.message.content}
          onChange={this.handleChange}
        ></textarea>
        <button
          className="right"
          // "btn btn-primary" : "btn btn-info"
          onClick={this.handleSubmit}
          type="button"
        >
          {"Publish"}
        </button>
      </React.Fragment>
    );
  }
}

class RegistrationArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props != prevProps) {
      this.setState({ ...this.props });
    }
  }
  handleChange = e => {
    this.props.handleChange(e);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    await fetch("https://amiablydb.herokuapp.com/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(resJson => {
        this.props.switchToHomeView();
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="username-input-reg"
              name="usernameReg"
              type="text"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="username-input-reg">Username</label>
          </div>
          <div className="input-field col s6">
            <input
              id="password-input-reg"
              name="passwordReg"
              type="password"
              onChange={this.handleChange}
            ></input>
            <label htmlFor="password-input-reg">Password</label>
          </div>
        </div>
        <input
          className="btn"
          // btn btn-primary
          type="submit"
          name="submit"
          value="Register"
          onClick={this.handleSubmit}
        />
      </React.Fragment>
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
        uniqueURL: Math.random()
          .toString(36)
          .substr(2, 8),
        createdDate:
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
      }
    };
  }
  componentDidMount() {
    //fetch states from localStorage
    this.setState({
      loginStatus: localStorage.getItem("isLoggedIn")
        ? localStorage.getItem("isLoggedIn")
        : this.state.loginStatus,
      loginToggle: localStorage.getItem("loginToggle")
        ? localStorage.getItem("loginToggle")
        : this.state.loginToggle,
      currentPage: localStorage.getItem("currentPage")
        ? localStorage.getItem("currentPage")
        : this.state.currentPage,
      currentUser: localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : this.state.currentUser,
      message: JSON.parse(localStorage.getItem("message"))
        ? JSON.parse(localStorage.getItem("message"))
        : this.state.message
    });
  }

  setCurrentUser = res => {
    this.setState({
      loginStatus: true,
      currentUser: res
    });
    localStorage.setItem("currentUser", JSON.stringify(res));
    localStorage.setItem("isLoggedIn", true);
  };

  // componentDidUpdate(prevProps, prevState) {}

  switchToHomeView = () => {
    this.setState({
      currentPage: "home"
    });
    localStorage.setItem("currentPage", "home");
  };

  switchToRegView = () => {
    this.setState({
      currentPage: "registration"
    });
    localStorage.setItem("currentPage", "registration");
  };

  switchToDashView = () => {
    this.setState({
      currentPage: "dashboard"
    });
    localStorage.setItem("currentPage", "dashboard");
  };

  toggieNavLogin = () => {
    this.setState({ loginToggle: !this.state.loginToggle });
  };

  changeTitle = newTitle => {
    this.setState({
      message: {
        ...this.state.message,
        title: newTitle
      }
    });
  };

  changeMessageContent = newMessage => {
    this.setState({
      message: {
        ...this.state.message,
        content: newMessage
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar
            {...this.state}
            toggieNavLogin={this.toggieNavLogin}
            switchToRegView={this.switchToRegView}
            switchToDashView={this.switchToDashView}
            switchToHomeView={this.switchToHomeView}
            setCurrentUser={this.setCurrentUser}
          />
        </header>
        <div id="main-frame" className="card-panel">
          <MidSection
            {...this.state}
            changeTitle={this.changeTitle}
            changeMessageContent={this.changeMessageContent}
            switchToHomeView={this.switchToHomeView}
          />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
