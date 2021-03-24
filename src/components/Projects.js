import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function Projects() {
return(

    <div className="card-group">
      <div className="card">
        <a href="https://rjmurphy1922.github.io/PassGenerator/"><img src="/images/hacker-1944688_1280.jpg" className="card-img-top" alt="Password Image" /></a>
        <div className="card-body">
          <h5 className="card-title">Password Generator</h5>
          <p className="card-text">The purpose of this project was to build a application that could create a secure password based on the users input.
            Users could select the option of having an Uppercase, Lowercase, special and or numbers in their password which must fit constraints of being 8 to 124 characters long
            Technologies
            This project used HTML, CSS and javascript and was launched on November 1st 2020.</p>
          {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
      <div className="card">
        <a href="https://macz-norton.github.io/BreweryHopper/"><img src="/images/beer-2166004_1920.jpg" className="card-img-top" alt="Brewery Taps" /></a>
        <div className="card-body">
          <h5 className="card-title">BreweryHopper</h5>
          <p className="card-text">BreweryHopper helps users locate breweries in the city in their neighborhood or while traveling. Search criteria is based on the user's city input and displays results including the name, brewery type, and address of the brewery the user clicks.</p>
          {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
      <div className="card">
        <a href="https://rjmurphy1922.github.io/WeatherApi/"><img src="/images/rain-3443977_1920.jpg" className="card-img-top" alt="Marketing Holder Image" /></a>
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">This project allows users to generate a 5 day forecast of weather conditions based on the city input by the user.</p>
          {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
      </div>
    </div>
  );
}
export default Projects