"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById('app');
var data = [{
	id: 1,
	name: "Shanghai",
	image: "shanghai.png"
}, {
	id: 2,
	name: "Fiji",
	image: "fiji.png"
}, {
	id: 3,
	name: "New Zeeland",
	image: "NZ.png"
}, {
	id: 4,
	name: "Australia",
	image: "AU.png"
}, {
	id: 5,
	name: "Vietnam",
	image: "vietnam.png"
}, {
	id: 6,
	name: "Colombia",
	image: "cambodia.png"
}, {
	id: 7,
	name: "Thailand",
	image: "thai.png"
}, {
	id: 8,
	name: "India",
	image: "india.png"
}, {
	id: 9,
	name: "Buenos Aires",
	image: "BA.png"
},{
	id: 10,
	name: "Diving",
	image: "water.png"
},{
	id: 11,
	name: "Thai",
	image: "thailand.png"
},{
	id: 12,
	name: "Desert",
	image: "desert.png"
}];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return React.createElement(Tiles, { data: this.props.data });
	};

	return App;
}(React.Component);

var Tiles = function (_React$Component2) {
	_inherits(Tiles, _React$Component2);

	function Tiles() {
		_classCallCheck(this, Tiles);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	Tiles.prototype.render = function render() {
		// Create tile for each item in data array
		// Pass data to each tile and assign a key
		return React.createElement(
			"div",
			{ className: "tiles" },
			this.props.data.map(function (data) {
				return React.createElement(Tile, { data: data, key: data.id });
			})
		);
	};

	return Tiles;
}(React.Component);

var Tile = function (_React$Component3) {
	_inherits(Tile, _React$Component3);

	function Tile(props) {
		_classCallCheck(this, Tile);

		var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

		_this3.state = {
			open: false,
			mouseOver: false
		};
		// Bind properties to class instance
		_this3._clickHandler = _this3._clickHandler.bind(_this3);
		_this3._mouseEnter = _this3._mouseEnter.bind(_this3);
		_this3._mouseLeave = _this3._mouseLeave.bind(_this3);
		return _this3;
	}
	// Event handlers to modify state values

	Tile.prototype._mouseEnter = function _mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			});
		}
	};

	Tile.prototype._mouseLeave = function _mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			});
		}
	};

	Tile.prototype._clickHandler = function _clickHandler(e) {
		e.preventDefault();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	};

	Tile.prototype.render = function render() {
		// Modify styles based on state values
		var tileStyle = {};
		var headerStyle = {};
		var zoom = {};
		// When tile clicked
		if (this.state.open) {
			tileStyle = {
				width: '62vw',
				height: '62vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-31vw',
				marginLeft: '-31vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '18vw',
				height: '18vw'
			};
		}

		return React.createElement(
			"div",
			{ className: "tile" },
			React.createElement("img", {
				onMouseEnter: this._mouseEnter,
				onMouseLeave: this._mouseLeave,
				onClick: this._clickHandler,
				src: this.props.data.image,
				alt: this.props.data.name,
				style: tileStyle
			})
		);
	};

	return Tile;
}(React.Component);

ReactDOM.render(React.createElement(App, { data: data }), app);