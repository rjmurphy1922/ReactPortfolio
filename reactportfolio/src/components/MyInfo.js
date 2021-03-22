function MyInfo() {
    return (

      <div className="card my-4" style={{maxWidth: '100%'}}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src="/images/Screenshot_20181227-213934_Gmail.jpg" className="card-img" alt="Picture of Developer" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <p className="card-text">Hello! My name is Ryan Murphy and I am an aspiring developer from Seattle Washington. I have a background in finance and analytics but have always had a passion for Web Applications and the amazing things we can do with this technology!
                This is my newly established portfolio so feel free to take a look around as I continue to build on this! I plan on updating this frequently with new projects and if you would like to continue viewing my work my Social Media Accounts are listed below.
                <br></br>
                <br></br>
                
                
                
                
                <h3>Contact Information:</h3>
                
           
                Phone Number: 425-365-9628 <br></br>
                Email Address: rjmurphy1922@gmail.com<br></br>
                Github URL : https://github.com/rjmurphy1922 (Link Below)

                </p><p />
              {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default MyInfo