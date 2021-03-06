console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Karim', 'Baruch']
}

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0? 'Here are your options: ': 'There are no options!'}</p>
    <ol>
      {app.options.map((value, index) => {
        return <li>{value}</li>
      })}
    </ol>
  </div>
);

const user = {
  name: 'Karim',
  age: 18,
  location: 'Tel-Aviv'
};
function getLocation(location) {
  if (location){
    return <p>Location: {location}</p>;
  }
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);