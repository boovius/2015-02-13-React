////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: 'Mexican Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  render () {
    var mexican_food = DATA.items.filter((item) => {
      return item.type ==='mexican';
    }).sort(sortBy('name')).map((i) => <li> {i.name}</li>);
    return (
        <div>
          <h1>{DATA.title}</h1>
          <ul>
            {mexican_food}
          </ul>
          </div>
        );
  }
});

React.render(<Menu/>, document.body, () => {
  require('./tests').run();
});

