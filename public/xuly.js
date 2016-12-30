var Homepage =React.createClass({
  render:function(){
    return(
    <div className="container-fuild">
    <Menutop/>
    <div className="container">
    <div className="row">
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
     <Sidebarpage/>
     </div>
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
     <ContainerPage/>
     <ContainerPage/>
     <ContainerPage/>
     <ContainerPage/>
     </div>
     </div>
    </div>
    <Footerpage/>


    </div>
    );
  }
});
var Menutop =React.createClass({
  render:function(){
    return(
      <div>
      <nav className="navbar navbar-inverse" role="navigation">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        <a href="/"><img src="images/logo.svg" className="logo"/></a>
        </div>
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Codding</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    </div>

    );
  }
});

var ContainerPage =React.createClass({
  render:function(){
    return(

            <div>

            <h3><a href="/post">React v15.4.0</a></h3>
            November 16, 2016 by Dan Abramov
                <hr/>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu
              pidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>


    );
  }
});

var Footerpage =React.createClass({
  render:function(){
    return(
      <footer><h4>Proudly powered by Nodejs && Reactjs</h4></footer>
    )
  }

})
var Sidebarpage =React.createClass({
  render:function(){
    return(
      <div>
        <h3>ABOUT THIS SITE</h3>
        <p>Coding Everyday, Programming is My Life......</p>
      </div>
    )
  }
})


ReactDOM.render(
  <div>
<Homepage/>
  </div>
,document.getElementById("root"));
