// import logo from './logo.svg';
import './App.css';
import TextAreaReact from './components/TextAreaReact';
function App() {
  // const style=function(){

  // }
  return (
    <>
      {/* {so basically bootstrap is like css only; we have to attach them on the main file also; the only thing 
    is like we don't need to write seperate classes; but the knowledge of css is must; copy paste only doesn't work; but 
    it will kinda make the process of doing the project easier
    ;there are different classes with different set of functionalities and for different purposes;
    we need all of them to liek have the required set of stuff carried out in the file } */}
      {/*whatever I said earlier held true bcz tya lekheko kura nai copy vako raina raixa;
      so dont trust copy wala fuction

       <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand p-2" href="/">Word</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
          </div>
          <div className="d-flex justify-content-start w-25 p-1  align-items-center">

          
          <form className="form-inline px-2 my-lg-0">

            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
          
          </div>
          
        
      </nav> */}
      {/* <textArea /> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Word</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        {/* like to give margin we use m; ani padding lai p; like again it makes the job easy but we need to know sth extra */}
      {/* <form>
        <div className="form-group m-1 px-5">
          <label for="exampleFormControlTextarea1"></label>
          <h3> Example textarea</h3>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"  ></textarea>
        </div>
      </form> */}
      <TextAreaReact/>
    </>



  );
}

export default App;
